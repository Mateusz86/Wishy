import 'package:flutter/material.dart';

class WishyGradientBackground extends StatelessWidget {
  const WishyGradientBackground({super.key, required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) => Container(
        color: const Color(0xFFF4F8FC),
        child: child,
      );
}
