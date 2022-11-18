import { Text, View } from "react-native"
import styles from "../styles"
import { onBackground, primary } from "../styles"
export function ReviewsSummary() {

    return (
        <View style={styles.expandedReviews}>
        <View style={{ width: '100%', height: '50%', justifyContent: 'space-around', padding:'5%'}}>
          <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 45 }}>3.8</Text>
          <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15 }}>{'⭐'.repeat(5)}</Text>
          <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15 }}>1,553 reviews</Text>
        </View> 
        <View style={{ width: '100%', height: '50%', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'space-around', padding: '10%' }}>
          {[5, 4, 3, 2, 1].map((Num) => {
            return <View style={{ height: '20%', width: '100%', flexDirection: 'row', justifyContent: 'space-around', }}>
              <View style={{ backgroundColor: primary, alignSelf:'center', height: '33%', width: '10%', borderRadius: 12 ,position:'absolute', zIndex: 1}}></View>
            <View style={{ backgroundColor: onBackground, alignSelf:'center', height: '33%', width: '80%', borderRadius: 12 }}></View>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{Num}</Text>
          </View>
          })}
        </View>
        </View>
    )
}