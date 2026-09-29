// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for Czech (`cs`).
class AppLocalizationsCs extends AppLocalizations {
  AppLocalizationsCs([String locale = 'cs']) : super(locale);

  @override
  String get appTitle => 'Wishy';

  @override
  String get addChild => 'Přidat dítě';

  @override
  String get editChild => 'Upravit dítě';

  @override
  String get childName => 'Jméno dítěte';

  @override
  String get currentBudget => 'Aktuální rozpočet';

  @override
  String get addFunds => 'Přidat prostředky';

  @override
  String get subtractFunds => 'Odečíst';

  @override
  String get wishlist => 'Seznam přání';

  @override
  String get addItem => 'Přidat položku';

  @override
  String get sortItems => 'Seřadit položky';

  @override
  String get limitReached => 'Byl dosažen limit - nejprve položku smažte.';

  @override
  String get loadError => 'Data se nepodařilo načíst.';

  @override
  String get emptyWishlist => 'Seznam přání je prázdný.';

  @override
  String get amount => 'Částka';

  @override
  String get save => 'Uložit';

  @override
  String get cancel => 'Zrušit';

  @override
  String get ok => 'OK';

  @override
  String get delete => 'Smazat';

  @override
  String get itemName => 'Název položky';

  @override
  String get itemPrice => 'Cena';

  @override
  String get takePhoto => 'Vyfotit';

  @override
  String get photoSelected => 'Fotografie vybrána';

  @override
  String get insufficientFunds => 'Rozpočet nemůže být nižší než nula.';

  @override
  String get adPlaceholder => 'Reklamní banner';

  @override
  String deleteConfirmation(String itemName) {
    return 'Smazat položku $itemName?';
  }

  @override
  String progressLabel(String current, String price) {
    return 'Naspořeno $current z $price';
  }

  @override
  String get addProfile => 'Přidat profil';

  @override
  String get selectProfile => 'Vybrat profil';

  @override
  String get createProfile => 'Vytvořit profil';

  @override
  String get editProfile => 'Upravit profil';

  @override
  String get deleteProfile => 'Smazat profil';

  @override
  String deleteProfileConfirmation(String profileName) {
    return 'Smazat profil $profileName i jeho seznam přání?';
  }

  @override
  String get noProfiles => 'Zatím nemáte žádný profil. Přidejte profil.';

  @override
  String get premiumRequired => 'Je vyžadováno Premium';

  @override
  String get premiumProfilesMessage =>
      'Placená verze odemkne neomezený počet profilů.';

  @override
  String get profileName => 'Název profilu';

  @override
  String get chooseColor => 'Vybrat barvu';

  @override
  String get chooseIcon => 'Vybrat ikonu';

  @override
  String get settings => 'Nastavení';

  @override
  String get appLanguage => 'Jazyk aplikace';

  @override
  String get currency => 'Měna';

  @override
  String get currencyAutomatic => 'Výchozí měna podle jazyka';

  @override
  String get description => 'Popis';

  @override
  String get storeLink => 'Odkaz na obchod';

  @override
  String get takeUpToThreePhotos => 'Pořídit až 3 fotky';

  @override
  String get gpsSearching => 'Zjišťuji polohu…';

  @override
  String get gpsCaptured => 'Poloha uložena';

  @override
  String get gpsUnavailable => 'Poloha není dostupná';

  @override
  String get openStore => 'Otevřít odkaz na obchod';

  @override
  String get openMap => 'Otevřít uloženou polohu';

  @override
  String get purchaseItem => 'Koupit';

  @override
  String get purchaseCompleted => 'Zakoupeno';

  @override
  String get quickAddFunds => 'Rychlé přidání peněz';

  @override
  String get toBuy => 'K nákupu';

  @override
  String get purchased => 'Zakoupené';

  @override
  String get emptyToBuy => 'Není co koupit.';

  @override
  String get emptyPurchased => 'Zatím žádné zakoupené položky.';

  @override
  String get editItem => 'Upravit položku';

  @override
  String get chooseImageSource => 'Přidat fotografii';

  @override
  String get chooseFromGallery => 'Vybrat z galerie';
}
