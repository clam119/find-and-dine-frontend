
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import ListTemplate from "./ListTemplate";
import styles from "./styles";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { store } from './redux/store';
import {  resetNotInterested  } from "./redux/action";
import { useNavigation } from "@react-navigation/native";
import DEMO_CONTENT_NI from "./ApiNotInterested";

export default function NotInterested () {
    
    const navigation = useNavigation()
    const dispatch = useDispatch();

    const handleResetNotInterested = () => {
      dispatch(resetNotInterested);
      const storeStates = (store.getState());
      console.log(storeStates, '< all state');
      console.log(storeStates.notInterested);
    }

    return (
    <>
        <Pressable onPress={ handleResetNotInterested } style={styles.button}>
          <Text style={styles.buttonText}>RESET NOT INTERESTED</Text>
        </Pressable>
        
        <Text style={styles.bottomNavBar}></Text>
        <ListTemplate list={DEMO_CONTENT_NI}/>
    </>
    )
}