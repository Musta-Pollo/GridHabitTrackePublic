import React from "react";
import { TouchableOpacity, View } from "react-native";

interface ExtraButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

export default function ExtraButton({ onPress, children }: ExtraButtonProps) {
  return (
    <View className="flex flex-row justify-end">
      <TouchableOpacity onPress={onPress}>
        <View className="rounded-full bg-primary57/20 py-2 px-4">
          <View className="flex flex-row">{children}</View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
