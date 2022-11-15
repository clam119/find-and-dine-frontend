import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import BottomNavBar from "./components/BottomNavBar";
import HomePage from "./components/HomePage";

import styles from "./components/styles";

export default function App() {
  return (
    <>
      <HomePage />
      <NavigationContainer>
      <BottomNavBar/>
      </NavigationContainer>
      </>
  );
}
