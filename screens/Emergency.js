// report an emergency form

import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground, Button, Image, FlatList  } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import { useRoute } from "@react-navigation/native";
import InputBox from "../components/Forms/InputBox";
import SubmitButton from "../components/Forms/SubmitButton";
import { AuthContext } from "../context/authContext";

import { Dropdown } from "react-native-element-dropdown";

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


const Emergency = ({navigation}) => {
  const [state, setState] = useContext(AuthContext);
  const { user, token } = state;

  const route = useRoute();
  const { category } = route.params; // category parameter
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [fullName, setFullName] = useState(`${user?.lastname}, ${user?.firstname} ${user?.suffix} ${user?.middlename}`);
  const [barangay, setBarangay] = useState("");

  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category || ""); // set initial category

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  if (hasGalleryPermission === false) {
    return <Text>No access to Internal Storage</Text>;
  }

  const handleEmergency = async () => {
    if (!barangay) {
      alert("Please select the barangay of the emergency");
      setLoading(false);
      return;
    }
    if (!location) {
      alert("Please add the location of the emergency");
      setLoading(false);
      return;
    }
    if (!comment) {
      alert("Please add comment");
      setLoading(false);
      return;
    }
    if (!image) {
      alert("Please upload a photo");
      setLoading(false);
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('barangay', barangay);

    formData.append('location', location);
    formData.append('comment', comment);
    formData.append('category', category);
    formData.append('image', {
      uri: image,
      name: `emergency_${Date.now()}.jpg`,
      type: 'image/jpg',
    });

    try {
      const { data } = await axios.post("/emergency/create-emergency", formData, { headers: {
        'Content-Type': 'multipart/form-data',
      },
     });

      setLoading(false);
      alert(data.message);
      navigation.navigate("Home");
    } catch (error) {
      setLoading(false);
      alert(error.response.data.message || error.message);
    }
  };

  return (
    <ImageBackground source={require("./../assets/assets_cover.png")} style={{ flex: 1, resizeMode: "stretch" }} >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Emergency</Text>
          {/* Render categories in two rows */}
          <Text style={styles.cattxt} >Selected Category: {category} </Text>

          <InputBox placeholder="Reporter Name" value={fullName} setValue={setFullName} editable={false} />
          <Text style={styles.pickerTitle}>Location</Text>
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
          <InputBox placeholder="Street Name / Purok / Lot / Blk" value={location} setValue={setLocation} />
          <InputBox placeholder="Add Comment" value={comment} setValue={setComment} multiline={true} numberOfLines={6} />
          <View style={styles.buttonContainer}>

            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.buttonText}>Upload Photo</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={styles.imagesize} />}
          </View>
          <SubmitButton handleSubmit={handleEmergency} btnTitle="Submit" loading={loading} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 130,
  },
  card: {
    padding: 20,
    margin: 35,
    width: '91%',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#f56565',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
  },
  heading: {
    color: "#f96e83",
    paddingTop: 10,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "GeologicaBold",
    marginBottom: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
  cattxt: {
    fontSize: 15,
    paddingTop: 10,
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "GeologicaSemiBold",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#000",
    width: 300,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "GeologicaSemiBold"
  },
  imagesize: {
    width: 300,
    height: 300,
    marginTop: 20,
    marginBottom: 10,
  },
  pickerTitle: {
    marginTop: 20,
    marginLeft: 21,
    fontSize: 14,
    color: "#1e2225",
  },
  dropdown: {
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
    color: "#1e2225",
    fontSize: 16,
    marginLeft: 11,
  },
  selectedTextStyle: {
    color: "#000",
    fontSize: 15,
    marginLeft: 13,
  },
});

export default Emergency;
