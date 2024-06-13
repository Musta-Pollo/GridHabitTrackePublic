import { Colors } from "@Utils/_colors";
import { Sizes } from "@Utils/_sizes";
import { Check } from "lucide-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface PickColorProps {
  color: string;
  onPress: () => void;
  isSelected: boolean;
}

export default function ColorCard({
  color,
  onPress,
  isSelected,
}: PickColorProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: color,
          borderRadius: 12,
        }}
        className={`rounded-xl py-3`}
      >
        <View className="justify-center items-center">
          <Check
            size={Sizes.iconSize24}
            color={
              isSelected
                ? color == "#FFFFFF"
                  ? Colors.black
                  : Colors.white
                : color
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
