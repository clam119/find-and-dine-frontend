import React, { useEffect, useState } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import ListTemplate from "./ListTemplate";
import styles, { background } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addToMain, resetNotInterested } from "./redux/action";
import { useNavigation } from "@react-navigation/native";
import NI_CONTENT from "./ApiNotInterested";

export default function NotInterested() {
  interface Restaurant {
    id: string;
    title: string;
    image: string;
    votes: number;
  }

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const globalState = useSelector((globalState) => globalState);
  const [localNiState, setLocalNiState] = useState([]);

  useEffect(() => {
    NI_CONTENT();
    setLocalNiState(globalState.notInterested.restaurants);
  }, [globalState]);

  const handleResetNotInterested = (localNiState: Restaurant[]) => {
    dispatch(addToMain(globalState.notInterested.restaurants));
    dispatch(resetNotInterested);
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: background }}>
        <Pressable
          onPress={() => {
            Alert.alert("Clear List", "Are you sure?", [
              {
                text: "Cancel",
                onPress: () => console.log("canceled"),
                style: "cancel",
              },
              { text: "OK", onPress: handleResetNotInterested },
            ]);
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Clear</Text>
        </Pressable>

        <ListTemplate list={NI_CONTENT()} />
      </View>
    </>
  );
}
