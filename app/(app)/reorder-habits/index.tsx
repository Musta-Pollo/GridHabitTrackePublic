import React from "react";
// import { Background } from "../assets/background-texture.tsx";
import { HabitScreenReorder } from "@Screens/habit/HabitScreenReorder";
import { usePathname } from "expo-router";
export default function app() {
  //extract id argument from path
  const id = usePathname().split("/").pop() ?? "";

  return <HabitScreenReorder />;
}
