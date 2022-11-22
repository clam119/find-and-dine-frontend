import React, { useState, useEffect }from "react";
import { Pressable, Text } from "react-native";
import styles from "./styles";
import ListTemplate from "./ListTemplate";
import { addToMain, resetFavourite } from "./redux/action";
import FAVOURITED_CONTENT from "./ApiFavourites";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

export default function Favourites() {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const globalState = useSelector(globalState => globalState)
  const [localIntState, setLocalIntState] = useState([]);

  useEffect(() => {
    FAVOURITED_CONTENT();
    setLocalIntState(globalState.interested.restaurants);
  },[globalState])

  const handleResetFavourited = (localIntState: Restaurant[]) => {
    dispatch(resetFavourite);
    console.log(globalState.favourited)
  }

  return (
    <>
        <Pressable onPress={ handleResetFavourited } style={styles.button}>
          <Text style={styles.buttonText}>Clear</Text>
        </Pressable>
      <Text style={styles.bottomNavBar}></Text>
      <ListTemplate list={FAVOURITED_CONTENT()} />
    </>
  );
}
