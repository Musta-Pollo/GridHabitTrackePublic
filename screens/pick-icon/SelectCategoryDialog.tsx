import React from "react";

import Divider from "@Components/basic/Divider";
import { MyPopup } from "@Components/basic/MyPopup";
import { SelectionButtonType } from "@Components/basic/SelectionButton";
import { SelectionTextButton } from "@Components/basic/SelectionTextButton";
import { Colors } from "@Utils/_colors";
import { Sizes } from "@Utils/_sizes";
import { iconMapper } from "@Utils/icon-mapper";
import { categoriesList } from "@Utils/icons/icon-helpers";
import { capitalize } from "lodash";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

interface SelectCategoryDialogProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  searchStructure: {
    [key: string]: [string, number, number][];
  };

  onCategorySelected: (category: string) => void;
}

export default function SelectCategoryDialog({
  modalVisible,
  setModalVisible,
  searchStructure,
  onCategorySelected,
}: SelectCategoryDialogProps) {
  return (
    <MyPopup visible={modalVisible}>
      <View className="bg-background13 h-3/4 w-11/12 p-3 rounded-3xl align-middle self-center justify-center">
        <Text className="text-white text-xl font-nunito-800 text-center">
          Select Category
        </Text>
        <View className="h-4" />
        <FlatList
          className="flex flex-1"
          data={categoriesList.sort()}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View className="h-4" />}
          renderItem={({ item }) => {
            const [iconName] = searchStructure[item][1];
            const Icon = iconMapper[iconName];
            return (
              <TouchableOpacity
                onPress={() => {
                  onCategorySelected(item);
                }}
              >
                <View className="bg-primary57/5 py-3 px-3 rounded-xl justify-center items-center flex flex-row">
                  <Icon color={Colors.white60} size={Sizes.iconSize20} />
                  <View className="w-3" />
                  <Text className="text-white/60 text-lg font-nunito-800 text-center">
                    {capitalize(item)}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View className="h-2" />
        <Divider />
        <View className="h-2" />
        <SelectionTextButton
          text="Cancel"
          buttonType={SelectionButtonType.Unselected}
          onPress={() => setModalVisible(false)}
        />
      </View>
    </MyPopup>
  );
}
