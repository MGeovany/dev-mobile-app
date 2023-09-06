import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Hi home </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Text>Go to page 1</Text>
        <Text>Go to page 2</Text>
        <Text>Go to page 3</Text>
      </TouchableOpacity>
    </View>
  );
};
