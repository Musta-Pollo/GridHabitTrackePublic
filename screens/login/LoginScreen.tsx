import AuthAppBar from "@Components/auth/AuthAppBar";
import AuthHeader from "@Components/auth/AuthHeader";
import Background from "@Components/basic/Background";
import { effectTsResolver } from "@hookform/resolvers/effect-ts";
import { loginUser } from "@Services/auth_functions";
import { AuthService } from "@Services/AuthService";
import { AuthServiceContext } from "@Services/AuthServiceContext";
import { DbServiceContext } from "@Services/DbServiceContext";
import { DbService } from "@Services/DdServices";
import { SupabaseContext } from "@Utils/SupabaseContext";
import { ButtonType } from "components/basic/Button";
import { Effect } from "effect";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { loginSchema } from "schemas/login_schema";
import { InputTextFieldCustom } from "../../components/basic/InputTextFieldCustom";
import { PopoverCustom } from "../../components/basic/PopoverCustom";
import { TextButton } from "../../components/basic/TextButton";
import { Colors } from "../../utils/_colors";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const { supabase } = useContext(SupabaseContext)!;
  const [password, setPassword] = useState("");

  const authService = useContext(AuthServiceContext)!;
  const dbService = useContext(DbServiceContext)!;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: effectTsResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  console.log("Login errors: ", errors);
  const [waiting, setWaiting] = React.useState(false);
  return (
    <Background>
      <AuthAppBar />
      <View className="flex-1 px-4 pb-4">
        <View className="h-14" />
        <AuthHeader
          title="Log In"
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
              value={value}
              actionText={undefined}
              placeholder="Enter your email"
              keyboardType="email-address"
              secureTextEntry={false}
              onChangeText={onChange}
              onActionPress={undefined}
              actionWidget={<PopoverCustom text="Enter your email" />}
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
              label="Password"
              value={value}
              actionWidget={undefined}
              keyboardType={undefined}
              actionText="Forgot Password?"
              placeholder="Enter your email"
              onActionPress={() => {
                router.push("/forget-password/");
              }}
              secureTextEntry={true}
              onChangeText={onChange}
            />
          )}
          name="password"
        />

        {errors.password && (
          <Text className=" py-2 font-nunito-400 text-sm text-error">
            {errors.password.message}
          </Text>
        )}

        <View className="flex-1" />
        <TextButton
          buttonType={ButtonType.Primary}
          onPress={handleSubmit(async (data) => {
            setWaiting(true);
            console.log("Log in");
            try {
              await loginUser(data).pipe(
                Effect.provideService(AuthService, authService),
                Effect.provideService(DbService, dbService),
                Effect.catchTags({
                  //TimeoutException: (_) => Effect.sync(() => {}),
                  //UnknownException: (_) => Effect.sync(() => {}),
                  //ParseError: (e) =>
                  //  Effect.sync(() => {
                  //    console.log("ParseError", e);
                  //  }),
                }),
                Effect.runPromise
              );

              //Wait 300 ms
              await new Promise((resolve) => setTimeout(resolve, 300));
              router.navigate("/");
              console.log("Logged in");
            } catch (error) {
              console.error("Error signing in", error);
            }
            setWaiting(false);
          })}
          text="Login"
        />
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
