import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import React, {useContext} from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from 'expo-linear-gradient';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HeaderMenu from "./HeaderMenu";
import Account from "../../screens/Account";
import About from "../../screens/About";


const MainMenu = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const Drawer = createDrawerNavigator();

  const [state, setState] = useContext (AuthContext);
  const handleLogout = async () => {
    setState({token: "", user: null});
    await AsyncStorage.removeItem("@auth");
    alert("Logged Out Successfully");
  };

  return (
    
    <View style={styles.container}>
      {/* Top row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Report Menu")}>
        <LinearGradient
            colors={['#fff', '#fff']} 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
          >
          <FontAwesome5 name="file-alt" style={styles.iconStyle} />
          <Text style={styles.btnText}>Report An Incident</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Bottom row */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Emergency Report")}>
          <LinearGradient
            colors={['#fff', '#fff']} 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
          >
          <FontAwesome5 name="ambulance" style={styles.iconStyle}  />
          <Text style={styles.btnText}>Emergency</Text>
          </LinearGradient>
        </TouchableOpacity>
        </View>
        <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("News And Updates")}>
        <LinearGradient
            colors={['#fff', '#fff']} 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
          >
            <FontAwesome5 name="bullhorn" style={styles.iconStyle}/>
            <Text style={styles.btnText}>News & Updates</Text>
          </LinearGradient>
        </TouchableOpacity>
        </View>
        <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Online Business Application")}>
        <LinearGradient
            colors={['#fff', '#fff']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
          >
            <FontAwesome5 name="user" style={styles.iconStyle}  />
            <Text style={styles.btnText}>Online Business Application</Text>
          </LinearGradient>
        </TouchableOpacity>
        
      
      </View>
      
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("My Reports")}>
        <LinearGradient
            colors={['#fff', '#fff']} 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
          >
            <FontAwesome5 name="list" style={styles.iconStyle}  />
            <Text style={styles.btnText}>My Reports</Text>
          </LinearGradient>
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
    padding: 4,
    marginTop: -5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
  },
  btn: {
    flex: 1,
    marginHorizontal: 2,
    borderRadius: 20,
    shadowOpacity: 0.1,
    shadowColor: '#f56565',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 3,
  },
  gradient: {
    paddingVertical: 33,
    paddingHorizontal: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: '#f59794',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
  },
  iconStyle: {
    marginBottom: 10,
    alignSelf: "center",
    fontSize: 40,
    color: '#f15b5b',
    
  },
  btnText: {
    color: '#f15b5b', 
    fontSize: 17,
    fontFamily: "GeologicaSemiBold",
    textAlign: 'center',
    
  },
});

export default MainMenu;