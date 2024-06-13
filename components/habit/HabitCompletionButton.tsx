import { Colors } from "@Utils/_colors";
import { Sizes } from "@Utils/_sizes";
import { cropDate } from "@Utils/date";
import { HabitWithCompletions } from "@Utils/types/habit_types";
import { CircleCheck, Plus } from "lucide-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import HabitProgressChartWrapper from "./HabitProgressChartWrapper";
interface HabitCompletionButtonProps {
  habit: HabitWithCompletions;
  onPress?: () => void;
}

export default function IconButtonCard({
  habit,
  onPress,
}: HabitCompletionButtonProps) {
  const isMultiChoice = habit.amount! > 1;
  const numOfCompleted = habit.habits_completions.filter((completion) => {
    let date = cropDate(completion.date!);
    return date.toDateString() === cropDate(new Date()).toDateString();
  }).length;
  const isCompleted = numOfCompleted >= (habit.amount ?? 1);
  console.log({
    isCompleted: isCompleted,
    numOfCompleted: numOfCompleted,
    "habit.amount": habit.amount,
  });
  if (isCompleted)
    return (
      <TouchableOpacity onPress={onPress}>
        <View
          className="rounded-xl p-2.5"
          style={{
            backgroundColor: habit.color!,
          }}
        >
          <CircleCheck size={Sizes.iconSize24} color={Colors.white} />
        </View>
      </TouchableOpacity>
    );
  if (!isMultiChoice)
    return (
      <TouchableOpacity onPress={onPress}>
        <View className="bg-background23">
          <View
            className="rounded-xl p-2.5"
            style={{
              backgroundColor: Colors.hexToRGBA(habit.color!, Sizes.opacity20),
            }}
          >
            <CircleCheck
              size={Sizes.iconSize24}
              color={Colors.mixTwoColors(
                Colors.RGBAToHexA(
                  Colors.hexToRGBA(habit.color!, Sizes.opacity30)
                ),
                Colors.white,
                0.5
              )}
            />
          </View>
        </View>
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity onPress={onPress}>
      <View className="bg-background23 justify-center items-center">
        <View
          className="rounded-xl p-1"
          style={{
            backgroundColor: Colors.hexToRGBA(habit.color!, Sizes.opacity20),
          }}
        >
          <View
            style={{
              height: Sizes.iconSize36,
              width: Sizes.iconSize36,
            }}
          >
            <HabitProgressChartWrapper data={habitProgressData(habit)} />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
          }}
        >
          <Plus
            size={Sizes.iconSize24}
            color={Colors.mixTwoColors(
              Colors.RGBAToHexA(
                Colors.hexToRGBA(habit.color!, Sizes.opacity30)
              ),
              Colors.white,
              0.5
            )}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
const habitProgressData = (habit: HabitWithCompletions) => {
  const amount = habit.amount!;
  const amountPerOne = 100 / amount;
  const amountPerOneEmpty = 1;
  const completedToday = habit.habits_completions.filter(
    (completion) =>
      completion.date?.toDateString() === new Date().toDateString()
  ).length;
  const amountPerOneFilled = amountPerOne - amountPerOneEmpty;
  return Array.from({ length: amount }, (_, index) => [
    {
      value: amountPerOneFilled,
      color:
        index + 1 <= completedToday
          ? habit.color!
          : Colors.hexToRGBA(habit.color!, Sizes.opacity20),
      label: `Amount ${index + 1}`,
    },
    {
      value: amountPerOneEmpty,
      color: Colors.transparent,
      label: `Empty ${index + 1}`,
    },
  ]).flat();
};
