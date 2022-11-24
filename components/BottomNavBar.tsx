import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./HomePage";
import Favourites from "./Favourites";
import NotInterested from "./NotInterested";
import Interested from "./Interested";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { secondary, primary, surface, onSurface } from "./styles";
const BottomNavButton = createBottomTabNavigator();

export default function BottomNavBar() {
  return (
    <BottomNavButton.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === "Cards") {
            iconName = focused ? "cards" : "cards-outline";
          } else if (route.name === "Favourites") {
            iconName = focused ? "star" : "star-outline";
          } else if (route.name === "Interested") {
            iconName = focused ? "cards-heart" : "cards-heart-outline";
          } else if (route.name === "Not Interested") {
            iconName = focused ? "heart-off" : "heart-off-outline";
          }
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: secondary,
        tabBarActiveBackgroundColor: onSurface,
        tabBarInactiveBackgroundColor: surface,
        
      })}
    >
      <BottomNavButton.Screen name="Cards" component={HomePage}/>
      <BottomNavButton.Screen name="Not Interested" component={NotInterested} />
      <BottomNavButton.Screen name="Interested" component={Interested} />
      <BottomNavButton.Screen name="Favourites" component={Favourites} />
    </BottomNavButton.Navigator>
  );
}
