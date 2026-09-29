// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for Polish (`pl`).
class AppLocalizationsPl extends AppLocalizations {
  AppLocalizationsPl([String locale = 'pl']) : super(locale);

  @override
  String get appTitle => 'Wishy';

  @override
  String get addChild => 'Dodaj dziecko';

  @override
  String get editChild => 'Edytuj dziecko';

  @override
  String get childName => 'Imię dziecka';

  @override
  String get currentBudget => 'Obecny budżet';

  @override
  String get addFunds => 'Dodaj środki';

  @override
  String get subtractFunds => 'Odejmij';

  @override
  String get wishlist => 'Lista życzeń';

  @override
  String get addItem => 'Dodaj przedmiot';

  @override
  String get sortItems => 'Sortuj przedmioty';

  @override
  String get limitReached => 'Osiągnięto limit - najpierw usuń przedmiot.';

  @override
  String get loadError => 'Nie udało się wczytać danych.';

  @override
  String get emptyWishlist => 'Twoja lista życzeń jest pusta.';

  @override
  String get amount => 'Kwota';

  @override
  String get save => 'Zapisz';

  @override
  String get cancel => 'Anuluj';

  @override
  String get ok => 'OK';

  @override
  String get delete => 'Usuń';

  @override
  String get itemName => 'Nazwa przedmiotu';

  @override
  String get itemPrice => 'Cena';

  @override
  String get takePhoto => 'Zrób zdjęcie';

  @override
  String get photoSelected => 'Wybrano zdjęcie';

  @override
  String get insufficientFunds => 'Budżet nie może być mniejszy od zera.';

  @override
  String get adPlaceholder => 'Baner reklamowy';

  @override
  String deleteConfirmation(String itemName) {
    return 'Usunąć: $itemName?';
  }

  @override
  String progressLabel(String current, String price) {
    return 'Zebrano $current z $price';
  }

  @override
  String get addProfile => 'Dodaj profil';

  @override
  String get selectProfile => 'Wybierz profil';

  @override
  String get createProfile => 'Utwórz profil';

  @override
  String get editProfile => 'Edytuj profil';

  @override
  String get deleteProfile => 'Usuń profil';

  @override
  String deleteProfileConfirmation(String profileName) {
    return 'Usunąć profil $profileName i jego listę życzeń?';
  }

  @override
  String get noProfiles => 'Brak profili. Dodaj profil, aby rozpocząć.';

  @override
  String get premiumRequired => 'Wymagana wersja Premium';

  @override
  String get premiumProfilesMessage =>
      'Wersja płatna odblokowuje nieograniczoną liczbę profili.';

  @override
  String get profileName => 'Nazwa profilu';

  @override
  String get chooseColor => 'Wybierz kolor';

  @override
  String get chooseIcon => 'Wybierz ikonę';

  @override
  String get settings => 'Ustawienia';

  @override
  String get appLanguage => 'Język aplikacji';

  @override
  String get currency => 'Waluta';

  @override
  String get currencyAutomatic => 'Domyślna dla języka';

  @override
  String get description => 'Opis';

  @override
  String get storeLink => 'Link do sklepu';

  @override
  String get takeUpToThreePhotos => 'Zrób maksymalnie 3 zdjęcia';

  @override
  String get gpsSearching => 'Pobieranie lokalizacji…';

  @override
  String get gpsCaptured => 'Lokalizacja zapisana';

  @override
  String get gpsUnavailable => 'Lokalizacja niedostępna';

  @override
  String get openStore => 'Otwórz link do sklepu';

  @override
  String get openMap => 'Otwórz zapisaną lokalizację';

  @override
  String get purchaseItem => 'Kup';

  @override
  String get purchaseCompleted => 'Kupiono';

  @override
  String get quickAddFunds => 'Szybkie dodawanie środków';
}
