import { NavigationContainer } from "@react-navigation/native";
import BottomNavBar from "./components/BottomNavBar";
import HomePage from "./components/HomePage";
import store from './components/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <HomePage />
        <NavigationContainer>
        <BottomNavBar/>
        </NavigationContainer>
      </Provider>    
    </>
  );
}
