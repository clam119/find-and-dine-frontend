import { NavigationContainer } from "@react-navigation/native";
import BottomNavBar from "./components/BottomNavBar";
import HomePage from "./components/HomePage";
import { store, persistor} from './components/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { Text } from "react-native";
import LoadingPage from "./components/LoadingPage";
import { useState, useEffect } from "react";

import { useFonts, BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash'
import { BigshotOne_400Regular } from '@expo-google-fonts/bigshot-one'
import { BubblegumSans_400Regular } from '@expo-google-fonts/bubblegum-sans'
import { BungeeShade_400Regular } from '@expo-google-fonts/bungee-shade'
import { CaesarDressing_400Regular } from '@expo-google-fonts/caesar-dressing'
import { ChelseaMarket_400Regular } from '@expo-google-fonts/chelsea-market'
import { Calistoga_400Regular } from '@expo-google-fonts/calistoga'
import { CherryCreamSoda_400Regular } from '@expo-google-fonts/cherry-cream-soda'
import { Gotu_400Regular } from '@expo-google-fonts/gotu'
import { Jost_800ExtraBold_Italic } from '@expo-google-fonts/jost'
import { JosefinSans_500Medium } from '@expo-google-fonts/josefin-sans'
import { Michroma_400Regular } from '@expo-google-fonts/michroma'
import { Lustria_400Regular } from '@expo-google-fonts/lustria'
import { Manrope_500Medium, Manrope_700Bold } from '@expo-google-fonts/manrope'
import { Metrophobic_400Regular } from '@expo-google-fonts/metrophobic'
import { NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic } from '@expo-google-fonts/noto-sans'

export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {setTimeout(()=>setLoading(false),2000)}, [])

  let [fontsLoaded] = useFonts({
	
    BerkshireSwash_400Regular,
    BigshotOne_400Regular,
    BubblegumSans_400Regular,
    BungeeShade_400Regular,
    CaesarDressing_400Regular,
    Calistoga_400Regular,
    ChelseaMarket_400Regular,
    CherryCreamSoda_400Regular,
    Gotu_400Regular,
    Jost_800ExtraBold_Italic,
    JosefinSans_500Medium,
    Michroma_400Regular,
    Lustria_400Regular,
    Manrope_500Medium,
    Manrope_700Bold,
    Metrophobic_400Regular,
    NotoSans_400Regular,
  NotoSans_400Regular_Italic,
  NotoSans_700Bold,
  NotoSans_700Bold_Italic
  
  });

  if (!fontsLoaded) {
    return <LoadingPage />;
    } else {
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
}