import AuthAppBar from "@Components/auth/AuthAppBar";
import AuthHeader from "@Components/auth/AuthHeader";
import Background from "@Components/basic/Background";
import { ButtonType } from "@Components/basic/Button";
import { PopoverCustom } from "@Components/basic/PopoverCustom";
import { effectTsResolver } from "@hookform/resolvers/effect-ts";
import { signInUser } from "@Services/auth_functions";
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
import { showMessage } from "react-native-flash-message";
import { signInSchema } from "schemas/sign_in_schema";
import { InputTextFieldCustom } from "../../components/basic/InputTextFieldCustom";
import { TextButton } from "../../components/basic/TextButton";
import { Colors } from "../../utils/_colors";

export const SignInScreen = () => {
  const authService = useContext(AuthServiceContext)!;
  const dbService = useContext(DbServiceContext)!;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: effectTsResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      nickname: "",
      passwordConfirmation: "",
    },
  });
  const [waiting, setWaiting] = React.useState(false);
  return (
    <Background>
      <AuthAppBar />
      <View className="h-14" />
      <View className="flex-1 px-4 pb-4">
        <AuthHeader
          title="Sign In"
          description="Share habits with friends, gain their support, and unlock new
          achievements."
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
              label="Nickname"
              actionText={undefined}
              onActionPress={undefined}
              actionWidget={
                <PopoverCustom text="It will be used for distinction among your friend buddies." />
              }
              secureTextEntry={false}
              value={value}
              placeholder="Enter your nickname"
              onChangeText={onChange}
              keyboardType={undefined}
            />
          )}
          name="nickname"
        />

        {errors.nickname && (
          <Text className=" py-2 font-nunito-400 text-sm text-error">
            {errors.nickname.message}
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
              label="Password"
              actionText={undefined}
              onActionPress={undefined}
              actionWidget={undefined}
              secureTextEntry={true}
              value={value}
              placeholder="Enter your password"
              onChangeText={onChange}
              keyboardType={undefined}
            />
          )}
          name="password"
        />

        {errors.password && (
          <Text className=" py-2 font-nunito-400 text-sm text-error">
            {errors.password.message}
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
              label="Confirm Password"
              actionText={undefined}
              onActionPress={undefined}
              actionWidget={undefined}
              secureTextEntry={true}
              value={value}
              placeholder="Confirm your password"
              onChangeText={onChange}
              keyboardType={undefined}
            />
          )}
          name="passwordConfirmation"
        />

        {errors.passwordConfirmation && (
          <Text className=" py-2 font-nunito-400 text-sm text-error">
            {errors.passwordConfirmation.message}
          </Text>
        )}
        <View className="flex-1" />
        <TextButton
          buttonType={ButtonType.Primary}
          onPress={handleSubmit(async (data) => {
            console.log("Signing in");
            setWaiting(true);
            try {
              await signInUser(data).pipe(
                Effect.provideService(AuthService, authService),
                Effect.provideService(DbService, dbService),
                Effect.catchTags({
                  //TimeoutException: (_) =>
                  //  Effect.sync(() => {
                  //    console.log("TimeoutException");
                  //  }),
                  //UnknownException: (_) =>
                  //  Effect.sync(() => {
                  //    console.log("UnknownException");
                  //  }),
                  //ParseError: (e) =>
                  //  Effect.sync(() => {
                  //    console.log("ParseError", e);
                  //  }),
                  //AuthError: (e) =>
                  //  Effect.sync(() => {
                  //    console.log("AuthError", e);
                  //  }),
                  //SignInError: (e) =>
                  //  Effect.sync(() => {
                  //    showMessage({
                  //      message:
                  //        "Error signing in. Please try again. Or this could be to a fact that creating of new accounts was disabled.",
                  //      type: "danger",
                  //    });
                  //    console.log("SignInError", e);
                  //  }),
                }),
                Effect.runPromise
              );

              //Wait 300 ms
              await new Promise((resolve) => setTimeout(resolve, 300));
              router.navigate("(authentication)/confirm-email/");
              showMessage({
                message: "Please check your email for the confirmation link",
                type: "success",
              });
            } catch (error) {
              console.error("Error signing in", error);
            }
            setWaiting(false);
          })}
          isWaiting={waiting}
          text="Sign In"
        />
        <View className="h-2" />
        <View className="flex flex-row items-center justify-center">
          <Text className="font-nunito-500 text-base text-white">
            Already have an account?
          </Text>
          <Link replace asChild href="/login/">
            <TouchableOpacity>
              <Text className="ps-2 text-primary84">Log In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <StatusBar style="auto" backgroundColor={Colors.background13} />
    </Background>
  );
};
