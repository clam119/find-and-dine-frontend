import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import ListTemplate from "./ListTemplate";
import styles from "./styles";
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function NotInterested () {

  const clearStorage = async () => {
    try {
      const keys = ['Not-Interested'];
      await AsyncStorage.multiRemove(keys);
      console.log('Successfully removed all not interested restaurants.')
    }
    catch(e) {
      //remove error
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('Not-Interested')
        console.log(jsonValue)
        return jsonValue
    } catch(e) {
      // error reading value
    }
  }
  
    useEffect(() => {
        const pleaseDearLord = getData();
        console.log(pleaseDearLord)

    }, [])

    return (
    <>
        <Pressable onPress={ getData } style={styles.button}>
          <Text style={styles.buttonText}>Get Not Interested</Text>
        </Pressable>

        <Pressable onPress={ clearStorage } style={styles.button}>
          <Text style={styles.buttonText}>Clear Storage</Text>
        </Pressable>
        <Text style={styles.bottomNavBar}>
        </Text>
        <ListTemplate/>
    </>
    )
}

