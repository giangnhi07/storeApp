import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Category from "./screens/category";
import Categories from "./screens/categories";

const Stack = createStackNavigator();

class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              title: "Categories",
              headerStyle: {
                backgroundColor: "#fff",
              },
              headerTintColor: "#333",
              headerTitleStyle: {
                fontWeight: '500',
                textAlign:'center',
                textTransform:'uppercase'
              },
            }}
          />
          <Stack.Screen name="Category" component={Category} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
