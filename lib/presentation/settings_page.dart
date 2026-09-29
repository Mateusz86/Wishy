import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../core/localization/context_localization.dart';
import '../core/providers/app_providers.dart';
import 'wishy_gradient_background.dart';

const _languages = <(String, String)>[
  ('en', 'English'),
  ('pl', 'Polski'),
  ('es', 'Español'),
  ('de', 'Deutsch'),
  ('it', 'Italiano'),
  ('cs', 'Čeština'),
  ('sk', 'Slovenčina'),
  ('uk', 'Українська'),
];

const _currencies = <String>[
  'auto',
  'PLN',
  'EUR',
  'USD',
  'GBP',
  'CZK',
  'UAH',
  'CHF'
];

class SettingsPage extends ConsumerWidget {
  const SettingsPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) => Scaffold(
        appBar: AppBar(title: Text(context.loc.settings)),
        body: WishyGradientBackground(
          child: ref.watch(appPreferencesProvider).when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (error, stack) =>
                    Center(child: Text(context.loc.loadError)),
                data: (preferences) => ListView(
                  padding: const EdgeInsets.all(16),
                  children: [
                    DropdownButtonFormField<String>(
                      initialValue: preferences.selectedLanguage,
                      decoration:
                          InputDecoration(labelText: context.loc.appLanguage),
                      items: [
                        for (final (code, name) in _languages)
                          DropdownMenuItem(value: code, child: Text(name)),
                      ],
                      onChanged: (value) {
                        if (value != null) {
                          ref
                              .read(appPreferencesProvider.notifier)
                              .setLanguage(value);
                        }
                      },
                    ),
                    const SizedBox(height: 20),
                    DropdownButtonFormField<String>(
                      initialValue: preferences.selectedCurrency,
                      decoration:
                          InputDecoration(labelText: context.loc.currency),
                      items: [
                        for (final code in _currencies)
                          DropdownMenuItem(
                            value: code,
                            child: Text(code == 'auto'
                                ? context.loc.currencyAutomatic
                                : code),
                          ),
                      ],
                      onChanged: (value) {
                        if (value != null) {
                          ref
                              .read(appPreferencesProvider.notifier)
                              .setCurrency(value);
                        }
                      },
                    ),
                  ],
                ),
              ),
        ),
      );
}
