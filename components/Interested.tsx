import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ListTemplate from "./ListTemplate";

export default function Interested () {
    return (
    <Text style={styles.bottomNavBar}>
        <ListTemplate/>
    </Text>
    )
}