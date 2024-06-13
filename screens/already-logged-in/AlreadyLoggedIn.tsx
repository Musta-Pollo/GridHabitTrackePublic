import AuthAppBar from "@Components/auth/AuthAppBar";
import AuthHeader from "@Components/auth/AuthHeader";
import Background from "@Components/basic/Background";
import { ButtonType } from "@Components/basic/Button";
import { InputCustom } from "@Components/basic/InputCustom";
import { logoutUser } from "@Services/auth_functions";
import { AuthService } from "@Services/AuthService";
import { AuthServiceContext } from "@Services/AuthServiceContext";
import { DbServiceContext } from "@Services/DbServiceContext";
import { DbService } from "@Services/DdServices";
import { Effect } from "effect";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { TextButton } from "../../components/basic/TextButton";
import { Colors } from "../../utils/_colors";

export const AlreadyLoggedIn = () => {
  const authService = useContext(AuthServiceContext)!;
  const dbService = useContext(DbServiceContext)!;

  return (
    <Background>
      <AuthAppBar />
      <View className="h-14" />
      <View className="flex-1 px-4 pb-4">
        <AuthHeader
          title="Already Logged In"
          description={`You are already logged in as ${authService.session?.user?.email}.`}
        />

        <InputCustom label="Currently Logged In As">
          <Text className="text-white font-nunito-600">
            {authService.session?.user.email ?? "No email"}
          </Text>
        </InputCustom>
        <View className="flex-1" />

        <TextButton
          buttonType={ButtonType.Secondary}
          onPress={async () => {
            try {
              await logoutUser().pipe(
                Effect.provideService(AuthService, authService),
                Effect.provideService(DbService, dbService),
                Effect.runPromise
              );
              await new Promise((resolve) => setTimeout(resolve, 300));
              router.navigate("/");
            } catch (error) {
              console.error("Error logging out: ", error);
              showMessage({
                message: "Error logging out",
                type: "danger",
              });
            }
          }}
          text="Logout"
        />
        <View className="h-12" />
      </View>
      <StatusBar style="auto" backgroundColor={Colors.background13} />
    </Background>
  );
};
