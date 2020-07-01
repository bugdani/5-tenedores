import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import Loading from "../../components/loading";
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

  if (login === null) return <Loading isVisible={true} text={"Cargando..."} />;
  return login ? <UserLogued /> : <UserGuest />;
}
