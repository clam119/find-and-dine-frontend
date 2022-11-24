import React from "react";
import { Text, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import styles from "./styles";

export default function LoadingPage() {
  return (
    <SafeAreaView style={styles.loadingContainer}>
      <Image
        resizeMode="center"
        style={styles.loading}
        source={require("../assets/FindnDineIcon.png")}
      />
      <Text style={styles.loadingText}>Find 'n Dine</Text>
    </SafeAreaView>
  );
}
