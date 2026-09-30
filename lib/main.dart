import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:google_mobile_ads/google_mobile_ads.dart';

import 'core/providers/app_providers.dart';
import 'l10n/app_localizations.dart';
import 'presentation/onboarding_screen.dart';
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
    final firstLaunch = ref.watch(firstLaunchProvider);
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
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF087F75),
          brightness: Brightness.light,
          surface: Colors.white,
        ),
        scaffoldBackgroundColor: Colors.grey[50],
        textTheme: GoogleFonts.nunitoTextTheme(),
        appBarTheme: const AppBarTheme(
          backgroundColor: Color(0xFFFAFAFA),
          surfaceTintColor: Colors.transparent,
        ),
      ),
      home: firstLaunch.when(
        loading: () => const Scaffold(
          body: Center(child: CircularProgressIndicator()),
        ),
        error: (error, stack) => const WishlistHomePage(),
        data: (isFirstLaunch) =>
            isFirstLaunch ? const OnboardingScreen() : const WishlistHomePage(),
      ),
    );
  }
}
