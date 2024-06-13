import { Session, SupabaseClient } from "@supabase/supabase-js";
import { Context } from "effect";

export interface AuthServiceImpl {
  readonly session: Session | null;
  readonly connected: boolean;
  readonly supabase: SupabaseClient | undefined;
}
export class AuthService extends Context.Tag("AuthService")<
  AuthService,
  AuthServiceImpl
>() {
  //Add helper method db to get electric.db
}
