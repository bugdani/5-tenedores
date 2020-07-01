import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";

export default function UserGuest() {
  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/user-guest.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil 5 tenedores</Text>
      <Text style={styles.description}>
        Busca los mejores restaurantes de Jujuy de una manera como y sencilla.
        Sin que nadie te cobre nada.!!
      </Text>
      <View style={styles.viewButton}>
        <Button
          title="Ver tu perfil"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttonn}
          onPress={() => console.log("Hiciste click")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  buttonn: {
    backgroundColor: "#00a680",
  },
  buttonContainer: {
    width: "70%",
  },
  viewButton: {
    flex: 1,
    alignItems: "center",
  },
});
