import React,{ useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import store from './redux/store';
import { addNotInterested, addInterested } from "./redux/action";
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

	const [ notInterested, setNotInterested ] = useState({});
	const [ interested, setInterested] = useState({});

	const dispatch = useDispatch();

	const handleAddNotInterested = (item) => {
		dispatch(addNotInterested(item));
		const storeStates = (store.getState());
		const notInterestedState = storeStates.notInterested
		console.log(notInterestedState.restaurants.length,'<< interested array')
		setNotInterested({});
	}

	const handleAddInterested = (item) => {
		dispatch(addInterested(item));
		const storeStates = (store.getState());
		const interestedState = storeStates.interested;
		console.log(interestedState.restaurants.length,'<< interested array')
		setInterested({});
	}


	let swipeDirection: string = '';

	// Once we have the real data, we can go ahead & change this interface 
	interface RestaurantObject {
		id: String;
		title: String;
		image: String;
		votes: Number;
	}

	const [x, _] = useState(new Animated.Value(0));
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
			if (gestureState.dx > SCREEN_WIDTH - 300) {
				swipeDirection = 'Right';
			} else if (gestureState.dx < -SCREEN_WIDTH + 300) {
				swipeDirection = 'Left';
			}
		},
		onPanResponderRelease: (evt, gestureState) => {
			if (
				gestureState.dx < SCREEN_WIDTH - 270 &&
				gestureState.dx > -SCREEN_WIDTH + 270
			) {
				swipedDirection('--');
				Animated.spring(x, {
					toValue: 0,
					speed: 1,
					bounciness: 10,
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
				// Left Swipe - Not Interested
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