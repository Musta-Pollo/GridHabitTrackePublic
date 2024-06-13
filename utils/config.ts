import { ElectricConfig } from "electric-sql/config";
import { schema } from "src/generated/client";
// const { ElectricDatabase, electrify } = await import(
//   "electric-sql/wa-sqlite"
// );

// const { electrify } = await import("electric-sql/expo");
// const { openDatabase } = await import("expo-sqlite");

export const DEBUG_MODE: boolean = false;
export const OFFLINE_ONLY: boolean = true;
// Stored in ELECTRIC_URL environment variable
// how to access: process.env.ELECTRIC_URL
export const ELECTRIC_URL: string =
  process.env.EXPO_PUBLIC_ELECTRIC_SERVICE ?? ``;

export const SUPABASE_URL: string = process.env.EXPO_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY: string =
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "";
//Config DB
const distPath = "/";

export async function initWaSQLite(dbName: string, config: ElectricConfig) {
  const { ElectricDatabase, electrify } = await import(
    "electric-sql/wa-sqlite"
  );
  const conn = await ElectricDatabase.init(dbName, "/lib/wa-sqlite/");
  return await electrify(conn, schema, config);
}

export async function initExpoSQLite(dbName: string, config: ElectricConfig) {
  console.log({
    SupabaseURL: SUPABASE_URL,
    SupabaseAnonKey: SUPABASE_ANON_KEY,
    ElectricURL: ELECTRIC_URL,
  });

  const { openDatabase } = await import("expo-sqlite");
  const { electrify } = await import("electric-sql/expo");

  console.log("Database opened");
  const conn = openDatabase(dbName);

  console.log("Database electrified");
  try {
    const electric = await electrify(conn, schema, config);

    return electric;
  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
}
