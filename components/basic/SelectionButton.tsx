import { TouchableOpacity, View } from "react-native";

export enum SelectionButtonType {
  Selected,
  Unselected,
  Delete,
  Disabled,
}

export interface SelectionButtonProps {
  onPress: () => void;
  buttonType: SelectionButtonType;
  children: React.ReactNode;
  className?: string;
}

export const SelectionButton = ({
  onPress,
  buttonType,
  children,
  className,
}: SelectionButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`${(() => {
          switch (buttonType) {
            case SelectionButtonType.Selected:
              return "bg-primary57";
            case SelectionButtonType.Unselected:
              return "bg-background23";
            case SelectionButtonType.Delete:
              return "bg-error";
            case SelectionButtonType.Disabled:
              return "bg-background23";
          }
        })()} py-3 px-6 rounded-xl justify-center items-center ${className}`}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};
