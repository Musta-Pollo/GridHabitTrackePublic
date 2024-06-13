import Background from "@Components/basic/Background";
import ConfirmationAppBar from "@Components/basic/ConfirmationAppBar";
import { InputCustom } from "@Components/basic/InputCustom";
import { SelectionButtonType } from "@Components/basic/SelectionButton";
import { SelectionGrid } from "@Components/basic/SelectionGrid";
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { WeekDays } from "@State/types";
import { router } from "expo-router";
import { capitalize } from "lodash";
import React, { useState } from "react";
import { Text, useColorScheme, View } from "react-native";
import { useStore } from "state/useStore";
export default function PickNotificationsScreen() {
  const setNotifications = useStore(
    (state) => state.createHabit.setNotifications
  );
  const notifications = useStore(
    (state) => state.pickNotifications.notifications
  );
  const timeString = useStore((state) => state.pickNotifications.timeString());
  const setNotificationTime = useStore(
    (state) => state.pickNotifications.setNotificationTime
  );

  const setAllNotificationDays = useStore(
    (state) => state.pickNotifications.setAllNotificationDays
  );

  const toggleNotificationDay = useStore(
    (state) => state.pickNotifications.toggleNotificationDay
  );

  const showMode = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      display: "spinner",
      mode: "time",
      is24Hour: true,
    });
  };

  const [show, setShow] = useState(false);

  // let colorScheme = useThemePreference();
  // console.log("Color scheme2: ", colorScheme);
  console.log("Theme: ", useColorScheme());

  return (
    <Background>
      <ConfirmationAppBar
        title="Notifications"
        onConfirm={() => {
          setNotifications(useStore.getState().pickNotifications.notifications);
          router.back();
        }}
      />
      <View className="h-12" />
      <View className="flex flex-col flex-1 px-3">
        <InputCustom
          label={"Days"}
          actionText={"Select All"}
          onActionPress={() => {
            setAllNotificationDays(true);
          }}
        />
        <SelectionGrid
          selections={[
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ].map((p) => {
            return {
              type: notifications.weekDays[p as keyof WeekDays]
                ? SelectionButtonType.Selected
                : SelectionButtonType.Unselected,
              onPress: () => {
                toggleNotificationDay(p as keyof WeekDays);
              },
              text: capitalize(p).substring(0, 3),
            };
          })}
          itemDimension={100}
        />
        <View className="h-6" />
        <InputCustom
          label="Time"
          onPress={() => {
            setShow(true);
          }}
        >
          <Text className="font-nunito-400 flex-1 py-0.5 text-lg text-white">
            {timeString}
          </Text>
        </InputCustom>
        {show && (
          <RNDateTimePicker
            positiveButton={{ label: "OK", textColor: "#AFB2FF" }}
            negativeButton={{ label: "CANCEL", textColor: "#7E7E7E" }}
            style={{
              backgroundColor: "#000000",
              borderRadius: 26,
            }}
            // className="rounded-s-xl"
            mode="time"
            display="spinner"
            themeVariant="dark"
            value={notifications.time}
            minuteInterval={5}
            onChange={(event, date) => {
              setShow(false);
              if (event.type == "set" && date instanceof Date) {
                setNotificationTime(date);
              }
            }}
          />
        )}
      </View>
    </Background>
  );
}
