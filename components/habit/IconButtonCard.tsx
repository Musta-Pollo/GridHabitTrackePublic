import { Sizes } from "@Utils/_sizes";
import { iconMapper } from "@Utils/icon-mapper";
import React from "react";
import { View } from "react-native";

interface IconButtonCardProps {
  iconName: string;
}

export default function IconButtonCard({ iconName }: IconButtonCardProps) {
  const Icon = iconMapper[iconName];
  return (
    <View className="rounded-xl bg-background23 p-2.5">
      <Icon size={Sizes.iconSize24} color="white" />
    </View>
  );
}
