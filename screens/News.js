import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import FooterMenu from "../components/Menus/FooterMenu";
import WebView from "react-native-webview";

const News = () => {
  return (
    <ImageBackground
      source={require("./../assets/assets_cover.png")} // Change to your image path
      style={{ flex: 1, resizeMode: "stretch" }}
    >
      <View style={styles.container}>
        <WebView
          source={{ uri: "https://cityofsanfernando.gov.ph/" }}
          style={{ flex: 1 }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "space-between",
    marginTop: 40,
  },
});

export default News;
