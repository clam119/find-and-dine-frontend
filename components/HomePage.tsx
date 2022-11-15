import React from "react";
import { View, Text } from "react-native";
import RestaurantCard from "./RestaurantCard";
import ListTemplate from "./ListTemplate";

import styles from "./styles";
import BottomNavBar from "./BottomNavBar";

export default function HomePage() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Find 'n Dine</Text>
      </View>
    </>
  );
}
