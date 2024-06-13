import { IconButton } from "@Components/basic/IconButton";
import { LogoText } from "@Components/basic/LogoText";
import { Colors } from "@Utils/_colors";
import { Link, router } from "expo-router";
import { X } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { usePathname } from "expo-router";
export default function AuthAppBar() {
  //Get current path
  const pathname = usePathname();

  return (
    <View className="flex flex-row justify-between items-center">
      <Link href="/(authentication)/login">
        <IconButton
          Icon={X}
          iconColor={Colors.white60}
          onPress={() => {
            router.back();
          }}
        />
      </Link>
      <View className="flex-1">
        <LogoText />
      </View>
      {pathname !== "/confirm-email" && pathname !== "/already-logged-in" && (
        <Link replace asChild href="/confirm-email/">
          <TouchableOpacity>
            <Text className="ps-2 text-primary84">Confirm</Text>
          </TouchableOpacity>
        </Link>
      )}
      {pathname === "/confirm-email" && (
        <Link replace asChild href="/login/">
          <TouchableOpacity>
            <Text className="ps-2 text-primary84">Log In</Text>
          </TouchableOpacity>
        </Link>
      )}
      <View className="w-5" />
    </View>
  );
}
