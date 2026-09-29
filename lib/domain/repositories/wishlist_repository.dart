import '../entities/child_profile.dart';
import '../entities/wishlist_item.dart';

abstract interface class WishlistRepository {
  Future<List<ChildProfile>> getProfiles();
  Future<int> addProfile({
    required String name,
    required int themeColor,
    required int iconIndex,
    required bool isPremium,
  });
  Future<void> updateProfile(ChildProfile profile);
  Future<void> deleteProfile(ChildProfile profile);
  Future<List<WishlistItem>> getItems(int profileId);
  Future<int> addItem(
      {required int profileId,
      required bool isPremium,
      required String title,
      required double price,
      required List<String> imagePaths,
      String? description,
      String? storeLink,
      double? latitude,
      double? longitude});
  Future<void> updateItem(WishlistItem item);
  Future<void> deleteItem(WishlistItem item);
  Future<void> reorderItems(int profileId, List<WishlistItem> items);
  Future<void> adjustBudget(int profileId, double amount);
  Future<void> purchaseItem({required int profileId, required int itemId});
}
