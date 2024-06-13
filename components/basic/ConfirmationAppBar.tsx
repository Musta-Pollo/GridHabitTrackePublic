import { IconButton } from "@Components/basic/IconButton";
import { Colors } from "@Utils/_colors";
import { router } from "expo-router";
import { X } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import ConfirmationButton from "./ConfirmationButton";

interface ConfirmationAppBarProps {
  title: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

export default function ConfirmationAppBar({
  title,
  onConfirm,
  onCancel,
}: ConfirmationAppBarProps) {
  return (
    <View className="flex flex-row justify-between items-center">
      <IconButton
        Icon={X}
        iconColor={Colors.white60}
        onPress={() => {
          if (onCancel) {
            onCancel();
          } else {
            router.back();
          }
        }}
      />
      <Text className="font-nunito-700 text-lg text-white"> {title} </Text>
      <ConfirmationButton onPress={onConfirm} />
    </View>
  );
}
