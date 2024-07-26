import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';

const SubmitButton = ({handleSubmit, btnTitle, loading}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleSubmit}>
    <LinearGradient 
        colors={['#fc9daa', '#f7516d']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.submitBtn}
      >
    <Text style={styles.btnText}>{loading ? "Please Wait..." : btnTitle}</Text>
    </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 25,
  },
    submitBtn:{
      width: 300,
      height: 60,
      borderRadius: 10,
      marginHorizontal: 25,
      marginBottom: 10,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.9,
      shadowRadius: 10,
      elevation: 3,
    },
    btnText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: "GeologicaBold",
      textTransform: "uppercase",
      letterSpacing: 1,
    },

});

export default SubmitButton;