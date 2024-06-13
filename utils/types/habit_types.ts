// Define new type
// (Habits | (Habits & {
//     habits_completions: {
//         id: string;
//         user_id: string;
//         date: Date | null;
//         habit_id: string;
//     }[];
// })

import { Habits } from "src/generated/client";

export type HabitWithCompletions = Habits & {
  habits_completions: {
    id: string;
    user_id: string;
    date: Date | null;
    habit_id: string;
  }[];
};


type dbType typeof db