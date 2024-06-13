import { createContext } from "react";
import type { SupabaseClient, Session } from "@supabase/supabase-js";

interface SupabaseContextObject {
  supabase: SupabaseClient | undefined;
  session: Session | null;
  connected: boolean;
}

export const SupabaseContext = createContext<SupabaseContextObject | null>(
  null
);
