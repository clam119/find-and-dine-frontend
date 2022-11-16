import React,{ useState, useRef} from "react";
import { Text, Animated, PanResponder, Dimensions, Image } from "react-native";
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

	let opacityLeftIcon = x.interpolate({
		inputRange: [-50, -10, 100],
  		outputRange: [25, 0, 0],
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
		inputRange: [-100, 10, 50],
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
    <Animated.View
			{...animation.panHandlers}
			style={[styles.card,
				{
					opacity: cardOpacity,
					transform: [{ translateX: x }, { rotate: rotateCard }],
				},
			]}>
		
				<Text style={styles.cardTitle}>{item.title}</Text>
				
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
