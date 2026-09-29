class ChildProfile {
  const ChildProfile({
    required this.id,
    required this.name,
    required this.budget,
    required this.themeColor,
    required this.iconIndex,
    required this.createdAt,
  });

  final int id;
  final String name;
  final double budget;
  final int themeColor;
  final int iconIndex;
  final DateTime createdAt;
}
