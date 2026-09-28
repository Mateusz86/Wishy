# Wishy App - AI Coding Rules

- Architecture: Clean Architecture with Repository Pattern.
- State Management: Riverpod.
- Local DB: Isar (or sqflite).
- Strict Rule: Free tier limits - Max 1 ChildProfile, Max 4 WishlistItems.
- Images: Save via path_provider, store ONLY local file path as String in DB.
- UI: Use ConsumerWidget for Riverpod integration.
- Formatting: Never hardcode strings or currency. Use context.loc and locale-aware formatters.
- Ads: Ensure AdMob uses RequestConfiguration(tagForChildDirectedTreatment: TagForChildDirectedTreatment.yes).