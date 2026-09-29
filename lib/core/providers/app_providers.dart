import 'dart:io';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:geolocator/geolocator.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path/path.dart' as path;
import 'package:path_provider/path_provider.dart';

import '../../data/repositories/local_preferences_repository.dart';
import '../../data/repositories/local_wishlist_repository.dart';
import '../../domain/entities/app_preferences.dart';
import '../../domain/entities/child_profile.dart';
import '../../domain/entities/wishlist_item.dart';
import '../../domain/repositories/preferences_repository.dart';
import '../../domain/repositories/wishlist_repository.dart';
import '../database/app_database.dart';

final wishlistRepositoryProvider = Provider<WishlistRepository>(
  (ref) => LocalWishlistRepository(AppDatabase.instance),
);

final preferencesRepositoryProvider = Provider<PreferencesRepository>(
  (ref) => LocalPreferencesRepository(AppDatabase.instance),
);

final appPreferencesProvider =
    AsyncNotifierProvider<AppPreferencesController, AppPreferences>(
  AppPreferencesController.new,
);

class AppPreferencesController extends AsyncNotifier<AppPreferences> {
  @override
  Future<AppPreferences> build() =>
      ref.read(preferencesRepositoryProvider).load();

  Future<void> setLanguage(String language) => _update(
        (preferences) => preferences.copyWith(selectedLanguage: language),
      );

  Future<void> setCurrency(String currency) => _update(
        (preferences) => preferences.copyWith(selectedCurrency: currency),
      );

  Future<void> setActiveProfile(int? profileId) => _update(
        (preferences) => preferences.copyWith(
          activeProfileId: profileId,
          clearActiveProfile: profileId == null,
        ),
      );

  Future<void> _update(
      AppPreferences Function(AppPreferences) transform) async {
    final current = state.valueOrNull;
    if (current == null) return;
    final updated = transform(current);
    state = AsyncData(updated);
    await ref.read(preferencesRepositoryProvider).save(updated);
  }
}

final profilesProvider = FutureProvider<List<ChildProfile>>(
  (ref) => ref.watch(wishlistRepositoryProvider).getProfiles(),
);

final selectedProfileProvider = FutureProvider<ChildProfile?>((ref) async {
  final profiles = await ref.watch(profilesProvider.future);
  final preferences = await ref.watch(appPreferencesProvider.future);
  for (final profile in profiles) {
    if (profile.id == preferences.activeProfileId) return profile;
  }
  return profiles.isEmpty ? null : profiles.first;
});

final wishlistItemsProvider = FutureProvider.family<List<WishlistItem>, int>(
  (ref, profileId) => ref.watch(wishlistRepositoryProvider).getItems(profileId),
);

typedef PurchaseRequest = ({int profileId, int itemId});

final purchaseControllerProvider =
    AsyncNotifierProvider.family<PurchaseController, void, PurchaseRequest>(
        PurchaseController.new);

class PurchaseController extends FamilyAsyncNotifier<void, PurchaseRequest> {
  @override
  Future<void> build(PurchaseRequest arg) async {}

  Future<void> purchase() async {
    state = const AsyncLoading();
    final result = await AsyncValue.guard(() async {
      await ref.read(wishlistRepositoryProvider).purchaseItem(
            profileId: arg.profileId,
            itemId: arg.itemId,
          );
      ref.invalidate(wishlistItemsProvider(arg.profileId));
      ref.invalidate(profilesProvider);
      ref.invalidate(selectedProfileProvider);
    });
    state = result;
    if (result.hasError) {
      Error.throwWithStackTrace(result.error!, result.stackTrace!);
    }
  }
}

final imagePickerProvider = Provider<ImagePicker>((ref) => ImagePicker());

final imageStorageProvider = Provider<ImageStorage>((ref) => ImageStorage());

final deviceLocationProvider = Provider<DeviceLocationService>(
  (ref) => DeviceLocationService(),
);

class DeviceLocationService {
  Future<Position?> currentPosition() async {
    if (!await Geolocator.isLocationServiceEnabled()) {
      return null;
    }
    var permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
    }
    if (permission == LocationPermission.denied ||
        permission == LocationPermission.deniedForever) {
      return null;
    }
    return Geolocator.getCurrentPosition(
      locationSettings: const LocationSettings(
        accuracy: LocationAccuracy.medium,
        timeLimit: Duration(seconds: 15),
      ),
    );
  }
}

class ImageStorage {
  Future<String> persist(XFile image) async {
    final directory = await getApplicationDocumentsDirectory();
    final imagesDirectory =
        Directory(path.join(directory.path, 'wishlist_images'));
    await imagesDirectory.create(recursive: true);
    final extension = path.extension(image.path);
    final target = path.join(
      imagesDirectory.path,
      '${DateTime.now().microsecondsSinceEpoch}$extension',
    );
    return (await File(image.path).copy(target)).path;
  }
}
