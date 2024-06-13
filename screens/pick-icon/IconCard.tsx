import { Colors } from "@Utils/_colors";
import { iconMapper } from "@Utils/icon-mapper";
import { Apple } from "lucide-react-native";
import React from "react";
import { Pressable, View } from "react-native";

interface IconCardProps {
  iconName: string;
  isActive: boolean;
  onPress: () => void;
}

export const IconCard = React.memo(
  ({ iconName, isActive, onPress }: IconCardProps) => {
    const Icon = iconMapper[iconName] ?? Apple;
    return (
      <Pressable onPress={onPress} className="h-11">
        <View className="bg-background13 flex-1">
          <View
            className={`${
              isActive ? "bg-primary57" : "bg-primary57/5"
            } px-4 py-3 rounded-xl  justify-center items-center h-11`}
          >
            <Icon color={isActive ? Colors.white : Colors.white80} />
          </View>
        </View>
      </Pressable>
    );
  }
);
