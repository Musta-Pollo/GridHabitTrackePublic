import React from "react";
import { Dimensions, ImageBackground, View } from "react-native";

interface BackgroundProps {
  children: React.ReactNode;
  isRootLayout?: boolean;
}

export default function Background({
  children,
  isRootLayout,
}: BackgroundProps) {
  const screenWidth = Dimensions.get("window").width;
  if (screenWidth > 400) {
    return (
      <View className="bg-background19 flex flex-1 flex-row justify-center py-6">
        <View
          className={` ${
            isRootLayout ? "flex-1" : ""
          }  mx-auto bg-background13 flex flex-1 max-w-[400px] overflow-hidden rounded-2xl`}
        >
          <ImageBackground
            source={require("@Assets/background-texture.png")}
            resizeMode="cover"
            className="flex flex-1 flex-col bg-background13"
          >
            <View className="h-10" />

            {children}
          </ImageBackground>
        </View>
      </View>
    );
  }
  return (
    //<SafeAreaView className="flex-1">
    <ImageBackground
      source={require("@Assets/background-texture.png")}
      resizeMode="cover"
      className="flex flex-1 flex-col bg-background13"
    >
      <View className="h-10" />

      {children}
    </ImageBackground>
    //</SafeAreaView>
  );
}
