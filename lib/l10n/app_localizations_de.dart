// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for German (`de`).
class AppLocalizationsDe extends AppLocalizations {
  AppLocalizationsDe([String locale = 'de']) : super(locale);

  @override
  String get appTitle => 'Wishy';

  @override
  String get addChild => 'Kind hinzufügen';

  @override
  String get editChild => 'Kind bearbeiten';

  @override
  String get childName => 'Name des Kindes';

  @override
  String get currentBudget => 'Aktuelles Budget';

  @override
  String get addFunds => 'Geld hinzufügen';

  @override
  String get subtractFunds => 'Abziehen';

  @override
  String get wishlist => 'Wunschliste';

  @override
  String get addItem => 'Artikel hinzufügen';

  @override
  String get sortItems => 'Artikel sortieren';

  @override
  String get limitReached =>
      'Limit erreicht - bitte zuerst einen Artikel löschen.';

  @override
  String get loadError => 'Daten konnten nicht geladen werden.';

  @override
  String get emptyWishlist => 'Deine Wunschliste ist leer.';

  @override
  String get amount => 'Betrag';

  @override
  String get save => 'Speichern';

  @override
  String get cancel => 'Abbrechen';

  @override
  String get ok => 'OK';

  @override
  String get delete => 'Löschen';

  @override
  String get itemName => 'Artikelname';

  @override
  String get itemPrice => 'Preis';

  @override
  String get takePhoto => 'Foto aufnehmen';

  @override
  String get photoSelected => 'Foto ausgewählt';

  @override
  String get insufficientFunds => 'Das Budget darf nicht unter null liegen.';

  @override
  String get adPlaceholder => 'Werbebanner';

  @override
  String deleteConfirmation(String itemName) {
    return '$itemName löschen?';
  }

  @override
  String progressLabel(String current, String price) {
    return '$current von $price gespart';
  }

  @override
  String get addProfile => 'Profil hinzufügen';

  @override
  String get selectProfile => 'Profil auswählen';

  @override
  String get createProfile => 'Profil erstellen';

  @override
  String get editProfile => 'Profil bearbeiten';

  @override
  String get deleteProfile => 'Profil löschen';

  @override
  String deleteProfileConfirmation(String profileName) {
    return 'Profil von $profileName und Wunschliste löschen?';
  }

  @override
  String get noProfiles => 'Noch keine Profile. Füge ein Profil hinzu.';

  @override
  String get premiumRequired => 'Premium erforderlich';

  @override
  String get premiumProfilesMessage =>
      'Die kostenpflichtige Version schaltet unbegrenzt viele Profile frei.';

  @override
  String get profileName => 'Profilname';

  @override
  String get chooseColor => 'Farbe auswählen';

  @override
  String get chooseIcon => 'Symbol auswählen';

  @override
  String get settings => 'Einstellungen';

  @override
  String get appLanguage => 'App-Sprache';

  @override
  String get currency => 'Währung';

  @override
  String get currencyAutomatic => 'Standardeinstellung der Sprache';

  @override
  String get description => 'Beschreibung';

  @override
  String get storeLink => 'Shop-Link';

  @override
  String get takeUpToThreePhotos => 'Bis zu 3 Fotos aufnehmen';

  @override
  String get gpsSearching => 'Standort wird ermittelt…';

  @override
  String get gpsCaptured => 'Standort gespeichert';

  @override
  String get gpsUnavailable => 'Standort nicht verfügbar';

  @override
  String get openStore => 'Shop-Link öffnen';

  @override
  String get openMap => 'Gespeicherten Standort öffnen';

  @override
  String get purchaseItem => 'Kaufen';

  @override
  String get purchaseCompleted => 'Gekauft';

  @override
  String get quickAddFunds => 'Geld schnell hinzufügen';
}
