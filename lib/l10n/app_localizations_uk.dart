// ignore: unused_import
import 'package:intl/intl.dart' as intl;
import 'app_localizations.dart';

// ignore_for_file: type=lint

/// The translations for Ukrainian (`uk`).
class AppLocalizationsUk extends AppLocalizations {
  AppLocalizationsUk([String locale = 'uk']) : super(locale);

  @override
  String get appTitle => 'Wishy';

  @override
  String get addChild => 'Додати дитину';

  @override
  String get editChild => 'Редагувати дитину';

  @override
  String get childName => 'Ім\'я дитини';

  @override
  String get currentBudget => 'Поточний бюджет';

  @override
  String get addFunds => 'Додати кошти';

  @override
  String get subtractFunds => 'Відняти';

  @override
  String get wishlist => 'Список бажань';

  @override
  String get addItem => 'Додати товар';

  @override
  String get sortItems => 'Сортувати товари';

  @override
  String get limitReached => 'Досягнуто ліміту - спочатку видаліть товар.';

  @override
  String get loadError => 'Не вдалося завантажити дані.';

  @override
  String get emptyWishlist => 'Список бажань порожній.';

  @override
  String get amount => 'Сума';

  @override
  String get save => 'Зберегти';

  @override
  String get cancel => 'Скасувати';

  @override
  String get ok => 'Гаразд';

  @override
  String get delete => 'Видалити';

  @override
  String get itemName => 'Назва товару';

  @override
  String get itemPrice => 'Ціна';

  @override
  String get takePhoto => 'Зробити фото';

  @override
  String get photoSelected => 'Фото вибрано';

  @override
  String get insufficientFunds => 'Бюджет не може бути меншим за нуль.';

  @override
  String get adPlaceholder => 'Рекламний банер';

  @override
  String deleteConfirmation(String itemName) {
    return 'Видалити $itemName?';
  }

  @override
  String progressLabel(String current, String price) {
    return 'Заощаджено $current з $price';
  }

  @override
  String get addProfile => 'Додати профіль';

  @override
  String get selectProfile => 'Вибрати профіль';

  @override
  String get createProfile => 'Створити профіль';

  @override
  String get editProfile => 'Редагувати профіль';

  @override
  String get deleteProfile => 'Видалити профіль';

  @override
  String deleteProfileConfirmation(String profileName) {
    return 'Видалити профіль $profileName та його список бажань?';
  }

  @override
  String get noProfiles => 'Профілів ще немає. Додайте профіль, щоб почати.';

  @override
  String get premiumRequired => 'Потрібна версія Premium';

  @override
  String get premiumProfilesMessage =>
      'Платна версія відкриває необмежену кількість профілів.';

  @override
  String get profileName => 'Назва профілю';

  @override
  String get chooseColor => 'Вибрати колір';

  @override
  String get chooseIcon => 'Вибрати значок';

  @override
  String get settings => 'Налаштування';

  @override
  String get appLanguage => 'Мова застосунку';

  @override
  String get currency => 'Валюта';

  @override
  String get currencyAutomatic => 'Валюта за мовою';

  @override
  String get description => 'Опис';

  @override
  String get storeLink => 'Посилання на магазин';

  @override
  String get takeUpToThreePhotos => 'Зробити до 3 фото';

  @override
  String get gpsSearching => 'Визначення місцезнаходження…';

  @override
  String get gpsCaptured => 'Місцезнаходження збережено';

  @override
  String get gpsUnavailable => 'Місцезнаходження недоступне';

  @override
  String get openStore => 'Відкрити посилання на магазин';

  @override
  String get openMap => 'Відкрити збережене місцезнаходження';

  @override
  String get purchaseItem => 'Купити';

  @override
  String get purchaseCompleted => 'Придбано';

  @override
  String get quickAddFunds => 'Швидке додавання коштів';

  @override
  String get toBuy => 'До купівлі';

  @override
  String get purchased => 'Куплено';

  @override
  String get emptyToBuy => 'Немає що купувати.';

  @override
  String get emptyPurchased => 'Ще немає придбаних товарів.';

  @override
  String get editItem => 'Редагувати товар';

  @override
  String get chooseImageSource => 'Додати фото';

  @override
  String get chooseFromGallery => 'Вибрати з галереї';

  @override
  String get itemOptions => 'Інші параметри';

  @override
  String get deleteConfirmationTitle => 'Ви впевнені?';

  @override
  String get storeLocation => 'Розташування магазину';
}
