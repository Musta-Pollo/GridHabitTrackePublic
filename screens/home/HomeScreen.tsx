import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
// import { Background } from "../assets/background-texture.tsx";
import Background from "@Components/basic/Background";
import HabitCard from "@Components/habit/HabitCard";
import { HomeScreenListeningForHabitIds } from "@Screens/habit/HomeScreenListeningHabits";
import { FlashList } from "@shopify/flash-list";
import { useStore } from "@State/useStore";
import { Colors } from "@Utils/_colors";
import { useElectric } from "@Utils/electro";
import { SupabaseContext } from "@Utils/SupabaseContext";
import { View } from "react-native";
import { HomeHeader } from "./HomeHeader";
export default function HomeScreen() {
  const { db } = useElectric()!;
  console.log("HomeScreen header");

  const { session, connected } = useContext(SupabaseContext)!;

  const habitIds = useStore((state) => state.habits.habitIds);

  console.log("HomeScreen, habitIds: ", habitIds);
  useEffect(() => {
    const syncItems = async () => {
      console.log("Syncing items");
      // Resolves when the shape subscription has been established.
      const shape = await db.habits.sync();
      const shape2 = await db.habits_completions.sync();

      console.log("Syncing2 items");
      // Resolves when the data has been synced into the local database.
      await shape.synced;
      await shape2.synced;
      console.log("Synced items");
    };

    syncItems();
  }, [connected]);

  return (
    <Background>
      <HomeScreenListeningForHabitIds />
      <HomeHeader />
      <View className="h-10" />
      <View className="px-3 flex-1">
        <FlashList
          data={habitIds}
          estimatedItemSize={169}
          className="gap-y-2 gap-4"
          renderItem={({ item }: { item: string }) => (
            <HabitCard
              rightMarginOnWeb={habitIds.length > 4}
              key={item}
              habitId={item}
            />
          )}
        />
      </View>
      <StatusBar style="auto" backgroundColor={Colors.background13} />
    </Background>
  );
}
