import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HeaderMenu = () => {
  const [state, setState] = useContext(AuthContext);

  //logout
  const handleLogout = async () => {
    setState({ token: "", user: null });
    await AsyncStorage.removeItem("@auth");
    alert("Logged Out Successfully");
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <FontAwesome5
          name="sign-out-alt"
          color={"red"}
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "space-between",
  },
  iconStyle: {
    alignSelf: "center",
    fontSize: 25,
    marginRight: 10,
    marginTop: 3,
  },
});

export default HeaderMenu;
