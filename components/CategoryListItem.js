import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import SkiiImage from "../assets/skii.png";

export default function CategoryListItem(props) {
  const { category, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.container}>
        <Text style={style.title}>{category.name}</Text>
        <Image style={style.categoryImage} source={SkiiImage} />
      </View>
    </TouchableOpacity>
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
    marginBottom: 16,
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
