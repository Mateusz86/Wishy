class WishlistItem {
  const WishlistItem({
    required this.id,
    required this.childProfileId,
    required this.title,
    required this.price,
    required this.sortOrder,
    required this.createdAt,
    this.imagePaths = const [],
    this.description,
    this.storeLink,
    this.latitude,
    this.longitude,
    this.isPurchased = false,
  });

  final int? id;
  final int childProfileId;
  final String title;
  final double price;
  final List<String> imagePaths;
  final String? description;
  final String? storeLink;
  final double? latitude;
  final double? longitude;
  final bool isPurchased;
  final int sortOrder;
  final DateTime createdAt;
}
