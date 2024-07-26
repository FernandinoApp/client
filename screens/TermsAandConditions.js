import React from 'react';
import { ScrollView, Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { useTheme } from 'react-native-paper';

const TermsAndConditions = () => {
  const { colors } = useTheme();

  return (
    <ImageBackground
      source={require("./../assets/assets_cover.png")} style={{ flex: 1, resizeMode: "stretch" }}
    >
    <ScrollView contentContainerStyle={styles.scrollview}>
    <View style={styles.headerContainer}>
        <Image
          source={require("./../assets/company-64x64.png")}
          style={styles.headerImage}
          alt="City of San Fernando Logo"
      />
      <Text style={styles.headerText}>City of San Fernando</Text>
      </View>
                  
    <View style={styles.container}>
      <Image
        source={require("./../assets/slogan.png")}
        style={styles.sloganImage}
        alt="FERNANDINO KA, Kayabe Ka!"
      />
      <Text style={styles.appTitle}>Terms and Conditions</Text>
      <View style={[styles.innerContainer, { backgroundColor: colors.background }]}>
        <View style={styles.header}>
          <Text style={[styles.title]}>
            Guidelines and Regulations for Using the Citizens Portal
          </Text>
        </View>
        <View style={styles.contentContainer}>
          {renderSection('Acceptance of Terms', 
            'By accessing this portal, users agree to these Terms of Service, including any specific terms related to individual city services accessed through the portal.')}
          {renderSection('Account Registration', 
            'Registration requirements vary depending on the specific service within the portal. Users are responsible for providing accurate information and maintaining the confidentiality of their account details.')}
          {renderSection('Prohibited Activities', 
            'Users are prohibited from using the portal for unlawful purposes, infringing on rights, or causing harm to the portal or its services.')}
          {renderSection('Content Ownership', 
            'Content within the portal is owned by the City of San Fernando, Pampanga or its respective service providers and is subject to copyright laws.')}
          {renderSection('Disclaimers', 
            'While we strive to ensure reliability, we do not guarantee the uninterrupted availability of the portal or its services and are not liable for any related damages.')}
          {renderSection('Governing Law', 
            'These Terms of Service are governed by applicable laws in the Philippines, including the Data Privacy Act of 2012.')}
          {renderSection('Amendments to Terms', 
            'We reserve the right to amend these terms. Continued use of the portal after such changes constitutes acceptance of the new terms.')}
        </View>
      </View>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const renderSection = (title, content) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionContent}>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: 0,
    width: "110%",
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
    flexGrow: 1,
    padding: 16,
  },
  sloganImage: {
    width: 155, 
    height: 40,
    marginBottom: 15,
    marginTop: 90,
    alignSelf: 'center',
  },
  appTitle: {
    fontSize: 28, 
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
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    marginBottom: -5,
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    color: '#f15b5b',
    fontSize: 24,
    fontFamily: "GeologicaBold",
    textAlign: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    fontFamily: "GeologicaSemiBold",
  },
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "GeologicaRegular",
    color: '#4b5563',
  },
});

export default TermsAndConditions;
