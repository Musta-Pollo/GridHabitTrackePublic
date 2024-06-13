import React from "react";
import { View } from "react-native";

export default function CompletionSquare({
  item,
}: {
  item: { count: number; date: string; color: string };
}) {
  return (
    <View
      key={item.date}
      style={{
        backgroundColor: item.color,
      }}
      className="h-4 w-4 rounded"
    />
  );
}
