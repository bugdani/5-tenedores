import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import {} from "../../../assets/img/5-tenedores-letras-icono-logo.png";

const Stack = createStackNavigator();

export default function Login() {
  return (
    <ScrollView style={styles.scrollView}>
      <Image
        source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={styles.viewContainer}>
        <Text>Login</Text>
        <Text>Crear Cuenta</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {},
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  image: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
});
