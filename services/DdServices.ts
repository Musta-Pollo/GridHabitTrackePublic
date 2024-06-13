import { Session } from "@supabase/supabase-js";
import { cropDate } from "@Utils/date";
import { HabitWithCompletions } from "@Utils/types/habit_types";
import { Console, Context, Effect, Schedule } from "effect";
import { Electric } from "src/generated/client";
import { AuthService } from "./AuthService";

export interface DbServiceImpl {
  readonly electric: Electric;

  readonly genUUID: Effect.Effect<`${string}-${string}-${string}-${string}-${string}`>;
}
export class DbService extends Context.Tag("DbService")<
  DbService,
  DbServiceImpl
>() {
  //Add helper method db to get electric.db
}
const dbFromDbService = Effect.gen(function* () {
  const electric = yield* DbService;
  return electric.electric.db;
});

// const numOfCompleted = habit.habits_completions.filter((completion) => {
//     return (
//       cropDate(completion.date!).toDateString() ===
//       cropDate(new Date()).toDateString()
//     );
//   }).length;
//   // If completed today equals amount, then reset completions
//   const isCompleted = numOfCompleted >= (habit.amount ?? 1);
//   if (isCompleted) {
//     //Delete all today completions
//     const startOfDay = cropDate(new Date());
//     startOfDay.setHours(0, 0, 0, 0);

//     const endOfDay = cropDate(new Date());
//     endOfDay.setHours(23, 59, 59, 999);
//     console.log("Decreasing completions");
//     const program = Effect.gen(function* () {
//       Effect.log("Deleted completions start");
//       const a = yield* Effect.promise(async () => {
//         let res = await db.habits_completions.deleteMany({
//           where: {
//             AND: [
//               {
//                 date: {
//                   gt: startOfDay,
//                 },
//               },
//               {
//                 date: {
//                   lt: endOfDay,
//                 },
//               },
//               {
//                 habit_id: habit.id,
//               },
//             ],
//           },
//         });
//         Promise.resolve(res);
//       });
//       yield* Effect.log("Deleted inside completions");
//     });

//     const main = program.pipe(
//       Effect.timeout("500 millis"),
//       Effect.retry(
//         Schedule.exponential(500).pipe(Schedule.compose(Schedule.recurs(3)))
//       )
//     );
//     try {
//       await Effect.runPromise(main);
//     } catch (error) {
//       console.error("An error occurredbbbb:", error);
//     }
