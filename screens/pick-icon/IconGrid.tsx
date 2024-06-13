import React, { forwardRef, useCallback } from "react";

import { DefaultSectionT, ListRenderItemInfo, SectionList } from "react-native";
import { FlatGrid, SimpleGrid } from "react-native-super-grid";
import { IconCard } from "./IconCard";

export class IconElement {
  isActive: boolean;
  name: string;
  onPress: () => void;

  constructor(isActive: boolean, onPress: () => void, name: string) {
    this.isActive = isActive;
    this.onPress = onPress;
    this.name = name;
  }
}

interface IconGridProps {
  iconHolder: IconElement[];
  ListHeaderComponent?: React.JSX.Element;
  insideScrollView: boolean;
}
// Special structure for section

export const IconGrid = forwardRef<
  SectionList<IconElement, DefaultSectionT>,
  IconGridProps
>(
  (
    {
      iconHolder,
      ListHeaderComponent,
      insideScrollView = false,
    }: IconGridProps,
    ref
  ) => {
    console.log("IconGrid render");

    const renderItem = useCallback(
      ({ item }: ListRenderItemInfo<IconElement>) => (
        <IconCard
          onPress={item.onPress}
          iconName={item.name}
          isActive={item.isActive}
        />
      ),
      []
    );
    return insideScrollView ? (
      <SimpleGrid
        itemDimension={50}
        style={{ paddingTop: 0 }}
        listKey={"IconGrid"}
        data={iconHolder}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
      />
    ) : (
      <FlatGrid
        itemDimension={50}
        style={{ paddingTop: 0 }}
        numColumns={1}
        data={iconHolder}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
      />
    );
  }
);
