import React, { useEffect, useState } from "react";

import { Text, View } from "react-native";

export enum SnackbarPosition {
  TOP = "top",
  BOTTOM = "bottom",
  CENTER = "center",
}

interface SnackbarCustomDialogProps {
  modalVisible: boolean;
  text: string;
  durationInMs: number;
  snackPosition: SnackbarPosition;
  setModalVisible: (visible: boolean) => void;
}

export default function SnackbarCustom({
  modalVisible,
  setModalVisible,
  snackPosition,
  durationInMs,
  text,
}: SnackbarCustomDialogProps) {
  console.log("SnackbarCustom");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log("SnackbarCustom useEffect");
    if (isVisible) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, durationInMs);

      return () => clearTimeout(timeout);
    }
  }, [isVisible, durationInMs]);

  if (!isVisible) return null;

  return (
    <View
      className={`${
        modalVisible ? "block" : "hidden"
      } absolute w-full z-10 ${() => {
        switch (snackPosition) {
          case SnackbarPosition.TOP:
            return "top-[6rem]";
          case SnackbarPosition.BOTTOM:
            return "bottom-[6rem]";
          case SnackbarPosition.CENTER:
            return "top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]";
        }
      }}`}
    >
      <View className="  mx-4 py-2 px-4 rounded-lg  bg-background23">
        <View className="flex flex-row justify-between">
          <Text className="font-nunito-400 text-white text-lg">{text}</Text>
        </View>
      </View>
    </View>
  );
}
