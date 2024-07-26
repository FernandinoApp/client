import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ImageBackground, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import SubmitButton from '../../components/Forms/SubmitButton';
import { TextInput, useTheme } from 'react-native-paper';

const ResetPassword = ({ route, navigation }) => {
  const theme = useTheme();

  const { email } = route.params;
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post('/auth/reset-password', {
        email,
        token: code,
        newPassword,
      });
      Alert.alert('Password reset successful!');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || 'Something went wrong');
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
              <Text style={styles.pageTitle}>Reset Password</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputBox}
                label="Verification Code"
                value={code}
                onChangeText={(text) => setCode(text)}
                mode="outlined"
                borderColor="#d1d5db"
                required
                theme={{
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary: '#fc9daa',  // Change the primary color to your desired color
                  },
                  roundness: 7,  // Change the border radius to your desired value
                }}
                />
              </View>
              <View style={styles.inputBoxContainer}>
                <TextInput
                  style={styles.inputBox}
                  label="New Password"
                  secureTextEntry
                  value={newPassword}
                  onChangeText={(text) => setNewPassword(text)}
                  mode="outlined"
                  borderColor="#d1d5db"
                  required
                  theme={{
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary: '#fc9daa',  // Change the primary color to your desired color
                  },
                  roundness: 7,  // Change the border radius to your desired value
                }}
                />
              </View>
              <View style={styles.inputBoxContainer}>
                <TextInput
                  style={styles.inputBox}
                  label="Confirm New Password"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                  mode="outlined"
                  borderColor="#d1d5db"
                  required
                  theme={{
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary: '#fc9daa',  // Change the primary color to your desired color
                  },
                  roundness: 7,  // Change the border radius to your desired value
                }}
                />
              </View>
          <SubmitButton
            btnTitle="Reset Password"
            loading={loading}
            handleSubmit={handleSubmit}
          />
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
    },
    headerText: {
      fontSize: 12,
      fontWeight: "600",
      fontFamily: "GeologicaSemiBold",
      color: "#000",
      textTransform: "uppercase",
      letterSpacing: 1.2,
    },
    sloganImage: {
      width: 200, 
      height: 50,
      marginBottom: 10,
      alignSelf: 'center',
    },
    appTitle: {
      fontSize: 37, 
      color: "white",
      fontWeight: "900",
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: 20,
      textShadowColor: "rgba(249, 45, 79, 0.75)",
      textShadowOffset: { width: -3, height: 2 },
      textShadowRadius: 10,
      fontFamily: "GeologicaBold",
    },
    scrollview: {
      paddingTop: 100,
      paddingBottom: 170,
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
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    pageTitleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
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
      fontWeight: '300', // light font
      fontFamily: "GeologicaSemiBold",
      marginHorizontal: 3,
    },
    inputContainer: {
      marginTop: -7,
    },
    inputBoxContainer: {
      marginBottom: 1,
    },
    inputBox: {
      marginBottom: 1,
      marginTop: 5,
    },
})

export default ResetPassword;