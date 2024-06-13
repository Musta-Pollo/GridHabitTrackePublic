import { Effect } from "effect";
import { emailConfirmationType } from "schemas/email_confirmation_schema";
import { loginSchemaType } from "schemas/login_schema";
import { signInSchemaType } from "schemas/sign_in_schema";

export function loginUser(data: loginSchemaType) {
  return Effect.gen(function* (_) {
    //let res = yield* _(S.Schema.decodeEither(loginSchema)(data));
    //const { email, password } = res;
    //const { supabase } = yield* AuthService;
    //const {
    //  electric: { db },
    //} = yield* DbService;
    //let {
    //  data: { session },
    //} = yield* Effect.tryPromise(
    //  async () =>
    //    await supabase.auth.signInWithPassword({
    //      email: email.toLowerCase(),
    //      password: password,
    //    })
    //).pipe(
    //  Effect.timeout("1 seconds"),
    //  Effect.retry(
    //    Schedule.exponential(1000).pipe(Schedule.compose(Schedule.recurs(3)))
    //  ),
    //  Effect.catchTags({
    //    UnknownException: (_) => Effect.fail(new SignInError()),
    //  })
    //);
    //Console.log("Session", session);
    //if (!session) return yield* Effect.fail(new AuthError());
    //yield* Console.log("Signed In. Now wait for 1 second.");
    //yield* Effect.sleep("1 seconds");
    //yield* Effect.tryPromise(() =>
    //  Promise.all([
    //    db.habits.updateMany({
    //      data: {
    //        user_id: session.user.id,
    //        electric_user_id: session.user.id,
    //      },
    //      where: { user_id: "11111111-1111-1111-1111-111111111111" },
    //    }),
    //    db.habits_completions.updateMany({
    //      data: {
    //        user_id: session.user.id,
    //        electric_user_id: session.user.id,
    //      },
    //      where: { user_id: "11111111-1111-1111-1111-111111111111" },
    //    }),
    //  ])
    //);
    //Effect.log("Updated data after log in");
  });
}

export function signInUser(data: signInSchemaType) {
  return Effect.gen(function* (_) {
    //let res = yield* _(S.Schema.decodeEither(signInSchema)(data));
    //const { email, password, nickname } = res;
    //const { supabase } = yield* AuthService;
    //const {
    //  electric: { db },
    //} = yield* DbService;
    //let {
    //  data: { session },
    //} = yield* Effect.tryPromise(
    //  async () =>
    //    await supabase.auth.signUp({
    //      email: email.toLowerCase(),
    //      password: password,
    //      options: {},
    //    })
    //).pipe(
    //  Effect.timeout("1 seconds"),
    //  Effect.retry(
    //    Schedule.exponential(1000).pipe(Schedule.compose(Schedule.recurs(3)))
    //  ),
    //  Effect.catchTags({
    //    UnknownException: (_) => Effect.fail(new SignInError()),
    //  })
    //);
    //if (!session) return yield* Effect.fail(new AuthError());
    //yield* Console.log("Signed Up. Now wait for 1 second.");
    //yield* Effect.sleep("1 seconds");
    //yield* Effect.tryPromise(() =>
    //  Promise.all([
    //    db.habits.updateMany({
    //      data: {
    //        user_id: session.user.id,
    //        electric_user_id: session.user.id,
    //      },
    //      where: { user_id: "11111111-1111-1111-1111-111111111111" },
    //    }),
    //    db.habits_completions.updateMany({
    //      data: {
    //        user_id: session.user.id,
    //        electric_user_id: session.user.id,
    //      },
    //      where: { user_id: "11111111-1111-1111-1111-111111111111" },
    //    }),
    //  ])
    //);
    //Effect.log("Updated data after sign in");
  });
}

export function logoutUser() {
  return Effect.gen(function* (_) {
    //const { supabase } = yield* AuthService;
    //const {
    //  electric: { db },
    //} = yield* DbService;
    //let { error } = yield* Effect.tryPromise(
    //  async () => await supabase.auth.signOut()
    //).pipe(
    //  Effect.timeout("1 seconds"),
    //  Effect.retry(
    //    Schedule.exponential(1000).pipe(Schedule.compose(Schedule.recurs(3)))
    //  ),
    //  Effect.catchTags({
    //    UnknownException: (_) => Effect.fail(new SignInError()),
    //  })
    //);
    //if (error) return yield* Effect.fail(new AuthError());
    //let e = yield* Effect.tryPromise(async () => {
    //  await Promise.all([
    //    db.habits.deleteMany({ where: {} }),
    //    db.habits_completions.deleteMany({ where: {} }),
    //  ]);
    //}).pipe(
    //  Effect.timeout("1 seconds"),
    //  Effect.retry(
    //    Schedule.exponential(1000).pipe(Schedule.compose(Schedule.recurs(3)))
    //  ),
    //  Effect.catchTags({
    //    UnknownException: (_) => Effect.fail(new DeleteError()),
    //  })
    //);
    //yield* Console.log("Loggou out. Now wait for 1 second.");
    //yield* Effect.sleep("1 seconds");
  });
}

export function verifyEmailAccount(data: emailConfirmationType) {
  return Effect.gen(function* (_) {
    //let res = yield* _(S.Schema.decodeEither(emailConfirmationSchema)(data));
    //const { email, confirmationCode } = res;
    //const { supabase } = yield* AuthService;
    //const {
    //  electric: { db },
    //} = yield* DbService;
    //let {
    //  data: { session },
    //} = yield* Effect.tryPromise(
    //  async () =>
    //    await supabase.auth.verifyOtp({
    //      email: email.toLowerCase(),
    //      token: confirmationCode,
    //      type: "signup",
    //    })
    //).pipe(
    //  Effect.timeout("1 seconds"),
    //  Effect.retry(
    //    Schedule.exponential(1000).pipe(Schedule.compose(Schedule.recurs(3)))
    //  ),
    //  Effect.catchTags({
    //    UnknownException: (_) => Effect.fail(new SignInError()),
    //  })
    //);
    //if (!session) return yield* Effect.fail(new AuthError());
    //yield* Console.log("Signed Up. Now wait for 1 second.");
    //yield* Effect.sleep("1 seconds");
    //yield* Effect.tryPromise(() =>
    //  Promise.all([
    //    db.habits.updateMany({
    //      data: {
    //        user_id: session.user.id,
    //        electric_user_id: session.user.id,
    //      },
    //      where: { user_id: "11111111-1111-1111-1111-111111111111" },
    //    }),
    //    db.habits_completions.updateMany({
    //      data: {
    //        user_id: session.user.id,
    //        electric_user_id: session.user.id,
    //      },
    //      where: { user_id: "11111111-1111-1111-1111-111111111111" },
    //    }),
    //  ])
    //);
    //Effect.log("Updated data after sign in");
  });
}
