import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

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

const ListTemplate = () => {
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.containerList}>
      <FlatList
        data={DEMO_CONTENT}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ListTemplate;
