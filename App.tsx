import { NavigationContainer } from "@react-navigation/native";
import BottomNavBar from "./components/BottomNavBar";
import HomePage from "./components/HomePage";


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
