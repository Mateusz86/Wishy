import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:intl/intl.dart' as intl;

import 'app_localizations_cs.dart';
import 'app_localizations_de.dart';
import 'app_localizations_en.dart';
import 'app_localizations_es.dart';
import 'app_localizations_it.dart';
import 'app_localizations_pl.dart';
import 'app_localizations_sk.dart';
import 'app_localizations_uk.dart';

// ignore_for_file: type=lint

/// Callers can lookup localized strings with an instance of AppLocalizations
/// returned by `AppLocalizations.of(context)`.
///
/// Applications need to include `AppLocalizations.delegate()` in their app's
/// `localizationDelegates` list, and the locales they support in the app's
/// `supportedLocales` list. For example:
///
/// ```dart
/// import 'l10n/app_localizations.dart';
///
/// return MaterialApp(
///   localizationsDelegates: AppLocalizations.localizationsDelegates,
///   supportedLocales: AppLocalizations.supportedLocales,
///   home: MyApplicationHome(),
/// );
/// ```
///
/// ## Update pubspec.yaml
///
/// Please make sure to update your pubspec.yaml to include the following
/// packages:
///
/// ```yaml
/// dependencies:
///   # Internationalization support.
///   flutter_localizations:
///     sdk: flutter
///   intl: any # Use the pinned version from flutter_localizations
///
///   # Rest of dependencies
/// ```
///
/// ## iOS Applications
///
/// iOS applications define key application metadata, including supported
/// locales, in an Info.plist file that is built into the application bundle.
/// To configure the locales supported by your app, you’ll need to edit this
/// file.
///
/// First, open your project’s ios/Runner.xcworkspace Xcode workspace file.
/// Then, in the Project Navigator, open the Info.plist file under the Runner
/// project’s Runner folder.
///
/// Next, select the Information Property List item, select Add Item from the
/// Editor menu, then select Localizations from the pop-up menu.
///
/// Select and expand the newly-created Localizations item then, for each
/// locale your application supports, add a new item and select the locale
/// you wish to add from the pop-up menu in the Value field. This list should
/// be consistent with the languages listed in the AppLocalizations.supportedLocales
/// property.
abstract class AppLocalizations {
  AppLocalizations(String locale)
      : localeName = intl.Intl.canonicalizedLocale(locale.toString());

  final String localeName;

  static AppLocalizations of(BuildContext context) {
    return Localizations.of<AppLocalizations>(context, AppLocalizations)!;
  }

  static const LocalizationsDelegate<AppLocalizations> delegate =
      _AppLocalizationsDelegate();

  /// A list of this localizations delegate along with the default localizations
  /// delegates.
  ///
  /// Returns a list of localizations delegates containing this delegate along with
  /// GlobalMaterialLocalizations.delegate, GlobalCupertinoLocalizations.delegate,
  /// and GlobalWidgetsLocalizations.delegate.
  ///
  /// Additional delegates can be added by appending to this list in
  /// MaterialApp. This list does not have to be used at all if a custom list
  /// of delegates is preferred or required.
  static const List<LocalizationsDelegate<dynamic>> localizationsDelegates =
      <LocalizationsDelegate<dynamic>>[
    delegate,
    GlobalMaterialLocalizations.delegate,
    GlobalCupertinoLocalizations.delegate,
    GlobalWidgetsLocalizations.delegate,
  ];

  /// A list of this localizations delegate's supported locales.
  static const List<Locale> supportedLocales = <Locale>[
    Locale('cs'),
    Locale('de'),
    Locale('en'),
    Locale('es'),
    Locale('it'),
    Locale('pl'),
    Locale('sk'),
    Locale('uk')
  ];

  /// No description provided for @appTitle.
  ///
  /// In en, this message translates to:
  /// **'Wishy'**
  String get appTitle;

  /// No description provided for @addChild.
  ///
  /// In en, this message translates to:
  /// **'Add child'**
  String get addChild;

  /// No description provided for @editChild.
  ///
  /// In en, this message translates to:
  /// **'Edit child'**
  String get editChild;

  /// No description provided for @childName.
  ///
  /// In en, this message translates to:
  /// **'Child name'**
  String get childName;

