import CompletionHeatmap from "@Components/stats/CompletionHeatmap";
import { AuthService } from "@Services/AuthService";
import { AuthServiceContext } from "@Services/AuthServiceContext";
import { incrementHabit } from "@Services/db_habits";
import { DbServiceContext } from "@Services/DbServiceContext";
import { DbService } from "@Services/DdServices";
import { useStore } from "@State/useStore";
import { useElectric } from "@Utils/electro";
import { SupabaseContext } from "@Utils/SupabaseContext";
import { HabitWithCompletions } from "@Utils/types/habit_types";
import debounce from "debounce";
import { Effect } from "effect";
import { useLiveQuery } from "electric-sql/react";
import { router } from "expo-router";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import HabitCompletionButton from "./HabitCompletionButton";
import IconButtonCard from "./IconButtonCard";
interface HabitCardProps {
  habitId: string;
  showGrid?: boolean;
  rightMarginOnWeb?: boolean;
  enableOnTap?: boolean;
}

export default function HabitCard({
  habitId,
  rightMarginOnWeb,
  showGrid = true,
  enableOnTap = true,
}: HabitCardProps) {
  const electric = useElectric()!;

  const { session } = useContext(SupabaseContext)!;

  const habit = useStore((state) => state.habits.habits[habitId]);
  const [isIncrementing, setIsIncrementing] = useState(false);

  const authService = useContext(AuthServiceContext)!;
  const dbService = useContext(DbServiceContext)!;

  console.log(
    "Habit from HabitCard: ",
    habit === undefined ? "undefined" : habit
  );
  if (habit === null || habit === undefined)
    return <HabitCardListeningForHabitChanges habitId={habitId} />;

  return (
    <View
      className={`p-2 rounded-xl ${
        Platform.OS === "web" && rightMarginOnWeb ? "mr-6" : ""
      } flex flex-col bg-background19 mb-4`}
    >
      <HabitCardListeningForHabitChanges habitId={habitId} />
      <TouchableOpacity
        disabled={!enableOnTap}
        onPress={() => {
          let date = new Date("2024-5-13");

          router.navigate(`/habit/${habitId}`);
        }}
      >
        <HabitCardHeader habit={habit} />
      </TouchableOpacity>

      {showGrid && (
        <>
          <View className="h-2" />
          <CompletionHeatmap habit={habit} />
        </>
      )}
    </View>
  );
}

export function HabitCardHeader({ habit }: HabitCardHeaderProps) {
  const authService = useContext(AuthServiceContext)!;
  const dbService = useContext(DbServiceContext)!;
  const [isIncrementing, setIsIncrementing] = useState(false);
  return (
    <View className="flex flex-row">
      <IconButtonCard iconName={habit.icon ?? "Apple"} />
      <View className="w-5" />
      <View className="flex flex-1 flex-col justify-center items-stretch">
        <Text className="text-white font-nunito-800 text-lg">{habit.name}</Text>
        {habit.description && habit.description.length > 0 && (
          <Text className="text-white/80 font-nunito-600 text-sm">
            {habit.description}
          </Text>
        )}
      </View>

      <HabitCompletionButton
        habit={habit}
        onPress={debounce(
          async () => {
            if (isIncrementing) return;
            setIsIncrementing(true);
            try {
              let res = incrementHabit(habit, new Date()).pipe(
                //Wait due to problems with transaction nesting
                Effect.provideService(DbService, dbService),
                Effect.provideService(AuthService, authService),
                Effect.catchTags({
                  TimeoutException: (_) => Effect.sync(() => {}),
                }),
                Effect.runPromise
              );
              await new Promise((resolve) => setTimeout(resolve, 600));

              console.log("Incremented habit");
            } catch (error) {
              console.error("Error incrementing habit", error);
            }
            console.log("Pressed");
            setIsIncrementing(false);
          },
          1000,
          {
            immediate: true,
          }
        )}
      />
    </View>
  );
}

export function HabitCardListeningForHabitChanges({
  habitId,
}: {
  habitId: string;
}) {
  const { db } = useElectric()!;
  const setHabit = useStore((state) => state.habits.setHabit);

  const liveQuery = useMemo(
    () =>
      db.habits.liveFirst({
        where: {
          id: habitId,
        },
        include: {
          habits_completions: {
            select: {
              id: true,
              habit_id: true,
              user_id: true,
              date: true,
            },
          },
        },
      }),
    [db, habitId]
  );

  const { results } = useLiveQuery(liveQuery);

  useEffect(() => {
    if (results === undefined || results === null) return;
    const habit: HabitWithCompletions = {
      ...results,
      //@ts-ignore
      habits_completions:
        "habits_completions" in results && results.habits_completions
          ? results.habits_completions
          : [],
    };
    setHabit(habit);
  }, [results, setHabit]);

  return null;
}
