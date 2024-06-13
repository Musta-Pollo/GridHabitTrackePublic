import AuthAppBar from "@Components/auth/AuthAppBar";
import AuthHeader from "@Components/auth/AuthHeader";
import Background from "@Components/basic/Background";
import { ButtonType } from "@Components/basic/Button";
import { effectTsResolver } from "@hookform/resolvers/effect-ts";
import { verifyEmailAccount } from "@Services/auth_functions";
import { AuthService } from "@Services/AuthService";
import { AuthServiceContext } from "@Services/AuthServiceContext";
import { DbServiceContext } from "@Services/DbServiceContext";
import { DbService } from "@Services/DdServices";
import { Effect } from "effect";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { emailConfirmationSchema } from "schemas/email_confirmation_schema";
import { InputTextFieldCustom } from "../../components/basic/InputTextFieldCustom";
import { TextButton } from "../../components/basic/TextButton";
import { Colors } from "../../utils/_colors";

export const ConfirmEmailScreen = () => {
  const authService = useContext(AuthServiceContext)!;
  const dbService = useContext(DbServiceContext)!;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: effectTsResolver(emailConfirmationSchema),
    defaultValues: {
      email: "",
      confirmationCode: "",
    },
  });

  const [waiting, setWaiting] = React.useState(false);
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);

  return (
    <Background>
      <AuthAppBar />
      <View className="h-14" />
      <View className="flex-1 px-4 pb-4">
        <AuthHeader
          title="Confirm Email"
          description="Please enter your email and confirmation code to confirm your email."
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputTextFieldCustom
              label="Email"
              actionText={undefined}
              onActionPress={undefined}
              actionWidget={undefined}
              secureTextEntry={false}
              value={value}
              placeholder="Enter your email"
              keyboardType="email-address"
              onChangeText={onChange}
            />
          )}
          name="email"
        />

        {errors.email && (
          <Text className=" py-2 font-nunito-400 text-sm text-error">
            {errors.email.message}
          </Text>
        )}

        <View className="h-6" />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputTextFieldCustom
              label="Confirmation Code"
              actionText={undefined}
              onActionPress={undefined}
              actionWidget={undefined}
              secureTextEntry={false}
              value={value}
              placeholder="Confirmation code from email"
              onChangeText={onChange}
              keyboardType={undefined}
            />
          )}
          name="confirmationCode"
        />

        {errors.confirmationCode && (
          <Text className=" py-2 font-nunito-400 text-sm text-error">
            {errors.confirmationCode.message}
          </Text>
        )}
        <View className="flex-1" />
        <TextButton
          buttonType={ButtonType.Primary}
          onPress={handleSubmit(async (data) => {
            setWaiting(true);
            try {
              await verifyEmailAccount(data).pipe(
                Effect.provideService(AuthService, authService),
                Effect.provideService(DbService, dbService),
                Effect.catchTags({
                  //AuthError: (_) =>
                  //  Effect.sync(() => {
                  //    showMessage({
                  //      message: "Error authenticating user. Please try again",
                  //    });
                  //  }),
                  //TimeoutException: (_) =>
                  //  Effect.sync(() => {
                  //    showMessage({
                  //      message:
                  //        "Error connecting to server. Please try it later",
                  //    });
                  //  }),
                  //UnknownException: (_) =>
                  //  Effect.sync(() => {
                  //    showMessage({
                  //      message: "Unknown error. Please try it later",
                  //    });
                  //  }),
                  //ParseError: (e) =>
                  //  Effect.sync(() => {
                  //    showMessage({
                  //      message: "Error parsing data. Please try it later",
                  //      type: "warning",
                  //      backgroundColor: Colors.error,
                  //    });
                  //  }),
                }),
                Effect.runPromise
              );

              //Wait 300 ms
              await new Promise((resolve) => setTimeout(resolve, 300));
              router.navigate("/");
            } catch (error) {
              console.error("Error signing in", error);
            }
            setWaiting(false);
          })}
          text="Confirm Email"
        />
        <View className="h-2" />
        <View className="h-2" />
        <View className="flex flex-row items-center justify-center">
          <Text className="font-nunito-500 text-lg text-white">
            Don't have an account?
          </Text>
          <Link replace asChild href="/sign-in/">
            <TouchableOpacity>
              <Text className="ps-2 text-primary84">Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <StatusBar style="auto" backgroundColor={Colors.background13} />
    </Background>
  );
};
