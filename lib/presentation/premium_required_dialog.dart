import 'package:flutter/material.dart';

import '../core/localization/context_localization.dart';

Future<void> showPremiumRequiredDialog(BuildContext context) =>
    showDialog<void>(
      context: context,
      builder: (dialogContext) => AlertDialog(
        title: Text(context.loc.premiumRequired),
        content: Text(context.loc.premiumProfilesMessage),
        actions: [
          FilledButton(
            onPressed: () => Navigator.pop(dialogContext),
            child: Text(context.loc.ok),
          ),
        ],
      ),
    );
