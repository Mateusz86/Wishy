import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

import '../core/localization/context_localization.dart';
import '../core/providers/revenuecat_provider.dart';

Future<void> showPremiumRequiredDialog(BuildContext context) =>
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      showDragHandle: true,
      useSafeArea: true,
      builder: (_) => const _RevenueCatPaywall(),
    );

class _RevenueCatPaywall extends ConsumerStatefulWidget {
  const _RevenueCatPaywall();

  @override
  ConsumerState<_RevenueCatPaywall> createState() => _RevenueCatPaywallState();
}

class _RevenueCatPaywallState extends ConsumerState<_RevenueCatPaywall> {
  bool _working = false;

  Future<void> _purchase(Package package) async {
    setState(() => _working = true);
    try {
      final active =
          await ref.read(revenueCatProvider).purchasePackage(package);
      if (!mounted) return;
      if (active) {
        Navigator.of(context).pop();
      } else {
        _showMessage(context.loc.restorePurchasesNotFound);
      }
    } catch (_) {
      if (mounted) _showMessage(context.loc.purchaseFailed);
    } finally {
      if (mounted) setState(() => _working = false);
    }
  }

  Future<void> _restore() async {
    setState(() => _working = true);
    try {
      final active = await ref.read(revenueCatProvider).restorePurchases();
      if (!mounted) return;
      if (active) {
        Navigator.of(context).pop();
      } else {
        _showMessage(context.loc.restorePurchasesNotFound);
      }
    } catch (_) {
      if (mounted) _showMessage(context.loc.purchaseFailed);
    } finally {
      if (mounted) setState(() => _working = false);
    }
  }

  void _showMessage(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(message)),
    );
  }

  @override
  Widget build(BuildContext context) {
    final package = ref.watch(monthlyPackageProvider);
    return Padding(
      padding: EdgeInsets.fromLTRB(
        24,
        12,
        24,
        24 + MediaQuery.viewInsetsOf(context).bottom,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const Icon(Icons.workspace_premium,
              size: 44, color: Color(0xFF087F75)),
          const SizedBox(height: 14),
          Text(
            context.loc.premiumRequired,
            style: Theme.of(context).textTheme.titleLarge,
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 10),
          Text(
            context.loc.premiumPaywallMessage,
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 20),
          SizedBox(
            width: double.infinity,
            child: package.when(
              loading: () => FilledButton.icon(
                onPressed: null,
                icon: const SizedBox.square(
                  dimension: 18,
                  child: CircularProgressIndicator(strokeWidth: 2),
                ),
                label: Text(context.loc.loadingOffer),
              ),
              error: (error, stack) => FilledButton(
                onPressed: null,
                child: Text(context.loc.noInternet),
              ),
              data: (monthlyPackage) => FilledButton.icon(
                onPressed: _working ? null : () => _purchase(monthlyPackage),
                icon: _working
                    ? const SizedBox.square(
                        dimension: 18,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : const Icon(Icons.lock_open),
                label: Text(
                  context.loc.unlockAtPrice(
                    monthlyPackage.storeProduct.priceString,
                  ),
                ),
              ),
            ),
          ),
          TextButton(
            onPressed: _working ? null : _restore,
            child: Text(context.loc.restorePurchases),
          ),
        ],
      ),
    );
  }
}
