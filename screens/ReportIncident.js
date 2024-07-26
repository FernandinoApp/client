// doesn't work

import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import React, {useContext} from "react";
import { AuthContext } from "../context/authContext";
import FooterMenu from "../components/Menus/FooterMenu";
import { PostContext } from "../context/postContext";
import PostCard from "../components/PostCard";
import HomeMenu from "../components/HomeMenu";
import MainMenu from "../components/Menus/MainMenu";
import ReportMenu from "../components/ReportMenu";

const ReportIncident = () => {
    //global state
    const [posts] = useContext(PostContext);
  return (
    <ImageBackground source={require("./../assets/assets_cover.png")} 
    style={{ flex: 1, resizeMode: "stretch" }} >
    <View style={styles.container}>
      <ScrollView>
      <ReportMenu />
      </ScrollView>
      <View>
      <FooterMenu />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "space-between",
  },
})

export default ReportIncident;