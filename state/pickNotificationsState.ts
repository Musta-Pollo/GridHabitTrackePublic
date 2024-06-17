import { capitalize } from "lodash";
import {
  PickNotificationsStateDefinition,
  PickNotificationsStateType,
  WeekDays,
  type StateSlice,
} from "./types";

const initialPickNotificationsState: PickNotificationsStateDefinition = {
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

export const pickNotificationsState: StateSlice<PickNotificationsStateType> = (
  set,
  get
) => ({
  ...initialPickNotificationsState,
  reset(notifications) {
    set((state) => {
      state.pickNotifications.notifications = notifications;
    });
  },
  toggleNotificationDay: (day) => {
    set((state) => {
      console.log("Day: ", day);
      if (state.pickNotifications.notifications.weekDays[day]) {
        state.pickNotifications.notifications.weekDays[day] = false;
        return;
      }
      state.pickNotifications.notifications.weekDays[day] = true;
    });
  },
  setNotificationTime: (time) => {
    set((state) => {
      state.pickNotifications.notifications.time = time;
    });
  },
  setNotifications: (value) => {
    set((state) => {
      state.pickNotifications.notifications = value;
    });
  },
  setAllNotificationDays: (value) => {
    set((state) => {
      state.pickNotifications.notifications.weekDays = {
        sunday: value,
        monday: value,
        tuesday: value,
        wednesday: value,
        thursday: value,
        friday: value,
        saturday: value,
      };
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
    const days = Object.keys(
      get().pickNotifications.notifications.weekDays
    ).filter(
      (day) =>
        get().pickNotifications.notifications.weekDays[day as keyof WeekDays]
    );
    const res =
      days.length == 0
        ? "No days selected"
        : days.length == 7
        ? "Every day"
        : `${days
            .map((e) => capitalize(e).substring(0, 3))
            .join(", ")} at ${get().pickNotifications.timeString()}`;
    console;
    return res;
  },
});
