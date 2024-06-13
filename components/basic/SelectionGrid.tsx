import React, { useCallback } from "react";

import { View } from "lucide-react-native";
import { ListRenderItemInfo } from "react-native";
import { SimpleGrid } from "react-native-super-grid";
import { SelectionButton, SelectionButtonType } from "./SelectionButton";
import { SelectionTextButton } from "./SelectionTextButton";

export class SelectionElement {
  type: SelectionButtonType;
  child?: React.ReactNode;
  text?: string;
  onPress: () => void;

  constructor(
    type: SelectionButtonType,
    onPress: () => void,
    child?: React.ReactNode,
    text?: string
  ) {
    this.type = type;
    this.onPress = onPress;
    this.child = child;
    this.text = text;
  }
}

interface IconGridProps {
  selections: SelectionElement[];
  itemDimension: number;
}
// Special structure for section

export const SelectionGrid = ({ selections, itemDimension }: IconGridProps) => {
  console.log("IconGrid render");

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<SelectionElement>) => {
      if (item.text) {
        return (
          <SelectionTextButton
            onPress={item.onPress}
            text={item.text}
            buttonType={item.type}
            className="py-0.5"
          />
        );
      }
      if (item.child) {
        return (
          <SelectionButton onPress={item.onPress} buttonType={item.type}>
            {item.child}
          </SelectionButton>
        );
      }
      return <View />;
    },
    []
  );
  return (
    <SimpleGrid
      listKey={"SelectionGrid"}
      itemDimension={itemDimension}
      style={{
        margin: -10,
      }}
      spacing={10}
      data={selections}
      renderItem={renderItem}
    />
  );
};
