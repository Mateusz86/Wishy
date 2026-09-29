import 'dart:convert';
import 'dart:io';

import 'package:path/path.dart' as path;
import 'package:path_provider/path_provider.dart';
import 'package:sqflite/sqflite.dart';

import '../../core/constants/app_limits.dart';
import '../../core/database/app_database.dart';
import '../../domain/entities/child_profile.dart';
import '../../domain/entities/wishlist_item.dart';
import '../../domain/repositories/wishlist_repository.dart';

class LocalWishlistRepository implements WishlistRepository {
  LocalWishlistRepository(this._database);

  final AppDatabase _database;

  @override
  Future<List<ChildProfile>> getProfiles() async {
    final db = await _database.database;
    final rows =
        await db.query('child_profiles', orderBy: 'created_at ASC, id ASC');
    return rows.map(_profileFromRow).toList();
  }

  @override
  Future<int> addProfile({
    required String name,
    required int themeColor,
    required int iconIndex,
  }) async {
    final db = await _database.database;
    return db.transaction((txn) async {
      final count = Sqflite.firstIntValue(
            await txn.rawQuery('SELECT COUNT(*) FROM child_profiles'),
          ) ??
          0;
      if (count >= AppLimits.maxProfiles) throw const ProfileLimitException();
      return txn.insert('child_profiles', {
        'name': name.trim(),
        'created_at': DateTime.now().toIso8601String(),
        'budget': 0.0,
        'theme_color': themeColor,
        'icon_index': iconIndex,
      });
    });
  }

  @override
  Future<void> updateProfile(ChildProfile profile) async {
    final db = await _database.database;
    await db.update(
      'child_profiles',
      {
        'name': profile.name.trim(),
        'theme_color': profile.themeColor,
        'icon_index': profile.iconIndex,
      },
      where: 'id = ?',
      whereArgs: [profile.id],
    );
  }

  @override
  Future<void> deleteProfile(ChildProfile profile) async {
    final db = await _database.database;
    final imageRows = await db.query(
      'wishlist_items',
      columns: ['image_paths'],
      where: 'child_profile_id = ?',
      whereArgs: [profile.id],
    );
    await db.delete('child_profiles', where: 'id = ?', whereArgs: [profile.id]);
    final documents = await getApplicationDocumentsDirectory();
    final root = path.normalize(documents.path);
    for (final row in imageRows) {
      for (final imagePath in _decodeImagePaths(row['image_paths'] as String)) {
        final candidate = path.normalize(imagePath);
        if (path.isWithin(root, candidate) && await File(candidate).exists()) {
          await File(candidate).delete();
        }
      }
    }
  }

  @override
  Future<List<WishlistItem>> getItems(int profileId) async {
    final db = await _database.database;
    final rows = await db.query(
      'wishlist_items',
      where: 'child_profile_id = ?',
      whereArgs: [profileId],
      orderBy: 'sort_order ASC, id ASC',
    );
    return rows.map(_itemFromRow).toList();
  }

  @override
  Future<int> addItem({
    required int profileId,
    required String title,
    required double price,
    required List<String> imagePaths,
    String? description,
    String? storeLink,
    double? latitude,
    double? longitude,
  }) async {
    if (imagePaths.length > 3) {
      throw ArgumentError.value(
          imagePaths.length, 'imagePaths', 'Maximum is 3');
    }
    final db = await _database.database;
    return db.transaction((txn) async {
      final profileCount = Sqflite.firstIntValue(
            await txn.rawQuery(
              'SELECT COUNT(*) FROM wishlist_items WHERE child_profile_id = ?',
              [profileId],
            ),
          ) ??
          0;
      if (profileCount >= AppLimits.maxWishlistItems) {
        throw const WishlistLimitException();
      }
      return txn.insert('wishlist_items', {
        'child_profile_id': profileId,
        'title': title.trim(),
        'price': price,
        'image_paths': jsonEncode(imagePaths),
        'description': _nullableText(description),
        'store_link': _nullableText(storeLink),
        'latitude': latitude,
        'longitude': longitude,
        'is_purchased': 0,
        'sort_order': profileCount,
        'created_at': DateTime.now().toIso8601String(),
      });
    });
  }

  @override
  Future<void> deleteItem(WishlistItem item) async {
    final db = await _database.database;
    await db.transaction((txn) async {
      await txn.delete('wishlist_items', where: 'id = ?', whereArgs: [item.id]);
      final remaining = await txn.query(
        'wishlist_items',
        where: 'child_profile_id = ?',
        whereArgs: [item.childProfileId],
        orderBy: 'sort_order ASC, id ASC',
      );
      for (var index = 0; index < remaining.length; index++) {
        await txn.update(
          'wishlist_items',
          {'sort_order': index},
          where: 'id = ?',
          whereArgs: [remaining[index]['id']],
        );
      }
    });
    for (final imagePath in item.imagePaths) {
      await _deleteStoredImage(imagePath);
    }
  }

