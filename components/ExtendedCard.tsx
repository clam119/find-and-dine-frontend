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
	Linking
} from 'react-native';
import styles from './styles';
import { ImageGallery } from './subComponents/ImageGallery';
import { RestaurantInfo } from './subComponents/RestaurantInfo';
import { ReviewsSummary } from './subComponents/ReviewsSummary';


export const ExtendedCard = ({props}:any) =>{
let modalSeen = props.modalSeen
let setModalSeen = props.setModalSeen
	
/*
const data  = props.selectedItem ? props.selectedItem : props.item
*/
	
const data =	
{
	"title": "My Thai Restaurant",
	"categoryName": "Thai restaurant",
	"categories": ["Thai restaurant"],
	"address": "11 John Dalton St, Manchester M2 6WH, United Kingdom",
	"city": "Manchester",
	"id": "6373ac8197af2d3d260b2125",
	"imageUrls": [
	  "https://lh5.googleusercontent.com/p/AF1QipPbqZDYkxJMLRp0x4WULvDKuuYiS2hfo30h-pdZ=w1920-h1080-k-no",
	  "https://lh5.googleusercontent.com/p/AF1QipPHcrCQgJ1Kl99r2bmwUtSiBuwYBSC8R7fHppLq=w1920-h1080-k-no",
	  "https://lh5.googleusercontent.com/p/AF1QipM1s8PNtP8xTB3W5p_D-wgRPa5uapFG4yUd-yN6=w1920-h1080-k-no",
	  "https://lh5.googleusercontent.com/p/AF1QipNZWIqcaCOQqB_qEptrU5BN_eiBbre1qnQWEcVq=w1920-h1080-k-no"
	],
	"location": {"lat": 53.4804333, "lng": -2.2457361},
	"placeId": "ChIJHzvaLMKxe0gRULTvVMOrQt0",
	"postalCode": "M2 6WH",
	"reviewsCount": 941,
	"reviewsDistribution": {"oneStar": 79,"twoStar": 37,"threeStar": 71,"fourStar": 221,"fiveStar": 533},
	"url": "https://www.google.com/maps/place/My+Thai+Restaurant/@53.4804333,-2.2457361,17z/data=!3m1!4b1!4m5!3m4!1s0x487bb1c22cda3b1f:0xdd42abc354efb450!8m2!3d53.4803866!4d-2.2457668?hl=en",
	"website": "http://mythairestaurant.co.uk/manchester-john-dalton-street"
}
	
  const info: Object = {
    title: data.title,
    categoryName: data.categoryName,
    categories: data.categories,
    address: data.address,
    city: data.city,
	  postalCode: data.postalCode,
    }
const reviews: Object = {
    reviewsCount: data.reviewsCount,
	reviewsDistribution: data.reviewsDistribution,
  }	
const link: string = data.website? data.website : ''
const nav: string = data.url? data.url : ''
	
const images: Object = {
	images: data.imageUrls
}

return(
	
<Modal
				animationType="slide"
				transparent={false}
				visible={modalSeen}
				onRequestClose={() => {
					setModalSeen(!modalSeen);
				}}>
				<View style={styles.modalContainer}>
					<View style={styles.modalContent}>
						<Text style={styles.expendedCardTitle}
						numberOfLines={1}>{data.title}</Text>
				<RestaurantInfo info={info}/>
				<ReviewsSummary reviews={reviews} />
						<ImageGallery images={images}/>
					<Pressable
						style={styles.modalClose}
						onPress={() => setModalSeen(!modalSeen)}>
						<Image
							style={styles.modalIcon}
							source={require('../assets/contract-card.png')}
							resizeMode="cover"
						/>
				</Pressable>
				{nav? <Pressable
						style={styles.modalNav}
						onPress={() => Linking.openURL(nav)}>
						<Image
							style={styles.modalIcon}
							source={require('../assets/gps.png')}
							resizeMode="cover"
						/>
				</Pressable>:null}
				{link? <Pressable
						style={styles.modalLink}
						onPress={() => Linking.openURL(link)}>
						<Image
							style={styles.modalIcon}
							source={require('../assets/globe.png')}
							resizeMode="cover"
						/>
				</Pressable>:null}
				
					</View>
				</View>
			</Modal>
)

}

