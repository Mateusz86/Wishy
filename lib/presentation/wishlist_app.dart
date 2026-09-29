import 'dart:async';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:google_fonts/google_fonts.dart';
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
import 'wishy_gradient_background.dart';

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

    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          centerTitle: true,
          title: Row(
            mainAxisSize: MainAxisSize.min,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.auto_awesome,
                  color: Color(0xFF087F75), size: 22),
              const SizedBox(width: 8),
              Text(
                context.loc.appTitle,
                style: GoogleFonts.nunito(fontWeight: FontWeight.w900),
              ),
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
        body: WishyGradientBackground(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 8, 16, 12),
                child: _BudgetPanel(
                  profileName: profile.name,
                  profileIconIndex: profile.iconIndex,
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
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16),
                child: Row(children: [
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
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 8, 16, 4),
                child: Container(
                  decoration: BoxDecoration(
                    color: const Color(0xFFE9EFEE),
                    borderRadius: BorderRadius.circular(18),
                  ),
                  child: TabBar(
                    dividerColor: Colors.transparent,
                    indicatorSize: TabBarIndicatorSize.tab,
                    indicatorPadding: const EdgeInsets.all(4),
                    indicator: BoxDecoration(
                      color: Theme.of(context).colorScheme.primary,
                      borderRadius: BorderRadius.circular(14),
                      boxShadow: const [
                        BoxShadow(
                          color: Color(0x22000000),
                          blurRadius: 8,
                          offset: Offset(0, 3),
                        ),
                      ],
                    ),
                    labelColor: Colors.white,
                    unselectedLabelColor: const Color(0xFF53615F),
                    labelStyle: const TextStyle(fontWeight: FontWeight.w800),
                    tabs: [
                      Tab(text: context.loc.toBuy),
                      Tab(text: context.loc.purchased),
                    ],
                  ),
                ),
              ),
              Expanded(
                child: TabBarView(children: [
                  _WishlistTab(
                    profile: profile,
                    currency: currency,
                    purchased: false,
                    onDelete: (item) => _deleteItem(context, ref, item),
                    onEdit: (item) => _editItem(context, ref, item),
                    onOpen: (item) =>
                        Navigator.of(context).push(MaterialPageRoute(
                      builder: (_) => WishlistItemDetailsPage(
                          item: item, currency: currency),
                    )),
                  ),
                  _WishlistTab(
                    profile: profile,
                    currency: currency,
                    purchased: true,
                    onDelete: (item) => _deleteItem(context, ref, item),
                    onEdit: (item) => _editItem(context, ref, item),
                    onOpen: (item) =>
                        Navigator.of(context).push(MaterialPageRoute(
                      builder: (_) => WishlistItemDetailsPage(
                          item: item, currency: currency),
                    )),
                  ),
                ]),
              ),
              const _AdBannerPlaceholder(),
            ],
          ),
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

  Future<void> _addItem(BuildContext context, WidgetRef ref) =>
      _saveItem(context, ref);

  Future<void> _editItem(
          BuildContext context, WidgetRef ref, WishlistItem item) =>
      _saveItem(context, ref, editing: item);

  Future<void> _saveItem(BuildContext context, WidgetRef ref,
      {WishlistItem? editing}) async {
    final result = await showDialog<_NewItem>(
      context: context,
      builder: (_) => _ItemFormDialog(item: editing),
    );
    if (result == null) return;
    final storedPaths = <String>[];
    try {
      for (final image in result.images) {
        storedPaths.add(await ref.read(imageStorageProvider).persist(image));
      }
      final imagePaths = [...result.existingImagePaths, ...storedPaths];
      if (editing != null) {
        await ref.read(wishlistRepositoryProvider).updateItem(WishlistItem(
              id: editing.id,
              childProfileId: editing.childProfileId,
              title: result.title,
              price: result.price,
              imagePaths: imagePaths,
              description: result.description,
              storeLink: result.storeLink,
              latitude: result.latitude,
              longitude: result.longitude,
              sortOrder: editing.sortOrder,
              createdAt: editing.createdAt,
              isPurchased: editing.isPurchased,
            ));
      } else {
        await ref.read(wishlistRepositoryProvider).addItem(
              profileId: profile.id,
              title: result.title,
              price: result.price,
              imagePaths: imagePaths,
              description: result.description,
              storeLink: result.storeLink,
              latitude: result.latitude,
              longitude: result.longitude,
            );
      }
      ref.invalidate(wishlistItemsProvider(profile.id));
    } on WishlistLimitException {
      for (final storedPath in storedPaths) {
        if (await File(storedPath).exists()) await File(storedPath).delete();
      }
      if (editing == null && context.mounted) {
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
        title: Text(context.loc.deleteConfirmationTitle),
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
      {required this.profileName,
      required this.profileIconIndex,
      required this.amount,
      required this.currency,
      required this.onAdjust,
      required this.onQuickAdd});

  final String profileName;
  final int profileIconIndex;
  final double amount;
  final NumberFormat currency;
  final ValueChanged<double> onAdjust;
  final ValueChanged<double> onQuickAdd;

  @override
  Widget build(BuildContext context) {
    final primary = Theme.of(context).colorScheme.primary;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(22),
          decoration: BoxDecoration(
            gradient: const LinearGradient(
              colors: [Color(0xFF087F75), Color(0xFF42C9A5)],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
            borderRadius: BorderRadius.circular(24),
            boxShadow: const [
              BoxShadow(
                color: Color(0x33087F75),
                blurRadius: 22,
                offset: Offset(0, 10),
              ),
            ],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(children: [
                CircleAvatar(
                  radius: 22,
                  backgroundColor: Colors.white.withValues(alpha: .2),
                  child:
                      Icon(profileIcon(profileIconIndex), color: Colors.white),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    profileName,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ),
                const Icon(Icons.credit_card_rounded,
                    color: Color(0xCCFFFFFF), size: 26),
              ]),
              const SizedBox(height: 22),
              Text(
                context.loc.currentBudget,
                style: const TextStyle(
                  color: Color(0xD9FFFFFF),
                  fontSize: 13,
                  fontWeight: FontWeight.w700,
                ),
              ),
              const SizedBox(height: 2),
              Text(
                currency.format(amount),
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 36,
                  height: 1.1,
                  fontWeight: FontWeight.w900,
                ),
              ),
              const SizedBox(height: 14),
              Row(children: [
                TextButton.icon(
                  onPressed: () => onAdjust(1),
                  style: TextButton.styleFrom(foregroundColor: Colors.white),
                  icon: const Icon(Icons.add_circle_outline),
                  label: Text(context.loc.addFunds),
                ),
                const SizedBox(width: 8),
                TextButton.icon(
                  onPressed: () => onAdjust(-1),
                  style: TextButton.styleFrom(foregroundColor: Colors.white),
                  icon: const Icon(Icons.remove_circle_outline),
                  label: Text(context.loc.subtractFunds),
                ),
              ]),
            ],
          ),
        ),
        const SizedBox(height: 12),
        SizedBox(
          height: 42,
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: [
                for (final amount in [5.0, 10.0, 50.0, 100.0])
                  Padding(
                    padding: const EdgeInsets.only(right: 8),
                    child: ActionChip(
                      tooltip: context.loc.quickAddFunds,
                      shape: const StadiumBorder(),
                      side: BorderSide.none,
                      backgroundColor: primary.withValues(alpha: .1),
                      label: Text(
                        '+${currency.format(amount)}',
                        style: TextStyle(
                            color: primary, fontWeight: FontWeight.w800),
                      ),
                      onPressed: () => onQuickAdd(amount),
                    ),
                  ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}

class _WishlistTab extends ConsumerWidget {
  const _WishlistTab({
    required this.profile,
    required this.currency,
    required this.purchased,
    required this.onDelete,
    required this.onEdit,
    required this.onOpen,
  });

  final ChildProfile profile;
  final NumberFormat currency;
  final bool purchased;
  final ValueChanged<WishlistItem> onDelete;
  final ValueChanged<WishlistItem> onEdit;
  final ValueChanged<WishlistItem> onOpen;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final filter = (profileId: profile.id, purchased: purchased);
    final items = ref.watch(wishlistItemsByStatusProvider(filter));
    return items.when(
      loading: () => const Center(child: CircularProgressIndicator()),
      error: (error, stack) => Center(child: Text(context.loc.loadError)),
      data: (list) => RefreshIndicator(
        onRefresh: () async {
          ref.invalidate(wishlistItemsProvider(profile.id));
          await ref.read(wishlistItemsProvider(profile.id).future);
        },
        child: list.isEmpty
            ? ListView(
                physics: const AlwaysScrollableScrollPhysics(),
                children: [
                  SizedBox(
                    height: 180,
                    child: Center(
                      child: Text(purchased
                          ? context.loc.emptyPurchased
                          : context.loc.emptyToBuy),
                    ),
                  ),
                ],
              )
            : ReorderableListView.builder(
                padding: const EdgeInsets.fromLTRB(16, 8, 16, 16),
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
                  onDelete: () => onDelete(list[index]),
                  onEdit: () => onEdit(list[index]),
                  onOpen: () => onOpen(list[index]),
                ),
              ),
      ),
    );
  }
}

enum _WishlistItemAction { edit, delete }

class _WishlistItemTile extends ConsumerWidget {
  const _WishlistItemTile(
      {super.key,
      required this.item,
      required this.profileId,
      required this.budget,
      required this.currency,
      required this.onDelete,
      required this.onEdit,
      required this.onOpen});

  final WishlistItem item;
  final int profileId;
  final double budget;
  final NumberFormat currency;
  final VoidCallback onDelete;
  final VoidCallback onEdit;
  final VoidCallback onOpen;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final purchase = ref.watch(purchaseControllerProvider(
      (profileId: profileId, itemId: item.id!),
    ));
    final progress =
        item.price == 0 ? 1.0 : (budget / item.price).clamp(0.0, 1.0);
    final theme = Theme.of(context);
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      color: item.isPurchased ? const Color(0xFFFCFDFD) : Colors.white,
      elevation: 2,
      shadowColor: Colors.black12,
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      clipBehavior: Clip.antiAlias,
      child: InkWell(
        onTap: onOpen,
        child: Padding(
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(12),
                    child: SizedBox(
                      width: 76,
                      height: 76,
                      child: item.imagePaths.isNotEmpty &&
                              File(item.imagePaths.first).existsSync()
                          ? Image.file(File(item.imagePaths.first),
                              fit: BoxFit.cover)
                          : const ColoredBox(
                              color: Color(0xFFEDF3F2),
                              child: Icon(Icons.toys_outlined, size: 30)),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          item.title,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: theme.textTheme.titleMedium?.copyWith(
                            fontWeight: FontWeight.w800,
                            decoration: item.isPurchased
                                ? TextDecoration.lineThrough
                                : null,
                            color: item.isPurchased
                                ? theme.colorScheme.onSurfaceVariant
                                : null,
                          ),
                        ),
                        const SizedBox(height: 2),
                        Text(
                          currency.format(item.price),
                          style: theme.textTheme.titleSmall?.copyWith(
                            color: theme.colorScheme.primary,
                            fontWeight: FontWeight.w800,
                          ),
                        ),
                        if (item.description?.isNotEmpty == true) ...[
                          const SizedBox(height: 3),
                          Text(
                            item.description!,
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                            style: theme.textTheme.bodySmall?.copyWith(
                              color: theme.colorScheme.onSurfaceVariant,
                            ),
                          ),
                        ],
                      ],
                    ),
                  ),
                  PopupMenuButton<_WishlistItemAction>(
                    tooltip: context.loc.itemOptions,
                    icon: const Icon(Icons.more_vert),
                    onSelected: (action) {
                      switch (action) {
                        case _WishlistItemAction.edit:
                          onEdit();
                        case _WishlistItemAction.delete:
                          onDelete();
                      }
                    },
                    itemBuilder: (context) => [
                      PopupMenuItem(
                        value: _WishlistItemAction.edit,
                        child: Row(children: [
                          const Icon(Icons.edit_outlined, size: 20),
                          const SizedBox(width: 10),
                          Text(context.loc.editItem),
                        ]),
                      ),
                      PopupMenuItem(
                        value: _WishlistItemAction.delete,
                        child: Row(children: [
                          const Icon(Icons.delete_outline, size: 20),
                          const SizedBox(width: 10),
                          Text(context.loc.delete),
                        ]),
                      ),
                    ],
                  ),
                ],
              ),
              const SizedBox(height: 14),
              LinearProgressIndicator(
                value: progress,
                minHeight: 12,
                borderRadius: BorderRadius.circular(8),
                color: const Color(0xFF12A88D),
                backgroundColor: const Color(0xFFEAF0EF),
              ),
              const SizedBox(height: 6),
              Text(
                context.loc.progressLabel(
                    currency.format(budget), currency.format(item.price)),
                style: theme.textTheme.bodySmall?.copyWith(
                  color: theme.colorScheme.onSurfaceVariant,
                  fontWeight: FontWeight.w600,
                ),
              ),
              const SizedBox(height: 12),
              SizedBox(
                width: double.infinity,
                child: FilledButton.icon(
                  style: FilledButton.styleFrom(
                    minimumSize: const Size.fromHeight(48),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(14)),
                  ),
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
                                  content: Text(context.loc.insufficientFunds),
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
            ],
          ),
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
  const _NewItem(this.title, this.price, this.existingImagePaths, this.images,
      this.description, this.storeLink, this.latitude, this.longitude);

  final String title;
  final double price;
  final List<String> existingImagePaths;
  final List<XFile> images;
  final String description;
  final String storeLink;
  final double? latitude;
  final double? longitude;
}

