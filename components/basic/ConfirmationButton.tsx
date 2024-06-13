import { Colors } from "@Utils/_colors";
import { Sizes } from "@Utils/_sizes";
import { Check } from "lucide-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";

interface ConfirmationButtonProps {
  onPress: () => void;
}

export default function ConfirmationButton({
  onPress,
}: ConfirmationButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="p-3 bg-primary57/20 rounded-xl mr-3">
        <Check size={Sizes.iconSize24} color={Colors.primary57} />
      </View>
    </TouchableOpacity>
  );
}
