import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import BottomNavBar from "./components/BottomNavBar";
import HomePage from "./components/HomePage";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://find-and-dine-backend-production.up.railway.app/graphql",
  cache: new InMemoryCache()
})

export default function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <HomePage />
      <NavigationContainer>
      <BottomNavBar/>
      </NavigationContainer>
    </ApolloProvider>
      </>
  );
}
