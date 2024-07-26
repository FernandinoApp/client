import { View, Text, StyleSheet, TextInput, Alert, ScrollView, ImageBackground, Image, Button } from "react-native";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from "axios";

const Login = ({ navigation }) => {
  const [state, setState] = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!email || !password) {
        Alert.alert("Please Fill All Fields");
        setLoading(false);
        return;
      }

      const { data } = await axios.post("/auth/login", { email, password });

      if (data.user.rejected) {
        Alert.alert('Your account was rejected');
        setLoading(false);
        return;
      }

      if (!data.user.accepted && !data.user.rejected) {
        Alert.alert("Your account wasn't accepted yet");
        setLoading(false);
        return;
      }

      setState(data);
      await AsyncStorage.setItem("@auth", JSON.stringify(data));
      navigation.navigate("Home");
      console.log("Login Data==>", { email, password });
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : 'An error occurred during login';
      Alert.alert(errorMessage);
      setLoading(false);
      console.log(error);
    }
  };
  
  // temp function to check local storage data
  const getLocalStorageData = async () => {
    let data = await AsyncStorage.getItem("@auth");
    console.log("Local Storage ==> ", data);
  };
  getLocalStorageData();

  return (
    <ImageBackground source={require("./../../assets/assets_cover.png")} style={{ flex: 1, resizeMode: "stretch" }}>
      <View style={styles.headerContainer}>
        <Image
          source={require("./../../assets/company-64x64.png")}
          style={styles.headerImage}
          alt="City of San Fernando Logo"
        />
        <Text style={styles.headerText}>City of San Fernando</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.container}>
          <Image
            source={require("./../../assets/slogan.png")}
            style={styles.sloganImage}
            alt="FERNANDINO KA, Kayabe Ka!"
          />
          <Text style={styles.appTitle}>FERNANDINO APP</Text>
          <View style={styles.form}>
            <View style={styles.pageTitleContainer}>
              <FontAwesome name="user" style={styles.icon} />
              <Text style={styles.pageTitle}>Login</Text>
            </View>
            <View style={styles.inputContainer}>
              <InputBox
                placeholder="Email Address"
                keyboardType="email-address"
                autoComplete="email"
                value={email}
                setValue={setEmail}
              />
              <InputBox
                placeholder="Password"
                secureTextEntry={true}
                autoComplete="password"
                value={password}
                setValue={setPassword}
              />
            </View>
            <SubmitButton
              btnTitle="Login"
              loading={loading}
              handleSubmit={handleSubmit}
            />
            <Text style={styles.linkText}>
              Don't have an account?{" "}
              <Text
                style={styles.link}
                onPress={() => navigation.navigate("Register")}
              >
                Register now.
              </Text>{" "}
              {'\n\n'}
              <Text
                style={styles.linkforgotpw}
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                Forgot Password?
              </Text>{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  headerImage: {
    height: 28,
    width: 28,
    marginRight: 10,
    marginTop: 30,
  },
  headerText: {
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "GeologicaSemiBold",
    color: "#000",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginTop: 30,
  },
  scrollview: {
    paddingTop: 100,
    paddingBottom: 250,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  sloganImage: {
    width: 155,
    height: 40,
    marginBottom: 10,
    marginTop: 50,
    alignSelf: 'center',
  },
  appTitle: {
    fontSize: 35,
    color: "white",
    fontWeight: "900",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 30,
    textShadowColor: "rgba(249, 45, 79, 0.75)",
    textShadowOffset: { width: -3, height: 2 },
    textShadowRadius: 10,
    fontFamily: "GeologicaBold",
  },
  form: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '91%',
    height: '75%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  pageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    marginTop: 10,
    marginBottom: 20,
  },
  icon: {
    fontSize: 24, // 3xl equivalent
    color: '#808080',
    marginRight: 7,
    marginLeft: 4,
  },
  pageTitle: {
    fontSize: 25, // 2xl equivalent
    color: '#808080',
    fontWeight: '200', // light font
    fontFamily: "GeologicaSemiBold",
    marginHorizontal: 3,
  },
  inputContainer: {
    marginTop: -20,
  },
  linkText: {
    textAlign: "center",
    color: "dodgerblue",
  },
  link: {
    textDecorationLine: "underline",
  },
  linkforgotpw: {
    color: "dodgerblue",
  },
});

export default Login;
