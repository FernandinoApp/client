import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const MenuButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.menuButton}
      onPress={() => navigation.navigate('Account')}
    >
      <FontAwesome5 name="user-edit" color="black" style={styles.iconStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    marginLeft: 15,
  },
  iconStyle: {
    fontSize: 20,
  },
});

export default MenuButton;