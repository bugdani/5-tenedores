import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Register() {
  return (
    <View>
      <Image
        source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.viewForm}>
        <Text>Registro Form</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginLeft: 40,
    marginRight: 40,
  },
});
