import { View, Text, StyleSheet, ImageBackground, ScrollView } from "react-native";
import React, {useContext} from "react";
import { AuthContext } from "../context/authContext";
import { PostContext } from "../context/postContext";

import MainMenu from "../components/Menus/MainMenu";

const Home = () => {
    //global state
    const [posts] = useContext(PostContext);
  return (
    <ImageBackground source={require("./../assets/assets_cover.png")} 
    style={{ flex: 1, resizeMode: "stretch" }} >
    <View style={styles.container}>
      <ScrollView>
      <MainMenu />
      </ScrollView>
      <View>
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

export default Home;