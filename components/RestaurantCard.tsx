import React,{ useState } from "react";
import {Text, Animated, PanResponder, Dimensions, } from "react-native";

import styles from "./styles";

const SCREEN_WIDTH = Dimensions.get('window').width;

function RestaurantCard({
	item,
	removeCard,
	swipedDirection,
}: {
	item: any;
	removeCard: Function;
	swipedDirection: Function;
  }) {

	const [x, _] = useState(new Animated.Value(0));
	let swipeDirection: string = '';
	let cardOpacity = new Animated.Value(1);
	let rotateCard = x.interpolate({
		inputRange: [-200, 0, 200],
		outputRange: ['-15deg', '0deg', '15deg'],
	});

	let animation = PanResponder.create({
		onStartShouldSetPanResponder: (evt, gestureState) => false,
		onMoveShouldSetPanResponder: (evt, gestureState) => true,
		onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
		onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
		onPanResponderMove: (evt, gestureState) => {
			x.setValue(gestureState.dx);
			if (gestureState.dx > SCREEN_WIDTH - 250) {
				swipeDirection = 'Right';
			} else if (gestureState.dx < -SCREEN_WIDTH + 250) {
				swipeDirection = 'Left';
			}
		},
		onPanResponderRelease: (evt, gestureState) => {
			if (
				gestureState.dx < SCREEN_WIDTH - 150 &&
				gestureState.dx > -SCREEN_WIDTH + 150
			) {
				swipedDirection('--');
				Animated.spring(x, {
					toValue: 0,
					speed: 5,
					bounciness: 10,
					useNativeDriver: false,
				}).start();
			} else if (gestureState.dx > SCREEN_WIDTH - 150) {
				Animated.parallel([
					Animated.timing(x, {
						toValue: SCREEN_WIDTH,
						duration: 200,
						useNativeDriver: false,
					}),
					Animated.timing(cardOpacity, {
						toValue: 0,
						duration: 200,
						useNativeDriver: false,
					}),
				]).start(() => {
					swipedDirection(swipeDirection);
					removeCard();
				});
			} else if (gestureState.dx < -SCREEN_WIDTH + 150) {
				Animated.parallel([
					Animated.timing(x, {
						toValue: -SCREEN_WIDTH,
						duration: 200,
						useNativeDriver: false,
					}),
					Animated.timing(cardOpacity, {
						toValue: 0,
						duration: 200,
						useNativeDriver: false,
					}),
				]).start(() => {
					swipedDirection(swipeDirection);
					removeCard();
				});
			}
		},
	});
  
  return (
    <Animated.View
			{...animation.panHandlers}
			style={[styles.card,
				{
					opacity: cardOpacity,
					transform: [{ translateX: x }, { rotate: rotateCard }],
				},
			]}>
			<Text style={styles.cardTitle}>{item.title}</Text>
		</Animated.View>
  );
}

export default RestaurantCard;