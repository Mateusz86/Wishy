// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for Italian (`it`).
class AppLocalizationsIt extends AppLocalizations {
  AppLocalizationsIt([String locale = 'it']) : super(locale);

  @override
  String get appTitle => 'Wishy';

  @override
  String get addChild => 'Aggiungi bambino';

  @override
  String get editChild => 'Modifica bambino';

  @override
  String get childName => 'Nome del bambino';

  @override
  String get currentBudget => 'Budget attuale';

  @override
  String get addFunds => 'Aggiungi fondi';

  @override
  String get subtractFunds => 'Sottrai';

  @override
  String get wishlist => 'Lista dei desideri';

  @override
  String get addItem => 'Aggiungi oggetto';

  @override
  String get sortItems => 'Ordina oggetti';

  @override
  String get limitReached => 'Limite raggiunto - elimina prima un oggetto.';

  @override
  String get loadError => 'Impossibile caricare i dati.';

  @override
  String get emptyWishlist => 'La lista è vuota.';

  @override
  String get amount => 'Importo';

  @override
  String get save => 'Salva';

  @override
  String get cancel => 'Annulla';

  @override
  String get ok => 'OK';

  @override
  String get delete => 'Elimina';

  @override
  String get itemName => 'Nome oggetto';

  @override
  String get itemPrice => 'Prezzo';

  @override
  String get takePhoto => 'Scatta una foto';

  @override
  String get photoSelected => 'Foto selezionata';

  @override
  String get insufficientFunds => 'Il budget non può essere inferiore a zero.';

  @override
  String get adPlaceholder => 'Banner pubblicitario';

  @override
  String deleteConfirmation(String itemName) {
    return 'Eliminare $itemName?';
  }

  @override
  String progressLabel(String current, String price) {
    return 'Risparmiati $current di $price';
  }

  @override
  String get addProfile => 'Aggiungi profilo';

  @override
  String get selectProfile => 'Scegli un profilo';

  @override
  String get createProfile => 'Crea profilo';

  @override
  String get editProfile => 'Modifica profilo';

  @override
  String get deleteProfile => 'Elimina profilo';

  @override
  String deleteProfileConfirmation(String profileName) {
    return 'Eliminare il profilo di $profileName e la lista?';
  }

  @override
  String get noProfiles => 'Nessun profilo. Aggiungine uno per iniziare.';

  @override
  String get premiumRequired => 'Premium richiesto';

  @override
  String get premiumProfilesMessage =>
      'La versione a pagamento sblocca profili illimitati.';

  @override
  String get profileName => 'Nome del profilo';

  @override
  String get chooseColor => 'Scegli un colore';

  @override
  String get chooseIcon => 'Scegli un\'icona';

  @override
  String get settings => 'Impostazioni';

  @override
  String get appLanguage => 'Lingua dell\'app';

  @override
  String get currency => 'Valuta';

  @override
  String get currencyAutomatic => 'Valuta predefinita della lingua';

  @override
  String get description => 'Descrizione';

  @override
  String get storeLink => 'Link del negozio';

  @override
  String get takeUpToThreePhotos => 'Scatta fino a 3 foto';

  @override
  String get gpsSearching => 'Rilevamento posizione…';

  @override
  String get gpsCaptured => 'Posizione salvata';

  @override
  String get gpsUnavailable => 'Posizione non disponibile';

  @override
  String get openStore => 'Apri link del negozio';

  @override
  String get openMap => 'Apri posizione salvata';

  @override
  String get purchaseItem => 'Acquista';

  @override
  String get purchaseCompleted => 'Acquistato';

  @override
  String get quickAddFunds => 'Aggiungi fondi rapidamente';

  @override
  String get toBuy => 'Da acquistare';

  @override
  String get purchased => 'Acquistati';

  @override
  String get emptyToBuy => 'Non c\'è nulla da acquistare.';

  @override
  String get emptyPurchased => 'Nessun articolo acquistato.';

  @override
  String get editItem => 'Modifica articolo';

  @override
  String get chooseImageSource => 'Aggiungi una foto';

  @override
  String get chooseFromGallery => 'Scegli dalla galleria';

  @override
  String get itemOptions => 'Altre opzioni';

  @override
  String get deleteConfirmationTitle => 'Sei sicuro?';

  @override
  String get storeLocation => 'Posizione del negozio';

  @override
  String get premiumPaywallMessage =>
      'Hai raggiunto il limite della versione gratuita (max 2 profili / 3 articoli). Sblocca la versione completa a soli 5 PLN/mese!';

  @override
  String get unlockPremium => 'Sblocca Premium';

  @override
  String get backdoorPasswordPrompt => 'Inserisci la password di test';

  @override
  String get invalidBackdoorPassword => 'Password non corretta.';

  @override
  String get premiumUnlocked => 'Versione Premium sbloccata!';

  @override
  String get onboardingWelcome => 'Benvenuto su Wishy';

  @override
  String get onboardingSubtitle => 'Scegli la lingua e la valuta per iniziare.';

  @override
  String get start => 'Inizia';

  @override
  String get storeIntegrationComingSoon =>
      'L\'integrazione con lo store sarà disponibile presto...';
}
