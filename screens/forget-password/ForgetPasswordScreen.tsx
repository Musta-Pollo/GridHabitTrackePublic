import AuthAppBar from "@Components/auth/AuthAppBar";
import AuthHeader from "@Components/auth/AuthHeader";
import Background from "@Components/basic/Background";
import { ButtonType } from "@Components/basic/Button";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { InputTextFieldCustom } from "../../components/basic/InputTextFieldCustom";
import { TextButton } from "../../components/basic/TextButton";
import { Colors } from "../../utils/_colors";

export default function ForgetPasswordScreen() {
  return (
    <Background>
      <AuthAppBar />
      <View className="h-14" />
      <View className="flex-1 px-4 pb-4">
        <AuthHeader
          title="Forget Password"
          description="Enter your email to reset your password. You will receive an email with instructions on how to reset your password."
        />
        <InputTextFieldCustom
          label="Email"
          initalValue=""
          placeholder="Enter your email"
          keyboardType="email-address"
          onChangeText={(value) => {}}
        />

        <View className="h-6" />
        <View className="flex-1" />
        <TextButton
          buttonType={ButtonType.Primary}
          onPress={() => {}}
          text="Reset Password"
        />
      </View>

      <StatusBar style="auto" backgroundColor={Colors.background13} />
    </Background>
  );
}
