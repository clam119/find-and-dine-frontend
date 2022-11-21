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
	
if (props.selectedItem) { console.log(props.selectedItem)}//ITEM DATA FROM LIST
	
const reviews: Object = {
    "reviewsCount": 941,
      "reviewsDistribution": {
        "oneStar": 79,
        "twoStar": 37,
        "threeStar": 71,
        "fourStar": 221,
        "fiveStar": 533}
  }	
const link: string = 'https://northcoders.com/'
	
	
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
						<RestaurantInfo/>
				<ReviewsSummary reviews={reviews} />
						<ImageGallery/>
					<Pressable
						style={styles.modalClose}
						onPress={() => setModalSeen(!modalSeen)}>
						<Image
							style={styles.modalIcon}
							source={require('../assets/contract-card.png')}
							resizeMode="cover"
						/>
				</Pressable>
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

