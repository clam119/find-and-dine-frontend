import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./styles";
import HomePage from './HomePage'
import Favourites from "./Favourites";
import NotInterested from "./NotInterested";
import Interested from "./Interested";

const BottomNavButton = createBottomTabNavigator()

export default function BottomNavBar () {
    return (
            <BottomNavButton.Navigator>
                <BottomNavButton.Screen name="Not Interested" component={NotInterested}/>
                <BottomNavButton.Screen name="Home" component={HomePage}/>
                <BottomNavButton.Screen name="Interested" component={Interested}/>
                <BottomNavButton.Screen name="Favourites" component={Favourites}/>
            </BottomNavButton.Navigator>
    )
}