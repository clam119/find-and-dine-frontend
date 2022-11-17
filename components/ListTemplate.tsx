import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableWithoutFeedback
} from "react-native";
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

import DEMO_CONTENT from "./Api";
import styles from "./styles";

interface ObjectInterface {
  item: ItemInterface;
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
      />
      <Text style={styles.titleList}>{props.item.title}</Text>
      <Text style={styles.votes}>
        {" "}
        {"⭐".repeat(Math.round(props.item.votes))}
      </Text>
    </View>
  );
};

export default function ListTemplate (){
  const renderItem = ({ item }:any) => <Item item={item} />;

  return (<SafeAreaView>
    <SwipeListView
        contentContainerStyle={styles.containerList}
        data={DEMO_CONTENT}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        renderHiddenItem={() => (
          <View style={styles.delete}>
            <TouchableWithoutFeedback  onPress={() => { console.log('YES') }}>
            <Image style={styles.logo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}/> 
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback style={styles.logo} onPress={() => { console.log('NO') }}>
<Image style={styles.logo} source={{
uri: 'https://reactnative.dev/img/tiny_logo.png',
}}/> 
</TouchableWithoutFeedback>
          </View>
      )}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
    </SafeAreaView>
  );
};
