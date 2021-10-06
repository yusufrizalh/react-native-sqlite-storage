import React, { useState } from "react";
import {
  View,
  Alert,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import MyText from "../components/MyText";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";

import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({ name: "UserDatabase.db" });

const CreateUser = () => {
  // mekanisme untuk menyimpan data ke database sqlite

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={{ flex: 1 }}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{ flex: 1, justifyContent: "space-between" }}
            >
              <MyTextInput placeholder="Please enter your name" />
              <MyTextInput placeholder="Please enter your contact number" />
              <MyTextInput placeholder="Please enter your address" />

              <MyButton title="Create User" />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateUser;
