import 'package:sqflite/sqflite.dart';

import '../../core/database/app_database.dart';
import '../../domain/entities/app_preferences.dart';
import '../../domain/repositories/preferences_repository.dart';

class LocalPreferencesRepository implements PreferencesRepository {
  LocalPreferencesRepository(this._database);

  final AppDatabase _database;

  @override
  Future<AppPreferences> load() async {
    final db = await _database.database;
    final rows = await db.query('app_settings');
    final values = {
      for (final row in rows) row['key'] as String: row['value'] as String
    };
    return AppPreferences(
      selectedLanguage: values['selectedLanguage'] ?? 'en',
      selectedCurrency: values['selectedCurrency'] ?? 'auto',
      activeProfileId: int.tryParse(values['activeProfileId'] ?? ''),
    );
  }

  @override
  Future<void> save(AppPreferences preferences) async {
    final db = await _database.database;
    await db.transaction((txn) async {
      await _set(txn, 'selectedLanguage', preferences.selectedLanguage);
      await _set(txn, 'selectedCurrency', preferences.selectedCurrency);
      final activeProfileId = preferences.activeProfileId;
      if (activeProfileId == null) {
        await txn.delete('app_settings',
            where: 'key = ?', whereArgs: ['activeProfileId']);
      } else {
        await _set(txn, 'activeProfileId', activeProfileId.toString());
      }
    });
  }

  Future<void> _set(DatabaseExecutor executor, String key, String value) =>
      executor.insert(
        'app_settings',
        {'key': key, 'value': value},
        conflictAlgorithm: ConflictAlgorithm.replace,
      );
}
