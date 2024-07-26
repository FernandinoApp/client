import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, ScrollView, ImageBackground, TouchableOpacity, Image } from "react-native";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { HelperText } from "react-native-paper";
import Checkbox from 'expo-checkbox';


const Register = ({ navigation }) => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [suffix, setSuffix] = useState('');
  const [barangay, setBarangay] = useState('');
  const [houseno, setHouseno] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [imageid, setImageid] = useState(null);
  const [imageclearance, setImageclearance] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [certification, setCertification] = useState(false);
  const [loading, setLoading] = useState(false);

  const pwhasErrors = () => {
    return password.length > 0 && password.length < 6;
  };

  const passwordsMatch = () => {
    return password === confirmPassword;
  };

  const barangayOptions = [
    { label: 'Alasas', value: 'Alasas' },
    { label: 'Baliti', value: 'Baliti' },
    { label: 'Bulaon', value: 'Bulaon' },
    { label: 'Calulut', value: 'Calulut' },
    { label: 'Del Carmen', value: 'Del Carmen' },
    { label: 'Del Pilar', value: 'Del Pilar' },
    { label: 'Del Rosario', value: 'Del Rosario' },
    { label: 'Dela Paz Norte', value: 'Dela Paz Norte' },
    { label: 'Dela Paz Sur', value: 'Dela Paz Sur' },
    { label: 'Dolores', value: 'Dolores' },
    { label: 'Juliana', value: 'Juliana' },
    { label: 'Lara', value: 'Lara' },
    { label: 'Lourdes', value: 'Lourdes' },
    { label: 'Magliman', value: 'Magliman' },
    { label: 'Maimpis', value: 'Maimpis' },
    { label: 'Malino', value: 'Malino' },
    { label: 'Malpitic', value: 'Malpitic' },
    { label: 'Pandaras', value: 'Pandaras' },
    { label: 'Panipuan', value: 'Panipuan' },
    { label: 'Pulung Bulu', value: 'Pulung Bulu' },
    { label: 'Quebiawan', value: 'Quebiawan' },
    { label: 'Saguin', value: 'Saguin' },
    { label: 'San Agustin', value: 'San Agustin' },
    { label: 'San Felipe', value: 'San Felipe' },
    { label: 'San Isidro', value: 'San Isidro' },
    { label: 'San Jose', value: 'San Jose' },
    { label: 'San Juan', value: 'San Juan' },
    { label: 'San Nicolas', value: 'San Nicolas' },
    { label: 'San Pedro', value: 'San Pedro' },
    { label: 'Santa Lucia', value: 'Santa Lucia' },
    { label: 'Santa Teresita', value: 'Santa Teresita' },
    { label: 'Santo Niño', value: 'Santo Niño' },
    { label: 'Santo Rosario (Pob.)', value: 'Santo Rosario (Pob.)' },
    { label: 'Sindalan', value: 'Sindalan' },
    { label: 'Telabastagan', value: 'Telabastagan' },
  ];


  const genderOptions = [
    { label: 'Female', value: 'Female' },
    { label: 'Male', value: 'Male' },
    { label: 'Other', value: 'Other' },
  ];

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const toggleDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleConfirm = (date) => {
    const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    setBirthday(formattedDate);
    hideDatePicker();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const pickImageid = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageid(result.assets[0].uri);
    }
  };

  const pickImageClearance = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageclearance(result.assets[0].uri);
    }
  };

  const handleMobileNumberChange = (inputText) => {
    // Remove non-numeric characters
    const formattedNumber = inputText.replace(/[^\d]/g, '');

    // Limit to 11 numbers
    if (formattedNumber.length <= 11) {
      setNumber(formattedNumber);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!lastname || !firstname || !middlename || !houseno || !barangay || !birthday || !gender || !number || !email || !password || !confirmPassword) {
        Alert.alert("Please Fill All Fields");
        setLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        Alert.alert("Passwords do not match");
        setLoading(false);
        return;
      }
      if (!imageid){
        Alert.alert("Please Upload a Valid ID");
        setLoading(false);
        return;
      }
      if (!certification){
        Alert.alert("Please agree to the Terms and Conditions");
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("lastname", lastname);
      formData.append("firstname", firstname);
      formData.append("middlename", middlename);
      formData.append("suffix", suffix);
      formData.append("houseno", houseno);
      formData.append("barangay", barangay);
      formData.append("birthday", birthday);
      formData.append("gender", gender);
      formData.append("number", number);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("certification", certification);

      if (imageid) {
        const uriParts = imageid.split('.');
        const fileType = uriParts[uriParts.length - 1];
        formData.append("imageid", {
          uri: imageid,
          name: `imageid.${fileType}`,
          type: `image/${fileType}`,
        });
      }

      if (imageclearance) {
        const uriParts = imageclearance.split('.');
        const fileType = uriParts[uriParts.length - 1];
        formData.append("imageclearance", {
          uri: imageclearance,
          name: `imageclearance.${fileType}`,
          type: `image/${fileType}`,
        });
      }

      const response = await axios.post("/auth/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Response Data: ", response.data); // Log response for debugging
      if (response.data.success) {
        alert(response.data.message);
        navigation.navigate("Login");
      } else {
        alert(response.data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error in Registration: ", error);
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred. Please try again.");
      }
      setLoading(false);
    }
  };

  if (hasGalleryPermission === false) {
    return <Text>No access to Internal Storage</Text>;
  }

  return (
    <ImageBackground source={require("./../../assets/assets_cover.png")} // Change to your image path
      style={{ flex: 1, resizeMode: "stretch" }} >
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
        <View style={styles.card}>

        <View style={styles.pageTitleContainer}>
            <FontAwesome name="pencil-square-o" style={styles.icon} />
            <Text style={styles.pageTitle}>Register</Text>
          </View>
            <View style={styles.row}>
              <View style={styles.halfContainer}>
                <InputBox value={lastname} setValue={setLastname} placeholder="Last Name" />
              </View>
              <View style={styles.halfContainer}>
                <InputBox value={firstname} setValue={setFirstname} placeholder="First Name" />
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.halfContainer}>
                <InputBox value={middlename} setValue={setMiddlename} placeholder="Middle Name" />
              </View>
              <View style={styles.halfContainer}>
                <InputBox value={suffix} setValue={setSuffix} placeholder="Suffix (Optional)" />
              </View>
            </View>
            <Text style={styles.pickerTitle}>Barangay</Text>
                <Dropdown
                  data={barangayOptions}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Barangay"
                  value={barangay}
                  onChange={item => setBarangay(item.value)}
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderText}
                  selectedTextStyle={styles.selectedTextStyle}
                />
            <InputBox value={houseno} setValue={setHouseno} placeholder="House No. / Purok / Street" />

            
                <View style={styles.row}>
              <View style={styles.halfContainer}>
                <Text style={styles.pickerTitle}>Birthday</Text>
                <TouchableOpacity onPress={toggleDatePicker} style={styles.dateInput}>
                  <Text style={birthday ? styles.dateText : styles.placeholderText}>{birthday ? birthday : "MM/DD/YYYY"}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                  textColor="black" // Ensures text is visible
                  style={{ backgroundColor: "white" }} // Ensures picker background is visible
                />
              </View>
              <View style={styles.halfContainer}>
                <Text style={styles.pickerTitle}>Gender</Text>
                <Dropdown
                  data={genderOptions}
                  labelField="label"
                  valueField="value"
                  placeholder="Select Gender"
                  value={gender}
                  onChange={item => setGender(item.value)}
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderText}
                  selectedTextStyle={styles.selectedTextStyle}
                />
              </View>
            </View>

            <InputBox value={number} setValue={handleMobileNumberChange} keyboardType="numeric" maxLength={11} placeholder="Mobile Number" />
            <InputBox keyboardType="email-address" autoComplete="email" value={email} setValue={setEmail} placeholder="Email Address" />
            <InputBox secureTextEntry={true} autoComplete="password" value={password} setValue={setPassword} placeholder="Password" />
            {pwhasErrors() && (
              <HelperText type="error" visible={true}>
                Password must be at least 6 characters!
              </HelperText>
            )}
            <InputBox value={confirmPassword} setValue={setConfirmPassword} placeholder="Confirm Password" secureTextEntry={true} />
            <HelperText type="error" visible={!passwordsMatch()}>Passwords do not match.</HelperText>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={pickImageid}>
                <Text style={styles.buttonText}>Upload Valid ID</Text>
              </TouchableOpacity>
              <Text style={styles.captionText}>Accepted IDs: UMID, Driver's License, Passport, National ID, Postal ID, SSS ID, PhilHealth ID, TIN ID</Text>
              {imageid && <Image source={{ uri: imageid }} style={styles.imageid} />}
              <TouchableOpacity style={styles.button} onPress={pickImageClearance}>
                <Text style={styles.buttonText}>Upload Barangay Clearance (Optional)</Text>
              </TouchableOpacity>
              {imageclearance && <Image source={{ uri: imageclearance }} style={styles.imageid} />}
            </View>

            <View style={styles.checkboxrow}>
              <Checkbox value={certification} onValueChange={setCertification} color={certification ? "#3CB371" : undefined} />
              <Text style={styles.checkboxLabel}>
                I agree to the{" "}
                <Text style={styles.underline} onPress={() => navigation.navigate("TermsAndConditions")}>
                Terms & Conditions
                </Text>  
              </Text>
            </View>

            <SubmitButton btnTitle="Register" handleSubmit={handleSubmit} loading={loading} />
            <Text style={styles.linkText}>
            Already have an account?{" "}
            <Text style={styles.link}
              onPress={() => navigation.navigate("Login")}
            >
              Login now.
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
    fontFamily: "Geologica",
    color: "#000",
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginTop: 30,
  },
  scrollview: {
    paddingTop: 100,
    paddingBottom: 150,
  },
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: 'center',
  },
  sloganImage: {
    width: 155, 
    height: 40,
    marginBottom: 10,
    marginTop: 30,
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
  card: {
    padding: 20,
    margin: 20,
    marginTop: 5,
    width: '91%',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#f56565',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
  },
  pageTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    marginTop: -20,
    marginBottom: 5,
  },
  icon: {
    fontSize: 24, 
    color: '#808080', 
    marginRight: 7,
    marginLeft: 5,
    marginTop: 30
  },
  pageTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#808080",
    fontFamily: "GeologicaSemiBold",
    marginTop: 30
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  halfContainer: {
    width: "48%",
  },
  linkText: {
    color: "dodgerblue",
    textAlign: "center",
    marginBottom: 200 
  },
  link: {
    textDecorationLine: "underline",
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 3,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#d3d3d3",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "GeologicaSemiBold",
    textAlign: "center",
  },
  imageid: {
    width: 300,
    height: 250,
    resizeMode: "cover",
    marginBottom: 10,
  },
  captionText: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },
  pickerTitle: { // title of bday and gender
    marginTop: 20,
    marginLeft: 5,
    fontSize: 15,
    color: "#1e2225",
  },
  dateInput: { // birthday
    height: 48,
    marginTop: 7,
    marginBottom: -10,
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 7,
    padding: 9,
    justifyContent: "center",
    backgroundColor: "white",
  },
  dateText: {
    fontSize: 15,
    color: "#000",
  },
  dropdown: { // gender
    height: 50,
    marginTop: 6,
    marginBottom: -10,
    backgroundColor: "#ffffff",
    borderRadius: 7,
    paddingLeft: 8,
    color: "#000",
    borderWidth: 1,
    borderColor: "#808080",
  },
  placeholderText: {
    color: "#d3d3d3", // Set placeholder color
    fontSize: 15,
  },
  selectedTextStyle: {
    color: "#000", // Set selected text color to match other input fields
    fontSize: 15,
  },
  checkboxrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: "#666",
    fontSize: 15,
    fontWeight: 'bold',
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default Register;