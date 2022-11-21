import { NavigationContainer } from "@react-navigation/native";
import BottomNavBar from "./components/BottomNavBar";
import HomePage from "./components/HomePage";
import { store, persistor} from './components/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { Text } from "react-native";
import LoadingPage from "./components/LoadingPage";
import { useState, useEffect } from "react";


export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {setTimeout(()=>setLoading(false),2000)}, [])
  return (<>
    {loading ? <LoadingPage/> : <>
    <Provider store={store}>
        <PersistGate loading={<LoadingPage/>} persistor={persistor}>
          <HomePage/>
          <NavigationContainer>
          <BottomNavBar/>
          </NavigationContainer>
        </PersistGate>
      </Provider>    
    </>}
    </>
  );
}