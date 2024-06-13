import { Console, Effect } from "effect";
import { ChangeNotification } from "electric-sql/dist/notifiers";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import { DbService } from "./DdServices";
export function handleDataChanges(notification: ChangeNotification) {
  return Effect.gen(function* (_) {
    yield* Console.log("Handling data changes");
    if (Platform.OS === "web") return;
    const recordChanges = notification.changes;
    const recordsToHandle = yield* Effect.succeed(recordChanges).pipe(
      Effect.map((recordChanges) => {
        return recordChanges.map((record) => {
          const tablename = record.qualifiedTablename.tablename;
          if (tablename === "habits") {
            const changes = record.recordChanges ?? [];
            return changes.map((change) => {
              const primaryKey = change.primaryKey["id"] as string;
              if (change.type !== "COMPENSATION") {
                return {
                  primaryKey,
                  type: change.type,
                };
              }
              return null;
            });
          }
          return [];
        });
      }),
      Effect.map((records) =>
        records.flat().filter((record) => record !== null)
      )
    );
    const {
      electric: { db },
    } = yield* DbService;
    return yield* Effect.forEach(recordsToHandle, (record) => {
      const habitId = record.primaryKey;
      return Effect.gen(function* (_) {
        yield* Console.log("Handling habit with id: ", habitId);
        const habit = yield* _(
          Effect.promise(() => db.habits.findFirst({ where: { id: habitId } }))
        );
        yield* Console.log("Handling habit with name: ", habit?.name);
        if (habit === null) return;
        let weekdays = [];
        if (habit.sunday)
          weekdays.push({
            weekday: 1,
            notId: habit.sunday_not_id,
          });
        if (habit.monday)
          weekdays.push({
            weekday: 2,
            notId: habit.monday_not_id,
          });
        if (habit.tuesday)
          weekdays.push({
            weekday: 3,
            notId: habit.tuesday_not_id,
          });
        if (habit.wednesday)
          weekdays.push({
            weekday: 4,
            notId: habit.wednesday_not_id,
          });
        if (habit.thursday)
          weekdays.push({
            weekday: 5,
            notId: habit.thursday_not_id,
          });
        if (habit.friday)
          weekdays.push({
            weekday: 6,
            notId: habit.friday_not_id,
          });
        if (habit.saturday)
          weekdays.push({
            weekday: 7,
            notId: habit.saturday_not_id,
          });

        yield* Console.log("Weekdays: ", weekdays);

        //add weekdays
        const hour = habit.time?.getHours() ?? 0;
        const minute = habit.time?.getMinutes() ?? 0;
        yield* Console.log({
          hour,
          minute,
        });

        const res = yield* _(
          Effect.forEach(weekdays, ({ weekday, notId }) => {
            return Effect.tryPromise(() =>
              Notifications.scheduleNotificationAsync({
                content: {
                  title: habit.name,
                  body: "Let's do it! 🚀",
                },
                identifier: notId,
                trigger: {
                  weekday,
                  hour: hour,
                  minute: minute,
                  repeats: true,
                },
              })
            );
          })
        );
        yield* Console.log("Scheduled notifications: ", res);
      });
    });
  });
}
