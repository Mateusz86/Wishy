# Wishy

Offline-first multi-profile wishlist and per-child budget app for iOS and Android.

## Run

```sh
flutter pub get
flutter run
```

Localization files live in `lib/l10n/*.arb`; Flutter generates the Dart localization classes from them. Supported locales: English, Polish, Spanish, German, Italian, Czech, Slovak, and Ukrainian.

The AdMob app identifiers in the Android manifest and iOS `Info.plist` are Google's test identifiers. Replace them with the app's registered identifiers before release. The home screen currently reserves a banner-sized placeholder; no live ad unit is requested.

The local database and images are stored in the application documents directory. Profiles own their budgets and wishlist items; the database contains image paths only. Free tier limits are three profiles and four wishlist items total. Existing single-profile databases migrate automatically.
