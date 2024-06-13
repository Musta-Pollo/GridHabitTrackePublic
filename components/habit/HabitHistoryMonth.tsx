import { AuthService } from "@Services/AuthService";
import { AuthServiceContext } from "@Services/AuthServiceContext";
import { incrementHabit } from "@Services/db_habits";
import { DbServiceContext } from "@Services/DbServiceContext";
import { DbService } from "@Services/DdServices";
import { FlashList } from "@shopify/flash-list";
import { getColor } from "@Utils/habit/completions";
import { padLeft } from "@Utils/strings";
import { HabitWithCompletions } from "@Utils/types/habit_types";
import debounce from "debounce";
import { Effect } from "effect";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { showMessage } from "react-native-flash-message";

interface HabitHistoryMonthProps {
  startOfTheMonth: Date;
  habit: HabitWithCompletions;
  completionMap: { [key: string]: number };
}

export default function HabitHistoryMonth({
  startOfTheMonth,
  habit,
  completionMap,
}: HabitHistoryMonthProps) {
  //Generate all days of the month from the startOfTheMonth until is a next month
  let days = [];
  let currentDate = new Date(startOfTheMonth);
  console.log("Start of the month: ", startOfTheMonth);
  while (currentDate.getMonth() === startOfTheMonth.getMonth()) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  days = days.reverse();
  const [isIncrementing, setIsIncrementing] = React.useState(false);
  const authService = useContext(AuthServiceContext)!;
  const dbService = useContext(DbServiceContext)!;

  console.log("Days: ", days);
  //console.log("Today");

  const renderDay = ({ item }: { item: Date }) => {
    const color = getColor(
      completionMap[item.toDateString()] || 0,
      habit.amount!,
      habit.color!
    );
    return (
      <TouchableOpacity
        className="pb-4"
        onPress={debounce(
          async () => {
            if (isIncrementing) return;
            setIsIncrementing(true);
            try {
              let res = incrementHabit(habit, item).pipe(
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
              const completed = (completionMap[item.toDateString()] || 0) + 1;

              showMessage({
                message: `Habit (${item.toDateString()}) changed: ${
                  completed % (habit.amount! + 1)
                } / ${habit.amount}`,
                type: "success",
                backgroundColor: habit.color!,
              });
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
          <View
            style={{ backgroundColor: color }}
            className="px-3 py-2 rounded-lg"
          >
            <Text className="font-nunito-500 text-white text-base flex-shrink text-start">
              {padLeft(item.getDate(), 2, "0")}
              {/*{item.toLocaleDateString()}*/}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View className="h-8" />
      <Text className="font-nunito-800 text-lg text-white text-center">
        {startOfTheMonth.toLocaleString("default", { month: "long" })}
      </Text>
      <View className="h-4" />
      <FlashList
        data={days}
        numColumns={7}
        className="gap-y-2 gap-4"
        estimatedItemSize={100}
        renderItem={renderDay}
        keyExtractor={(item) => item.toDateString()}
      />
    </View>
  );
}
