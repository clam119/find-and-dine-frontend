/** @format */

import React, { useContext, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "./redux/store";
import { addNotInterested, addInterested } from "./redux/action";
import {
  Text,
  Animated,
  PanResponder,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";

import { LinearGradient } from "expo-linear-gradient";
import { ExtendedCard } from "./ExtendedCard";

const SCREEN_WIDTH = Dimensions.get("window").width;

function RestaurantCard({
  item,
  removeCard,
  swipedDirection,
}: {
  item: any;
  removeCard: Function;
  swipedDirection: Function;
}) {
  interface Location {
    lat: Number;
    lng: Number;
  }

  interface ReviewsDistribution {
    oneStar: Number;
    twoStar: Number;
    threeStar: Number;
    fourStar: Number;
    fiveStar: Number;
  }

  interface Restaurant {
    id: String;
    title: String;
    imageUrls: String[];
    reviewsCount: Number;
    address: String;
    categories: String[];
    categoryName: String;
    city: String;
    location: Location;
    placeId: String;
    postalCode: String;
    reviewsDistribution: ReviewsDistribution;
    url: String;
    website: String;
  }

  const [modalSeen, setModalSeen] = useState(false);
  const [interested, setInterested] = useState({});
  const [notInterested, setNotInterested] = useState({});

  const dispatch = useDispatch();

  const handleAddNotInterested = (item: Restaurant) => {
    dispatch(addNotInterested(item));
    const storeStates = store.getState();
    const notInterestedState = storeStates.notInterested;
    setNotInterested({});
  };

  const handleAddInterested = (item: Restaurant) => {
    dispatch(addInterested(item));
    const storeStates = store.getState();
    const interestedState = storeStates.interested;
    setInterested({});
  };

  const [x, _] = useState(new Animated.Value(0));
  let swipeDirection: string = "";
  let cardOpacity = new Animated.Value(1);

  let rotateCard = x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ["-15deg", "0deg", "15deg"],
  });

  let opacityLeftIcon = x.interpolate({
    inputRange: [-100, -20, 100],
    outputRange: [1, 0, 0],
  });

  let rotateLeftIcon = x.interpolate({
    inputRange: [-50, -10, 100],
    outputRange: ["4.5deg", "0deg", "0deg"],
  });

  let rotateRightIcon = x.interpolate({
    inputRange: [-100, 10, 50],
    outputRange: ["0deg", "0deg", "-4.5deg"],
  });

  let opacityRightIcon = x.interpolate({
    inputRange: [-100, 20, 100],
    outputRange: [0, 0, 1],
  });

  let opacityExpandIcon = x.interpolate({
    inputRange: [-25, 0, 25],
    outputRange: [0, 1, 0],
  });

  let rotateExpandIcon = x.interpolate({
    inputRange: [-50, 0, 100],
    outputRange: ["4.5deg", "0deg", "-4.5deg"],
  });

  let animation = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => false,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      x.setValue(gestureState.dx);
      if (gestureState.dx > SCREEN_WIDTH - 300) {
        swipeDirection = "Right";
      } else if (gestureState.dx < -SCREEN_WIDTH + 300) {
        swipeDirection = "Left";
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (
        gestureState.dx < SCREEN_WIDTH - 270 &&
        gestureState.dx > -SCREEN_WIDTH + 270
      ) {
        swipedDirection("--");
        Animated.spring(x, {
          toValue: 0,
          speed: 1,
          bounciness: 3,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dx > SCREEN_WIDTH - 300) {
        // Right Swipe - Interested
        Animated.parallel([
          Animated.timing(x, {
            toValue: SCREEN_WIDTH,
            duration: 500,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          handleAddInterested(item);
          removeCard();
        });
      } else if (gestureState.dx < -SCREEN_WIDTH + 300) {
        Animated.parallel([
          Animated.timing(x, {
            toValue: -SCREEN_WIDTH,
            duration: 500,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          handleAddNotInterested(item);
          removeCard();
        });
      }
    },
  });

  return (
    <>
      <ExtendedCard props={{ modalSeen, setModalSeen, item }} />
      <Animated.View
        {...animation.panHandlers}
        style={[
          styles.card,
          {
            opacity: cardOpacity,
            transform: [{ translateX: x }, { rotate: rotateCard }],
          },
        ]}
      >
        <LinearGradient
          colors={["#00000000", "#111111"]}
          style={styles.cardGradient}
          start={[0.5, 0.7]}
        />
        <TouchableWithoutFeedback
          style={styles.backgroundImage}
          onPress={() => {
            setModalSeen(true);
          }}
        >
          <LinearGradient
            colors={["#00000000", "#00000000"]}
            style={styles.cardClick}
            start={[0.5, 0.7]}
          />
        </TouchableWithoutFeedback>

        <Image
          source={{ uri: item.imageUrls[0] }}
          resizeMode="cover"
          style={[styles.backgroundImage]}
        />
        <Text style={styles.cardTitle}>{item.title}</Text>

        <Text style={styles.votes}> {"⭐".repeat(Math.round(item.votes))}</Text>

        <Animated.View
          style={[
            styles.helperIconRight,
            {
              opacity: opacityRightIcon,
              transform: [{ rotate: rotateRightIcon }],
            },
          ]}
        >
          <Image
            style={[styles.helperIconRight]}
            source={require("../assets/heart-outline.png")}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.helperIconLeft,
            {
              opacity: opacityLeftIcon,
              transform: [{ rotate: rotateLeftIcon }],
            },
          ]}
        >
          <Image
            style={[styles.helperIconLeft]}
            source={require("../assets/heart-dislike-outline.png")}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.modalOpen,
            {
              opacity: opacityExpandIcon,
              transform: [{ rotate: rotateExpandIcon }],
            },
          ]}
        >
          <Image
            style={styles.modalIcon}
            source={require("../assets/expand-card.png")}
            resizeMode="cover"
          />
        </Animated.View>
      </Animated.View>
    </>
  );
}

export default RestaurantCard;
