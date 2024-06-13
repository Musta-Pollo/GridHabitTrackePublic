import {
  ContainsNumber,
  ContainsSpecialCharacter,
  Email,
} from "@Utils/schema/schema_utils";

import * as S from "@effect/schema";

export const loginSchema = S.Schema.Struct({
  email: S.Schema.String.pipe(Email),
  password: S.Schema.String.pipe(
    S.Schema.minLength(8, {
      message: () => "Password must be at least 8 characters",
    }),
    ContainsNumber,
    ContainsSpecialCharacter
  ),
});

export type loginSchemaType = typeof loginSchema.Type;
