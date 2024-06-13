import { Text } from "react-native";
import { SelectionButton, SelectionButtonType } from "./SelectionButton";

export interface SelectionTextButtonProps {
  onPress: () => void;
  buttonType: SelectionButtonType;
  text: string;
  className?: string;
}

export const SelectionTextButton = ({
  onPress,
  buttonType,
  text,
  className,
}: SelectionTextButtonProps) => {
  return (
    <SelectionButton buttonType={buttonType} onPress={onPress}>
      <Text
        className={`font-nunito-500 ${(() => {
          switch (buttonType) {
            case SelectionButtonType.Selected:
              return "text-white";
            case SelectionButtonType.Selected:
              return "text-white";
            case SelectionButtonType.Unselected:
              return "text-white/60";
            case SelectionButtonType.Disabled:
              return "text-white/40";
          }
        })()} ${className} `}
      >
        {text}
      </Text>
    </SelectionButton>
  );
};
