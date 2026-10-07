import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../core/localization/context_localization.dart';
import '../core/providers/app_providers.dart';
import 'wishy_gradient_background.dart';

class OnboardingScreen extends ConsumerStatefulWidget {
  const OnboardingScreen({super.key});

  @override
  ConsumerState<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends ConsumerState<OnboardingScreen> {
  static const _languages = <(String, String)>[
    ('pl', 'PL  Polski'),
    ('en', 'EN  English'),
    ('es', 'ES  Español'),
    ('de', 'DE  Deutsch'),
    ('it', 'IT  Italiano'),
    ('cs', 'CS  Čeština'),
    ('sk', 'SK  Slovenčina'),
    ('uk', 'UK  Українська'),
  ];

  static const _currencies = <String>['PLN', 'USD', 'EUR', 'GBP', 'CZK'];

  String _language = 'pl';
  String _currency = 'PLN';
  bool _saving = false;

  Future<void> _start() async {
    if (_saving) return;
    setState(() => _saving = true);
    try {
      await ref.read(appPreferencesProvider.future);
      await ref.read(appPreferencesProvider.notifier).setLanguage(_language);
      await ref.read(appPreferencesProvider.notifier).setCurrency(_currency);

      final preferences = await SharedPreferences.getInstance();
      await preferences.setString('selectedLanguage', _language);
      await preferences.setString('selectedCurrency', _currency);
      await ref.read(firstLaunchProvider.notifier).complete();
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(context.loc.loadError)),
        );
        setState(() => _saving = false);
      }
      return;
    }
    // MaterialApp replaces its home with the main screen when this flag changes.
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        body: WishyGradientBackground(
          child: SafeArea(
            child: LayoutBuilder(
              builder: (context, constraints) => SingleChildScrollView(
                padding: const EdgeInsets.all(24),
                child: ConstrainedBox(
                  constraints: BoxConstraints(minHeight: constraints.maxHeight),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      const SizedBox(height: 24),
                      Text(
                        context.loc.onboardingWelcome,
                        textAlign: TextAlign.center,
                        style: Theme.of(context)
                            .textTheme
                            .headlineMedium
                            ?.copyWith(fontWeight: FontWeight.w900),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        context.loc.onboardingSubtitle,
                        textAlign: TextAlign.center,
                        style: Theme.of(context).textTheme.bodyLarge,
                      ),
                      const SizedBox(height: 36),
                      DropdownButtonFormField<String>(
                        initialValue: _language,
                        decoration: InputDecoration(
                          labelText: context.loc.appLanguage,
                          border: const OutlineInputBorder(),
                        ),
                        items: [
                          for (final (code, label) in _languages)
                            DropdownMenuItem(value: code, child: Text(label)),
                        ],
                        onChanged: _saving
                            ? null
                            : (value) {
                                if (value != null) {
                                  setState(() => _language = value);
                                }
                              },
                      ),
                      const SizedBox(height: 18),
                      DropdownButtonFormField<String>(
                        initialValue: _currency,
                        decoration: InputDecoration(
                          labelText: context.loc.currency,
                          border: const OutlineInputBorder(),
                        ),
                        items: [
                          for (final currency in _currencies)
                            DropdownMenuItem(
                              value: currency,
                              child: Text(currency),
                            ),
                        ],
                        onChanged: _saving
                            ? null
                            : (value) {
                                if (value != null) {
                                  setState(() => _currency = value);
                                }
                              },
                      ),
                      const SizedBox(height: 32),
                      FilledButton(
                        onPressed: _saving ? null : _start,
                        child: Padding(
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          child: _saving
                              ? const SizedBox.square(
                                  dimension: 22,
                                  child:
                                      CircularProgressIndicator(strokeWidth: 2),
                                )
                              : Text(context.loc.start),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
      );
}
