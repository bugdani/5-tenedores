import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsStack from "./RestaurantStack";
import FavoritesStack from "./FavoritesStack";
import Search from "./SearchStack";
import TopRestaurants from "./TopRestaurantsStack";
import Account from "./AccountStack";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{ title: "Busqueda" }}
        />
        <Tab.Screen
          name="topRestaurants"
          component={TopRestaurants}
          options={{ title: "Top 10" }}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
