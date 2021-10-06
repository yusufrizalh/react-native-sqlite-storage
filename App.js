import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomePage from "./pages/HomePage";
import CreateUser from "./pages/CreateUser";

const Stack = createNativeStackNavigator();

const MyStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CreateUser">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: "Home Page",
          headerStyle: { backgroundColor: "#7734ff" },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="CreateUser"
        component={CreateUser}
        options={{
          title: "Create User",
          headerStyle: { backgroundColor: "#7734ff" },
          headerTintColor: "#ffffff",
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStackNavigator />
    </NavigationContainer>
  );
};

export default App;
