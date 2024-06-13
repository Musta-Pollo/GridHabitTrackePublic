import React from "react";
import HabitProgressChart from "./HabitProgressChart";

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
  console.log("Rendering native");
  return <HabitProgressChart data={data} />;
};

export default HabitProgressChart;
