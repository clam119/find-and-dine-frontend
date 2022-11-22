import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import ListTemplate from "./ListTemplate";
import { resetFavourite } from "./redux/action";
import DEMO_CONTENT_F from "./ApiFavourites";

export default function Favourites() {
  return (
    <>
      <Text style={styles.bottomNavBar}></Text>
      <ListTemplate list={DEMO_CONTENT_F} />
    </>
  );
}