  @override
  Future<void> reorderItems(int profileId, List<WishlistItem> items) async {
    final db = await _database.database;
    await db.transaction((txn) async {
      for (var index = 0; index < items.length; index++) {
        await txn.update(
          'wishlist_items',
          {'sort_order': index},
          where: 'id = ? AND child_profile_id = ?',
          whereArgs: [items[index].id, profileId],
        );
      }
    });
  }

  @override
  Future<void> adjustBudget(int profileId, double amount) async {
    final db = await _database.database;
    await db.transaction((txn) async {
      final profiles = await txn.query(
        'child_profiles',
        columns: ['budget'],
        where: 'id = ?',
        whereArgs: [profileId],
        limit: 1,
      );
      if (profiles.isEmpty) return;
      final current = (profiles.first['budget'] as num).toDouble();
      final updated = current + amount;
      if (updated < 0) throw const InsufficientBudgetException();
      await txn.update(
        'child_profiles',
        {'budget': updated},
        where: 'id = ?',
        whereArgs: [profileId],
      );
    });
  }

  @override
  Future<void> purchaseItem({
    required int profileId,
    required int itemId,
  }) async {
    final db = await _database.database;
    await db.transaction((txn) async {
      final profiles = await txn.query(
        'child_profiles',
        columns: ['budget'],
        where: 'id = ?',
        whereArgs: [profileId],
        limit: 1,
      );
      final items = await txn.query(
        'wishlist_items',
        columns: ['price', 'is_purchased'],
        where: 'id = ? AND child_profile_id = ?',
        whereArgs: [itemId, profileId],
        limit: 1,
      );
      if (profiles.isEmpty || items.isEmpty) {
        throw const WishlistItemNotFoundException();
      }
      if ((items.first['is_purchased'] as int) == 1) return;

      final budget = (profiles.first['budget'] as num).toDouble();
      final price = (items.first['price'] as num).toDouble();
      if (budget < price) throw const InsufficientBudgetException();

      await txn.update(
        'child_profiles',
        {'budget': budget - price},
        where: 'id = ?',
        whereArgs: [profileId],
      );
      final changed = await txn.update(
        'wishlist_items',
        {'is_purchased': 1},
        where: 'id = ? AND child_profile_id = ? AND is_purchased = 0',
        whereArgs: [itemId, profileId],
      );
      if (changed != 1) throw const WishlistItemNotFoundException();
    });
  }

  Future<void> _deleteStoredImage(String imagePath) async {
    final documents = await getApplicationDocumentsDirectory();
    final root = path.normalize(documents.path);
    final candidate = path.normalize(imagePath);
    if (path.isWithin(root, candidate) && await File(candidate).exists()) {
      await File(candidate).delete();
    }
  }

  ChildProfile _profileFromRow(Map<String, Object?> row) => ChildProfile(
        id: row['id'] as int,
        name: row['name'] as String,
        budget: (row['budget'] as num).toDouble(),
        themeColor: row['theme_color'] as int,
        iconIndex: row['icon_index'] as int,
        createdAt: DateTime.parse(row['created_at'] as String),
      );

  WishlistItem _itemFromRow(Map<String, Object?> row) => WishlistItem(
        id: row['id'] as int,
        childProfileId: row['child_profile_id'] as int,
        title: row['title'] as String,
        price: (row['price'] as num).toDouble(),
        imagePaths: _decodeImagePaths(row['image_paths'] as String),
        description: row['description'] as String?,
        storeLink: row['store_link'] as String?,
        latitude: (row['latitude'] as num?)?.toDouble(),
        longitude: (row['longitude'] as num?)?.toDouble(),
        isPurchased: (row['is_purchased'] as int? ?? 0) == 1,
        sortOrder: row['sort_order'] as int,
        createdAt: DateTime.parse(row['created_at'] as String),
      );

  List<String> _decodeImagePaths(String encoded) =>
      (jsonDecode(encoded) as List<dynamic>).cast<String>();

  String? _nullableText(String? value) {
    final trimmed = value?.trim();
    return trimmed == null || trimmed.isEmpty ? null : trimmed;
  }
}

class ProfileLimitException implements Exception {
  const ProfileLimitException();
}

class WishlistLimitException implements Exception {
  const WishlistLimitException();
}

class InsufficientBudgetException implements Exception {
  const InsufficientBudgetException();
}

class WishlistItemNotFoundException implements Exception {
  const WishlistItemNotFoundException();
}
