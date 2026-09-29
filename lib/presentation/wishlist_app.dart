import 'dart:async';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:intl/intl.dart';

import '../core/constants/app_limits.dart';
import '../core/localization/context_localization.dart';
import '../core/providers/app_providers.dart';
import '../data/repositories/local_wishlist_repository.dart';
import '../domain/entities/child_profile.dart';
import '../domain/entities/wishlist_item.dart';
import 'profile_selection_page.dart';
import 'settings_page.dart';
import 'premium_required_dialog.dart';
import 'wishlist_item_details_page.dart';

class WishlistHomePage extends ConsumerWidget {
  const WishlistHomePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) => ref
      .watch(selectedProfileProvider)
      .when(
        loading: () =>
            const Scaffold(body: Center(child: CircularProgressIndicator())),
        error: (error, stack) =>
            Scaffold(body: Center(child: Text(context.loc.loadError))),
        data: (profile) => profile == null
            ? const ProfileSelectionPage()
            : _ProfileWishlistPage(key: ValueKey(profile.id), profile: profile),
      );
}

class _ProfileWishlistPage extends ConsumerWidget {
  const _ProfileWishlistPage({super.key, required this.profile});

  final ChildProfile profile;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final items = ref.watch(wishlistItemsProvider(profile.id));
    final preferences = ref.watch(appPreferencesProvider).valueOrNull;
    final locale = Localizations.localeOf(context).toString();
    final currencyCode = preferences?.selectedCurrency ?? 'auto';
    final currency = NumberFormat.simpleCurrency(
      locale: locale,
      name: currencyCode == 'auto' ? null : currencyCode,
    );

