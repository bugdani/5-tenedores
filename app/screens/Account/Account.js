import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogued from "./UserLogued";

export default function Account() {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  //if (login === null) return <Text>Loading</Text>;
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
}
