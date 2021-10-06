import React from "react";
import { Text, StyleSheet } from "react-native";

const MyText = (props) => {
  return <Text style={myTextStyle.teks}>{props.text}</Text>;
};

const myTextStyle = StyleSheet.create({
  teks: {
    color: "#111825",
    fontSize: 16,
    marginTop: 16,
    marginLeft: 36,
    marginRight: 36,
  },
});

export default MyText;
