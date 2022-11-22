import {
  Text,
  Animated,
  PanResponder,
  Dimensions,
  ImageBackground,
  Image,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
  View,
  Linking,
} from "react-native";
import styles from "./styles";
import { ImageGallery } from "./subComponents/ImageGallery";
import { RestaurantInfo } from "./subComponents/RestaurantInfo";
import { ReviewsSummary } from "./subComponents/ReviewsSummary";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { addToFavourite } from "./redux/action";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";

export const ExtendedCard = ({props}:any) =>{
let modalSeen = props.modalSeen
let setModalSeen = props.setModalSeen


const data  = props.selectedItem ? props.selectedItem : props.item

  const info: Object = {
    title: data.title,
    categoryName: data.categoryName,
    categories: data.categories,
    address: data.address,
    city: data.city,
    postalCode: data.postalCode,
  };
  const reviews: Object = {
    reviewsCount: data.reviewsCount,
    reviewsDistribution: data.reviewsDistribution,
  };
  const link: string = data.website ? data.website : "";
  const nav: string = data.url ? data.url : "";


  const images: Object = {
    images: data.imageUrls,
  };


  const globalState = useSelector(globalState => globalState)
  const favouritedState = globalState.favourited.restaurants;
  const dispatch = useDispatch();
  const [favourited, setFavourited] = useState({})
  
  const handleAddFavourited = () => {
  if(favouritedState.includes(props.item)) {
    return
  }
  else {
    dispatch(addToFavourite(props.item));
    setFavourited({});
  }
};

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalSeen}
      onRequestClose={() => {
        setModalSeen(!modalSeen);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.expendedCardTitle} numberOfLines={1}>
            {data.title}
          </Text>
          <RestaurantInfo info={info} />
          <ReviewsSummary reviews={reviews} />
          <ImageGallery images={images} />
          <Pressable
            style={styles.modalClose}
            onPress={() => setModalSeen(!modalSeen)}
          >
            <Image
              style={styles.modalIcon}
              source={require("../assets/contract-card.png")}
              resizeMode="cover"
            />
          </Pressable>
          {nav ? (
            <Pressable
              style={styles.modalNav}
              onPress={() => Linking.openURL(nav)}
            >
              <Ionicons name="location-outline" size={26} color="red" />
              <Text style={styles.locationIconText}>Location</Text>
            </Pressable>
          ) : null}

          <Pressable
            style={styles.modalFav}
            onPress={handleAddFavourited}
          >
            <Image
              style={styles.modalIcon}
              source={require("../assets/yellowStar.png")}
              resizeMode="cover"
            />
          </Pressable>

          {link ? (
            <Pressable
              style={styles.modalLink}
              onPress={() => Linking.openURL(link)}
            >
              <Ionicons name="ios-globe-outline" size={22} color="#3668FF" />
              <Text style={styles.websiteIconText}>Website</Text>
            </Pressable>
          ) : null}
        </View>
      </View>
    </Modal>
  );
};
