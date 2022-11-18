import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import {Ionicons} from "@expo/vector-icons";

import styles from "./styles";

interface ObjectInterface {

}

interface ItemInterface {
  id: number;
  title: string;
  image: string;
  votes: number;
}

const Item = (props: ObjectInterface) => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.logo}
        source={{
          uri: props.item.image,
        }}
      ></Image>
      <Text style={styles.titleList}>{props.item.title}</Text>
      <Text style={styles.votes}>{"⭐".repeat(Math.round(props.item.votes))}</Text>
    </View>
  );
};

export default function ListTemplate(list) {
  const renderItem = ({ item }: any) => <Item item={item} />;

  return (
    <SafeAreaView>
      <SwipeListView
        contentContainerStyle={styles.containerList}
        data={list.list}
        renderItem={renderItem}
        keyExtractor={(item:object) => item.id}
        renderHiddenItem={() => (
          <View style={styles.delete}>
            <TouchableWithoutFeedback
              onPress={() => {
                console.log("YES");
              }}
            >
         <Ionicons name="refresh" size={40} color="#50C878" style={styles.refreshIcon} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              style={styles.logo}
              onPress={() => {
                console.log("NO");
              }}
            >
          <Ionicons name="trash-bin" size={40} color="#DC143C" style={styles.binIcon} />
            </TouchableWithoutFeedback>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
    </SafeAreaView>
  );
}
