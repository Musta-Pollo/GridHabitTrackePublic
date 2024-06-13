import GenericAppBar from "@Components/auth/GenericAppBar";
import Background from "@Components/basic/Background";
import Divider from "@Components/basic/Divider";
import { SelectionButtonType } from "@Components/basic/SelectionButton";
import CancelDialog from "@Components/dialogs/CancelDialog";
import {
  HabitCardHeader,
  HabitCardListeningForHabitChanges,
} from "@Components/habit/HabitCard";
import HabitHistoryMonth from "@Components/habit/HabitHistoryMonth";
import { AuthServiceContext } from "@Services/AuthServiceContext";
import { DbServiceContext } from "@Services/DbServiceContext";
import { FlashList } from "@shopify/flash-list";
import { useStore } from "@State/useStore";
import { addDays, addMonth, cropDateTillMonth } from "@Utils/date";
import { habitCompletions, oldestDate } from "@Utils/habit/completions";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PencilIcon, Trash2Icon } from "lucide-react-native";
import React, { useContext, useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../utils/_colors";

interface HabitScreenProps {
  habitId: string;
}

export const HabitScreen = ({ habitId }: HabitScreenProps) => {
  const habit = useStore((state) => state.habits.habits[habitId]);
  const setEditHabit = useStore((state) => state.createHabit.setEditHabit);
  const deleteHabit = useStore((state) => state.habits.deleteHabit);

  const [isIncrementing, setIsIncrementing] = useState(false);
  const authService = useContext(AuthServiceContext)!;
  const dbService = useContext(DbServiceContext)!;
  console.log(
    "Habit from HabitCard: ",
    habit === undefined ? "undefined" : habit.id
  );
  if (habit === null || habit === undefined)
    return <HabitCardListeningForHabitChanges habitId={habitId} />;
  const completionsPerDay = useMemo(() => {
    return habitCompletions(habit);
  }, [habit.habits_completions]);

  const endMonth = useMemo(() => {
    const oldDate = oldestDate(habit);
    const minus14Days = addDays(oldDate, -14);
    return cropDateTillMonth(minus14Days);
  }, [habit.habits_completions]);

  const allMonths = useMemo(() => {
    const months = [];
    const today = addMonth(cropDateTillMonth(new Date()), 1);
    console.log("Today: ", today);
    console.log("Default today: ", new Date());
    let currentMonth = new Date(Date.parse("2024-1-1"));
    while (currentMonth < today) {
      months.push(currentMonth);
      currentMonth = addMonth(currentMonth, 1);
    }
    return months;
  }, [endMonth]);

  const renderMonth = ({ item }: { item: Date }) => {
    return (
      <HabitHistoryMonth
        startOfTheMonth={item}
        habit={habit}
        completionMap={completionsPerDay}
      />
    );
  };

  console.log("All months: ", {
    endMonth,
    allMonths,
  });

  const [deleteHabitModal, setDeleteHabitModal] = useState(false);

  return (
    <Background>
      <CancelDialog
        modalVisible={deleteHabitModal}
        setModalVisible={setDeleteHabitModal}
        confirmationButtonType={SelectionButtonType.Delete}
        onConfirm={() => {
          console.log("Deleting habit start: ", habit);
          deleteHabit(habit, dbService.electric);
          setDeleteHabitModal(false);

          router.navigate("/");
        }}
        onCancel={() => {
          setDeleteHabitModal(false);
        }}
        cancelText="Cancel"
        title="Delete Habit"
        subtitle="Are you sure you want delete this habit? This action cannot be undone."
        confirmText="Delete"
      />
      <GenericAppBar
        title="Habit Details"
        onBack={() => {
          router.navigate("/");
        }}
        actions={[
          {
            icon: Trash2Icon,
            title: undefined,
            onPress: () => {
              setDeleteHabitModal(true);
            },
          },
          {
            icon: PencilIcon,
            title: undefined,
            onPress: () => {
              setEditHabit(habit);

              router.push("/create-habit/");
            },
          },
        ]}
      />
      <View className="h-2" />

      <View className="px-3 flex flex-col">
        <View className="p-2 rounded-xl flex flex-col bg-background19 mb-4">
          <HabitCardListeningForHabitChanges habitId={habitId} />
          <HabitCardHeader habit={habit} />
        </View>
        <View className="h-4" />
        <Divider />
        <View className="h-4" />
        <View className="flex flex-row">
          <TouchableOpacity>
            <View className="flex flex-col self-start">
              <Text className="font-nunito-600 text-base text-primary84">
                Completion History
              </Text>
              <View className="h-1.5" />
              <View className="h-0.5 bg-primary84" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="h-0.5 bg-background16 rounded-full" />
        <View className="h-4" />
      </View>
      <View className="flex-1 mx-3">
        <FlashList data={allMonths.reverse()} renderItem={renderMonth} />
      </View>

      <StatusBar style="auto" backgroundColor={Colors.background13} />
      <HabitCardListeningForHabitChanges habitId={habitId} />
    </Background>
  );
};
