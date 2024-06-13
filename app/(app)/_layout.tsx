import { useElectric } from "@Utils/electro";
import { SupabaseContext } from "@Utils/SupabaseContext";
import { Slot } from "expo-router";
import { useContext } from "react";

export default function AppLayout() {
  const { db } = useElectric()!;
  const { session } = useContext(SupabaseContext)!;

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  //console.log("Session (app): ", session);
  //if (!session) {
  //  // On web, static rendering will stop here as the user is not authenticated
  //  // in the headless Node process that the pages are rendered in.
  //  console.log("Redirecting to sign-in");
  //  return <Redirect href="/(authentication)/sign-in/" />;
  //}

  // This layout can be deferred because it's not the root layout.
  return <Slot />;
}
