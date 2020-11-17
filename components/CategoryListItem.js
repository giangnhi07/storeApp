import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import SkiiImage from "../assets/skii.png";

export default function CategoryListItem(prop) {
  return (
    <View style={style.container}>
      <Text style={style.title}>CategoryListItem</Text>
      <Image style={style.categoryImage} source={SkiiImage} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    padding: 16,
    marginBottom: 16
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: 8,
  },
  categoryImage: {
    width: 64,
    height: 64,
  },
});
