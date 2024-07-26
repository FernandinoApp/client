import React from "react";
import { View, Text, StyleSheet, ImageBackground, ScrollView, Dimensions } from "react-native";
import { WebView } from "react-native-webview";

const { width } = Dimensions.get('window');

const CityCollege = () => {
  return (
    <ImageBackground source={require("./../assets/assets_cover.png")} 
                style={{ flex: 1, resizeMode: "stretch" }} >
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.card}>
        <Text style={styles.subtitle}>City College Website</Text>
        <WebView
          source={{ uri: 'https://citycollegeofsanfernando.edu.ph/' }}
          style={styles.webview}
          userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
          scrollEnabled={true}
          nestedScrollEnabled={true}
          androidLayerType="hardware"
          
        />
    </View>
      
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#f1f5f9",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    width: width * 0.9,
    alignItems: "center",
    shadowColor: '#f56565',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 3,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  webview: {
    width: width * 0.85,
    height: 500,
    
  },
});

export default CityCollege;