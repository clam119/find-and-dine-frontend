import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomePage";
import Favourites from "./Favourites";
import NotInterested from "./NotInterested";
import Interested from "./Interested";
import {Ionicons} from "@expo/vector-icons";

import { secondary, primary, surface, onSurface } from "./styles";
const BottomNavButton = createBottomTabNavigator();

export default function BottomNavBar() {
  return (
    <BottomNavButton.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favourites") {
            iconName = focused ? "star" : "star-outline";
          } else if (route.name === "Interested") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Not Interested") {
            iconName = focused ? "heart-dislike" : "heart-dislike-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: secondary,
        tabBarActiveBackgroundColor: onSurface,
        tabBarInactiveBackgroundColor: surface,
        
      })}
    >
      <BottomNavButton.Screen name="Home" component={HomePage}/>
      <BottomNavButton.Screen name="Not Interested" component={NotInterested} />
      <BottomNavButton.Screen name="Interested" component={Interested} />
      <BottomNavButton.Screen name="Favourites" component={Favourites} />
    </BottomNavButton.Navigator>
  );
}
