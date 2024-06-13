import React, { useCallback, useMemo, useRef } from "react";

import Background from "@Components/basic/Background";
import ConfirmationAppBar from "@Components/basic/ConfirmationAppBar";
import Divider from "@Components/basic/Divider";
import ExtraButton from "@Components/basic/ExtraButton";
import { InputTextFieldCustom } from "@Components/basic/InputTextFieldCustom";
import { IconSuggestion, iconSuggestions } from "@Icons/IconsData";
import { Colors } from "@Utils/_colors";
import { Sizes } from "@Utils/_sizes";
import {
  createSearchStructure,
  defaultIcons,
  searchIcons,
} from "@Utils/icons/icon-helpers";
import { router } from "expo-router";
import debounce from "lodash.debounce";
import { ChevronsUpDown, Search } from "lucide-react-native";
import { SectionList, Text, View } from "react-native";
import { useStore } from "state/useStore";
import { IconElement, IconGrid } from "./IconGrid";
import SelectCategoryDialog from "./SelectCategoryDialog";

function findUndefinedIcons(
  iconSuggestions: IconSuggestion[],
  iconMapper: { [key: string]: any }
) {
  const undefinedIcons: string[] = [];

  iconSuggestions.forEach((iconSuggestion) => {
    if (iconMapper[iconSuggestion.name] === undefined) {
      undefinedIcons.push(iconSuggestion.name);
    }
  });

  return undefinedIcons;
}

export default function PickIconScreen() {
  const habitName = useStore((state) => state.createHabit.name);
  const changeIcon = useStore((state) => state.createHabit.changeIcon);
  const selectedIconInit = useStore((state) => state.createHabit.icon);

  const [searchTerm, setSearchTerm] = React.useState(habitName);
  const [searchTermDeb, setSearchTermDeb] = React.useState(habitName);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedIcon, setSelectedIcon] = React.useState(selectedIconInit);

  const searchText = searchTerm.length > 0 ? searchTerm : habitName;
  console.log("SearchText: " + searchText);
  const searchStructure = useMemo(
    () => createSearchStructure(iconSuggestions),
    [iconSuggestions]
  );
  const sectionsRef = useRef<SectionList>(null);

  const suggestions = useMemo(() => {
    return searchText.length > 0
      ? searchIcons(searchText, 90, searchStructure)
      : [];
  }, [searchText, searchTerm, searchStructure]);

  const debouncedOnChangeText = useCallback(
    debounce((text) => {
      setSearchTermDeb(text);
    }, 300),
    []
  );

  const suggElemens = useMemo(() => {
    console.log("Rebuild Suggestions");
    console.log("Suggestions Len: " + suggestions.length);
    const newSuggestions: [string, number, number][] =
      selectedIcon.length != 0 &&
      suggestions.filter((value) => value[0] == selectedIcon).length == 0
        ? [[selectedIcon, 1, 1], ...suggestions]
        : suggestions;
    console.log("New Suggestions Len: " + newSuggestions.length);
    return newSuggestions.map((data) => {
      const [name, index] = data;
      return new IconElement(
        selectedIcon == name,
        () => {
          setSelectedIcon(name);
        },
        name
      );
    });
  }, [suggestions, selectedIcon]);

  const deffElements = useMemo(() => {
    const newDefIcons: [string, number, number][] =
      selectedIcon.length != 0 &&
      defaultIcons.filter((value) => value[0] == selectedIcon).length == 0
        ? [[selectedIcon, 1, 1], ...defaultIcons]
        : defaultIcons;
    console.log("Default Icons" + newDefIcons);
    return newDefIcons.map((data) => {
      const [name, index] = data;
      return new IconElement(
        selectedIcon == name,
        () => {
          setSelectedIcon(name);
        },
        name
      );
    });
  }, [suggestions, selectedIcon]);

  console.log("Sugelements len:" + suggElemens.length);
  return (
    <Background>
      <ConfirmationAppBar
        title="Pick Icon"
        onConfirm={() => {
          changeIcon(selectedIcon);
          router.back();
        }}
      />
      <View className="h-12" />

      <SelectCategoryDialog
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        searchStructure={searchStructure}
        onCategorySelected={(category) => {
          setSearchTerm(category);
          setModalVisible(false);
        }}
      />

      <View className="pr-3">
        <ExtraButton onPress={() => setModalVisible(true)}>
          <View className="flex flex-row">
            <ChevronsUpDown color={Colors.primary84} size={Sizes.iconSize20} />
            <View className="w-1" />
            <Text className="text-primary84 font-nunito-700 text-sm">
              Category
            </Text>
          </View>
        </ExtraButton>
      </View>
      <View className="h-2" />
      <View className="px-3 flex flex-grow-0">
        <InputTextFieldCustom
          value={searchTerm}
          LeadingIcon={Search}
          label=""
          onChangeText={(text) => {
            setSearchTerm(text);
            debouncedOnChangeText(text);
          }}
          placeholder="Search for an icon"
        />
      </View>
      <View className="h-6" />
      {suggestions.length > 0 ? (
        <View className="flex flex-col flex-1">
          <Text className="text-white/60 font-nunito-400 text-base mx-3">
            Suggestions
          </Text>
          <View className="h-2" />

          <View className="flex flex-1">
            <IconGrid insideScrollView={false} iconHolder={suggElemens} />
          </View>
        </View>
      ) : (
        <View className="flex flex-col flex-1">
          <Text className="text-lg font-nunito-700 text-white text-center py-4">
            No Icons Found :(
          </Text>
          <View className="h-6" />
          <View className="px-3">
            <Divider />
          </View>
          <View className="h-6" />
          <Text className="text-white/60 font-nunito-400 text-base mx-3">
            Default Icons
          </Text>
          <View className="h-2" />
          <View className="flex flex-1">
            <IconGrid insideScrollView={false} iconHolder={deffElements} />
          </View>
        </View>
      )}
    </Background>
  );
}
