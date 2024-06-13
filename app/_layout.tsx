import {
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_500Medium,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic,
  useFonts,
} from "@expo-google-fonts/nunito";
import "react-native-get-random-values";
import { RootSiblingParent } from "react-native-root-siblings";
// Import your global CSS file
import { Slot, SplashScreen } from "expo-router";
import "react-native-get-random-values";
import "../global";
import "../global.css";
// Import your global CSS file
import { DataChangeMonitor } from "@Components/basic/ListeningForChanges";
import { AuthServiceContext } from "@Services/AuthServiceContext";
import { DbServiceContext } from "@Services/DbServiceContext";
import { Session } from "@supabase/supabase-js";
import {
  DEBUG_MODE,
  ELECTRIC_URL,
  initExpoSQLite,
  initWaSQLite,
  SUPABASE_URL,
} from "@Utils/config";
import { ElectricProvider } from "@Utils/electro";
import { SupabaseContext } from "@Utils/SupabaseContext";
import { Effect } from "effect";
import { ElectricConfig } from "electric-sql/config";
import { genUUID } from "electric-sql/util";
import Constants from "expo-constants";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Platform } from "react-native";
import FlashMessage from "react-native-flash-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Electric } from "src/generated/client";
import "../global.css";

SplashScreen.preventAutoHideAsync();

console.log("Supabase URL: ", SUPABASE_URL);
console.log("Electric URL: ", ELECTRIC_URL);

// Supabase
//const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
//  auth: {
//    autoRefreshToken: true,
//    persistSession: true,
//    storage: Platform.OS === "web" ? AsyncStorage : new LargeSecureStore(),
//    detectSessionInUrl: false,
//  },
//});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function Layout() {
  const [electric, setElectric] = useState<Electric>();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [connected, setConnected] = useState(false);
  //Notifications
  const [expoPushToken, setExpoPushToken] = useState("");
  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>(
    []
  );
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined);
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync().then(
      (token) => token && setExpoPushToken(token)
    );

    if (Platform.OS === "android") {
      Notifications.getNotificationChannelsAsync().then((value) =>
        setChannels(value ?? [])
      );
    }
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  console.log("Starting app");
  //useEffect(() => {
  //  supabase.auth.getSession().then(({ data: { session: sessionNew } }) => {
  //    console.log("Session: ", session);
  //    if (loaded) router.navigate("/home/");
  //    if (session?.user.id !== sessionNew?.user.id) setSession(sessionNew);
  //  });

  //  const {
  //    data: { subscription },
  //  } = supabase.auth.onAuthStateChange((_event, newSession) => {
  //    if (session?.user.id !== newSession?.user.id) {
  //      // if (!session) {
  //      //   setLoading(true)
  //      // }

  //      setTimeout(() => {
  //        // There is an issue with clock drift and the JWT being invalid
  //        // this is a hackey workaround for now
  //        setSession(newSession);
  //        if (loaded) router.navigate("/home/");
  //        console.log("New Session: ", newSession);
  //      }, 1500);
  //    } else {
  //      setSession(newSession);
  //    }
  //  });

  //  return () => subscription.unsubscribe();
  //}, []);

  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,

    Nunito_400Regular_Italic,
    Nunito_500Medium,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const config: ElectricConfig = {
        debug: DEBUG_MODE,

        url: ELECTRIC_URL,
      };

      console.log("Connecting to Electric");

      try {
        let electric;
        if (Platform.OS === "web") {
          electric = await initWaSQLite("electric6", config);
        } else {
          electric = await initExpoSQLite("electric6", config);
        }
        console.log("Electric: ", electric);
        setElectric(electric);
        console.log("Session root: ", session);
        //try {
        //  if (session) {
        //    const currentUser = await supabase.auth.getUser();
        //    console.log("Current User: ", currentUser);
        //    const initToken = await getSupabaseJWT(supabase);
        //    console.log("Initial Token: ", initToken);
        //    await electric.connect(initToken);
        //    setConnected(true);
        //    console.log("Connected");
        //  } else {
        //    setConnected(false);
        //  }
        //} catch (e) {
        //  console.error(e);
        //}
      } catch (error) {
        console.log("Error: ", error);
      }
      console.log("Electrifing");
      if (!isMounted) {
        return;
      }
    };

    init();

    return () => {
      isMounted = false;
    };
  }, [session?.user.id]);

  if (!fontsLoaded) {
    return null;
  }

  if (electric === undefined) {
    console.log("Loading");

    return null;
  }
  if (!loaded) setLoaded(true);

  console.log("Logged In");

  //if (session === null) return <Redirect href="/(authentication)/login/" />;
  const screenWidth = Dimensions.get("window").width;
  return (
    <>
      <RootSiblingParent>
        <AuthServiceContext.Provider
          value={{ session: session, connected, supabase: undefined }}
        >
          <DbServiceContext.Provider
            value={{ electric: electric, genUUID: Effect.sync(genUUID) }}
          >
            <SupabaseContext.Provider
              value={{
                supabase: undefined,
                session,
                connected,
              }}
            >
              <ElectricProvider db={electric}>
                {/*<ScrollView
                  className={
                    screenWidth > 400
                      ? "self-center w-[400px] flex-1"
                      : "flex-1"
                  }
                >*/}
                <GestureHandlerRootView style={{ flex: 1 }}>
                  <Slot />
                </GestureHandlerRootView>

                <DataChangeMonitor />
                {/*</ScrollView>*/}
              </ElectricProvider>
            </SupabaseContext.Provider>
          </DbServiceContext.Provider>
        </AuthServiceContext.Provider>
      </RootSiblingParent>
      <FlashMessage position="top" style={{ paddingTop: 48 }} />
    </>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: "Here is the notification body",
      data: { data: "goes here", test: { test1: "more data" } },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      //alert("Failed to get push token for push notification!");
      return;
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    // EAS projectId is used here.
    try {
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;
      if (!projectId) {
        throw new Error("Project ID not found");
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log(token);
    } catch (e) {
      token = `${e}`;
    }
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}
