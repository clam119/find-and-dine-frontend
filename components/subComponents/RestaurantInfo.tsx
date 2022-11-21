import { Text, View } from "react-native";
import { primary } from "../styles"
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

  const categories = DEMO_DATA.categories.filter((cat) => cat !== DEMO_DATA.categoryName)
    return (
      <View style={styles.expandedInfo}>
        <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15, fontWeight: 'bold', color:primary}}>{DEMO_DATA.categoryName}</Text>
        {categories.length? <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15 , color:primary}}>{ }</Text> : <></>}
        <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15 , color:primary}}>{DEMO_DATA.address.slice(0, DEMO_DATA.address.indexOf(','))}</Text>
        <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15 , color:primary}}>{DEMO_DATA.city}</Text>
        <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15 , color:primary}}>{DEMO_DATA.postalCode}</Text>
        </View>
    )
}