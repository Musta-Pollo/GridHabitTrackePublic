import Background from "@Components/basic/Background";
import ConfirmationAppBar from "@Components/basic/ConfirmationAppBar";
import ExtraButton from "@Components/basic/ExtraButton";
import { InputCustom } from "@Components/basic/InputCustom";
import { InputTextFieldCustom } from "@Components/basic/InputTextFieldCustom";
import { SelectionButtonType } from "@Components/basic/SelectionButton";
import { SelectionElement } from "@Components/basic/SelectionGrid";
import CancelDialog from "@Components/dialogs/CancelDialog";
import { iconSuggestions } from "@Icons/IconsData";
import { IconElement, IconGrid } from "@Screens/pick-icon/IconGrid";
import { validateHabit } from "@State/types";
import { Colors } from "@Utils/_colors";
import { Sizes } from "@Utils/_sizes";
import { defaultColors } from "@Utils/colors/color-helpers";
import { useElectric } from "@Utils/electro";
import { iconMapper } from "@Utils/icon-mapper";
import {
  createSearchStructure,
  defaultIcons,
  searchIcons,
} from "@Utils/icons/icon-helpers";
import { UniqueSeparatorParamHandler } from "@Utils/navigation";
import { SupabaseContext } from "@Utils/SupabaseContext";
import { router, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { isInteger } from "lodash";
import { Plus } from "lucide-react-native";
import React, { useContext, useEffect, useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import Toast from "react-native-root-toast";
import { useStore } from "state/useStore";
import ColorCard from "./ColorCard";

export default function CreateHabitScreen() {
  const electric = useElectric()!;
  const { session } = useContext(SupabaseContext)!;

  const habitName = useStore((state) => state.createHabit.name);
  const changeName = useStore((state) => state.createHabit.changeName);

  const icon = useStore((state) => state.createHabit.icon);
  const setIcon = useStore((state) => state.createHabit.changeIcon);

  const color = useStore((state) => state.createHabit.color);
  const setColor = useStore((state) => state.createHabit.changeColor);

  const amount = useStore((state) => state.createHabit.amount);
  const setAmount = useStore((state) => state.createHabit.changeAmount);

  const period = useStore((state) => state.createHabit.period);
  const setPeriod = useStore((state) => state.createHabit.changePeriod);

  const notifications = useStore((state) => state.createHabit.notifications);

  const createHabit = useStore((state) => state.createHabit);
  const setHabitType = useStore((state) => state.createHabit.setHabitType);
  const setTeam = useStore((state) => state.createHabit.setTeam);
  const resetNotifications = useStore((state) => state.pickNotifications.reset);
  const toggleCompleter = useStore(
    (state) => state.createHabit.toggleCompleter
  );

  const daysTimeString = useStore((state) =>
    state.createHabit.datesTimeString()
  );

  const searchStructure = useMemo(
    () => createSearchStructure(iconSuggestions),
    [iconSuggestions]
  );

  const suggestions = useMemo(() => {
    return habitName.length > 0
      ? searchIcons(habitName, 30, searchStructure)
      : defaultIcons.slice(0, 30);
  }, [habitName, searchStructure]);

  const suggElemens = useMemo(() => {
    const newSuggestions: [string, number, number][] =
      icon.length != 0 &&
      suggestions.filter((value) => value[0] == icon).length == 0
        ? [[icon, 1, 1], ...suggestions]
        : suggestions;

    return newSuggestions.map((data) => {
      const [name, index] = data;
      const Icon = iconMapper[name];
      return new IconElement(
        icon == name,
        () => {
          setIcon(name);
        },
        name
      );
    });
  }, [suggestions, icon]);

  const deffElements = useMemo(() => {
    const newDefIcons: [string, number, number][] =
      icon.length != 0 &&
      defaultIcons.filter((value) => value[0] == icon).length == 0
        ? [[icon, 1, 1], ...defaultIcons]
        : defaultIcons;

    return newDefIcons
      .filter((value) => value[0] != icon)
      .map((data) => {
        const [name, index] = data;
        const Icon = iconMapper[name];
        return new IconElement(
          icon == name,
          () => {
            setIcon(name);
          },
          name
        );
      });
  }, [suggestions, icon]);

  const teams = ["Team1", "Team2"].map((p) => {
    const isSelected = createHabit.team == p;
    return new SelectionElement(
      isSelected
        ? SelectionButtonType.Selected
        : SelectionButtonType.Unselected,
      () => {
        setTeam(p);
      },
      undefined,
      p
    );
  });
  teams.push(
    new SelectionElement(
      SelectionButtonType.Unselected,
      () => {
        setTeam("Personal");
      },
      <Plus size={Sizes.iconSize24} color={Colors.white60} />,
      undefined
    )
  );

  // Navigation
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [dialogArgs, setDialogArgs] = React.useState<any | undefined>();
  // Effect
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      const createHabit = useStore.getState().createHabit;
      console.log("Before Remove: ", createHabit);
      e.preventDefault();
      if (createHabit.created) {
        console.log("Habit Created - Dispatching");
        navigation.dispatch(e.data.action);
        return;
      }

      setModalVisible(true);
      console.log("Setting dialog args", e.data.action);
      setDialogArgs(e.data.action);

      // navigation.dispatch(e.data.action);
    });
  }, [navigation]);

  const errors = createHabit.submitted ? validateHabit(createHabit) : [];

  return (
    <Background>
      <ConfirmationAppBar
        title="New Habit"
        onConfirm={async () => {
          const res = await createHabit.createHabit(electric, session);
          if (res) {
            router.back();
          } else {
            console.log("Errors encountered");
            try {
              Toast.show("Some fields are missing.", {
                duration: Toast.durations.LONG,

                containerStyle: {
                  borderRadius: 12,
                  backgroundColor: Colors.primary57_20solid,
                  opacity: 0.2,
                },
                textColor: Colors.primary84,
                textStyle: {
                  fontFamily: "Nunito_500Medium",
                },
                position: Toast.positions.TOP + 100,
                opacity: 1,
              });
              console.log("Errors submitted");
            } catch (error) {
              console.error("Error adding item", error);
            }
          }
        }}
        onCancel={() => {
          router.back();
        }}
      />
      <CancelDialog
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onConfirm={() => {
          setModalVisible(false);
          setDialogArgs(undefined);
        }}
        onCancel={() => {
          setModalVisible(false);
          navigation.dispatch(dialogArgs);
        }}
        cancelText="Leave"
        title="Cancel Habit Creation"
        subtitle="Are you sure you want to cancel creating this habit?"
        confirmText="Keep Editing"
      />
      {/* <Toast visible={true}>Thanks for subscribing!</Toast> */}

      <View className="h-2" />
      <ScrollView>
        <View className="h-5" />
        {errors.length > 0 ? (
          <View className="flex flex-col justify-start">
            <View className="justify-start flex flex-row px-3">
              <Text className="text-error font-nunito-700 text-lg">Errors</Text>
            </View>
            <View className="px-3">
              {errors.map((error) => {
                return (
                  <View key={error} className="flex flex-row items-center">
                    <View className="h-1.5 w-1.5 rounded-full bg-error" />
                    <View className="w-2" />
                    <Text
                      key={error}
                      className="text-error font-nunito-400 text-base text-center"
                    >
                      {error}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View className="h-5" />
          </View>
        ) : (
          <View className="h-7" />
        )}
        <View className="px-3">
          <InputTextFieldCustom
            value={habitName}
            label="Name"
            onChangeText={changeName}
            placeholder="Enter name"
          />
          <View className="h-6" />
          <InputTextFieldCustom
            value={createHabit.description}
            label="Description"
            onChangeText={createHabit.setDescription}
            placeholder="Enter description"
          />
          <View className="h-6" />
          <InputCustom
            label="Icon"
            subLabel={
              habitName.length > 0
                ? `Suggested icons for: ${habitName}`
                : "Default Suggestions"
            }
            onPress={() => {}}
            actionWidget={
              <ExtraButton
                onPress={() => {
                  const ph = new UniqueSeparatorParamHandler();
                  router.push("/pick-icon/");
                }}
              >
                <Text className="text-primary84 font-nunito-700 text-sm">
                  More Icons
                </Text>
              </ExtraButton>
            }
          />
        </View>
        <View>
          <IconGrid
            insideScrollView
            iconHolder={suggElemens.length == 0 ? deffElements : suggElemens}
          />
        </View>
        <View className="flex flex-col px-3">
          <View className="h-6" />
          <InputCustom label="Color"></InputCustom>

          <View className="flex flex-row flex-1 gap-3">
            {defaultColors.slice(0, 5).map((c) => {
              return (
                <View className="flex flex-1" key={c}>
                  <ColorCard
                    color={c}
                    isSelected={c == color}
                    onPress={() => {
                      setColor(c);
                    }}
                  />
                </View>
              );
            })}
          </View>
          <View className="h-3" />
          <View className="flex flex-row flex-1 gap-3">
            {defaultColors.slice(5, 10).map((c) => {
              return (
                <View className="flex flex-1" key={c}>
                  <ColorCard
                    color={c}
                    isSelected={c == color}
                    onPress={() => {
                      setColor(c);
                    }}
                  />
                </View>
              );
            })}
          </View>
          <View className="h-6" />
          <View className="flex flex-row gap- pb-4">
            <View className="flex" style={{ flexBasis: "100%" }}>
              <InputTextFieldCustom
                label="Amount"
                value={amount?.toString() ?? ""}
                onChangeText={(text) => {
                  if (text == "") {
                    setAmount(undefined);
                    return;
                  }
                  try {
                    const num = parseInt(text);
                    if (!isNaN(num) && isInteger(num)) {
                      console.log("Setting amount", num.toString());
                      setAmount(num);
                    } else {
                      console.log("Not a number");
                      setAmount(1);
                    }
                  } catch (error) {
                    console.log("Error parsing", error);
                  }
                }}
                keyboardType="numeric"
                placeholder="Amount"
              />
            </View>
            {/*<View className="flex flex-1">
              <InputCustom label="Period" />
              <SelectionGrid
                selections={["Week", "Month"].map((p) => {
                  return {
                    type:
                      p == period
                        ? SelectionButtonType.Selected
                        : SelectionButtonType.Unselected,
                    onPress: () => {
                      setPeriod(p as "Week" | "Month");
                    },
                    text: p,
                  };
                })}
                itemDimension={80}
              />
            </View>*/}
          </View>
          <InputCustom
            label="Notifications"
            onPress={() => {
              resetNotifications(createHabit.notifications);
              router.push("/pick-notifications/");
            }}
          >
            <Text className="font-nunito-400 flex-1 py-0.5 text-lg text-white">
              {daysTimeString}
            </Text>
          </InputCustom>
          {/* <View className="h-6" />
          <Divider />
          <View className="h-6" />
          <InputCustom label="Team" onPress={() => {}} />
          <SelectionGrid
            selections={["Personal", "Team"].map((p) => {
              return {
                type:
                  createHabit.habitType == p
                    ? SelectionButtonType.Selected
                    : SelectionButtonType.Unselected,
                onPress: () => {
                  setHabitType(p as "Personal" | "Team");
                },
                text: p,
              };
            })}
            itemDimension={120}
          />
          <View className="flex flex-col">
            {createHabit.habitType == "Team" && (
              <View className="flex flex-col">
                <View className="h-6" />
                <InputCustom label="Type" onPress={() => {}} />
                <View className="flex flex-row flex-1">
                  <SelectionGrid selections={teams} itemDimension={120} />
                </View>
              </View>
            )}
            {(createHabit.team?.length ?? 0) > 0 && (
              <View className="flex flex-col">
                <View className="h-6" />
                <InputCustom label="Completer" onPress={() => {}} />
                <SelectionGrid
                  selections={["Lucy", "Tom"].map((p) => {
                    const isSelected = createHabit.completers.includes(p);
                    return new SelectionElement(
                      isSelected
                        ? SelectionButtonType.Selected
                        : SelectionButtonType.Unselected,
                      () => {
                        toggleCompleter(p);
                      },
                      undefined,
                      p
                    );
                  })}
                  itemDimension={120}
                />
              </View>
            )}
          </View> */}
        </View>
        <View className="h-12" />

        <StatusBar style="auto" backgroundColor={Colors.background13} />
      </ScrollView>
    </Background>
  );
}
