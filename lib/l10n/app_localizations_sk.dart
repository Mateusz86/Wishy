// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for Slovak (`sk`).
class AppLocalizationsSk extends AppLocalizations {
  AppLocalizationsSk([String locale = 'sk']) : super(locale);

  @override
  String get appTitle => 'Wishy';

  @override
  String get addChild => 'Pridať dieťa';

  @override
  String get editChild => 'Upraviť dieťa';

  @override
  String get childName => 'Meno dieťaťa';

  @override
  String get currentBudget => 'Aktuálny rozpočet';

  @override
  String get addFunds => 'Pridať prostriedky';

  @override
  String get subtractFunds => 'Odpočítať';

  @override
  String get wishlist => 'Zoznam želaní';

  @override
  String get addItem => 'Pridať položku';

  @override
  String get sortItems => 'Zoradiť položky';

  @override
  String get limitReached => 'Dosiahol sa limit - najprv odstráňte položku.';

  @override
  String get loadError => 'Údaje sa nepodarilo načítať.';

  @override
  String get emptyWishlist => 'Zoznam želaní je prázdny.';

  @override
  String get amount => 'Suma';

  @override
  String get save => 'Uložiť';

  @override
  String get cancel => 'Zrušiť';

  @override
  String get ok => 'OK';

  @override
  String get delete => 'Odstrániť';

  @override
  String get itemName => 'Názov položky';

  @override
  String get itemPrice => 'Cena';

  @override
  String get takePhoto => 'Odfotiť';

  @override
  String get photoSelected => 'Fotografia vybraná';

  @override
  String get insufficientFunds => 'Rozpočet nemôže byť nižší ako nula.';

  @override
  String get adPlaceholder => 'Reklamný banner';

  @override
  String deleteConfirmation(String itemName) {
    return 'Odstrániť položku $itemName?';
  }

  @override
  String progressLabel(String current, String price) {
    return 'Nasporené $current z $price';
  }

  @override
  String get addProfile => 'Pridať profil';

  @override
  String get selectProfile => 'Vybrať profil';

  @override
  String get createProfile => 'Vytvoriť profil';

  @override
  String get editProfile => 'Upraviť profil';

  @override
  String get deleteProfile => 'Odstrániť profil';

  @override
  String deleteProfileConfirmation(String profileName) {
    return 'Odstrániť profil používateľa $profileName aj jeho zoznam želaní?';
  }

  @override
  String get noProfiles => 'Zatiaľ nemáte žiadny profil. Pridajte profil.';

  @override
  String get premiumRequired => 'Vyžaduje sa Premium';

  @override
  String get premiumProfilesMessage =>
      'Platená verzia odomkne neobmedzený počet profilov.';

  @override
  String get profileName => 'Názov profilu';

  @override
  String get chooseColor => 'Vybrať farbu';

  @override
  String get chooseIcon => 'Vybrať ikonu';

  @override
  String get settings => 'Nastavenia';

  @override
  String get appLanguage => 'Jazyk aplikácie';

  @override
  String get currency => 'Mena';

  @override
  String get currencyAutomatic => 'Predvolená mena podľa jazyka';

  @override
  String get description => 'Popis';

  @override
  String get storeLink => 'Odkaz na obchod';

  @override
  String get takeUpToThreePhotos => 'Odfotiť až 3 fotografie';

  @override
  String get gpsSearching => 'Zisťujem polohu…';

  @override
  String get gpsCaptured => 'Poloha uložená';

  @override
  String get gpsUnavailable => 'Poloha nie je dostupná';

  @override
  String get openStore => 'Otvoriť odkaz na obchod';

  @override
  String get openMap => 'Otvoriť uloženú polohu';

  @override
  String get purchaseItem => 'Kúpiť';

  @override
  String get purchaseCompleted => 'Zakúpené';

  @override
  String get quickAddFunds => 'Rýchle pridanie peňazí';

  @override
  String get toBuy => 'Na kúpu';

  @override
  String get purchased => 'Kúpené';

  @override
  String get emptyToBuy => 'Nie je čo kúpiť.';

  @override
  String get emptyPurchased => 'Zatiaľ žiadne kúpené položky.';

  @override
  String get editItem => 'Upraviť položku';

  @override
  String get chooseImageSource => 'Pridať fotografiu';

  @override
  String get chooseFromGallery => 'Vybrať z galérie';
}
