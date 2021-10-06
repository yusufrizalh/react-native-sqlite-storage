import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import MyText from "../components/MyText";
import MyButton from "../components/MyButton";

import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({ name: "UserDatabase.db" });

const HomePage = ({ navigation }) => {
  useEffect(() => {
    // pengganti lifecycle
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log("item: ", res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql("DROP TABLE IF EXISTS table_user", []);
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(30), user_contact INT(12), user_address VARCHAR(100))",
              []
            );
          }
        }
      );
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <View style={{ flex: 1 }}>
          <MyText text="React Native SQLite" />
          <MyButton
            title="Create User"
            customClick={() => navigation.navigate("CreateUser")}
          />
        </View>
      </View>
    </View>
  );
};

export default HomePage;
