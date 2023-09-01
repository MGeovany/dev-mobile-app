import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";

export const ListItems = () => {
  const friends = [
    {
      name: "Friend #1",
    },
    {
      name: "Friend #2",
    },
    {
      name: "Friend #3",
    },
    {
      name: "Friend #4",
    },
  ];
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 50,
    marginVertical: 50,
  },
});
