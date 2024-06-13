import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import React, { ComponentType } from "react";
import { Text } from "react-native";
interface HabitProgressChartWrapperProps {
  data: {
    value: number;
    color: string;
    label: string;
  }[];
}

const HabitProgressChartWrapper: React.FC<HabitProgressChartWrapperProps> = ({
  data,
}) => {
  console.log("Rendering web");
  return (
    <WithSkiaWeb
      getComponent={async () => {
        const { default: DefaultComponent } = await import(
          "./HabitProgressChart"
        );
        const Component: ComponentType<any> = (props) => (
          <DefaultComponent data={data} />
        );
        return { default: Component };
      }}
      fallback={<Text style={{ textAlign: "center" }}>Loading Skia...</Text>}
    />
  );
};

export default HabitProgressChartWrapper;
