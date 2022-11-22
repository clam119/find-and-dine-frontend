import React, { useEffect, useState } from "react";
import { Text, Pressable } from "react-native";
import styles from "./styles";
import ListTemplate from "./ListTemplate";
import { useDispatch, useSelector } from 'react-redux';
import { resetInterested, resetMain } from "./redux/action";
import { useNavigation } from "@react-navigation/native";
import INTERESTED_CONTENT from "./ApiInterested";
import { addToMain } from './redux/action';

export default function Interested () {

    interface Restaurant {
      id: string
      title: string
      image: string
      votes: number
    }

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const globalState = useSelector(globalState => globalState)
    const [localIntState, setLocalIntState] = useState([]);

    useEffect(() => {
      INTERESTED_CONTENT();
      setLocalIntState(globalState.interested.restaurants);
    },[globalState])

    const handleResetInterested = (localIntState: Restaurant[]) => {
        dispatch(addToMain(globalState.interested.restaurants));
        dispatch(resetInterested);
      }

      const handleResetMain = () => {
        console.log(globalState, '<< MAIN STATE')
        dispatch(resetMain);
      }

    return (
    <>
        <Pressable onPress={ handleResetMain } style={styles.button}>
          <Text style={styles.buttonText}>RESET MAIN</Text>
        </Pressable>

        <Pressable onPress={ handleResetInterested } style={styles.button}>
          <Text style={styles.buttonText}>RESET INTERESTED</Text>
        </Pressable>
        
        <Text style={styles.bottomNavBar}></Text>
        <ListTemplate list={ INTERESTED_CONTENT()} />

    </>
  );
}