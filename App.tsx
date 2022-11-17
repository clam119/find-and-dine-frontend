import { NavigationContainer } from "@react-navigation/native";
import BottomNavBar from "./components/BottomNavBar";
import HomePage from "./components/HomePage";
import MMKVStorage, { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
import { StorageContext } from "./components/contexts/StorageContext";

const interestedStorage = new MMKVLoader().initialize();
const notInterestedStorage = new MMKVLoader().initialize();

export default function App() {
  return (
    <>
      <StorageContext.Provider value={{ interestedStorage, notInterestedStorage }}>
        <HomePage />
        <NavigationContainer>
        <BottomNavBar/>
        </NavigationContainer>
      </StorageContext.Provider>    
    </>
  );
}
