import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";

import RestaurantCard from "./RestaurantCard";


import styles from "./styles";
import { MockData} from "./MockData";

export default function HomePage() {
  const [noMoreRestaurants, setNoMoreRestaurants] = useState(false);
  const [restaurantCardArray, setRestaurantCardArray] =
    useState(MockData);
  const [swipeDirection, setSwipeDirection] = useState("--");
  const [id, setId] = useState("");
  useEffect(() => {
    if (swipeDirection !== "--" && parseInt(id) > 0) {
    }
    setSwipeDirection("--");
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
