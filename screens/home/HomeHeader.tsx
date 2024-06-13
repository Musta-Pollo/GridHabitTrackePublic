// interface CustomHeaderProps {
//     props: NativeStackHeaderProps
// }

import { IconButton } from "@Components/basic/IconButton";
import { AuthServiceContext } from "@Services/AuthServiceContext";
import { router } from "expo-router";
import {
  ArrowDownUpIcon,
  PlusCircle,
  UserRound,
  UserRoundMinus,
  UserRoundX,
} from "lucide-react-native";
import { useContext } from "react";
import { View } from "react-native";
import { useStore } from "state/useStore";
import { LogoText } from "../../components/basic/LogoText";

export const HomeHeader = () => {
  const resetCreateHabit = useStore((state) => state.createHabit.reset);
  const authService = useContext(AuthServiceContext)!;
  const icon = () => {
    if (authService.connected) {
      return UserRound;
    }
    if (authService.session !== null) {
      return UserRoundMinus;
    }
    return UserRoundX;
  };
  return (
    <View className="flex flex-row justify-between">
      <View className="">
        {/*//FIXME: disabling login for now*/}
        <IconButton
          Icon={ArrowDownUpIcon}
          iconColor={"white"}
          onPress={() => {
            router.navigate("/reorder-habits");
          }}
        />
        {/*<IconButton
          Icon={icon()}
          iconColor={`${OFFLINE_ONLY ? "transparent" : "white"}`}
          onPress={() => {
            if (OFFLINE_ONLY) return;
            console.log("pressed");
            router.navigate("/login");
          }}
        />*/}
      </View>
      <LogoText />
      <IconButton
        Icon={PlusCircle}
        onPress={async () => {
          resetCreateHabit();
          router.push("/create-habit/");
        }}
      />
    </View>
  );
};
