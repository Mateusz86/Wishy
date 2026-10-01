// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for English (`en`).
class AppLocalizationsEn extends AppLocalizations {
  AppLocalizationsEn([String locale = 'en']) : super(locale);

  @override
  String get appTitle => 'Wishy';

  @override
  String get addChild => 'Add child';

  @override
  String get editChild => 'Edit child';

  @override
  String get childName => 'Child name';

  @override
  String get currentBudget => 'Current budget';

  @override
  String get addFunds => 'Add funds';

  @override
  String get subtractFunds => 'Subtract';

  @override
  String get wishlist => 'Wishlist';

  @override
  String get addItem => 'Add item';

  @override
  String get sortItems => 'Sort items';

  @override
  String get limitReached => 'Limit reached - delete an item first.';

  @override
  String get loadError => 'Could not load your data.';

  @override
  String get emptyWishlist => 'Your wishlist is empty.';

  @override
  String get amount => 'Amount';

  @override
  String get save => 'Save';

  @override
  String get cancel => 'Cancel';

  @override
  String get ok => 'OK';

  @override
  String get delete => 'Delete';

  @override
  String get itemName => 'Item name';

  @override
  String get itemPrice => 'Price';

  @override
  String get takePhoto => 'Take a photo';

  @override
  String get photoSelected => 'Photo selected';

  @override
  String get insufficientFunds => 'The budget cannot be less than zero.';

  @override
  String get adPlaceholder => 'Ad banner';

  @override
  String deleteConfirmation(String itemName) {
    return 'Delete $itemName?';
  }

  @override
  String progressLabel(String current, String price) {
    return '$current of $price saved';
  }

  @override
  String get addProfile => 'Add profile';

  @override
  String get selectProfile => 'Choose a profile';

  @override
  String get createProfile => 'Create profile';

  @override
  String get editProfile => 'Edit profile';

  @override
  String get deleteProfile => 'Delete profile';

  @override
  String deleteProfileConfirmation(String profileName) {
    return 'Delete $profileName and its wishlist?';
  }

  @override
  String get noProfiles => 'No profiles yet. Add a profile to get started.';

  @override
  String get premiumRequired => 'Premium required';

  @override
  String get premiumProfilesMessage =>
      'The paid version unlocks unlimited profiles.';

  @override
  String get profileName => 'Profile name';

  @override
  String get chooseColor => 'Choose a color';

  @override
  String get chooseIcon => 'Choose an icon';

  @override
  String get settings => 'Settings';

  @override
  String get appLanguage => 'App language';

  @override
  String get currency => 'Currency';

  @override
  String get currencyAutomatic => 'Use language default';

  @override
  String get description => 'Description';

  @override
  String get storeLink => 'Store link';

  @override
  String get takeUpToThreePhotos => 'Take up to 3 photos';

  @override
  String get gpsSearching => 'Getting location…';

  @override
  String get gpsCaptured => 'Location saved';

  @override
  String get gpsUnavailable => 'Location not available';

  @override
  String get openStore => 'Open store link';

  @override
  String get openMap => 'Open saved location';

  @override
  String get purchaseItem => 'Buy';

  @override
  String get purchaseCompleted => 'Purchased';

  @override
  String get quickAddFunds => 'Quick add funds';

  @override
  String get toBuy => 'To Buy';

  @override
  String get purchased => 'Purchased';

  @override
  String get emptyToBuy => 'Nothing left to buy.';

  @override
  String get emptyPurchased => 'No purchased items yet.';

  @override
  String get editItem => 'Edit item';

  @override
  String get chooseImageSource => 'Add a photo';

  @override
  String get chooseFromGallery => 'Choose from gallery';

  @override
  String get itemOptions => 'More options';

  @override
  String get deleteConfirmationTitle => 'Are you sure?';

  @override
  String get storeLocation => 'Store location';

  @override
  String get premiumPaywallMessage =>
      'You\'ve reached the free version limit (Max 2 profiles / 3 items). Unlock the full version!';

  @override
  String get unlockPremium => 'Unlock Premium';

  @override
  String get backdoorPasswordPrompt => 'Enter the test password';

  @override
  String get invalidBackdoorPassword => 'Incorrect password.';

  @override
  String get premiumUnlocked => 'Premium version unlocked!';

  @override
  String get onboardingWelcome => 'Welcome to Wishy';

  @override
  String get onboardingSubtitle =>
      'Set your language and currency to get started.';

  @override
  String get start => 'Start';

  @override
  String get storeIntegrationComingSoon => 'Store integration coming soon...';

  @override
  String unlockAtPrice(String price) {
    return 'Unlock for $price/month';
  }

  @override
  String get noInternet => 'No internet connection';

  @override
  String get loadingOffer => 'Loading offer...';

  @override
  String get restorePurchases => 'Restore purchases';

  @override
  String get restorePurchasesNotFound => 'No active subscription found.';

  @override
  String get purchaseFailed =>
      'Purchase could not be completed. Please try again.';
}
