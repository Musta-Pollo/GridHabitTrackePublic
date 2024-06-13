import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { createHabitState } from "./createHabitState";
import { createSelectors } from "./createSelectors";
import { habitState } from "./habitState";
import { pickNotificationsState } from "./pickNotificationsState";
import type { CombinedState } from "./types";

const useStoreBase = create<CombinedState>()(
  immer((...api) => ({
    createHabit: createHabitState(...api),
    pickNotifications: pickNotificationsState(...api),
    habits: habitState(...api),
  }))
);

export const useStore = createSelectors(useStoreBase);
