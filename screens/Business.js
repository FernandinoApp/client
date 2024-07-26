import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Linking, ScrollView, Image } from "react-native";
import React from "react";

const Business = () => {
  const handlePress = () => {
    const url = 'https://cicto-csfp.com/onlinebusinessapp/?fbclid=IwAR3nWB2q468UFrx7mHLm4TSUSMwfzJ5iy4IcSMwJ418KKvtIadIswWT6h5I';
    Linking.openURL(url);
  };

  return (
    <ImageBackground
      source={require("./../assets/assets_cover.png")} style={{ flex: 1, resizeMode: "stretch" }}
    >
    <ScrollView>
      <View style={styles.container}>
      <View style={styles.card}>
          <Image
            source={require("./../assets/business.png")}
            style={styles.cardImage}
          />
      </View>
      
        <View style={styles.textContainer}>
        
          
            <Text style={styles.title}>How to Start a Business in San Fernando, Pampanga?</Text>
            <Text style={styles.description}>
              Starting a business in San Fernando, Pampanga, can be a rewarding endeavor given its vibrant local economy and supportive business environment. Here are some steps and tips to help you get started:
            </Text>
            <Text style={styles.tip}>
              1. <Text style={styles.tipTitle}>Market Research:</Text> Understand the local market by researching the demand for your product or service, your target audience, and the competition. This will help you create a viable business plan.
            </Text>
            <Text style={styles.tip}>
              2. <Text style={styles.tipTitle}>Business Plan:</Text> Draft a detailed business plan outlining your business goals, target market, financial projections, and marketing strategies. This will guide your business operations and attract potential investors.
            </Text>
            <Text style={styles.tip}>
              3. <Text style={styles.tipTitle}>Legal Requirements:</Text> Register your business with the Department of Trade and Industry (DTI) or the Securities and Exchange Commission (SEC) if it's a corporation. Obtain necessary permits from the local government unit (LGU) of San Fernando, such as the Mayor’s Permit and Barangay Clearance.
            </Text>
            <Text style={styles.tip}>
              4. <Text style={styles.tipTitle}>Financing:</Text> Explore different financing options such as personal savings, bank loans, or investors. Pampanga also offers various government programs that support small businesses.
            </Text>
            <Text style={styles.tip}>
              5. <Text style={styles.tipTitle}>Location:</Text> Choose a strategic location that is accessible to your target market. San Fernando is known for its bustling commercial areas, so consider proximity to these areas to attract more customers.
            </Text>
            <Text style={styles.tip}>
              6. <Text style={styles.tipTitle}>Marketing:</Text> Develop a strong marketing strategy to promote your business. Utilize both traditional and digital marketing channels. San Fernando has a rich cultural heritage and a strong community presence, so consider local festivals and events for promotion.
            </Text>
            <Text style={styles.tip}>
              7. <Text style={styles.tipTitle}>Network:</Text> Build relationships with other local businesses and join business organizations such as the Pampanga Chamber of Commerce and Industry (PamCham). Networking can provide valuable opportunities and support.
            </Text>
            <Text style={styles.tip}>
              8. <Text style={styles.tipTitle}>Quality Service:</Text> Focus on providing excellent customer service and quality products. Word-of-mouth recommendations are powerful in local communities like San Fernando.
            </Text>
            <Text style={styles.conclusion}>
              By following these steps, you can establish a successful business in San Fernando, Pampanga. For more information and online business application, click the link below.
            </Text>
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.linkText}>Visit Online Business Application</Text>
            </TouchableOpacity>
          
        </View>
        
      </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "space-between",
    marginTop: 40,
  },
  
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    marginBottom: -17,
    marginTop: -15,
    margin: 5,
  },
  cardImage: {
    width: '100%',
    height: 150, // Adjust height as needed
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 20,
    margin: 5,
    backgroundColor: 'white',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 30,
  },
  title: {
    color: '#f15b5b',
    fontSize: 24,
    fontFamily: "GeologicaBold",
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    color: 'black',
    fontSize: 15,
    fontFamily: "GeologicaRegular",
    marginBottom: 20,
  },
  tip: {
    color: 'black',
    fontSize: 15,
    fontFamily: "GeologicaRegular",
    marginBottom: 10,
  },
  tipTitle: {
    fontWeight: 'bold',
    fontFamily: "GeologicaSemiBold",
  },
  conclusion: {
    color: 'black',
    fontSize: 15,
    fontFamily: "GeologicaRegular",
    marginTop: 10,
  },
  linkText: {
    color: 'dodgerblue',
    fontSize: 18,
    fontFamily: "GeologicaBold",
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Business;
