import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const MyButton = (props) => {
  return (
    <TouchableOpacity style={myButtonStyle.button} onPress={props.customClick}>
      <Text style={myButtonStyle.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const myButtonStyle = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#7734ff",
    color: "#ffffff",
    padding: 10,
    marginTop: 16,
    marginLeft: 36,
    marginRight: 36,
  },
  text: {
    color: "#ffffff",
  },
});

export default MyButton;
