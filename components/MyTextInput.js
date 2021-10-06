import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const MyTextInput = (props) => {
  return (
    <View style={myTextInputStyle.container}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#007fff"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
      />
    </View>
  );
};

const myTextInputStyle = StyleSheet.create({
  container: {
    borderColor: "#007fff",
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 36,
    marginRight: 36,
  },
});

export default MyTextInput;
