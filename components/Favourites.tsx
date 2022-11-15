import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListTemplate from "./ListTemplate";

export default function Favourites () {
    return (
    <View style={styles.bottomNavBar}>
    <Text>
        <ListTemplate/>
    </Text>
    </View>
    )
}