    return Scaffold(
      appBar: AppBar(
        leading: Padding(
          padding: const EdgeInsets.all(8),
          child: CircleAvatar(
            backgroundColor: Color(profile.themeColor),
            child: Icon(profileIcon(profile.iconIndex), color: Colors.white),
          ),
        ),
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(profile.name, maxLines: 1, overflow: TextOverflow.ellipsis),
            Text(context.loc.appTitle,
                style: Theme.of(context).textTheme.labelSmall),
          ],
        ),
        actions: [
          IconButton(
            tooltip: context.loc.selectProfile,
            onPressed: () => Navigator.of(context).push(
              MaterialPageRoute(builder: (_) => const ProfileSelectionPage()),
            ),
            icon: const Icon(Icons.switch_account_outlined),
          ),
          IconButton(
            tooltip: context.loc.editProfile,
            onPressed: () async {
              await Navigator.of(context).push<bool>(
                MaterialPageRoute(
                    builder: (_) => ProfileEditorPage(profile: profile)),
              );
              ref.invalidate(profilesProvider);
              ref.invalidate(selectedProfileProvider);
            },
            icon: const Icon(Icons.edit_outlined),
          ),
          IconButton(
            tooltip: context.loc.settings,
            onPressed: () => Navigator.of(context).push(
              MaterialPageRoute(builder: (_) => const SettingsPage()),
            ),
            icon: const Icon(Icons.settings_outlined),
          ),
        ],
      ),
      body: RefreshIndicator(
        onRefresh: () async {
          ref.invalidate(profilesProvider);
          ref.invalidate(wishlistItemsProvider(profile.id));
        },
        child: ListView(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
          children: [
            _BudgetPanel(
              amount: profile.budget,
              currency: currency,
              onAdjust: (delta) => _adjustBudget(context, ref, delta < 0),
              onQuickAdd: (amount) async {
                await ref
                    .read(wishlistRepositoryProvider)
                    .adjustBudget(profile.id, amount);
                ref.invalidate(profilesProvider);
                ref.invalidate(selectedProfileProvider);
              },
            ),
            const SizedBox(height: 20),
            Row(children: [
              Expanded(
                  child: Text(context.loc.wishlist,
                      style: Theme.of(context).textTheme.titleLarge)),
              items.maybeWhen(
                data: (list) => IconButton(
                  tooltip: context.loc.sortItems,
                  onPressed: list.length < 2
                      ? null
                      : () => _sortItems(context, ref, list),
                  icon: const Icon(Icons.sort),
                ),
                orElse: () => const SizedBox.shrink(),
              ),
              IconButton.filled(
                tooltip: context.loc.addItem,
                onPressed: items.valueOrNull == null
                    ? null
                    : () {
                        if (items.valueOrNull!.length >=
                            AppLimits.maxWishlistItems) {
                          showPremiumRequiredDialog(context);
                        } else {
                          _addItem(context, ref);
                        }
                      },
                icon: const Icon(Icons.add),
              ),
            ]),
            items.when(
              loading: () => const Padding(
                padding: EdgeInsets.all(32),
                child: Center(child: CircularProgressIndicator()),
              ),
              error: (error, stack) => Text(context.loc.loadError),
              data: (list) => list.isEmpty
                  ? Padding(
                      padding: const EdgeInsets.symmetric(vertical: 36),
                      child: Center(child: Text(context.loc.emptyWishlist)),
                    )
                  : ReorderableListView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      itemCount: list.length,
                      onReorderItem: (oldIndex, newIndex) async {
                        final reordered = [...list];
                        final item = reordered.removeAt(oldIndex);
                        reordered.insert(newIndex, item);
                        await ref
                            .read(wishlistRepositoryProvider)
                            .reorderItems(profile.id, reordered);
                        ref.invalidate(wishlistItemsProvider(profile.id));
                      },
                      itemBuilder: (context, index) => _WishlistItemTile(
                        key: ValueKey(list[index].id),
                        item: list[index],
                        profileId: profile.id,
                        budget: profile.budget,
                        currency: currency,
                        onDelete: () => _deleteItem(context, ref, list[index]),
                        onOpen: () =>
                            Navigator.of(context).push(MaterialPageRoute(
                          builder: (_) => WishlistItemDetailsPage(
                              item: list[index], currency: currency),
                        )),
                      ),
                    ),
            ),
            const SizedBox(height: 20),
            const _AdBannerPlaceholder(),
          ],
        ),
      ),
    );
  }

  Future<void> _adjustBudget(
      BuildContext context, WidgetRef ref, bool subtract) async {
    final amount = await showDialog<double>(
      context: context,
      builder: (_) => _AmountDialog(
        title: subtract ? context.loc.subtractFunds : context.loc.addFunds,
      ),
    );
    if (amount == null || amount <= 0) return;
    try {
      await ref
          .read(wishlistRepositoryProvider)
          .adjustBudget(profile.id, subtract ? -amount : amount);
      ref.invalidate(profilesProvider);
      ref.invalidate(selectedProfileProvider);
    } on InsufficientBudgetException {
      if (context.mounted) {
        await showDialog<void>(
          context: context,
          builder: (_) => AlertDialog(
            content: Text(context.loc.insufficientFunds),
            actions: [
              TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: Text(context.loc.ok))
            ],
          ),
        );
      }
    }
  }

  Future<void> _addItem(BuildContext context, WidgetRef ref) async {
    final result = await showDialog<_NewItem>(
        context: context, builder: (_) => const _AddItemDialog());
    if (result == null) return;
    final storedPaths = <String>[];
    try {
      for (final image in result.images) {
        storedPaths.add(await ref.read(imageStorageProvider).persist(image));
      }
      await ref.read(wishlistRepositoryProvider).addItem(
            profileId: profile.id,
            title: result.title,
            price: result.price,
            imagePaths: storedPaths,
            description: result.description,
            storeLink: result.storeLink,
            latitude: result.latitude,
            longitude: result.longitude,
          );
      ref.invalidate(wishlistItemsProvider(profile.id));
    } on WishlistLimitException {
      for (final storedPath in storedPaths) {
        if (await File(storedPath).exists()) await File(storedPath).delete();
      }
      if (context.mounted) {
        await showPremiumRequiredDialog(context);
      }
    } catch (_) {
      for (final storedPath in storedPaths) {
        if (await File(storedPath).exists()) await File(storedPath).delete();
      }
      rethrow;
    }
  }

  Future<void> _deleteItem(
      BuildContext context, WidgetRef ref, WishlistItem item) async {
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        content: Text(context.loc.deleteConfirmation(item.title)),
        actions: [
          TextButton(
              onPressed: () => Navigator.pop(context, false),
              child: Text(context.loc.cancel)),
          FilledButton(
              onPressed: () => Navigator.pop(context, true),
              child: Text(context.loc.delete)),
        ],
      ),
    );
    if (confirmed != true) return;
    await ref.read(wishlistRepositoryProvider).deleteItem(item);
    ref.invalidate(wishlistItemsProvider(profile.id));
  }

  Future<void> _sortItems(
      BuildContext context, WidgetRef ref, List<WishlistItem> items) async {
    final sorted = [...items]
      ..sort((a, b) => a.title.toLowerCase().compareTo(b.title.toLowerCase()));
    await ref.read(wishlistRepositoryProvider).reorderItems(profile.id, sorted);
    ref.invalidate(wishlistItemsProvider(profile.id));
  }
}

