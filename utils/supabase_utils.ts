import { SupabaseClient } from "@supabase/supabase-js";

export async function getSupabaseJWT(supabase: SupabaseClient) {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) {
    throw new Error("No token");
  }
  return token;
}
