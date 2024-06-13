import { LoginScreen } from "@Screens/login/LoginScreen";
import { useNavigation } from "expo-router";
import React from "react";
// import { Background } from "../assets/background-texture.tsx";

export default function App() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);
  return <LoginScreen />;
}
