import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import {} from "../../../assets/img/5-tenedores-letras-icono-logo.png";
import { useNavigation } from "@react-navigation/native";

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
        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <Text>Social Login</Text>
    </ScrollView>
  );
}

function CreateAccount() {
  const navigation = useNavigation();
  return (
    <Text style={styles.textRegister}>
      No tenes cuenta?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("register")}
      >
        Crear cuenta
      </Text>
    </Text>
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
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});
