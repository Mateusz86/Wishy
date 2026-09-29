import 'package:flutter/material.dart';

import '../core/localization/context_localization.dart';

Future<void> showPremiumRequiredDialog(
  BuildContext context, {
  required Future<void> Function() onUnlock,
}) =>
    showModalBottomSheet<void>(
      context: context,
      showDragHandle: true,
      useSafeArea: true,
      builder: (sheetContext) => Padding(
        padding: const EdgeInsets.fromLTRB(24, 12, 24, 28),
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
              child: FilledButton.icon(
                onPressed: () async {
                  Navigator.pop(sheetContext);
                  await onUnlock();
                },
                icon: const Icon(Icons.lock_open),
                label: Text(context.loc.unlockPremium),
              ),
            ),
          ],
        ),
      ),
    );
