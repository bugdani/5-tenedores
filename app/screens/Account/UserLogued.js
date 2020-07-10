import React from "react";
import { View, Text, Button } from "react-native";
import * as firebase from "firebase";

export default function UserLogued() {
  return (
    <View>
      <Text>Account</Text>
      <Button title="Cerrar sesion" onPress={() => firebase.auth().signOut()} />
    </View>
  );
}
