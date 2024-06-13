import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

//Snackar interface
interface SnackbarProps {
  message: string;
  actionText?: string;
  onActionPress?: () => void;
  duration?: number;
  position?: "top" | "bottom";
  backgroundColor: string;
  textColor: string;
  actionTextColor: string;
}

const Snackbar = ({
  message,
  actionText,
  onActionPress,
  duration = 3000, // Default duration in milliseconds
  position = "bottom", // Default position
  backgroundColor,
  textColor,
  actionTextColor,
}: SnackbarProps) => {
  const [isVisible, setIsVisible] = useState(true);

  //useEffect(() => {
  //  if (isVisible) {
  //    const timeout = setTimeout(() => {
  //      setIsVisible(false);
  //    }, duration);

  //    return () => clearTimeout(timeout);
  //  }
  //}, [isVisible, duration]);

  return isVisible ? (
    <View
      className={`p-4 rounded flex-row items-center justify-between absolute w-full ${
        position === "top" ? "top-1" : "bottom-1"
      } ${backgroundColor}`}
    >
      <Text className="text-base ${textColor}">{message}</Text>
      {actionText && (
        <TouchableOpacity onPress={onActionPress}>
          <Text className="ml-2 text-sm ${actionTextColor}">{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  ) : null;
};

export default Snackbar;
