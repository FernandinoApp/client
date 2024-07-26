import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LinearGradient from "react-native-linear-gradient";

const HomeMenu = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      {/* Top row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Emergency")}>
          <FontAwesome5 name="home" style={styles.iconStyle} />
          <Text>Traffic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Emergency")}>
          <FontAwesome5 name="plus-square" style={styles.iconStyle}  />
          <Text>Waste Management</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Emergency")}>
          <FontAwesome5 name="plus-square" style={styles.iconStyle}  />
          <Text>Engineering</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Emergency")}>
          <FontAwesome5 name="plus-square" style={styles.iconStyle}  />
          <Text>Stray Animals</Text>
        </TouchableOpacity>
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
  },
  btn: {
    flex: 1,
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#ffffff",
    marginHorizontal: 5,
    height: 150,
     // Adjust as needed
  },
});

export default HomeMenu;
