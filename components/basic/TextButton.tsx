import { ActivityIndicator, Text } from "react-native";
import { Button, ButtonType } from "./Button";

interface TextButtonProps {
  buttonType: ButtonType;
  isWaiting?: boolean;
  text: string;
  onPress: () => void;
}

export const TextButton = ({
  buttonType,
  text,
  onPress,
  isWaiting = false,
}: TextButtonProps) => {
  return (
    <Button onPress={onPress} buttonType={buttonType}>
      {!isWaiting ? (
        <Text
          className={`font-nunito-800 text-lg text-white ${(() => {
            switch (buttonType) {
              case ButtonType.Primary:
                return "text-white";
              case ButtonType.Secondary:
                return "text-white/60";
            }
          })()}`}
        >
          {text}
        </Text>
      ) : (
        <ActivityIndicator size="small" color="#ffffff" />
      )}
    </Button>
  );
};
