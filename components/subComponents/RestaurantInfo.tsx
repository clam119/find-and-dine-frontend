import { Text, View } from "react-native";
import { primary } from "../styles"
import styles from "../styles";

export function RestaurantInfo(props: { info: any }) {

  const info = props.info

  const categories = info.categories.filter((cat: any) => cat !== info.categoryName)
    return (
      <View style={styles.expandedInfo}>
        <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15, fontWeight: 'bold', color:primary}}>{info.categoryName}</Text>
        {categories.length? <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15 , color:primary}}>{ }</Text> : <></>}
        <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15 , color:primary}}>{info.address.slice(0, info.address.indexOf(','))}</Text>
        <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15 , color:primary}}>{info.city}</Text>
        <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15 , color:primary}}>{info.postalCode}</Text>
        </View>
    )
}