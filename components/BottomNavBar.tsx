import React, { Key } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./styles";
import HomePage from './HomePage'
import Favourites from "./Favourites";
import NotInterested from "./NotInterested";
import Interested from "./Interested";
import { Ionicons, MaterialCommunityIcons,Octicons, Feather } from '@expo/vector-icons';


const BottomNavButton = createBottomTabNavigator()

export default function BottomNavBar () {
    return (
            <BottomNavButton.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName:any;
      
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'home'
                      : 'home-outline';
                  } else if (route.name === 'Favourites') {
                    iconName = focused ? 'star' : 'star-outline';
                  } else if (route.name === 'Interested'){
                    iconName = focused ? 'heart' : 'heart-outline'
                  } else if (route.name === 'Not Interested'){
                    iconName = focused ? 'heart-dislike' : 'heart-dislike-outline'
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
              })}
            >
                <BottomNavButton.Screen name="Home" component={HomePage}/>
                <BottomNavButton.Screen name="Interested" component={Interested}/>
                <BottomNavButton.Screen name="Not Interested" component={NotInterested}/>
                <BottomNavButton.Screen name="Favourites" component={Favourites}/>
            </BottomNavButton.Navigator>
    )
}