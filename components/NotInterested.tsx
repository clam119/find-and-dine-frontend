import React from "react";
import { View, Text } from "react-native";
import ListTemplate from "./ListTemplate";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import DEMO_CONTENT_NI from "./ApiNotInterested";

export default function NotInterested () {

    const navigation = useNavigation()

    return (
    <>
        <Text style={styles.bottomNavBar}>
        </Text>
        <ListTemplate
        list={DEMO_CONTENT_NI}
        />
    </>
    )
}