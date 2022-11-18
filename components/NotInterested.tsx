import React, { useEffect }from "react";
import { View, Text, Pressable } from "react-native";
import ListTemplate from "./ListTemplate";
import styles from "./styles";
import { useDispatch, useSelector } from 'react-redux';
import { resetNotInterested } from "./redux/action";
import { useNavigation } from "@react-navigation/native";
import NI_CONTENT from "./ApiNotInterested";

export default function NotInterested () {
    
    const navigation = useNavigation()
    const dispatch = useDispatch();
    const niInitialState = useSelector(notInterestedInitialState => notInterestedInitialState)

    useEffect(() => {
       NI_CONTENT();
    }, [niInitialState])

    const handleResetNotInterested = () => {
      dispatch(resetNotInterested);
    }

    return (
    <>
        <Pressable onPress={ handleResetNotInterested } style={styles.button}>
          <Text style={styles.buttonText}>RESET NOT INTERESTED</Text>
        </Pressable>
        <Text style={styles.bottomNavBar}></Text>
        <ListTemplate list={NI_CONTENT()}/>
    </>
    )
}