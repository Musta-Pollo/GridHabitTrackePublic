import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    />
  );
}
