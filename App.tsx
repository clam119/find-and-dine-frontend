import { NavigationContainer } from "@react-navigation/native";
import BottomNavBar from "./components/BottomNavBar";
import HomePage from "./components/HomePage";
import { store, persistor} from './components/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { Text } from "react-native";

export default function App() {
  return (
    <>
      <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <HomePage />
        <NavigationContainer>
        <BottomNavBar/>
        </NavigationContainer>
      </PersistGate>
      </Provider>    
    </>
  );
}