class _ItemFormDialog extends ConsumerStatefulWidget {
  const _ItemFormDialog({this.item});

  final WishlistItem? item;

  @override
  ConsumerState<_ItemFormDialog> createState() => _ItemFormDialogState();
}

class _ItemFormDialogState extends ConsumerState<_ItemFormDialog> {
  late final TextEditingController titleController;
  late final TextEditingController priceController;
  late final TextEditingController descriptionController;
  late final TextEditingController storeLinkController;
  final List<String> existingImagePaths = [];
  final List<XFile> images = [];
  double? latitude;
  double? longitude;
  bool locating = false;

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
    final item = widget.item;
    titleController = TextEditingController(text: item?.title ?? '');
    priceController = TextEditingController(text: item?.price.toString() ?? '');
    descriptionController =
        TextEditingController(text: item?.description ?? '');
    storeLinkController = TextEditingController(text: item?.storeLink ?? '');
    existingImagePaths.addAll(item?.imagePaths ?? const []);
    latitude = item?.latitude;
    longitude = item?.longitude;
    if (item == null) {
      locating = true;
      unawaited(_captureLocation());
    }
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
    final source = await showModalBottomSheet<ImageSource>(
      context: context,
      builder: (sheetContext) => SafeArea(
        child: Wrap(children: [
          ListTile(
            leading: const Icon(Icons.photo_camera_outlined),
            title: Text(context.loc.takePhoto),
            onTap: () => Navigator.pop(sheetContext, ImageSource.camera),
          ),
          ListTile(
            leading: const Icon(Icons.photo_library_outlined),
            title: Text(context.loc.chooseFromGallery),
            onTap: () => Navigator.pop(sheetContext, ImageSource.gallery),
          ),
        ]),
      ),
    );
    if (!mounted ||
        source == null ||
        existingImagePaths.length + images.length >= 3) {
      return;
    }
    final selected = await ref
        .read(imagePickerProvider)
        .pickImage(source: source, imageQuality: 85);
    if (selected != null &&
        mounted &&
        existingImagePaths.length + images.length < 3) {
      setState(() => images.add(selected));
    }
  }

  Widget _imagePreview(ImageProvider image, VoidCallback onRemove) => Stack(
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(6),
            child:
                Image(image: image, width: 68, height: 68, fit: BoxFit.cover),
          ),
          Positioned(
            right: 0,
            top: 0,
            child: IconButton.filledTonal(
              visualDensity: VisualDensity.compact,
              onPressed: onRemove,
              icon: const Icon(Icons.close, size: 16),
            ),
          ),
        ],
      );

  @override
  Widget build(BuildContext context) => AlertDialog(
        title: Text(
            widget.item == null ? context.loc.addItem : context.loc.editItem),
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
          if (existingImagePaths.isNotEmpty || images.isNotEmpty)
            Wrap(spacing: 8, children: [
              for (var index = 0; index < existingImagePaths.length; index++)
                _imagePreview(
                  FileImage(File(existingImagePaths[index])),
                  () => setState(() => existingImagePaths.removeAt(index)),
                ),
              for (var index = 0; index < images.length; index++)
                _imagePreview(
                  FileImage(File(images[index].path)),
                  () => setState(() => images.removeAt(index)),
                ),
            ]),
          if (existingImagePaths.length + images.length < 3)
            OutlinedButton.icon(
                onPressed: _pickImage,
                icon: const Icon(Icons.photo_camera_outlined),
                label: Text(
                    '${context.loc.takeUpToThreePhotos} (${existingImagePaths.length + images.length}/3)')),
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
                      existingImagePaths.toList(),
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
