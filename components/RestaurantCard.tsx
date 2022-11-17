import React,{ useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { addNotInterested, addInterested, resetNotInterested, resetInterested } from "./redux/action";
import {Text, Animated, PanResponder, Dimensions, ImageBackground, Image, Modal, Alert, TouchableWithoutFeedback} from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
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
	const [modalSeen, setModalSeen] = useState(false)

	const [ notInterested, setNotInterested ] = useState({});
	const [ interested, setInterested] = useState({});

	const dispatch = useDispatch();
	
	const handleAddNotInterested = (item) => {
		dispatch(addNotInterested(item));
		const storeStates = (store.getState());
		const notInterestedState = storeStates.notInterested
		// console.log(notInterestedState)
		// console.log(notInterestedState.restaurants,'<< not interested array length')
		setNotInterested({});
	}

	const handleAddInterested = (item) => {
		dispatch(addInterested(item));
		const storeStates = (store.getState());
		const interestedState = storeStates.interested;
		// console.log(interestedState.restaurants.length,'<< interested array length')
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


	let opacityLeftIcon = x.interpolate({
		inputRange: [-100, -20, 100],
  		outputRange: [1, 0, 0],
	});

	let rotateLeftIcon = x.interpolate({
		inputRange: [-50, -10, 100],
  		outputRange: ['4.5deg', '0deg', '0deg'],
	});

	let rotateRightIcon = x.interpolate({
		inputRange: [-100, 10, 50],
  		outputRange: ['0deg', '0deg', '-4.5deg'],
	});

	let opacityRightIcon = x.interpolate({
		inputRange: [-100, 20, 100],
  		outputRange: [0, 0, 1],
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

					removeCard();
                });
            }
        },
    });
  
	return (
		<>
		<Modal animationType="slide" transparent={false} visible={modalSeen} onRequestClose={() => {
			Alert.alert('Closed');
			setModalSeen(!modalSeen);
		}}
		>
		<Text style={styles.card}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</Text>
		</Modal>
    <Animated.View
			{...animation.panHandlers}
			style={[styles.card,
				{
					opacity: cardOpacity,
					transform: [{ translateX: x }, { rotate: rotateCard }],
				},
			]}>

		<TouchableWithoutFeedback
		style={styles.backgroundImage}
			onPress= {() => {
				setModalSeen(true)
			}}
			>

		<LinearGradient
		colors={['#00000000', '#111111']}
		style={styles.cardGradient}
		start={[0.5, 0.7]}
		/>
		</TouchableWithoutFeedback>
		<Image source={{ uri: item.image }} resizeMode="cover" style={[styles.backgroundImage]}/>
		<Text style={styles.cardTitle}>{item.title}</Text>
		<Text style={styles.votes}>
			{" "}
			{"⭐".repeat(Math.round(item.votes))}
		</Text>
				
				<Animated.View style={[styles.helperIconRight, { opacity: opacityRightIcon, transform: [{rotate: rotateRightIcon}]}]}>
				<Image
        			style={[styles.helperIconRight]}
        			source={require('../assets/heart-outline.png')}
					/>
				</Animated.View>
				<Animated.View style={[styles.helperIconLeft, { opacity: opacityLeftIcon, transform: [{rotate: rotateLeftIcon}]}]}>
				<Image
						style={[styles.helperIconLeft, ]}
        				source={require('../assets/heart-dislike-outline.png')}
					/>
				</Animated.View>
			</Animated.View>
			</>

  );
}

export default RestaurantCard;
