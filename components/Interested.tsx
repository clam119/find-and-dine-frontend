import React from "react";
import { Text, Pressable } from "react-native";
import styles from "./styles";
import ListTemplate from "./ListTemplate";
import { useDispatch } from 'react-redux';
import { resetInterested } from "./redux/action";
import { store } from './redux/store';
import { useNavigation } from "@react-navigation/native";
import DEMO_CONTENT_I from "./ApiInterested";

export default function Interested () {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    
    const handleResetInterested = () => {
        dispatch(resetInterested);
        const storeStates = (store.getState());
        console.log(storeStates, '< all state');
        console.log(storeStates.notInterested);
      }

    return (
    <>
        <Pressable onPress={ handleResetInterested } style={styles.button}>
          <Text style={styles.buttonText}>RESET INTERESTED</Text>
        </Pressable>
        
<Text style={styles.bottomNavBar}></Text>
      <ListTemplate list={DEMO_CONTENT_I} />

    </>
  );
}