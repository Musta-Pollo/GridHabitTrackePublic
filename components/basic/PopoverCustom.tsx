import { Info } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import Popover from "react-native-popover-view";
import { Colors } from "../../utils/_colors";

interface PopoverCustomProps {
  children?: React.ReactNode;
  text?: string;
}

export const PopoverCustom = ({
  children = undefined,
  text = undefined,
}: PopoverCustomProps) => {
  return (
    <Popover
      animationConfig={{
        duration: 100,
      }}
      backgroundStyle={{
        backgroundColor: Colors.black40,
        borderRadius: 12,
      }}
      popoverStyle={{
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        backgroundColor: Colors.primary31,
      }}
      from={
        <TouchableOpacity>
          <View className="ps-12 py-2">
            <Info size={20} color={Colors.white60} />
          </View>
        </TouchableOpacity>
      }
    >
      {children || (
        <Text className="font-nunito-500 text-lg text-white/80"> {text} </Text>
      )}
    </Popover>
  );
};
