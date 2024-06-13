import { Session } from "@supabase/supabase-js";
import { genUUID } from "electric-sql/util";
import { capitalize } from "lodash";
import { Electric } from "src/generated/client";
import {
  validateHabit,
  WeekDays,
  type CreateHabitStateDefinition,
  type CreateHabitStateType,
  type StateSlice,
} from "./types";
const initialCreateHabitState: CreateHabitStateDefinition = {
  habitId: undefined,
  name: "",
  icon: "",
  color: "#5155D1",
  amount: 1,
  period: "Week",
  habitType: "Personal",
  team: undefined,
  completers: [],
  submitted: false,
  created: false,
  description: "",
  monday_not_id: genUUID(),
  tuesday_not_id: genUUID(),
  wednesday_not_id: genUUID(),
  thursday_not_id: genUUID(),
  friday_not_id: genUUID(),
  saturday_not_id: genUUID(),
  sunday_not_id: genUUID(),
  habit_order2: -1,
  notifications: {
    time: new Date(new Date().setHours(12, 0, 0, 0)),
    weekDays: {
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
    },
  },
};

export const createHabitState: StateSlice<CreateHabitStateType> = (
  set,
  get
) => ({
  ...initialCreateHabitState,
  changeName: (value) =>
    set((state) => {
      state.createHabit.name = value;
    }),
  changeIcon: (value) =>
    set((state) => {
      state.createHabit.icon = value;
    }),
  changeColor: (value) =>
    set((state) => {
      state.createHabit.color = value;
    }),
  reset: () => {
    set((state) => {
      state.createHabit.name = initialCreateHabitState.name;
      state.createHabit.icon = initialCreateHabitState.icon;
      state.createHabit.color = initialCreateHabitState.color;
      state.createHabit.amount = initialCreateHabitState.amount;
      state.createHabit.period = initialCreateHabitState.period;
      state.createHabit.habitType = initialCreateHabitState.habitType;
      state.createHabit.team = initialCreateHabitState.team;
      state.createHabit.completers = initialCreateHabitState.completers;
      state.createHabit.submitted = initialCreateHabitState.submitted;
      state.createHabit.created = initialCreateHabitState.created;
      state.createHabit.description = initialCreateHabitState.description;
      state.createHabit.monday_not_id = initialCreateHabitState.monday_not_id;
      state.createHabit.tuesday_not_id = initialCreateHabitState.tuesday_not_id;
      state.createHabit.wednesday_not_id =
        initialCreateHabitState.wednesday_not_id;
      state.createHabit.thursday_not_id =
        initialCreateHabitState.thursday_not_id;
      state.createHabit.friday_not_id = initialCreateHabitState.friday_not_id;
      state.createHabit.saturday_not_id =
        initialCreateHabitState.saturday_not_id;
      state.createHabit.sunday_not_id = initialCreateHabitState.sunday_not_id;
      state.createHabit.habit_order2 = initialCreateHabitState.habit_order2;
      state.createHabit.notifications = initialCreateHabitState.notifications;
    });
  },
  changeAmount: (value) =>
    set((state) => {
      if (value === undefined) {
        state.createHabit.amount = undefined;
      } else if (value > 0) {
        state.createHabit.amount = value;
      } else {
        state.createHabit.amount = 1;
      }
    }),
  changePeriod: (value) => {
    set((state) => {
      state.createHabit.period = value;
    });
  },
  setNotifications: (value) => {
    set((state) => {
      state.createHabit.notifications = value;
    });
  },
  timeString: () => {
    return get().pickNotifications.notifications.time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  },
  datesTimeString: () => {
    const days = Object.keys(get().createHabit.notifications.weekDays).filter(
      (day) => get().createHabit.notifications.weekDays[day as keyof WeekDays]
    );
    return days.length == 0
      ? "No days selected"
      : days.length == 7
      ? `Every day at ${get().createHabit.timeString()}`
      : `${days
          .map((e) => capitalize(e).substring(0, 3))
          .join(", ")} at ${get().createHabit.timeString()}`;
  },
  setHabitType: (value) => {
    set((state) => {
      state.createHabit.habitType = value;
    });
  },
  setTeam: (value) => {
    set((state) => {
      state.createHabit.team = value;
    });
  },
  toggleCompleter: (completer) => {
    set((state) => {
      if (state.createHabit.completers.includes(completer)) {
        state.createHabit.completers = state.createHabit.completers.filter(
          (c) => c !== completer
        );
      } else {
        state.createHabit.completers.push(completer);
      }
    });
  },
  createHabit: async (electric: Electric, session: Session | null) => {
    const errors = validateHabit(get().createHabit);
    if (errors.length > 0) {
      // console.error("Errors: ", errors);
      set((state) => {
        state.createHabit.submitted = true;
      });
      return false;
    }
    // Create habit
    console.log("Creating habit");
    const data = {
      id: get().createHabit.habitId ?? genUUID(),
      name: get().createHabit.name,
      amount: get().createHabit.amount ?? null,

      description: get().createHabit.description,
      color: get().createHabit.color,
      monday: get().createHabit.notifications.weekDays.monday,
      tuesday: get().createHabit.notifications.weekDays.tuesday,
      wednesday: get().createHabit.notifications.weekDays.wednesday,
      thursday: get().createHabit.notifications.weekDays.thursday,
      friday: get().createHabit.notifications.weekDays.friday,
      saturday: get().createHabit.notifications.weekDays.saturday,
      sunday: get().createHabit.notifications.weekDays.sunday,
      habit_type: get().createHabit.habitType,
      icon: get().createHabit.icon,
      period: get().createHabit.period,
      time: get().createHabit.notifications.time,
      user_id: session?.user.id ?? "11111111-1111-1111-1111-111111111111",
      electric_user_id:
        session?.user.id ?? "11111111-1111-1111-1111-111111111111",
      monday_not_id: get().createHabit.monday_not_id,
      tuesday_not_id: get().createHabit.tuesday_not_id,
      wednesday_not_id: get().createHabit.wednesday_not_id,

      thursday_not_id: get().createHabit.thursday_not_id,
      friday_not_id: get().createHabit.friday_not_id,
      saturday_not_id: get().createHabit.saturday_not_id,
      sunday_not_id: get().createHabit.sunday_not_id,
      habit_order2: get().createHabit.habit_order2,
    };
    await electric.db.habits.upsert({
      where: { id: data.id },
      update: data,
      create: data,
    });

    console.log("Habit created");
    set((state) => {
      state.createHabit.created = true;
    });

    console.log("Created habit");

    return true;
  },
  setDescription(value) {
    set((state) => {
      state.createHabit.description = value;
    });
  },
  setEditHabit(habit) {
    set((state) => {
      state.createHabit.created = false;
      state.createHabit.habitId = habit.id;
      state.createHabit.name = habit.name!;
      state.createHabit.icon = habit.icon!;
      state.createHabit.color = habit.color!;
      state.createHabit.amount = habit.amount!;
      state.createHabit.description = habit.description!;
      state.createHabit.notifications = {
        time: habit.time!,
        weekDays: {
          sunday: habit.sunday!,
          monday: habit.monday!,
          tuesday: habit.tuesday!,
          wednesday: habit.wednesday!,
          thursday: habit.thursday!,
          friday: habit.friday!,
          saturday: habit.saturday!,
        },
      };
      state.createHabit.description = habit.description!;
      state.createHabit.monday_not_id = habit.monday_not_id!;
      state.createHabit.tuesday_not_id = habit.tuesday_not_id!;
      state.createHabit.wednesday_not_id = habit.wednesday_not_id!;
      state.createHabit.thursday_not_id = habit.thursday_not_id!;
      state.createHabit.friday_not_id = habit.friday_not_id!;
      state.createHabit.saturday_not_id = habit.saturday_not_id!;
      state.createHabit.sunday_not_id = habit.sunday_not_id!;
      state.createHabit.habit_order2 = habit.habit_order2!;
    });
  },
});
