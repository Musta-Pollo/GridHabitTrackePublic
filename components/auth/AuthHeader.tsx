import Divider from "@Components/basic/Divider";
import React from "react";
import { Text, View } from "react-native";

interface AuthHeaderProps {
  title: string;
  description: string;
}

export default function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <View className="flex flex-col">
      <Text className="font-nunito-800 text-white text-3xl">{title}</Text>
      <View className="h-2" />
      <Text className="text-white/80 font-nunito-500 font-xl">
        {description}
      </Text>
      <View className="h-10" />
      <Divider />
      <View className="h-10" />
    </View>
  );
}
