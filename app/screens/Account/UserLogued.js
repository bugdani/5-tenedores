import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Button } from "react-native-elements";
import Toast from "react-native-easy-toast";
import * as firebase from "firebase";
import Loading from "../../components/loading";

export default function UserLogued() {
  return (
    <View style={styles.viewUserInfo}>
      <Text>Info Account</Text>
      <Button title="Cerrar sesion" onPress={() => firebase.auth().signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    minHeight: "100%",
    backgroundColor: "#f2f2f2",
  },
});
