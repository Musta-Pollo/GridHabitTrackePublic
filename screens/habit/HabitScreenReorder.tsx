import GenericAppBar from "@Components/auth/GenericAppBar";
import Background from "@Components/basic/Background";
import HabitCard from "@Components/habit/HabitCard";
import { AuthServiceContext } from "@Services/AuthServiceContext";
import { DbServiceContext } from "@Services/DbServiceContext";
import { useStore } from "@State/useStore";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { Colors } from "../../utils/_colors";
import { HomeScreenListeningForHabitIds } from "./HomeScreenListeningHabits";

export const HabitScreenReorder = () => {
  const habitIds = useStore((state) => state.habits.habitIds);
  const reorderHabits = useStore((state) => state.habits.reorderHabits);
  const authService = useContext(AuthServiceContext)!;
  const dbService = useContext(DbServiceContext)!;

  return (
    <Background>
      <GenericAppBar
        title="Reorder Habits"
        onBack={() => {
          router.navigate("/");
        }}
        actions={[]}
      />
      <View className="h-10" />

      <View className="px-3 flex-1">
        <DraggableFlatList<string>
          data={habitIds}
          keyExtractor={(item) => item}
          onDragEnd={({ data }) => {
            reorderHabits(data, dbService.electric);
          }}
          className="gap-y-2 gap-4"
          renderItem={({ item, drag, isActive }: RenderItemParams<string>) => (
            <ScaleDecorator>
              <TouchableOpacity
                onLongPress={() => {
                  drag();
                  console.log("dragging");
                }}
                disabled={isActive}
              >
                <HabitCard
                  rightMarginOnWeb={habitIds.length > 4}
                  key={item}
                  showGrid={false}
                  habitId={item}
                  enableOnTap={false}
                />
              </TouchableOpacity>
            </ScaleDecorator>
          )}
        />
      </View>
      <HomeScreenListeningForHabitIds />
      <StatusBar style="auto" backgroundColor={Colors.background13} />
    </Background>
  );
};
