import 'package:flutter/material.dart';

class WishyGradientBackground extends StatelessWidget {
  const WishyGradientBackground({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) => Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Colors.teal.withValues(alpha: 0.1), Colors.white],
          ),
        ),
        child: child,
      );
}
