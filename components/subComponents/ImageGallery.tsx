import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  

} from "react-native";

import styles from "../styles";
const images = require("../../assets/images.json");


interface images {
  id: number;
  url: string;
}

export function ImageGallery() {

  const renderItems: React.FC<{item: images}> = ({item}) => {
    console.log(item)
    return <TouchableOpacity 
    onPress={() => console.log('pressed')}
    >
      <Image source={{uri: item.url}} style={styles.image} />
      <View style={styles.footer} ></View>
      <Text style={styles.footerText}>{images.id}</Text>
    </TouchableOpacity>
  }

  return (
    <View style={styles.expandedGallery}>
      <StatusBar style="auto" />
      <FlatList
        data={images}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
