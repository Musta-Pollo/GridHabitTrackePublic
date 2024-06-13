import {
  ContainsNumber,
  ContainsSpecialCharacter,
  Email,
} from "@Utils/schema/schema_utils";

import * as S from "@effect/schema";

export const signInSchema = S.Schema.Struct({
  email: S.Schema.String.pipe(Email),
  nickname: S.Schema.String.pipe(
    S.Schema.minLength(1, {
      message: () => "Nickname must be at least 1 character",
    })
  ),
  password: S.Schema.String.pipe(
    S.Schema.minLength(8, {
      message: () => "Password must be at least 8 characters",
    }),
    ContainsNumber,
    ContainsSpecialCharacter
  ),
  passwordConfirmation: S.Schema.String.pipe(
    S.Schema.minLength(8, {
      message: () => "Password must be at least 8 characters",
    }),
    ContainsNumber,
    ContainsSpecialCharacter
  ),
}).pipe(
  S.Schema.filter((o) =>
    o.password === o.passwordConfirmation
      ? undefined
      : new S.ParseResult.Type(
          S.Schema.Literal(o.passwordConfirmation).ast,
          o.password,
          `b ("${o.password}") should be equal to a ("${o.passwordConfirmation}")`
        )
  )
);

export type signInSchemaType = typeof signInSchema.Type;
