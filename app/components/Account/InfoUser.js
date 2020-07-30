import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import AvatarDefault from "../../../assets/img/avatar-default.jpg";

export default function InfoUser(props) {
  const {
    userInfo: { photoURL, displayName, email },
  } = props;
  return (
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        icon={{ name: "user", type: "font-awesome" }}
        overlayContainerStyle={{ backgroundColor: "#717171" }}
        size="large"
        editButton
        containerStyle={styles.userInfoAvatar}
        source={
          photoURL
            ? { uri: photoURL }
            : require("../../../assets/img/avatar-default.jpg")
        }
      />
      <View>
        <Text style={styles.userDisplayName}>Daniel Velas</Text>
        <Text>apu.dnaielvelsadsa@dsad.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  userDisplayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
});
