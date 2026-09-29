class AppPreferences {
  const AppPreferences({
    required this.selectedLanguage,
    required this.selectedCurrency,
    this.activeProfileId,
  });

  final String selectedLanguage;
  final String selectedCurrency;
  final int? activeProfileId;

  AppPreferences copyWith({
    String? selectedLanguage,
    String? selectedCurrency,
    int? activeProfileId,
    bool clearActiveProfile = false,
  }) =>
      AppPreferences(
        selectedLanguage: selectedLanguage ?? this.selectedLanguage,
        selectedCurrency: selectedCurrency ?? this.selectedCurrency,
        activeProfileId:
            clearActiveProfile ? null : activeProfileId ?? this.activeProfileId,
      );
}
