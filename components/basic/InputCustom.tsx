import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
interface InputCustomProps {
  label: string;
  actionWidget?: React.ReactNode | undefined;
  actionText?: string | undefined;
  onActionPress?: (() => void) | undefined;
  children?: React.ReactNode | undefined;
  onPress?: (() => void) | undefined;
  subLabel?: string | undefined;
}

export const InputCustom = ({
  label,
  subLabel,
  actionWidget,
  actionText,
  onActionPress,
  children = undefined,
  onPress,
}: InputCustomProps) => {
  const card = children ? (
    <View className="px-6 items-center py-2.5 flex-row justify-between bg-background23 rounded-xl ">
      {children}
    </View>
  ) : (
    <View />
  );
  return (
    <View className="flex flex-col items-stretch">
      {label.length > 0 && (
        <View className="flex justify-between flex-row items-center">
          {subLabel ? (
            <View className="flex flex-col">
              <Text className="font-nunito-800 text-white/80 text-lg">
                {label}
              </Text>
              <Text className="font-nunito-400 text-white/60 text-sm">
                {subLabel}
              </Text>
            </View>
          ) : (
            <Text className="font-nunito-800 text-white/80 text-lg">
              {label}
            </Text>
          )}
          {actionText && (
            <TouchableOpacity onPress={onActionPress}>
              <Text className="font-nunito-600 text-primary84 text-base">
                {actionText}
              </Text>
            </TouchableOpacity>
          )}
          {actionWidget}
        </View>
      )}
      <View className="h-3" />
      {!onPress ? (
        card
      ) : (
        <TouchableOpacity onPress={onPress}>{card}</TouchableOpacity>
      )}
    </View>
  );
};
