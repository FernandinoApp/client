// report an incident buttons design (icons)

import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import LinearGradient from "react-native-linear-gradient";

const ReportMenu = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <ImageBackground source={require("./../assets/assets_cover.png")} style={{ flex: 1, resizeMode: "stretch" }} >
    <View style={styles.container}>
        {/* Top row */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Report Traffic")} style={styles.btn}>
            <View style={styles.buttonContent}>
              <FontAwesome5 name="car" style={styles.iconStyle} />
              <Text style={styles.btnText}>Traffic</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Report Waste")} style={styles.btn}>
            <View style={styles.buttonContent}>
              <FontAwesome5 name="trash-alt" style={styles.iconStyle} />
              <Text style={styles.btnText}>Waste Management</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Bottom row */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate("Report Engineer")} style={styles.btn}>
            <View style={styles.buttonContent}>
              <FontAwesome5 name="tools" style={styles.iconStyle} />
              <Text style={styles.btnText}>Engineering</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Report Animals")} style={styles.btn}>
            <View style={styles.buttonContent}>
              <FontAwesome5 name="paw" style={styles.iconStyle} />
              <Text style={styles.btnText}>Stray Animals</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -203,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 7,
  },
  btn: {
    marginHorizontal: 7,
    width: 160,
    height: 160,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: '#f56565',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 3,
  },
  buttonContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    fontSize: 50,
    color: '#f15b5b',
  },
  btnText: {
    color: '#f15b5b',
    fontSize: 20,
    fontWeight: '500',
    fontFamily: "GeologicaRegular",
    textAlign: 'center',
  },
});

export default ReportMenu;