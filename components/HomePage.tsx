import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";

import RestaurantCard from "./RestaurantCard";
import BottomNavBar from "./BottomNavBar";

import styles from "./styles";
import DEMO_CONTENT_I from "./ApiInterested";

export default function HomePage() {

	const [noMoreRestaurants, setNoMoreRestaurants] = useState(false);
	const [restaurantCardArray, setRestaurantCardArray] = useState(DEMO_CONTENT_I);
	const [swipeDirection, setSwipeDirection] = useState('--');
	const [id, setId] = useState('');

	useEffect(() => {
		if (swipeDirection !== '--' && parseInt(id) > 0) {
			setSwipeDirection('--');
			// console.log('remove card', id, swipeDirection);
		}
	}, [id, swipeDirection]);


  const removeCard = (id: string) => {
    restaurantCardArray.splice(
      restaurantCardArray.findIndex((item) => item.id == id),
      1
    );
    setRestaurantCardArray(restaurantCardArray);
    if (restaurantCardArray.length == 0) {
      setNoMoreRestaurants(true);
    }
  };

  const lastSwipedDirection = (swipeDirection: string) => {
    setSwipeDirection(swipeDirection);
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        {restaurantCardArray.map((item, key) => (
          <RestaurantCard
            key={key}
            item={item}
            removeCard={() => {
              removeCard(item.id);
              setId(item.id);
            }}
            swipedDirection={lastSwipedDirection}
          />
        ))}
        {noMoreRestaurants ? (
          <Text style={styles.cardTitle}>No More Restaurants..</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
