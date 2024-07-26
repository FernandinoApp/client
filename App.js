import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import RootNavigation from "./navigation";

SplashScreen.preventAutoHideAsync();

const loadFonts = async () => {
  await Font.loadAsync({
    GeologicaBold: require("./assets/Geologica-Bold.ttf"),
    GeologicaSemiBold: require("./assets/Geologica-SemiBold.ttf"),
    GeologicaRegular: require("./assets/Geologica-Regular.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // This can be any loading indicator you prefer
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <RootNavigation />
    </NavigationContainer>
  );
};