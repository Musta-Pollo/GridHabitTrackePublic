import { cropDate } from "@Utils/date";
import { HabitWithCompletions } from "@Utils/types/habit_types";
import { Console, Effect, Schedule } from "effect";
import { AuthService } from "./AuthService";
import { DbService } from "./DdServices";

export const incrementHabit = (habit: HabitWithCompletions, date: Date) => {
  console.log("Incrementing habit1");
  return Effect.gen(function* (_) {
    Console.log("Incrementing habit");
    const isCompleted = yield* _(
      Effect.succeed(habit.habits_completions).pipe(
        Effect.andThen((completions) => {
          return completions.filter(
            (completion) =>
              cropDate(completion.date!).toDateString() ===
              cropDate(date).toDateString()
          );
        }),
        Effect.map((completions) => completions.length >= (habit.amount ?? 1))
      )
    );

    Console.log("Is completed: ", isCompleted);
    yield* Console.log("Date: ", date);
    const {
      electric: { db },
      genUUID,
    } = yield* DbService;
    yield* Console.log("Is completed: ", isCompleted);
    if (isCompleted) {
      //Delete all today completions\
      const completed = yield* _(
        Effect.succeed(habit.habits_completions).pipe(
          Effect.andThen((completions) => {
            return completions.filter(
              (completion) =>
                cropDate(completion.date!).toDateString() ===
                cropDate(date).toDateString()
            );
          }),
          Effect.map((completions) => completions.map((c) => c.id))
        )
      );

      Console.log("Decreasing completions");

      return yield* Effect.promise(async () => {
        let res = await db.habits_completions.deleteMany({
          where: {
            OR: completed.map((c) => ({
              id: c,
            })),
          },
        });
        Promise.resolve(res);
      }).pipe(
        Effect.timeout("500 millis"),
        Effect.retry(
          Schedule.exponential(500).pipe(Schedule.compose(Schedule.recurs(3)))
        )
      );
    }

    const { session } = yield* AuthService;

    return yield* _(
      Effect.promise(async () => {
        console.log("Incrementing habit2, date: ", date);
        let res = await db.habits_completions.create({
          data: {
            id: genUUID.pipe(Effect.runSync),
            habit_id: habit.id,
            date: date,
            user_id: session?.user.id ?? "11111111-1111-1111-1111-111111111111",
            electric_user_id:
              session?.user.id ?? "11111111-1111-1111-1111-111111111111",
          },
        });
        Promise.resolve(res);
      })
    ).pipe(
      Effect.timeout("500 millis"),
      Effect.retry(
        Schedule.exponential(500).pipe(Schedule.compose(Schedule.recurs(3)))
      )
    );
  });
};
