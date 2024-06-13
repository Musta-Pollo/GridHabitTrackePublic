import { TouchableOpacity, View } from "react-native";

export enum ButtonType {
  Primary,
  Secondary,
}

export interface ButtonProps {
  onPress: () => void;
  buttonType: ButtonType;
  children: React.ReactNode;
}

export const Button = ({ onPress, buttonType, children }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={`${
          buttonType == ButtonType.Primary ? "bg-primary57" : "bg-background23"
        } py-3 px-6 rounded-xl justify-center items-center`}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};
