import { Colors } from "@Utils/_colors";
import { HabitWithCompletions } from "@Utils/types/habit_types";

export const habitCompletions = (habit: HabitWithCompletions) => {
  return habit.habits_completions.reduce(
    (acc: { [key: string]: number }, completion) => {
      const datetime = completion.date!;
      const date = new Date(
        datetime.getFullYear(),
        datetime.getMonth(),
        datetime.getDate()
      );
      const dateString = date.toDateString();
      acc[dateString] = (acc[dateString] || 0) + 1;
      return acc;
    },
    {} as { [key: string]: number }
  );
};

//const oldestDate =
//    habit.habits_completions.length === 0
//      ? new Date()
//      : new Date(
//          Math.min(
//            ...habit.habits_completions.map((completion) =>
//              completion.date!.getTime()
//            )
//          )
//        );
export const oldestDate = (habit: HabitWithCompletions) => {
  return habit.habits_completions.length === 0
    ? new Date()
    : new Date(
        Math.min(
          ...habit.habits_completions.map((completion) =>
            completion.date!.getTime()
          )
        )
      );
};

//const getColor = useCallback(
//  (count: number, maxCount: number, color: string) => {
//    const percentage = count / maxCount;
//    const opacity = 0.2 + 0.8 * percentage;
//    return Colors.hexToRGBA(color, opacity);
//  },
//  []
//);

export const getColor = (
  count: number,
  maxCount: number,
  color: string
): string => {
  const percentage = count / maxCount;
  const opacity = 0.2 + 0.8 * percentage;
  return Colors.hexToRGBA(color, opacity);
};
