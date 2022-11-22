import React, {useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import {Ionicons} from "@expo/vector-icons";
import { onBackground } from "./styles";
import { ExtendedCard } from './ExtendedCard';
import styles from "./styles";


interface ObjectInterface {
  item: any;

}


const Item = (props: { item: { image: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; votes: number; }; setModalSeen: (arg0: boolean) => void; setSelectedItem: any; }) => {
  
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
      <TouchableWithoutFeedback
              onPress={() => {
          props.setModalSeen(true);
          props.setSelectedItem(props.item)
        }}>
        <View style={styles.modalListIconContainer}>
      <Image
						style={styles.modalListIcon}
						source={require('../assets/expand-card.png')}
						resizeMode="contain"
					/>
       </View> 
        
      </TouchableWithoutFeedback>
    </View>
  );
};

export default function ListTemplate(list: { list: any | readonly object[] | null | undefined; }) {
  const renderItem = ({ item }: any) => <Item item={item} setModalSeen={setModalSeen} setSelectedItem={setSelectedItem} />;
  const [modalSeen, setModalSeen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  return (
    <SafeAreaView>
      <ExtendedCard props={{modalSeen, setModalSeen, selectedItem}}/>
      <SwipeListView
        contentContainerStyle={styles.containerList}
        data={list.list}
        renderItem={renderItem}
        keyExtractor={(item:any) => item.id}
        renderHiddenItem={() => (
          <View style={styles.delete}>
            <TouchableWithoutFeedback
              onPress={() => {
                console.log("YES");
              }}
            >
         <Ionicons name="refresh" size={40} color={onBackground} style={styles.refreshIcon} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              style={styles.logo}
              onPress={() => {
                console.log("NO");
              }}
            >
          <Ionicons name="trash-bin" size={40} color={onBackground} style={styles.binIcon} />
            </TouchableWithoutFeedback>
          </View>
        )}
        leftOpenValue={75}
        rightOpenValue={-75}
      />
    </SafeAreaView>
  );
}
