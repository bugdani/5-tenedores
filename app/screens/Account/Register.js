import React, { useRef } from "react";
import { StyleSheet, View, Image } from "react-native";
import RegisterForm from "../../components/Account/RegisterForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-easy-toast";

export default function Register() {
  const toastRef = useRef();
  console.log(toastRef);

  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.viewForm}>
        <RegisterForm toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </KeyboardAwareScrollView>
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
    marginBottom: 20,
  },
});
