// report an incident form

import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ImageBackground, Button, Image, FlatList  } from "react-native";
import React, { useState, useEffect } from "react";
import FooterMenu from "../components/Menus/FooterMenu";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

const Report = ({navigation}) => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Divide categories into two arrays for the layout
  const categories = [['Traffic', 'Waste Management'], ['Engineering', 'Stray Animals']];

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
  
  const handleReport = async () => {
    try {
      setLoading(true);
      if (!name) {
        alert("Please add reporter name");
      }
      if (!location) {
        alert("Please add location");
      }
      if (!comment) {
        alert("Please add emergency comment");
      }
      if (!selectedCategory) {
        alert("Please select an emergency category");
        setLoading(false);
        return;
      }
  
      const formData = new FormData();
      formData.append('name', name);
      formData.append('location', location);
      formData.append('comment', comment);
      formData.append('category', selectedCategory);
  
      if (image) {
        const fileUri = image;
        const fileName = fileUri.split('/').pop();
        const fileType = fileUri.split('.').pop();
        formData.append('image', {
          uri: fileUri,
          name: fileName,
          type: `image/${fileType}`,
        });
      }
  
      const { data } = await axios.post("/report/create-report", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      setLoading(false);
      alert(data?.message);
      navigation.navigate("Home");
    } catch (error) {
      alert(error.response.data.message || error.message);
      setLoading(false);
      console.log(error);
    }
  };

  const renderCategoriesRow = (rowCategories) => {
    return (
      <FlatList
        data={rowCategories}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <Text style={[styles.categoryItem, selectedCategory === item && styles.selectedCategory]}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
      />
    );
  };

  return (
    <ImageBackground source={require("./../assets/assets_cover.png")} style={{ flex: 1, resizeMode: "stretch" }} >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Report An Incident</Text>
          {/* Render categories in two rows */}
          <Text style={styles.cattxt} >Select Category Report</Text>

          {renderCategoriesRow(categories[0])}
          {renderCategoriesRow(categories[1])}

          <Text style={styles.contxt} >Reporter Name:</Text>

          <TextInput style={styles.inputBox} placeholder="Add reporter name" placeholderTextColor={"gray"} value={name} onChangeText={(text) => setName(text)} />
          <Text style={styles.contxt} >Location</Text>

          <TextInput style={styles.inputBox} placeholder="Add location" placeholderTextColor={"gray"} value={location} onChangeText={(text) => setLocation(text)} />
          <Text style={styles.contxt} >Comment</Text>

          <TextInput style={styles.inputBox} placeholder="Add report comment" placeholderTextColor={"gray"} multiline={true} numberOfLines={6} value={comment} onChangeText={(text) => setComment(text)} />
        
          <View style={styles.buttonContainer}>
  <TouchableOpacity style={styles.button} onPress={pickImage}>
    <Text style={styles.buttonText}>Upload Photo</Text>
  </TouchableOpacity>
  {image && <Image source={{ uri: image }} style={styles.image} />}
</View>

          <TouchableOpacity style={styles.postBtn} onPress={handleReport}>
            <Text style={styles.postBtnText}>
              <FontAwesome5 name="plus-square" size={18} /> Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textTransform: "uppercase",
    paddingTop: 20,
    marginBottom: 20,
  },
  contxt: {
    fontSize: 15,
    paddingTop: 10,
    marginTop: 10,


  },
  cattxt: {
    fontSize: 15,
    paddingTop: 10,

  },

  inputBox: {
    backgroundColor: "#ffffff",
    textAlignVertical: "top",
    paddingTop: 10,
    width: 320,
    marginTop: 5,
    fontSize: 16,
    paddingLeft: 15,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  postBtn: {
    backgroundColor: "black",
    width: 300,
    marginTop: 30,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  postBtnText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  categoryList: {
    marginTop: 20,
  },
  categoryItem: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  selectedCategory: {
    backgroundColor: "#6200ea",
    color: "#ffffff",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "black", // Example color
    width: 300,
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20, // Adjust as needed
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
 
  

});

export default Report;
