import React, { Component } from "react";
import { StyleSheet, FlatList, Alert } from "react-native";
import CategoryListItem from "../components/CategoryListItem";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: "Dung cu truot tuyet" },
        { id: 2, name: "Mu kinh truot tuyet" },
        { id: 3, name: "Giay truot tuyet" },
      ],
    };
  }

  render() {
    const { categories } = this.state;
    const { navigation } = this.props;

    return (
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryListItem
            category={item}
            onPress={() => navigation.navigate('Category')}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default Categories;
