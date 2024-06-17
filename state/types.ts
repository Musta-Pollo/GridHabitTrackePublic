import { Session } from "@supabase/supabase-js";
import { HabitWithCompletions } from "@Utils/types/habit_types";
import { Electric } from "src/generated/client";
import { StateCreator } from "zustand";

export enum HabitType {
  Personal,
  Team,
}

export type WeekDays = {
  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
};
export interface Notifications {
  time: Date;
  weekDays: WeekDays;
}

export interface CreateHabitStateDefinition {
  habitId: string | undefined;
  name: string;
  icon: string;
  color: string;
  amount: number | undefined;
  period: "Week" | "Month";
  notifications: Notifications;
  habitType: "Personal" | "Team";
  team: string | undefined;
  completers: string[];
  submitted: boolean;
  created: boolean;
  description: string;
  monday_not_id: string;
  tuesday_not_id: string;
  wednesday_not_id: string;
  thursday_not_id: string;
  friday_not_id: string;
  saturday_not_id: string;
  sunday_not_id: string;
  habit_order2: number;
}

// Validate Habit, that will return list of errors
export const validateHabit = (habit: CreateHabitStateDefinition) => {
  const errors = [];
  if (habit.name === "") {
    errors.push("Name cannot be empty");
  }
  if (habit.icon === "") {
    errors.push("Icon must be selected");
  }

  if (habit.amount === undefined) {
    errors.push("Amount cannot be empty");
  }

  return errors;
};

export interface CreateHabitStateActions {
  changeName: (value: string) => void;
  changeIcon: (value: string) => void;
  changeColor: (value: string) => void;
  changeAmount: (value: number | undefined) => void;
  changePeriod: (value: "Week" | "Month") => void;
  setNotifications: (value: Notifications) => void;
  setHabitType: (value: "Personal" | "Team") => void;
  setTeam: (value: string | undefined) => void;
  toggleCompleter: (completer: string) => void;
  reset: () => void;
  setEditHabit: (habit: HabitWithCompletions) => void;
  timeString: () => string;
  datesTimeString: () => string;
  createHabit: (
    electric: Electric,
    session: Session | null
  ) => Promise<boolean>;
  setDescription: (value: string) => void;
}

export type CreateHabitStateType = CreateHabitStateActions &
  CreateHabitStateDefinition;

///
export interface PickNotificationsStateDefinition {
  notifications: Notifications;
}

export interface PickNotificationsStateActions {
  setNotifications: (value: Notifications) => void;
  setAllNotificationDays: (value: boolean) => void;
  toggleNotificationDay: (day: keyof WeekDays) => void;
  setNotificationTime: (time: Date) => void;
  timeString: () => string;
  datesTimeString: () => string;
  reset: (state: Notifications) => void;
}

export type PickNotificationsStateType = PickNotificationsStateDefinition &
  PickNotificationsStateActions;

// Reading habit ids
export interface HabitsStateDefinition {
  habitIds: string[];
  habits: { [key: string]: HabitWithCompletions };
}

export interface HabitStateActions {
  setHabit: (habit: HabitWithCompletions) => void;
  deleteHabit: (habit: HabitWithCompletions, electric: Electric) => void;
  setHabitIds: (ids: string[]) => void;
  reorderHabits: (ids: string[], electric: Electric) => void;
}

export type HabitStateType = HabitsStateDefinition & HabitStateActions;

export interface CombinedState {
  createHabit: CreateHabitStateType;
  pickNotifications: PickNotificationsStateType;
  habits: HabitStateType;
}

export type StateSlice<T> = StateCreator<
  CombinedState,
  [["zustand/immer", never]],
  [["zustand/immer", Partial<T>]],
  T
>;
