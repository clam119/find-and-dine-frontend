import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image, 
} from "react-native";

import styles from "../styles";


export function ImageGallery(props: { images: any }) {
  
const images = props.images.images.reverse();

  const renderItems: React.FC<{item: string}> = ({item}) => {
    return <TouchableOpacity 
    onPress={() => console.log('pressed')}
    >
      <Image source={{uri: item}} style={styles.imageGallery} />
    </TouchableOpacity>
  }

  return (
    <View style={styles.expandedGallery}>
      <StatusBar style="auto" />
      <FlatList
        data={images}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
        snapToAlignment='start'
        decelerationRate={'fast'}
        snapToInterval={395}
        showsHorizontalScrollIndicator={true}
        scrollEnabled={true}
      />
    </View>
  );
}
