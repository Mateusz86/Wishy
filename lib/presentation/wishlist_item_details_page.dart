import 'dart:io';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:url_launcher/url_launcher.dart';

import '../core/localization/context_localization.dart';
import '../domain/entities/wishlist_item.dart';
import 'wishy_gradient_background.dart';

class WishlistItemDetailsPage extends StatefulWidget {
  const WishlistItemDetailsPage(
      {super.key, required this.item, required this.currency});

  final WishlistItem item;
  final NumberFormat currency;

  @override
  State<WishlistItemDetailsPage> createState() =>
      _WishlistItemDetailsPageState();
}

class _WishlistItemDetailsPageState extends State<WishlistItemDetailsPage> {
  int _page = 0;

  Future<void> _openStore() async {
    final raw = widget.item.storeLink!.trim();
    final uri = Uri.tryParse(raw.contains('://') ? raw : 'https://$raw');
    if (uri != null && (uri.scheme == 'https' || uri.scheme == 'http')) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  Future<void> _openMap() async {
    final item = widget.item;
    final uri = Uri.https('www.google.com', '/maps/search/', {
      'api': '1',
      'query': '${item.latitude},${item.longitude}',
    });
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }

  @override
  Widget build(BuildContext context) {
    final item = widget.item;
    final theme = Theme.of(context);
    return Scaffold(
      backgroundColor: Colors.transparent,
      body: WishyGradientBackground(
        child: CustomScrollView(
          slivers: [
            SliverAppBar(
              pinned: true,
              expandedHeight: 350,
              backgroundColor: Colors.transparent,
              surfaceTintColor: Colors.transparent,
              elevation: 0,
              leadingWidth: 68,
              leading: Padding(
                padding: const EdgeInsets.only(left: 12, top: 4, bottom: 4),
                child: IconButton.filled(
                  tooltip: MaterialLocalizations.of(context).backButtonTooltip,
                  style: IconButton.styleFrom(
                    foregroundColor: const Color(0xFF173D39),
                    backgroundColor: Colors.white.withValues(alpha: .9),
                  ),
                  onPressed: () => Navigator.of(context).maybePop(),
                  icon: const Icon(Icons.arrow_back_rounded),
                ),
              ),
              flexibleSpace: FlexibleSpaceBar(
                background: _PhotoHero(
                  item: item,
                  currentPage: _page,
                  onPageChanged: (page) => setState(() => _page = page),
                ),
              ),
            ),
            SliverToBoxAdapter(
              child: Transform.translate(
                offset: const Offset(0, -30),
                child: Container(
                  width: double.infinity,
                  clipBehavior: Clip.antiAlias,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: const BorderRadius.vertical(
                      top: Radius.circular(32),
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withValues(alpha: .1),
                        blurRadius: 24,
                        offset: const Offset(0, -5),
                      ),
                    ],
                  ),
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(24, 34, 24, 40),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          item.title,
                          style: theme.textTheme.headlineMedium?.copyWith(
                            color: const Color(0xFF183330),
                            fontWeight: FontWeight.w900,
                            height: 1.08,
                          ),
                        ),
                        const SizedBox(height: 10),
                        Text(
                          widget.currency.format(item.price),
                          style: theme.textTheme.headlineSmall?.copyWith(
                            color: theme.colorScheme.primary,
                            fontWeight: FontWeight.w900,
                          ),
                        ),
                        if (item.description?.isNotEmpty == true) ...[
                          const SizedBox(height: 24),
                          Text(
                            context.loc.description,
                            style: theme.textTheme.labelLarge?.copyWith(
                              color: theme.colorScheme.onSurfaceVariant,
                              fontWeight: FontWeight.w800,
                            ),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            item.description!,
                            style: theme.textTheme.bodyLarge?.copyWith(
                              height: 1.5,
                              color: const Color(0xFF3F504D),
                            ),
                          ),
                        ],
                        if (item.storeLink?.isNotEmpty == true) ...[
                          const SizedBox(height: 28),
                          SizedBox(
                            width: double.infinity,
                            child: ElevatedButton.icon(
                              onPressed: _openStore,
                              icon: const Icon(Icons.shopping_bag_outlined),
                              label: Text(context.loc.openStore),
                              style: ElevatedButton.styleFrom(
                                elevation: 0,
                                minimumSize: const Size.fromHeight(56),
                                foregroundColor: Colors.white,
                                backgroundColor: theme.colorScheme.primary,
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(16),
                                ),
                                textStyle: const TextStyle(
                                  fontWeight: FontWeight.w800,
                                ),
                              ),
                            ),
                          ),
                        ],
                        if (item.latitude != null &&
                            item.longitude != null) ...[
                          const SizedBox(height: 12),
                          SizedBox(
                            width: double.infinity,
                            child: ElevatedButton.icon(
                              onPressed: _openMap,
                              icon: const Icon(Icons.location_on_outlined),
                              label: Text(context.loc.storeLocation),
                              style: ElevatedButton.styleFrom(
                                elevation: 0,
                                minimumSize: const Size.fromHeight(56),
                                foregroundColor: theme.colorScheme.primary,
                                backgroundColor: const Color(0xFFE9F5F2),
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(16),
                                ),
                                textStyle: const TextStyle(
                                  fontWeight: FontWeight.w800,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _PhotoHero extends StatelessWidget {
  const _PhotoHero({
    required this.item,
    required this.currentPage,
    required this.onPageChanged,
  });

  final WishlistItem item;
  final int currentPage;
  final ValueChanged<int> onPageChanged;

  @override
  Widget build(BuildContext context) {
    if (item.imagePaths.isEmpty) {
      return const ColoredBox(
        color: Color(0xFFDCEFEB),
        child: Center(
          child: Icon(Icons.toys_outlined, size: 88, color: Color(0xFF238B7F)),
        ),
      );
    }

    return Stack(
      fit: StackFit.expand,
      children: [
        PageView.builder(
          itemCount: item.imagePaths.length,
          onPageChanged: onPageChanged,
          itemBuilder: (context, index) => Image.file(
            File(item.imagePaths[index]),
            fit: BoxFit.cover,
            errorBuilder: (context, error, stackTrace) => const ColoredBox(
              color: Color(0xFFDCEFEB),
              child: Center(
                child: Icon(Icons.image_not_supported_outlined,
                    size: 64, color: Color(0xFF238B7F)),
              ),
            ),
          ),
        ),
        if (item.imagePaths.length > 1)
          Positioned(
            bottom: 52,
            left: 0,
            right: 0,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                for (var index = 0; index < item.imagePaths.length; index++)
                  AnimatedContainer(
                    duration: const Duration(milliseconds: 180),
                    width: index == currentPage ? 20 : 7,
                    height: 7,
                    margin: const EdgeInsets.symmetric(horizontal: 3),
                    decoration: BoxDecoration(
                      color: index == currentPage
                          ? Colors.white
                          : Colors.white.withValues(alpha: .55),
                      borderRadius: BorderRadius.circular(8),
                    ),
                  ),
              ],
            ),
          ),
      ],
    );
  }
}
