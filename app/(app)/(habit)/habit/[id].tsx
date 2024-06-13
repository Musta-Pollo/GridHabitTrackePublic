import React from "react";
// import { Background } from "../assets/background-texture.tsx";
import { HabitScreen } from "@Screens/habit/HabitScreen";
import { usePathname } from "expo-router";
export default function app() {
  //extract id argument from path
  const id = usePathname().split("/").pop() ?? "";

  return <HabitScreen habitId={id} />;
}
