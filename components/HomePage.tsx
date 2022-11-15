import React from "react";
import { View, Text } from "react-native";
import RestaurantCard from "./RestaurantCard";
import ListTemplate from "./ListTemplate";

import styles from "./styles";

function HomeScreen() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Find 'n Dine</Text>
      </View>
      <ListTemplate />
    </>
  );
}

export default HomeScreen;
