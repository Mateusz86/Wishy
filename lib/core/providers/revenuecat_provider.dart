import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

import 'app_providers.dart';

final revenueCatProvider = Provider<RevenueCatService>(
  (ref) => RevenueCatService(ref),
);

final monthlyPackageProvider = FutureProvider.autoDispose<Package>(
  (ref) => ref.read(revenueCatProvider).loadMonthlyPackage(),
);

class RevenueCatService {
  RevenueCatService(this._ref);

  final Ref _ref;

  Future<Package> loadMonthlyPackage() async {
    final offerings = await Purchases.getOfferings();
    final current = offerings.current;
    final monthly = current?.monthly;
    if (monthly != null) return monthly;
    if (current != null) {
      for (final package in current.availablePackages) {
        if (package.packageType == PackageType.monthly) return package;
      }
    }
    throw StateError('RevenueCat monthly package is not configured.');
  }

  Future<bool?> refreshSubscriptionStatus() async {
    try {
      final customerInfo = await Purchases.getCustomerInfo();
      return await _applyCustomerInfo(customerInfo);
    } catch (_) {
      return null;
    }
  }

  Future<bool> purchasePackage(Package package) async {
    final result = await Purchases.purchase(PurchaseParams.package(package));
    return _applyCustomerInfo(result.customerInfo);
  }

  Future<bool> restorePurchases() async {
    final customerInfo = await Purchases.restorePurchases();
    return _applyCustomerInfo(customerInfo);
  }

  Future<bool> _applyCustomerInfo(CustomerInfo customerInfo) async {
    final isActive = customerInfo.entitlements.active.containsKey('wishy_pro');
    await _ref.read(premiumProvider.notifier).setSubscriptionStatus(isActive);
    return isActive;
  }
}
