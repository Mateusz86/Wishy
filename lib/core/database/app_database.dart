import 'dart:convert';

import 'package:path/path.dart' as path;
import 'package:path_provider/path_provider.dart';
import 'package:sqflite/sqflite.dart';

import '../constants/app_limits.dart';

class AppDatabase {
  AppDatabase._();

  static final AppDatabase instance = AppDatabase._();
  Database? _database;

  Future<Database> get database async {
    if (_database != null) return _database!;
    final directory = await getApplicationDocumentsDirectory();
    final db = await openDatabase(
      path.join(directory.path, 'wishy.db'),
      version: 5,
      onConfigure: (database) => database.execute('PRAGMA foreign_keys = ON'),
      onCreate: (database, version) => _createSchema(database),
      onUpgrade: (database, oldVersion, newVersion) async {
        if (oldVersion < 2) await _migrateToProfiles(database);
        if (oldVersion < 3) await _migrateWishlistDetails(database);
        if (oldVersion < 4) await _migratePurchasedItems(database);
        if (oldVersion < 5) await _migrateFreemiumLimits(database);
      },
    );
    _database = db;
    return db;
  }

  Future<void> _createSchema(DatabaseExecutor database) async {
    await database.execute('''
      CREATE TABLE child_profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        created_at TEXT NOT NULL,
        budget REAL NOT NULL DEFAULT 0 CHECK (budget >= 0),
        theme_color INTEGER NOT NULL DEFAULT ${AppLimits.defaultThemeColor},
        icon_index INTEGER NOT NULL DEFAULT 0
      )
    ''');
    await database.execute('''
      CREATE TABLE wishlist_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        child_profile_id INTEGER NOT NULL REFERENCES child_profiles(id) ON DELETE CASCADE,
        title TEXT NOT NULL,
        price REAL NOT NULL CHECK (price >= 0),
        image_paths TEXT NOT NULL DEFAULT '[]',
        description TEXT,
        store_link TEXT,
        latitude REAL,
        longitude REAL,
        is_purchased INTEGER NOT NULL DEFAULT 0 CHECK (is_purchased IN (0, 1)),
        sort_order INTEGER NOT NULL,
        created_at TEXT NOT NULL
      )
    ''');
    await database.execute('''
      CREATE TABLE app_settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      )
    ''');
    await database
        .insert('app_settings', {'key': 'selectedLanguage', 'value': 'en'});
    await database
        .insert('app_settings', {'key': 'selectedCurrency', 'value': 'auto'});
  }

  Future<void> _migratePurchasedItems(DatabaseExecutor database) async {
    await database.execute('''
      ALTER TABLE wishlist_items
      ADD COLUMN is_purchased INTEGER NOT NULL DEFAULT 0 CHECK (is_purchased IN (0, 1))
    ''');
  }

  Future<void> _migrateWishlistDetails(DatabaseExecutor database) async {
    await database.execute(
        "ALTER TABLE wishlist_items ADD COLUMN image_paths TEXT NOT NULL DEFAULT '[]'");
    await database
        .execute('ALTER TABLE wishlist_items ADD COLUMN description TEXT');
    await database
        .execute('ALTER TABLE wishlist_items ADD COLUMN store_link TEXT');
    await database
        .execute('ALTER TABLE wishlist_items ADD COLUMN latitude REAL');
    await database
        .execute('ALTER TABLE wishlist_items ADD COLUMN longitude REAL');
    final legacyRows =
        await database.query('wishlist_items', columns: ['id', 'image_path']);
    for (final row in legacyRows) {
      final oldPath = row['image_path'] as String?;
      await database.update(
          'wishlist_items',
          {
            'image_paths':
                jsonEncode(oldPath == null ? <String>[] : <String>[oldPath]),
          },
          where: 'id = ?',
          whereArgs: [row['id']]);
    }
    await database
        .execute('DROP TRIGGER IF EXISTS enforce_wishlist_item_limit');
  }

  Future<void> _migrateToProfiles(DatabaseExecutor database) async {
    final oldBudgetRows = await database.query(
      'app_settings',
      columns: ['value'],
      where: 'key = ?',
      whereArgs: ['budget'],
      limit: 1,
    );
    final oldBudget = oldBudgetRows.isEmpty
        ? 0.0
        : double.tryParse(oldBudgetRows.first['value'] as String) ?? 0.0;

    await database
        .execute('ALTER TABLE child_profiles RENAME TO child_profiles_v1');
    await database.execute('''
      CREATE TABLE child_profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        created_at TEXT NOT NULL,
        budget REAL NOT NULL DEFAULT 0 CHECK (budget >= 0),
        theme_color INTEGER NOT NULL DEFAULT ${AppLimits.defaultThemeColor},
        icon_index INTEGER NOT NULL DEFAULT 0
      )
    ''');
    await database.execute('''
      INSERT INTO child_profiles (id, name, created_at, budget)
      SELECT id, name, created_at, ? FROM child_profiles_v1
    ''', [oldBudget]);
    await database.execute('DROP TABLE child_profiles_v1');

    await database.execute('''
      ALTER TABLE wishlist_items
      ADD COLUMN child_profile_id INTEGER REFERENCES child_profiles(id) ON DELETE CASCADE
    ''');
    final profiles =
        await database.query('child_profiles', columns: ['id'], limit: 1);
    if (profiles.isNotEmpty) {
      await database.update(
        'wishlist_items',
        {'child_profile_id': profiles.first['id']},
        where: 'child_profile_id IS NULL',
      );
    }
    await database
        .delete('app_settings', where: 'key = ?', whereArgs: ['budget']);
    await _putSetting(database, 'selectedLanguage', 'en');
    await _putSetting(database, 'selectedCurrency', 'auto');
    if (profiles.isNotEmpty) {
      await _putSetting(
          database, 'activeProfileId', profiles.first['id'].toString());
    }
  }

  Future<void> _migrateFreemiumLimits(DatabaseExecutor database) async {
    await database.execute('DROP TRIGGER IF EXISTS enforce_profile_limit');
    await database
        .execute('DROP TRIGGER IF EXISTS enforce_wishlist_item_limit');
  }

  Future<void> _putSetting(
    DatabaseExecutor database,
    String key,
    String value,
  ) =>
      database.insert(
        'app_settings',
        {'key': key, 'value': value},
        conflictAlgorithm: ConflictAlgorithm.replace,
      );
}
