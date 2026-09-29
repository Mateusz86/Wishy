// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for Spanish Castilian (`es`).
class AppLocalizationsEs extends AppLocalizations {
  AppLocalizationsEs([String locale = 'es']) : super(locale);

  @override
  String get appTitle => 'Wishy';

  @override
  String get addChild => 'Añadir niño';

  @override
  String get editChild => 'Editar niño';

  @override
  String get childName => 'Nombre del niño';

  @override
  String get currentBudget => 'Presupuesto actual';

  @override
  String get addFunds => 'Añadir fondos';

  @override
  String get subtractFunds => 'Restar';

  @override
  String get wishlist => 'Lista de deseos';

  @override
  String get addItem => 'Añadir artículo';

  @override
  String get sortItems => 'Ordenar artículos';

  @override
  String get limitReached => 'Límite alcanzado - elimina un artículo primero.';

  @override
  String get loadError => 'No se pudieron cargar los datos.';

  @override
  String get emptyWishlist => 'Tu lista está vacía.';

  @override
  String get amount => 'Cantidad';

  @override
  String get save => 'Guardar';

  @override
  String get cancel => 'Cancelar';

  @override
  String get ok => 'Aceptar';

  @override
  String get delete => 'Eliminar';

  @override
  String get itemName => 'Nombre del artículo';

  @override
  String get itemPrice => 'Precio';

  @override
  String get takePhoto => 'Tomar una foto';

  @override
  String get photoSelected => 'Foto seleccionada';

  @override
  String get insufficientFunds =>
      'El presupuesto no puede ser inferior a cero.';

  @override
  String get adPlaceholder => 'Banner publicitario';

  @override
  String deleteConfirmation(String itemName) {
    return '¿Eliminar $itemName?';
  }

  @override
  String progressLabel(String current, String price) {
    return 'Ahorrado: $current de $price';
  }

  @override
  String get addProfile => 'Añadir perfil';

  @override
  String get selectProfile => 'Elegir perfil';

  @override
  String get createProfile => 'Crear perfil';

  @override
  String get editProfile => 'Editar perfil';

  @override
  String get deleteProfile => 'Eliminar perfil';

  @override
  String deleteProfileConfirmation(String profileName) {
    return '¿Eliminar el perfil de $profileName y su lista?';
  }

  @override
  String get noProfiles => 'Aún no hay perfiles. Añade uno para empezar.';

  @override
  String get premiumRequired => 'Se requiere Premium';

  @override
  String get premiumProfilesMessage =>
      'La versión de pago desbloquea perfiles ilimitados.';

  @override
  String get profileName => 'Nombre del perfil';

  @override
  String get chooseColor => 'Elegir color';

  @override
  String get chooseIcon => 'Elegir icono';

  @override
  String get settings => 'Ajustes';

  @override
  String get appLanguage => 'Idioma de la aplicación';

  @override
  String get currency => 'Moneda';

  @override
  String get currencyAutomatic => 'Usar la moneda del idioma';

  @override
  String get description => 'Descripción';

  @override
  String get storeLink => 'Enlace de la tienda';

  @override
  String get takeUpToThreePhotos => 'Tomar hasta 3 fotos';

  @override
  String get gpsSearching => 'Obteniendo ubicación…';

  @override
  String get gpsCaptured => 'Ubicación guardada';

  @override
  String get gpsUnavailable => 'Ubicación no disponible';

  @override
  String get openStore => 'Abrir enlace de tienda';

  @override
  String get openMap => 'Abrir ubicación guardada';

  @override
  String get purchaseItem => 'Comprar';

  @override
  String get purchaseCompleted => 'Comprado';

  @override
  String get quickAddFunds => 'Añadir fondos rápidamente';

  @override
  String get toBuy => 'Por comprar';

  @override
  String get purchased => 'Comprados';

  @override
  String get emptyToBuy => 'No hay nada que comprar.';

  @override
  String get emptyPurchased => 'Aún no hay artículos comprados.';

  @override
  String get editItem => 'Editar artículo';

  @override
  String get chooseImageSource => 'Añadir una foto';

  @override
  String get chooseFromGallery => 'Elegir de la galería';

  @override
  String get itemOptions => 'Más opciones';

  @override
  String get deleteConfirmationTitle => '¿Estás seguro?';

  @override
  String get storeLocation => 'Ubicación de la tienda';

  @override
  String get premiumPaywallMessage =>
      'Has alcanzado el límite de la versión gratuita (Máx. 2 perfiles / 3 artículos). ¡Desbloquea la versión completa por solo 5 PLN/mes!';

  @override
  String get unlockPremium => 'Desbloquear Premium';

  @override
  String get backdoorPasswordPrompt => 'Introduce la contraseña de prueba';

  @override
  String get invalidBackdoorPassword => 'Contraseña incorrecta.';

  @override
  String get premiumUnlocked => '¡Versión Premium desbloqueada!';
}
