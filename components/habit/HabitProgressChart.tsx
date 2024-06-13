import React from "react";
import { Pie, PolarChart } from "victory-native";

interface HabitProgressChartProps {
  data: {
    value: number;
    color: string;
    label: string;
  }[];
}

const HabitProgressChart: React.FC<HabitProgressChartProps> = ({ data }) => {
  return (
    <PolarChart
      data={data} // 👈 specify your data
      labelKey={"label"} // 👈 specify data key for labels
      valueKey={"value"} // 👈 specify data key for values
      colorKey={"color"} // 👈 specify data key for color
    >
      <Pie.Chart innerRadius={14} />
    </PolarChart>
  );
};

export default HabitProgressChart;
