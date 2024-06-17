# Unlimited GridHabitTracker

This is a simple habit-tracking app. Feel free to try it out.

## Technologies used
- React Native & Expo
- FlashList: This is essential as the default React Native FlatList was very slow.
- ElectricSQL: Used for synchronization across devices. For this public version, that code was commented out, and it's used only as a local database. However, you can uncomment it, add your own backend, and it will work. There is already a basic template for an ElectricSQL server with supabase for the database.
- Zustand: State management
- Figma: Used for creating the app design.

## Challenges Encountered
- Difficulty building a release version of the app. In the end, I had to delete system temporary files before every build.
- ElectricSQL uses the userId to identify a device, but there is a problem with Expo hot reload.
- ElectricSQL currently only allows single-user sync by default using a workaround. However, they are working on a permission system that may be released in 2024, enabling data sharing across multiple users. I hope so! :D
- ElectricSQL also has problems with migrations.

![11111](https://github.com/Musta-Pollo/GridHabitTrackePublic/assets/68862752/6d1c6530-9ff6-4b7b-b57f-8cc332d04861)
![2222](https://github.com/Musta-Pollo/GridHabitTrackePublic/assets/68862752/97f1b68c-0484-444e-b430-0aa285050741)
