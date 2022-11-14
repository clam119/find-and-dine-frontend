import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from 'react-native'
import RestaurantCard from "./RestaurantCard";

import styles from './styles'

function HomeScreen() {
    return(
    <>
        <View style={styles.header}>
            <Text style={styles.title}>
                Find 'n Dine
            </Text>
            
        </View>
        
        <RestaurantCard/>
    </>
    )
}


    

export default HomeScreen