class _BudgetPanel extends StatelessWidget {
  const _BudgetPanel(
      {required this.amount,
      required this.currency,
      required this.onAdjust,
      required this.onQuickAdd});

  final double amount;
  final NumberFormat currency;
  final ValueChanged<double> onAdjust;
  final ValueChanged<double> onQuickAdd;

  @override
  Widget build(BuildContext context) => Card(
        margin: EdgeInsets.zero,
        child: Padding(
          padding: const EdgeInsets.all(16),
          child:
              Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(context.loc.currentBudget,
                style: Theme.of(context).textTheme.labelLarge),
            const SizedBox(height: 4),
            Text(currency.format(amount),
                style: Theme.of(context).textTheme.headlineMedium),
            const SizedBox(height: 8),
            Row(children: [
              FilledButton.tonalIcon(
                  onPressed: () => onAdjust(1),
                  icon: const Icon(Icons.add),
                  label: Text(context.loc.addFunds)),
              const SizedBox(width: 8),
              OutlinedButton.icon(
                  onPressed: () => onAdjust(-1),
                  icon: const Icon(Icons.remove),
                  label: Text(context.loc.subtractFunds)),
            ]),
            const SizedBox(height: 10),
            Wrap(
              spacing: 8,
              runSpacing: 6,
              children: [
                for (final amount in [5.0, 10.0, 50.0, 100.0])
                  ActionChip(
                    avatar: const Icon(Icons.add, size: 16),
                    label: Text(currency.format(amount)),
                    onPressed: () => onQuickAdd(amount),
                  ),
              ],
            ),
          ]),
        ),
      );
}

class _WishlistItemTile extends ConsumerWidget {
  const _WishlistItemTile(
      {super.key,
      required this.item,
      required this.profileId,
      required this.budget,
      required this.currency,
      required this.onDelete,
      required this.onOpen});

