import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="">Settings</Text>
      <Pressable onPress={() => router.back()}>
        <Text className="text-red-500">Back</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
