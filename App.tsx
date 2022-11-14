import { View } from "react-native";
import HomeScreen from "./components/HomePage";

import styles from "./components/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}
