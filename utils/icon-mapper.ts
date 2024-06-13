import * as LucideIcons from "lucide-react-native";

type IconMapper = {
  [key: string]: LucideIcons.LucideIcon;
};

const iconMapper: IconMapper = Object.keys(LucideIcons).reduce(
  (acc, iconName) => {
    if (iconName === "LucideIcon") {
      return acc;
    }

    if (iconName.startsWith("Lucide")) return acc;
    if (iconName.endsWith("Icon")) return acc;

    return {
      ...acc,
      [iconName]: (LucideIcons as any)[iconName],
    };
  },
  {} as IconMapper
);

export { iconMapper };
