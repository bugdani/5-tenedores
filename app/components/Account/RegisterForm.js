import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Input, Icon, Button } from "react-native-elements";

export default function RegisterForm() {
  return (
    <View style={styles.view}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.inputForm}
      />
      <Input
        placeholder="Contrasena"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={true}
      />
      <Input
        placeholder="Repetir contrasena"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={true}
      />
      <Button
        title="Unirse"
        containerStyle={styles.buttonRegisterContent}
        buttonStyle={styles.buttonRegister}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    //flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  buttonRegisterContent: {
    marginTop: 25,
    width: "95%",
  },
  buttonRegister: {
    backgroundColor: "#00a680",
  },
});
