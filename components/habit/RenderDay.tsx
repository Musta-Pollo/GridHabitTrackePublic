// RenderDay.tsx
import { AuthService } from "@Services/AuthService";
import { AuthServiceContext } from "@Services/AuthServiceContext";
import { incrementHabit } from "@Services/db_habits";
import { DbServiceContext } from "@Services/DbServiceContext";
import { DbService } from "@Services/DdServices";
import { HabitWithCompletions } from "@Utils/types/habit_types";
import debounce from "debounce";
import { Effect } from "effect";
import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface RenderDayProps {
  item: {
    item: Date;
    habit: HabitWithCompletions;
  };
}

export function renderDay({ item: { item, habit } }: RenderDayProps) {
  const authService = useContext(AuthServiceContext)!;
  const dbService = useContext(DbServiceContext)!;
  const [isIncrementing, setIsIncrementing] = useState(false);

  return (
    <TouchableOpacity
      onPress={debounce(
        async () => {
          if (isIncrementing) return;
          setIsIncrementing(true);
          try {
            let res = incrementHabit(habit, item).pipe(
              //Wait due to problems with transaction nesting
              Effect.tap(() => Effect.sleep("10 second")),
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
    >
      <View className="self-start">
        <View className="px-3 py-2 rounded-lg bg-primary57">
          <Text className="font-nunito-500 text-white text-base flex-shrink text-start">
            16
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
