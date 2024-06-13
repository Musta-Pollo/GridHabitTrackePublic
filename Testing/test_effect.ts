import { Effect, Schedule } from "effect";
const program = Effect.gen(function* () {
  console.log("start doing something...");
  yield* Effect.sleep("2 seconds");
  console.log("my job is finished!");
  return "some result";
});
const main = program.pipe(
  Effect.timeout("1 second"),
  Effect.retry(
    Schedule.exponential(100).pipe(Schedule.compose(Schedule.recurs(3)))
  )
);
Effect.runPromise(main).then(console.log, console.error);
/*
Output:
(FiberFailure) TimeoutException
   ... stack trace ...
*/
