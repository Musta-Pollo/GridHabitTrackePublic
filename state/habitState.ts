import { HabitWithCompletions } from "@Utils/types/habit_types";
import { Electric } from "src/generated/client";
import {
  HabitsStateDefinition,
  HabitStateType,
  type StateSlice,
} from "./types";
const initialHabitState: HabitsStateDefinition = {
  habitIds: [],
  habits: {},
  //Map <string, HabitWithCompletions>
};

export const habitState: StateSlice<HabitStateType> = (set, get) => ({
  ...initialHabitState,
  setHabit: (habit: HabitWithCompletions) =>
    set((state) => {
      if (
        JSON.stringify(state.habits.habits[habit.id]) !== JSON.stringify(habit)
      ) {
        console.log("Setting habit: ");
        state.habits.habits[habit.id] = habit;
      }
    }),
  setHabitIds: (ids: string[]) => {
    set((state) => {
      console.log("Setting habit ids: ", ids);
      if (JSON.stringify(state.habits.habitIds) !== JSON.stringify(ids)) {
        console.log("Setting habit ids: ");
        state.habits.habitIds = ids;
      }
    });
  },
  deleteHabit: async (habit: HabitWithCompletions, electric: Electric) => {
    set(async (state) => {
      console.log("Deleting habit: ");
      console.log("Habit: ", habit);
      state.habits.habitIds = state.habits.habitIds.filter(
        (id) => id !== habit.id
      );
      try {
        await electric.db.habits_completions.deleteMany({
          where: {
            habit_id: habit.id,
          },
        });
        await electric.db.habits.delete({
          where: {
            id: habit.id,
          },
        });
      } catch (error) {
        console.error("Error deleting habit: ", error);
      }
      console.log("After Deleted habit: ");
    });
  },
  reorderHabits: (ids: string[], electric: Electric) => {
    set((state) => {
      console.log("Reordering habits: ");
      if (JSON.stringify(state.habits.habitIds) === JSON.stringify(ids)) return;
      state.habits.habitIds = ids;
      Promise.all(
        ids.map(async (id, index) => {
          await electric.db.habits.update({
            where: { id },
            data: { habit_order2: index },
          });
        })
      );
    });
  },
});
