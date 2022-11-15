import React from "react";
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
            screenOptions={({route})=>{
                tabBarIcon: ({focused, color, size}) =>{
                    let iconName;
                    if(route.name="Home"){
                        iconName= focused
                        ? "home"
                        : "home"
                    }
                    return <Octicons name="home" size={24} color="black" />;
                }
            }}>
                <BottomNavButton.Screen name="Home" component={HomePage}/>
                <BottomNavButton.Screen name="Not Interested" component={NotInterested}/>
                <BottomNavButton.Screen name="Interested" component={Interested}/>
                <BottomNavButton.Screen name="Favourites" component={Favourites}/>
            </BottomNavButton.Navigator>
    )
}