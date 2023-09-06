import React from "react";
import { Button } from "react-native";
import { useAuth0 } from "react-native-auth0";

export default function LoginButton() {
  const { authorize } = useAuth0();

  const onPress = async () => {
    console.log("im onpress");
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={() => onPress()} title="Log in" />;
}
