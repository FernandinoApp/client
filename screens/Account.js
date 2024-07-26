import { View, Text, StyleSheet, Image, TextInput, Touchable, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";

const Account = () => {
  const [state, setState] = useContext(AuthContext);
  const { user, token } = state;

  const [fullName, setFullName] = useState(`${user?.lastname}, ${user?.firstname} ${user?.suffix} ${user?.middlename}`);
  const [email] = useState(user?.email);
  const [number, setNumber] = useState(`${user?.number}`);
  const [address, setAddress] = useState(`${user?.houseno}, ${user?.barangay}`);
  const [gender, setGender] = useState(`${user?.gender}`);
  const [loading, setLoading] = useState(false);
  const [editingField, setEditingField] = useState('');

  //handle update user data
  const handleUpdate = async () => {
    if (!password) {
      alert('Please enter your current password.');
      return;
    }

    
  };

  return (
    <ImageBackground source={require("./../assets/assets_cover.png")} style={{ flex: 1, resizeMode: "stretch" }} >
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
      <Text style={styles.title}>MY PROFILE</Text>

        
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.inputBox}
              value={fullName}
              editable={false}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.inputBox} value={email} editable={false} />
          </View>

          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Mobile Num.</Text>
            <TextInput style={styles.inputBox} value={number} editable={false} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Address</Text>
            <TextInput style={styles.inputBox} value={address} editable={false} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Gender</Text>
            <TextInput style={styles.inputBox} value={gender} editable={false} />
          </View>
        
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
  scrollview: {
    paddingBottom: 150,
  },
  card: {
    padding: 75,
    margin: 50,
    width: '92%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#f56565',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    color: '#f15b5b',
    fontSize: 24,
    fontFamily: "GeologicaBold",
    textAlign: 'center',
    marginTop: -30,
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
  },
  inputLabel: {
    fontWeight: 'bold',
    width: 70,
    marginLeft: -50,
    marginRight: 10,
    color: 'gray',
  },
  inputBox: {
    width: 230,
    backgroundColor: '#ffffff',
    marginLeft: -5,
    fontSize: 16,
    paddingLeft: 20,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  editableInput: {
    flex: 1,
  },
  editButton: {
    marginLeft: 10,
    backgroundColor: '#f15b5b',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  updateBtn: {
    backgroundColor: 'black',
    color: 'white',
    height: 40,
    width: 250,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  updateBtnText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default Account;


