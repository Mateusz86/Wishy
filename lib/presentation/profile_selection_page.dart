import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../core/constants/app_limits.dart';
import '../core/localization/context_localization.dart';
import '../core/providers/app_providers.dart';
import '../data/repositories/local_wishlist_repository.dart';
import '../domain/entities/child_profile.dart';
import 'settings_page.dart';
import 'premium_required_dialog.dart';
import 'wishy_gradient_background.dart';

const _profileColors = <Color>[
  Color(0xFF4C8C72),
  Color(0xFF3478A8),
  Color(0xFFB45C65),
  Color(0xFF8B6CB0),
  Color(0xFFB07B31),
  Color(0xFF397F82),
  Color(0xFF596578),
  Color(0xFF71853B),
];

const _profileIcons = <IconData>[
  Icons.child_care,
  Icons.face,
  Icons.pets,
  Icons.toys_outlined,
  Icons.rocket_launch_outlined,
  Icons.palette_outlined,
  Icons.sports_soccer_outlined,
  Icons.star_outline,
];

IconData profileIcon(int index) =>
    _profileIcons[index.clamp(0, _profileIcons.length - 1)];

class ProfileSelectionPage extends ConsumerWidget {
  const ProfileSelectionPage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) => Scaffold(
        appBar: AppBar(
          title: Text(context.loc.selectProfile),
          actions: [
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
              Expanded(
                child: ref.watch(profilesProvider).when(
                      loading: () =>
                          const Center(child: CircularProgressIndicator()),
                      error: (error, stack) =>
                          Center(child: Text(context.loc.loadError)),
                      data: (profiles) => profiles.isEmpty
                          ? Center(child: Text(context.loc.noProfiles))
                          : ListView.separated(
                              padding: const EdgeInsets.all(16),
                              itemCount: profiles.length,
                              separatorBuilder: (context, index) =>
                                  const SizedBox(height: 8),
                              itemBuilder: (context, index) => _ProfileTile(
                                profile: profiles[index],
                                onSelect: () =>
                                    _select(context, ref, profiles[index]),
                                onEdit: () =>
                                    _edit(context, ref, profiles[index]),
                                onDelete: () => _delete(
                                    context, ref, profiles[index], profiles),
                              ),
                            ),
                    ),
              ),
              SafeArea(
                minimum: const EdgeInsets.fromLTRB(16, 8, 16, 16),
                child: SizedBox(
                  width: double.infinity,
                  child: FilledButton.icon(
                    onPressed: () => _add(context, ref),
                    icon: const Icon(Icons.person_add_alt_1),
                    label: Text(context.loc.addProfile),
                  ),
                ),
              ),
            ],
          ),
        ),
      );

  Future<void> _add(BuildContext context, WidgetRef ref) async {
    final profiles = await ref.read(profilesProvider.future);
    if (!context.mounted) return;
    if (profiles.length >= AppLimits.maxProfiles) {
      await showPremiumRequiredDialog(context);
      return;
    }
    await _edit(context, ref, null);
  }

  Future<void> _edit(
      BuildContext context, WidgetRef ref, ChildProfile? profile) async {
    final created = await Navigator.of(context).push<bool>(
      MaterialPageRoute(builder: (_) => ProfileEditorPage(profile: profile)),
    );
    if (created != null) {
      ref.invalidate(profilesProvider);
      ref.invalidate(selectedProfileProvider);
      if (created && context.mounted && Navigator.of(context).canPop()) {
        Navigator.of(context).pop();
      }
    }
  }

  Future<void> _select(
      BuildContext context, WidgetRef ref, ChildProfile profile) async {
    await ref
        .read(appPreferencesProvider.notifier)
        .setActiveProfile(profile.id);
    ref.invalidate(selectedProfileProvider);
    if (context.mounted && Navigator.of(context).canPop()) {
      Navigator.of(context).pop();
    }
  }

  Future<void> _delete(
    BuildContext context,
    WidgetRef ref,
    ChildProfile profile,
    List<ChildProfile> profiles,
  ) async {
    final confirmed = await showDialog<bool>(
      context: context,
      builder: (_) => AlertDialog(
        title: Text(context.loc.deleteProfile),
        content: Text(context.loc.deleteProfileConfirmation(profile.name)),
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
    await ref.read(wishlistRepositoryProvider).deleteProfile(profile);
    final remaining =
        profiles.where((entry) => entry.id != profile.id).toList();
    final preferences = ref.read(appPreferencesProvider).valueOrNull;
    if (preferences?.activeProfileId == profile.id) {
      await ref
          .read(appPreferencesProvider.notifier)
          .setActiveProfile(remaining.isEmpty ? null : remaining.first.id);
    }
    ref.invalidate(profilesProvider);
    ref.invalidate(selectedProfileProvider);
  }
}

class _ProfileTile extends StatelessWidget {
  const _ProfileTile({
    required this.profile,
    required this.onSelect,
    required this.onEdit,
    required this.onDelete,
  });

  final ChildProfile profile;
  final VoidCallback onSelect;
  final VoidCallback onEdit;
  final VoidCallback onDelete;

  @override
  Widget build(BuildContext context) => Card(
        margin: EdgeInsets.zero,
        child: ListTile(
          onTap: onSelect,
          leading: CircleAvatar(
            backgroundColor: Color(profile.themeColor),
            child: Icon(profileIcon(profile.iconIndex), color: Colors.white),
          ),
          title: Text(profile.name),
          trailing: Wrap(
            spacing: 0,
            children: [
              IconButton(
                  tooltip: context.loc.editProfile,
                  onPressed: onEdit,
                  icon: const Icon(Icons.edit_outlined)),
              IconButton(
                  tooltip: context.loc.deleteProfile,
                  onPressed: onDelete,
                  icon: const Icon(Icons.delete_outline)),
            ],
          ),
        ),
      );
}

class ProfileEditorPage extends ConsumerStatefulWidget {
  const ProfileEditorPage({super.key, this.profile});

  final ChildProfile? profile;

  @override
  ConsumerState<ProfileEditorPage> createState() => _ProfileEditorPageState();
}

class _ProfileEditorPageState extends ConsumerState<ProfileEditorPage> {
  late final _nameController =
      TextEditingController(text: widget.profile?.name ?? '');
  late int _themeColor =
      widget.profile?.themeColor ?? _profileColors.first.toARGB32();
  late int _iconIndex = widget.profile?.iconIndex ?? 0;
  bool _saving = false;

  @override
  void dispose() {
    _nameController.dispose();
    super.dispose();
  }

  Future<void> _save() async {
    final name = _nameController.text.trim();
    if (name.isEmpty || _saving) return;
    setState(() => _saving = true);
    try {
      final repository = ref.read(wishlistRepositoryProvider);
      if (widget.profile == null) {
        final profileId = await repository.addProfile(
          name: name,
          themeColor: _themeColor,
          iconIndex: _iconIndex,
        );
        await ref
            .read(appPreferencesProvider.notifier)
            .setActiveProfile(profileId);
      } else {
        await repository.updateProfile(ChildProfile(
          id: widget.profile!.id,
          name: name,
          budget: widget.profile!.budget,
          themeColor: _themeColor,
          iconIndex: _iconIndex,
          createdAt: widget.profile!.createdAt,
        ));
      }
      ref.invalidate(profilesProvider);
      ref.invalidate(selectedProfileProvider);
      if (mounted) Navigator.pop(context, widget.profile == null);
    } on ProfileLimitException {
      if (mounted) {
        await showPremiumRequiredDialog(context);
      }
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(
            title: Text(widget.profile == null
                ? context.loc.createProfile
                : context.loc.editProfile)),
        body: WishyGradientBackground(
          child: ListView(
            padding: const EdgeInsets.all(16),
            children: [
              TextField(
                controller: _nameController,
                autofocus: true,
                textCapitalization: TextCapitalization.words,
                decoration: InputDecoration(labelText: context.loc.profileName),
              ),
              const SizedBox(height: 24),
              Text(context.loc.chooseColor,
                  style: Theme.of(context).textTheme.titleMedium),
              const SizedBox(height: 10),
              Wrap(
                spacing: 12,
                runSpacing: 12,
                children: [
                  for (final color in _profileColors)
                    Semantics(
                      button: true,
                      selected: _themeColor == color.toARGB32(),
                      label: color.toString(),
                      child: InkResponse(
                        onTap: () =>
                            setState(() => _themeColor = color.toARGB32()),
                        radius: 26,
                        child: CircleAvatar(
                          backgroundColor: color,
                          child: _themeColor == color.toARGB32()
                              ? const Icon(Icons.check, color: Colors.white)
                              : null,
                        ),
                      ),
                    ),
                ],
              ),
              const SizedBox(height: 24),
              Text(context.loc.chooseIcon,
                  style: Theme.of(context).textTheme.titleMedium),
              const SizedBox(height: 10),
              Wrap(
                spacing: 8,
                runSpacing: 8,
                children: [
                  for (var index = 0; index < _profileIcons.length; index++)
                    ChoiceChip(
                      label: Icon(_profileIcons[index]),
                      selected: _iconIndex == index,
                      onSelected: (_) => setState(() => _iconIndex = index),
                    ),
                ],
              ),
              const SizedBox(height: 28),
              FilledButton(
                onPressed: _saving ? null : _save,
                child: _saving
                    ? const CircularProgressIndicator()
                    : Text(context.loc.save),
              ),
            ],
          ),
        ),
      );
}
