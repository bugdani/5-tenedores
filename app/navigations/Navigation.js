import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Restaurants from "../screens/Restaurants";
import Favorites from "../screens/Favorites";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="restaurants" component={Restaurants} />
        <Tab.Screen name="favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
