import { View, Text } from "react-native";
import React from "react";
import { AuthProvider } from "./context/authContext";
import ScreenMenu from "./components/Menus/ScreenMenu";
import { PostProvider } from "./context/postContext";
import { ReportsProvider } from './context/ReportsContext';
import { EmergenciesProvider } from './context/EmergenciesContext';


const RootNavigation = () => {
  return (
    <AuthProvider>
          <EmergenciesProvider>

          <ReportsProvider>

    <PostProvider>

        <ScreenMenu />
    </PostProvider>
    </ReportsProvider>
    </EmergenciesProvider>

    </AuthProvider>
  );
};

export default RootNavigation;