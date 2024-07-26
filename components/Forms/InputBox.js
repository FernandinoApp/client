import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';

const InputBox = ({ 
  inputTitle, 
  placeholder, 
  value, 
  setValue, 
  secureTextEntry, 
  keyboardType, 
  autoComplete, 
  autoCapitalize, 
  editable  // Added editable prop
}) => {
  const theme = useTheme();

  return (
    <View style={styles.inputBoxContainer}>
      <Text>{inputTitle}</Text>
      <TextInput
        style={styles.inputBox}
        label={placeholder}
        value={value}
        onChangeText={(text) => setValue(text)}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCompleteType={autoComplete}
        mode="outlined"
        autoCapitalize={autoCapitalize}
        theme={{
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#fc9daa',  // Change the primary color to your desired color
          },
          roundness: 7,  // Change the border radius to your desired value
        }}
        editable={editable} // Use editable prop here
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    height: 50,
    borderRadius: 7,
    backgroundColor: '#ffffff',
    marginTop: 1,
    marginBottom: -7,
    paddingLeft: 5,
  },
});

export default InputBox;
