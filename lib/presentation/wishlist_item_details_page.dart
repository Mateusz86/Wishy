import 'dart:io';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:url_launcher/url_launcher.dart';

import '../core/localization/context_localization.dart';
import '../domain/entities/wishlist_item.dart';

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
    return Scaffold(
      appBar: AppBar(title: Text(item.title)),
      body: ListView(padding: const EdgeInsets.all(16), children: [
        if (item.imagePaths.isNotEmpty) ...[
          SizedBox(
            height: 300,
            child: PageView.builder(
              itemCount: item.imagePaths.length,
              onPageChanged: (index) => setState(() => _page = index),
              itemBuilder: (context, index) => ClipRRect(
                borderRadius: BorderRadius.circular(8),
                child: Image.file(File(item.imagePaths[index]),
                    fit: BoxFit.contain,
                    errorBuilder: (_, __, ___) => const Center(
                        child: Icon(Icons.image_not_supported_outlined,
                            size: 48))),
              ),
            ),
          ),
          if (item.imagePaths.length > 1)
            Padding(
              padding: const EdgeInsets.only(top: 8),
              child:
                  Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                for (var index = 0; index < item.imagePaths.length; index++)
                  Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 3),
                      child: Icon(Icons.circle,
                          size: 9,
                          color: index == _page
                              ? Theme.of(context).colorScheme.primary
                              : Theme.of(context).colorScheme.outlineVariant)),
              ]),
            ),
        ],
        const SizedBox(height: 16),
        Text(widget.currency.format(item.price),
            style: Theme.of(context).textTheme.headlineSmall),
        if (item.description?.isNotEmpty == true) ...[
          const SizedBox(height: 12),
          Text(item.description!),
        ],
        if (item.storeLink?.isNotEmpty == true)
          ListTile(
              contentPadding: EdgeInsets.zero,
              leading: const Icon(Icons.open_in_new),
              title: Text(context.loc.openStore),
              subtitle: Text(item.storeLink!,
                  maxLines: 1, overflow: TextOverflow.ellipsis),
              onTap: _openStore),
        if (item.latitude != null && item.longitude != null)
          ListTile(
              contentPadding: EdgeInsets.zero,
              leading: const Icon(Icons.map_outlined),
              title: Text(context.loc.openMap),
              onTap: _openMap),
      ]),
    );
  }
}
