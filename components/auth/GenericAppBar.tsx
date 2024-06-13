import { IconButton } from "@Components/basic/IconButton";
import { Colors } from "@Utils/_colors";
import { Sizes } from "@Utils/_sizes";
import { LucideIcon, X } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

export interface AppBarAction {
  title: string | undefined;
  onPress: () => void;
  icon: LucideIcon;
}

interface GenericAppBarProps {
  title: string;
  actions: AppBarAction[] | undefined;
  onBack: () => void;
}

export default function GenericAppBar({
  title,
  actions,
  onBack,
}: GenericAppBarProps) {
  //Get current path

  return (
    <View className="flex flex-row justify-between items-center">
      <IconButton Icon={X} iconColor={Colors.white60} onPress={onBack} />
      <View className="flex-1">
        <Text className="text-center font-nunito-800 text-white">{title}</Text>
      </View>
      <View className="flex flex-row">
        {actions?.map((action, index) => (
          <View key={index} className="flex flex-row items-center">
            <IconButton
              Icon={action.icon}
              iconColor={Colors.white60}
              onPress={action.onPress}
              size={Sizes.iconSize20}
            />
            <Text className="ps-2 text-primary84">{action.title}</Text>
          </View>
        ))}
        {actions?.length === 0 && <View className="w-12 h-8" />}
      </View>

      {/*<View className="w-5" />*/}
    </View>
  );
}
