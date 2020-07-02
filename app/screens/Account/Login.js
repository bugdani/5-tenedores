import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

const Stack = createStackNavigator();

export default function Login() {
  return (
    <View>
      <Text>Login form</Text>
    </View>
  );
}
