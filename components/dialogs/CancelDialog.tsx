import React from "react";

import Divider from "@Components/basic/Divider";
import { MyPopup } from "@Components/basic/MyPopup";
import { SelectionButtonType } from "@Components/basic/SelectionButton";
import { SelectionTextButton } from "@Components/basic/SelectionTextButton";
import { Text, View } from "react-native";

interface CancelDialogProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  title: string;
  subtitle: string;
  confirmText: string;
  onCancel: () => void;
  cancelText: string;
  onConfirm: () => void;
  confirmationButtonType?: SelectionButtonType;
}

export default function CancelDialog({
  modalVisible,
  setModalVisible,
  title,
  subtitle,
  confirmText,
  onCancel,
  cancelText,
  onConfirm,
  confirmationButtonType = SelectionButtonType.Selected,
}: CancelDialogProps) {
  return (
    <MyPopup visible={modalVisible}>
      <View className="bg-background13 w-11/12 p-3 rounded-3xl align-middle self-center justify-center">
        <Text className="text-white text-xl font-nunito-700 text-center">
          {title}
        </Text>
        <View className="h-6" />
        <Text className="text-white/80 text-base font-nunito-400 text-center px-4">
          {subtitle}
        </Text>
        <View className="h-6" />
        <Divider />
        <View className="h-2" />
        <SelectionTextButton
          buttonType={confirmationButtonType}
          onPress={onConfirm}
          text={confirmText}
        />
        <View className="h-2" />
        <SelectionTextButton
          buttonType={SelectionButtonType.Unselected}
          onPress={onCancel}
          text={cancelText}
        />
      </View>
    </MyPopup>
  );
}
