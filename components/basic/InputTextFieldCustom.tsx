import { Colors } from "@Utils/_colors";
import { Sizes } from "@Utils/_sizes";
import { Eye, EyeOff, LucideIcon } from "lucide-react-native";
import React from "react";
import {
  KeyboardTypeOptions,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { InputCustom } from "./InputCustom";
interface InputCustomProps {
  value: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  onChangeText: (value: string) => void;
  label: string;
  actionWidget?: React.ReactNode | undefined;
  actionText?: string | undefined;
  secureTextEntry?: boolean | undefined;
  onActionPress?: (() => void) | undefined;
  LeadingIcon?: LucideIcon;
}

export const InputTextFieldCustom = ({
  value,
  placeholder,
  keyboardType = "default",
  onChangeText,
  label,
  actionWidget = undefined,
  actionText = undefined,
  onActionPress = undefined,
  secureTextEntry = false,
  LeadingIcon = undefined,
}: InputCustomProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <InputCustom
      label={label}
      actionWidget={actionWidget}
      actionText={actionText}
      onActionPress={onActionPress}
      onPress={undefined}
      subLabel={undefined}
    >
      {LeadingIcon && (
        <View className="pr-4">
          <LeadingIcon color={Colors.white} size={Sizes.iconSize20} />
        </View>
      )}
      <TextInput
        onChangeText={(value) => {
          onChangeText(value);
        }}
        value={value}
        placeholderTextColor={Colors.white60}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry && !showPassword}
        className="font-nunito-400 flex-1 text-lg text-white outline-none"
        passwordRules="required: upper; required: lower; required: digit; minlength: 8;"
      />
      {secureTextEntry && (
        <TouchableOpacity
          onPress={() => {
            console.log("showPassword", showPassword);
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <Eye color={Colors.white60} />
          ) : (
            <EyeOff color={Colors.white60} />
          )}
        </TouchableOpacity>
      )}
    </InputCustom>
  );
};
