// emergency buttons design (icons)

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { LinearGradient } from 'expo-linear-gradient';

const EmergencyMenu = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      {/* Top row */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate("Emergency", { category: "Fire"})} style={styles.btn}>
          <View style={styles.buttonContent}>
            <FontAwesome5 name="fire" style={styles.iconStyle} />
            <Text style={styles.btnText}>Fire</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Emergency", { category: "Flood" })} style={styles.btn}>
          <View style={styles.buttonContent}>
            <FontAwesome6 name="house-flood-water" style={styles.iconStyle} />
            <Text style={styles.btnText}>Flood</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Middle row */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate("Emergency", { category: "Crime" })} style={styles.btn}>
          <View style={styles.buttonContent}>
            <FontAwesome5 name="exclamation-triangle" style={styles.iconStyle} />
            <Text style={styles.btnText}>Crime</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Emergency", { category: "Accident" })} style={styles.btn}>
          <View style={styles.buttonContent}>
            <FontAwesome5 name="car-crash" style={styles.iconStyle} />
            <Text style={styles.btnText}>Accident</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Bottom row */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate("Emergency", { category: "Medical" })} style={styles.btn}>
          <View style={styles.buttonContent}>
            <FontAwesome5 name="medkit" style={styles.iconStyle} />
            <Text style={styles.btnText}>Medical</Text>
          </View>
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
    marginTop: 15,
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
    shadowOpacity: 0.8,
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

export default EmergencyMenu;