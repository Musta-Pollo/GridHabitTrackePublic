import { insecureAuthToken } from "electric-sql/auth";

// This is just a demo. In a real app, the user ID would
// usually come from somewhere else :)
const dummyUserId = "123e4567-e89b-12d3-a456-426614174000";

// Generate an insecure authentication JWT.
// See https://electric-sql.com/docs/usage/auth for more details.
export const authToken = () => {
  const claims = { sub: dummyUserId };
  return insecureAuthToken(claims);
};
