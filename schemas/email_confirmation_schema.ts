import {
  ContainsNumber,
  ContainsOnlyNumbers,
  ContainsSpecialCharacter,
  Email,
} from "@Utils/schema/schema_utils";

import * as S from "@effect/schema";

export const emailConfirmationSchema = S.Schema.Struct({
  email: S.Schema.String.pipe(Email),
  confirmationCode: S.Schema.String.pipe(
    S.Schema.length(6, {
      message: () => "Confirmation code must be exactly 6 characters",
    }),
    ContainsOnlyNumbers
  ),
});

export type emailConfirmationType = typeof emailConfirmationSchema.Type;
