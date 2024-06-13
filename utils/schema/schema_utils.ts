import { Schema } from "@effect/schema";

export const Email = Schema.pattern(
  /^(?!\.)(?!.*\.\.)([A-Z0-9_+-.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i,
  {
    message: () => "Invalid email address",
  }
);

//if contains a number
export const ContainsNumber = Schema.pattern(/(?=.*\d)/, {
  message: () => "Password must contain a number",
});

//contains only numbers
export const ContainsOnlyNumbers = Schema.pattern(/^[0-9]*$/, {
  message: () => "It must contain only numbers",
});

//if contains a special character
export const ContainsSpecialCharacter = Schema.pattern(
  /(?=.*[!@#$%^&*()_+}{":;'?/>.<,])(?=.*\d)/,
  {
    message: () => "Password must contain a special character",
  }
);