  /// No description provided for @currentBudget.
  ///
  /// In en, this message translates to:
  /// **'Current budget'**
  String get currentBudget;

  /// No description provided for @addFunds.
  ///
  /// In en, this message translates to:
  /// **'Add funds'**
  String get addFunds;

  /// No description provided for @subtractFunds.
  ///
  /// In en, this message translates to:
  /// **'Subtract'**
  String get subtractFunds;

  /// No description provided for @wishlist.
  ///
  /// In en, this message translates to:
  /// **'Wishlist'**
  String get wishlist;

  /// No description provided for @addItem.
  ///
  /// In en, this message translates to:
  /// **'Add item'**
  String get addItem;

  /// No description provided for @sortItems.
  ///
  /// In en, this message translates to:
  /// **'Sort items'**
  String get sortItems;

  /// No description provided for @limitReached.
  ///
  /// In en, this message translates to:
  /// **'Limit reached - delete an item first.'**
  String get limitReached;

  /// No description provided for @loadError.
  ///
  /// In en, this message translates to:
  /// **'Could not load your data.'**
  String get loadError;

  /// No description provided for @emptyWishlist.
  ///
  /// In en, this message translates to:
  /// **'Your wishlist is empty.'**
  String get emptyWishlist;

  /// No description provided for @amount.
  ///
  /// In en, this message translates to:
  /// **'Amount'**
  String get amount;

  /// No description provided for @save.
  ///
  /// In en, this message translates to:
  /// **'Save'**
  String get save;

  /// No description provided for @cancel.
  ///
  /// In en, this message translates to:
  /// **'Cancel'**
  String get cancel;

  /// No description provided for @ok.
  ///
  /// In en, this message translates to:
  /// **'OK'**
  String get ok;

  /// No description provided for @delete.
  ///
  /// In en, this message translates to:
  /// **'Delete'**
  String get delete;

  /// No description provided for @itemName.
  ///
  /// In en, this message translates to:
  /// **'Item name'**
  String get itemName;

  /// No description provided for @itemPrice.
  ///
  /// In en, this message translates to:
  /// **'Price'**
  String get itemPrice;

  /// No description provided for @takePhoto.
  ///
  /// In en, this message translates to:
  /// **'Take a photo'**
  String get takePhoto;

  /// No description provided for @photoSelected.
  ///
  /// In en, this message translates to:
  /// **'Photo selected'**
  String get photoSelected;

  /// No description provided for @insufficientFunds.
  ///
  /// In en, this message translates to:
  /// **'The budget cannot be less than zero.'**
  String get insufficientFunds;

  /// No description provided for @adPlaceholder.
  ///
  /// In en, this message translates to:
  /// **'Ad banner'**
  String get adPlaceholder;

  /// No description provided for @deleteConfirmation.
  ///
  /// In en, this message translates to:
  /// **'Delete {itemName}?'**
  String deleteConfirmation(String itemName);

  /// No description provided for @progressLabel.
  ///
  /// In en, this message translates to:
  /// **'{current} of {price} saved'**
  String progressLabel(String current, String price);

  /// No description provided for @addProfile.
  ///
  /// In en, this message translates to:
  /// **'Add profile'**
  String get addProfile;

  /// No description provided for @selectProfile.
  ///
  /// In en, this message translates to:
  /// **'Choose a profile'**
  String get selectProfile;

  /// No description provided for @createProfile.
  ///
  /// In en, this message translates to:
  /// **'Create profile'**
  String get createProfile;

  /// No description provided for @editProfile.
  ///
  /// In en, this message translates to:
  /// **'Edit profile'**
  String get editProfile;

  /// No description provided for @deleteProfile.
  ///
  /// In en, this message translates to:
  /// **'Delete profile'**
  String get deleteProfile;

  /// No description provided for @deleteProfileConfirmation.
  ///
  /// In en, this message translates to:
  /// **'Delete {profileName} and its wishlist?'**
  String deleteProfileConfirmation(String profileName);

  /// No description provided for @noProfiles.
  ///
  /// In en, this message translates to:
  /// **'No profiles yet. Add a profile to get started.'**
  String get noProfiles;

  /// No description provided for @premiumRequired.
  ///
  /// In en, this message translates to:
  /// **'Premium required'**
  String get premiumRequired;

