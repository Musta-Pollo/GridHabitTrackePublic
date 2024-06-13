import { FlashList } from "@shopify/flash-list";
import {
  getColor,
  habitCompletions,
  oldestDate,
} from "@Utils/habit/completions";
import { HabitWithCompletions } from "@Utils/types/habit_types";
import { useMemo } from "react";
import { Dimensions, View } from "react-native";
import CompletionSquare from "./CompletionSquare";
interface CompletionHeatmapProps {
  habit: HabitWithCompletions;
}

/**
 * This component is a heatmap that shows the completion of habits over the week.
 * It is used to show habits in the home page.
 * It going to be a grid of 7xN where N is the number of habits.
 */
export default function CompletionHeatmap({ habit }: CompletionHeatmapProps) {
  const screenWidth = Dimensions.get("window").width;

  const completionsPerDay = useMemo(() => {
    return habitCompletions(habit);
  }, [habit.habits_completions]);

  const oldDate = useMemo(() => {
    return oldestDate(habit);
  }, [habit.habits_completions]);

  const diffFromOldest = Date.now() - oldDate.getTime();
  const diffFromOldestInDays = diffFromOldest / (1000 * 60 * 60 * 24);
  const diffFromOldestMultipleOf7 = Math.ceil(diffFromOldestInDays / 7) * 7;
  const numOfDays = Math.max(7 * 30, diffFromOldestMultipleOf7);

  const commitsData = useMemo(() => {
    return Array.from({ length: numOfDays }).map((_, i) => {
      const date = new Date(Date.now());
      date.setDate(date.getDate() - i);
      const dateString = date.toDateString();
      const count = completionsPerDay[dateString] || 0;
      return {
        date: dateString,
        count: count,
        color: getColor(count, habit.amount!, habit.color!),
      };
    });
  }, [numOfDays, completionsPerDay]);

  const renderItems = ({
    item,
  }: {
    item: { count: number; date: string; color: string }[];
  }) => {
    return (
      <View style={{ paddingRight: 3 }} className="flex flex-col">
        <CompletionSquare item={item[0]} />
        <View style={{ height: 3 }} />
        <CompletionSquare item={item[1]} />
        <View style={{ height: 3 }} />
        <CompletionSquare item={item[2]} />
        <View style={{ height: 3 }} />
        <CompletionSquare item={item[3]} />
        <View style={{ height: 3 }} />
        <CompletionSquare item={item[4]} />
        <View style={{ height: 3 }} />
        <CompletionSquare item={item[5]} />
        <View style={{ height: 3 }} />
        <CompletionSquare item={item[6]} />
      </View>
    );
  };

  const commitsLayoutBy7 = useMemo(() => {
    return commitsData.reduce(
      (
        acc: { count: number; date: string; color: string }[][],
        item,
        index
      ) => {
        if (index % 7 === 0) {
          acc.push([item]);
        } else {
          acc[acc.length - 1].push(item);
        }
        return acc;
      },
      []
    );
  }, [commitsData]);

  return (
    <FlashList
      horizontal={true}
      estimatedItemSize={16}
      inverted={true}
      data={commitsLayoutBy7}
      renderItem={renderItems}
    />
  );
  //   return (
  //     <ContributionGraph
  //       values={commitsData}
  //       endDate={new Date("2017-04-01")}
  //       numDays={105}
  //       width={screenWidth}
  //       height={220}
  //       tooltipDataAttrs={(value) => }
  //       chartConfig={{
  //         backgroundColor: "#e26a00",
  //         backgroundGradientFrom: "#fb8c00",
  //         backgroundGradientTo: "#ffa726",
  //         decimalPlaces: 2, // optional, defaults to 2dp
  //         color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  //         labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  //         style: {
  //           borderRadius: 16,
  //         },
  //         propsForDots: {
  //           r: "6",
  //           strokeWidth: "2",
  //           stroke: "#ffa726",
  //         },
  //       }}
  //     />
}

const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 },
];
