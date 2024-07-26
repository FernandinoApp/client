import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from '../../components/Forms/SubmitButton';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post('/auth/forgot-password', { email });
      Alert.alert('Check your email for the verification code.');
      navigation.navigate("ResetPassword", { email });
    } catch (error) {
      Alert.alert('Error', error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

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
              <Text style={styles.pageTitle}>Forgot Password</Text>
            </View>
            <View style={styles.inputContainer}>
              <InputBox
                placeholder="Email Address"
                keyboardType="email-address"
                autoComplete="email"
                value={email}
                setValue={setEmail}
                borderColor="#d1d5db"
              />
              <SubmitButton
                btnTitle="Email Password Reset Code"
                loading={loading}
                handleSubmit={handleSubmit}
              />
              <Text style={styles.helperText}>
              Let us know your email address and we will email you a password reset link that will allow you to choose a new one.
              </Text>
            </View>
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
    scrollview: {
      paddingTop: 100,
      paddingBottom: 180,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
    },
    form: {
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      width: '91%',
      height: '70%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    pageTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 3,
      marginTop: 5,
    },
    icon: {
        fontSize: 24, // 3xl equivalent
        color: '#808080', 
        marginRight: 7,
        marginLeft: 2,
    },
    pageTitle:{
        fontSize: 25, // 2xl equivalent
        color: '#808080',
        fontWeight: '200', // light font
        fontFamily: "GeologicaSemiBold",
        marginHorizontal: 3,
    },
    inputContainer: {
      marginTop: 1,
    },
    helperText: {
      textAlign: 'center',
      color: '#808080',
      marginTop: 10,
      fontSize: 11,
      fontFamily: 'GeologicaRegular',
  },
  })
  
  export default ForgotPassword;