  final WishlistItem item;
  final int profileId;
  final double budget;
  final NumberFormat currency;
  final VoidCallback onDelete;
  final VoidCallback onOpen;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final purchase = ref.watch(purchaseControllerProvider(
      (profileId: profileId, itemId: item.id!),
    ));
    final progress =
        item.price == 0 ? 1.0 : (budget / item.price).clamp(0.0, 1.0);
    return Card(
      margin: const EdgeInsets.only(bottom: 10),
      color: item.isPurchased
          ? Theme.of(context).colorScheme.surfaceContainerHighest
          : null,
      child: InkWell(
        onTap: onOpen,
        borderRadius: BorderRadius.circular(8),
        child: Padding(
          padding: const EdgeInsets.all(12),
          child: Row(children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(6),
              child: SizedBox(
                width: 64,
                height: 64,
                child: item.imagePaths.isNotEmpty &&
                        File(item.imagePaths.first).existsSync()
                    ? Image.file(File(item.imagePaths.first), fit: BoxFit.cover)
                    : const ColoredBox(
                        color: Color(0xFFE8EFEA),
                        child: Icon(Icons.toys_outlined)),
              ),
            ),
            const SizedBox(width: 12),
            Expanded(
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                  Text(item.title,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: Theme.of(context).textTheme.titleMedium?.copyWith(
                            decoration: item.isPurchased
                                ? TextDecoration.lineThrough
                                : null,
                            color: item.isPurchased
                                ? Theme.of(context).colorScheme.onSurfaceVariant
                                : null,
                          )),
                  Text(currency.format(item.price)),
                  if (item.description?.isNotEmpty == true)
                    Text(item.description!,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: Theme.of(context).textTheme.bodySmall),
                  const SizedBox(height: 6),
                  LinearProgressIndicator(value: progress),
                  const SizedBox(height: 3),
                  Text(
                      context.loc.progressLabel(
                          currency.format(budget), currency.format(item.price)),
                      style: Theme.of(context).textTheme.bodySmall),
                  const SizedBox(height: 8),
                  SizedBox(
                    width: double.infinity,
                    child: FilledButton.icon(
                      onPressed: item.isPurchased || purchase.isLoading
                          ? null
                          : () async {
                              try {
                                await ref
                                    .read(purchaseControllerProvider((
                                      profileId: profileId,
                                      itemId: item.id!,
                                    )).notifier)
                                    .purchase();
                              } on InsufficientBudgetException {
                                if (context.mounted) {
                                  ScaffoldMessenger.of(context).showSnackBar(
                                    SnackBar(
                                      content:
                                          Text(context.loc.insufficientFunds),
                                    ),
                                  );
                                }
                              } catch (_) {
                                if (context.mounted) {
                                  ScaffoldMessenger.of(context).showSnackBar(
                                    SnackBar(
                                      content: Text(context.loc.loadError),
                                    ),
                                  );
                                }
                              }
                            },
                      icon: Icon(item.isPurchased
                          ? Icons.check_circle_outline
                          : Icons.shopping_bag_outlined),
                      label: Text(item.isPurchased
                          ? context.loc.purchaseCompleted
                          : context.loc.purchaseItem),
                    ),
                  ),
                ])),
            IconButton(
                tooltip: context.loc.delete,
                onPressed: onDelete,
                icon: const Icon(Icons.delete_outline)),
            const Icon(Icons.drag_handle),
          ]),
        ),
      ),
    );
  }
}

class _AdBannerPlaceholder extends StatelessWidget {
  const _AdBannerPlaceholder();

  @override
  Widget build(BuildContext context) => SizedBox(
        height: 50,
        child: Center(
            child: Text(context.loc.adPlaceholder,
                style: Theme.of(context).textTheme.bodySmall)),
      );
}

class _AmountDialog extends StatefulWidget {
  const _AmountDialog({required this.title});

  final String title;

  @override
  State<_AmountDialog> createState() => _AmountDialogState();
}

class _AmountDialogState extends State<_AmountDialog> {
  final controller = TextEditingController();

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => AlertDialog(
        title: Text(widget.title),
        content: TextField(
          controller: controller,
          autofocus: true,
          keyboardType: const TextInputType.numberWithOptions(decimal: true),
          decoration: InputDecoration(labelText: context.loc.amount),
        ),
        actions: [
          TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text(context.loc.cancel)),
          FilledButton(
            onPressed: () => Navigator.pop(
                context, double.tryParse(controller.text.replaceAll(',', '.'))),
            child: Text(context.loc.save),
          ),
        ],
      );
}

class _NewItem {
  const _NewItem(this.title, this.price, this.images, this.description,
      this.storeLink, this.latitude, this.longitude);

  final String title;
  final double price;
  final List<XFile> images;
  final String description;
  final String storeLink;
  final double? latitude;
  final double? longitude;
}

