import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';

import 'core/providers/app_providers.dart';
import 'l10n/app_localizations.dart';
import 'presentation/wishlist_app.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await MobileAds.instance.updateRequestConfiguration(RequestConfiguration(
    // Keep the explicit COPPA child-directed signal required by this app.
    // ignore: deprecated_member_use
    tagForChildDirectedTreatment: TagForChildDirectedTreatment.yes,
  ));
  await MobileAds.instance.initialize();
  runApp(const ProviderScope(child: WishyApp()));
}

class WishyApp extends ConsumerWidget {
  const WishyApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final preferences = ref.watch(appPreferencesProvider).valueOrNull;
    return MaterialApp(
      onGenerateTitle: (context) => AppLocalizations.of(context).appTitle,
      locale: preferences == null ? null : Locale(preferences.selectedLanguage),
      localizationsDelegates: const [
        AppLocalizations.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ],
      supportedLocales: AppLocalizations.supportedLocales,
      theme: ThemeData(
          colorSchemeSeed: const Color(0xFF4C8C72), useMaterial3: true),
      home: const WishlistHomePage(),
    );
  }
}
