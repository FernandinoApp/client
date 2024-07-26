import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import React from 'react';

const About = () => {
  return (
    <ImageBackground source={require('./../assets/assets_cover.png')} style={{ flex: 1, resizeMode: 'stretch' }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.description}>
              This app was developed by Paula Jowaher Pangan and Nina Isabel Sirug. We aim to provide the best experience for our users.
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
});

export default About;
