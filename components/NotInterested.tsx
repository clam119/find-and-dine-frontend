import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import ListTemplate from "./ListTemplate";
import styles from "./styles";
import { useEffect } from 'react'

export default function NotInterested () {

    return (
    <>
        <Text style={styles.bottomNavBar}>
        </Text>
        <ListTemplate/>
    </>
    )
}