class _AddItemDialog extends ConsumerStatefulWidget {
  const _AddItemDialog();

  @override
  ConsumerState<_AddItemDialog> createState() => _AddItemDialogState();
}

class _AddItemDialogState extends ConsumerState<_AddItemDialog> {
  final titleController = TextEditingController();
  final priceController = TextEditingController();
  final descriptionController = TextEditingController();
  final storeLinkController = TextEditingController();
  final List<XFile> images = [];
  double? latitude;
  double? longitude;
  bool locating = true;

  @override
  void dispose() {
    titleController.dispose();
    priceController.dispose();
    descriptionController.dispose();
    storeLinkController.dispose();
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    unawaited(_captureLocation());
  }

  Future<void> _captureLocation() async {
    try {
      final position = await ref.read(deviceLocationProvider).currentPosition();
      if (!mounted) return;
      setState(() {
        latitude = position?.latitude;
        longitude = position?.longitude;
        locating = false;
      });
    } catch (_) {
      if (mounted) setState(() => locating = false);
    }
  }

  Future<void> _pickImage() async {
    final selected = await ref
        .read(imagePickerProvider)
        .pickImage(source: ImageSource.camera, imageQuality: 85);
    if (selected != null && images.length < 3) {
      setState(() => images.add(selected));
    }
  }

  @override
  Widget build(BuildContext context) => AlertDialog(
        title: Text(context.loc.addItem),
        content: SingleChildScrollView(
            child: Column(mainAxisSize: MainAxisSize.min, children: [
          TextField(
              controller: titleController,
              autofocus: true,
              decoration: InputDecoration(labelText: context.loc.itemName)),
          TextField(
              controller: priceController,
              keyboardType:
                  const TextInputType.numberWithOptions(decimal: true),
              decoration: InputDecoration(labelText: context.loc.itemPrice)),
          TextField(
              controller: descriptionController,
              maxLines: 3,
              decoration: InputDecoration(labelText: context.loc.description)),
          TextField(
              controller: storeLinkController,
              keyboardType: TextInputType.url,
              decoration: InputDecoration(labelText: context.loc.storeLink)),
          const SizedBox(height: 8),
          Align(
              alignment: Alignment.centerLeft,
              child: Text(locating
                  ? context.loc.gpsSearching
                  : latitude != null
                      ? context.loc.gpsCaptured
                      : context.loc.gpsUnavailable)),
          const SizedBox(height: 12),
          if (images.isNotEmpty)
            Wrap(spacing: 8, children: [
              for (var index = 0; index < images.length; index++)
                Stack(children: [
                  ClipRRect(
                      borderRadius: BorderRadius.circular(6),
                      child: Image.file(File(images[index].path),
                          width: 68, height: 68, fit: BoxFit.cover)),
                  Positioned(
                      right: 0,
                      top: 0,
                      child: IconButton.filledTonal(
                        visualDensity: VisualDensity.compact,
                        onPressed: () => setState(() => images.removeAt(index)),
                        icon: const Icon(Icons.close, size: 16),
                      )),
                ]),
            ]),
          if (images.length < 3)
            OutlinedButton.icon(
                onPressed: _pickImage,
                icon: const Icon(Icons.photo_camera_outlined),
                label: Text(
                    '${context.loc.takeUpToThreePhotos} (${images.length}/3)')),
        ])),
        actions: [
          TextButton(
              onPressed: () => Navigator.pop(context),
              child: Text(context.loc.cancel)),
          FilledButton(
            onPressed: () {
              final price =
                  double.tryParse(priceController.text.replaceAll(',', '.'));
              final title = titleController.text.trim();
              if (title.isEmpty || price == null || price < 0) return;
              Navigator.pop(
                  context,
                  _NewItem(
                      title,
                      price,
                      images.toList(),
                      descriptionController.text.trim(),
                      storeLinkController.text.trim(),
                      latitude,
                      longitude));
            },
            child: Text(context.loc.save),
          ),
        ],
      );
}
