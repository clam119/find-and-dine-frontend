import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import ListTemplate from "./ListTemplate";
import { useNavigation } from "@react-navigation/native";

import DEMO_CONTENT_I from "./ApiInterested";

export default function Interested() {
  const navigation = useNavigation();

  return (
    <>
      <Text style={styles.bottomNavBar}></Text>
      <ListTemplate list={DEMO_CONTENT_I} />
    </>
  );
}