  /// No description provided for @premiumProfilesMessage.
  ///
  /// In en, this message translates to:
  /// **'The paid version unlocks unlimited profiles.'**
  String get premiumProfilesMessage;

  /// No description provided for @profileName.
  ///
  /// In en, this message translates to:
  /// **'Profile name'**
  String get profileName;

  /// No description provided for @chooseColor.
  ///
  /// In en, this message translates to:
  /// **'Choose a color'**
  String get chooseColor;

  /// No description provided for @chooseIcon.
  ///
  /// In en, this message translates to:
  /// **'Choose an icon'**
  String get chooseIcon;

  /// No description provided for @settings.
  ///
  /// In en, this message translates to:
  /// **'Settings'**
  String get settings;

  /// No description provided for @appLanguage.
  ///
  /// In en, this message translates to:
  /// **'App language'**
  String get appLanguage;

  /// No description provided for @currency.
  ///
  /// In en, this message translates to:
  /// **'Currency'**
  String get currency;

  /// No description provided for @currencyAutomatic.
  ///
  /// In en, this message translates to:
  /// **'Use language default'**
  String get currencyAutomatic;

  /// No description provided for @description.
  ///
  /// In en, this message translates to:
  /// **'Description'**
  String get description;

  /// No description provided for @storeLink.
  ///
  /// In en, this message translates to:
  /// **'Store link'**
  String get storeLink;

  /// No description provided for @takeUpToThreePhotos.
  ///
  /// In en, this message translates to:
  /// **'Take up to 3 photos'**
  String get takeUpToThreePhotos;

  /// No description provided for @gpsSearching.
  ///
  /// In en, this message translates to:
  /// **'Getting location…'**
  String get gpsSearching;

  /// No description provided for @gpsCaptured.
  ///
  /// In en, this message translates to:
  /// **'Location saved'**
  String get gpsCaptured;

  /// No description provided for @gpsUnavailable.
  ///
  /// In en, this message translates to:
  /// **'Location not available'**
  String get gpsUnavailable;

  /// No description provided for @openStore.
  ///
  /// In en, this message translates to:
  /// **'Open store link'**
  String get openStore;

  /// No description provided for @openMap.
  ///
  /// In en, this message translates to:
  /// **'Open saved location'**
  String get openMap;

  /// No description provided for @purchaseItem.
  ///
  /// In en, this message translates to:
  /// **'Buy'**
  String get purchaseItem;

  /// No description provided for @purchaseCompleted.
  ///
  /// In en, this message translates to:
  /// **'Purchased'**
  String get purchaseCompleted;

  /// No description provided for @quickAddFunds.
  ///
  /// In en, this message translates to:
  /// **'Quick add funds'**
  String get quickAddFunds;
}

class _AppLocalizationsDelegate
    extends LocalizationsDelegate<AppLocalizations> {
  const _AppLocalizationsDelegate();

  @override
  Future<AppLocalizations> load(Locale locale) {
    return SynchronousFuture<AppLocalizations>(lookupAppLocalizations(locale));
  }

  @override
  bool isSupported(Locale locale) => <String>[
        'cs',
        'de',
        'en',
        'es',
        'it',
        'pl',
        'sk',
        'uk'
      ].contains(locale.languageCode);

  @override
  bool shouldReload(_AppLocalizationsDelegate old) => false;
}

AppLocalizations lookupAppLocalizations(Locale locale) {
  // Lookup logic when only language code is specified.
  switch (locale.languageCode) {
    case 'cs':
      return AppLocalizationsCs();
    case 'de':
      return AppLocalizationsDe();
    case 'en':
      return AppLocalizationsEn();
    case 'es':
      return AppLocalizationsEs();
    case 'it':
      return AppLocalizationsIt();
    case 'pl':
      return AppLocalizationsPl();
    case 'sk':
      return AppLocalizationsSk();
    case 'uk':
      return AppLocalizationsUk();
  }

  throw FlutterError(
      'AppLocalizations.delegate failed to load unsupported locale "$locale". This is likely '
      'an issue with the localizations generation tool. Please file an issue '
      'on GitHub with a reproducible sample app and the gen-l10n configuration '
      'that was used.');
}
