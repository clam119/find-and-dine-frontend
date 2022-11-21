import { Text, View} from "react-native";
import styles from "../styles";

export function RestaurantInfo() {

  const DEMO_DATA = {
    "title": "My Thai Restaurant",
    "categoryName": "Thai restaurant",
    "categories": ["Thai restaurant"],
    "address": "11 John Dalton St, Manchester M2 6WH, United Kingdom",
    "city": "Manchester",
    "postalCode": "M2 6WH",
    }

    return (
        <View style={styles.expandedInfo}>
        <Text>{DEMO_DATA.categoryName}</Text>
        <Text>{DEMO_DATA.categories.filter((cat) => cat !== DEMO_DATA.categoryName)}</Text>
        <Text>{DEMO_DATA.address.slice(0, DEMO_DATA.address.indexOf(','))}</Text>
        <Text>{DEMO_DATA.city}</Text>
        <Text>{DEMO_DATA.postalCode}</Text>
        </View>
    )
}