import React, { useState } from "react";
import { View, Text } from "react-native";
import ListTemplate from "./ListTemplate";
import styles from "./styles";
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Not-Interested')
        console.log(jsonValue)
        return jsonValue
    } catch(e) {
      // error reading value
    }
  }

export default function NotInterested () {

    useEffect(() => {
        const pleaseDearLord = getData();
        console.log(pleaseDearLord)

    }, [])

    return (
    <>
        <Text style={styles.bottomNavBar}>
        </Text>
        <ListTemplate/>
    </>
    )
}

