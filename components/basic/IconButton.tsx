import { Sizes } from "@Utils/_sizes";
import { LucideIcon } from "lucide-react-native";
import { TouchableOpacity, View } from "react-native";
import { Colors } from "../../utils/_colors";

interface IconButtonProps {
  Icon: LucideIcon;
  onPress: () => void;
  iconColor?: string;
  size?: number;
}

export const IconButton = ({
  Icon,
  onPress,
  size = Sizes.iconSize24,
  iconColor = Colors.white,
}: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="px-3 py-3">
        <Icon size={size} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
};
