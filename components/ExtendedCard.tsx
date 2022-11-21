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
} from 'react-native';
import styles from './styles';
import { ImageGallery } from './subComponents/ImageGallery';
import { RestaurantInfo } from './subComponents/RestaurantInfo';
import { ReviewsSummary } from './subComponents/ReviewsSummary';


export const ExtendedCard = ({props}:any) =>{
let modalSeen = props.modalSeen
let setModalSeen = props.setModalSeen

	
const reviews = {
    "reviewsCount": 941,
      "reviewsDistribution": {
        "oneStar": 79,
        "twoStar": 37,
        "threeStar": 71,
        "fourStar": 221,
        "fiveStar": 533}
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
					</View>
				</View>
			</Modal>
)

}

