import { Text, View } from "react-native"
import styles from "../styles"
import { onBackground, primary } from "../styles"
export function ReviewsSummary() {

  const reviewObject = {
    "reviewsCount": 941,
      "reviewsDistribution": {
        "oneStar": 79,
        "twoStar": 37,
        "threeStar": 71,
        "fourStar": 221,
        "fiveStar": 533}
  }
  const votes = Math.round(10*((reviewObject.reviewsDistribution.oneStar * 1) +
    (reviewObject.reviewsDistribution.twoStar * 2) +
    (reviewObject.reviewsDistribution.threeStar * 3) +
    (reviewObject.reviewsDistribution.fourStar * 4) +
    (reviewObject.reviewsDistribution.fiveStar * 5))/reviewObject.reviewsCount)/10

    return (
        <View style={styles.expandedReviews}>
        <View style={{ width: '100%', height: '50%', justifyContent: 'space-around', padding:'5%'}}>
          <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 45, color:primary}}>{votes}</Text>
          <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15 }}>{'⭐'.repeat(Math.round(votes))}</Text>
          <Text style={{ textAlign: "center", alignSelf: 'center', fontSize: 15, color:primary}}>{reviewObject.reviewsCount} reviews</Text>
        </View> 
        <View style={{ width: '100%', height: '50%', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'space-around', padding: '10%' }}>
          {[[5,reviewObject.reviewsDistribution.fiveStar],[4,reviewObject.reviewsDistribution.fourStar],[3,reviewObject.reviewsDistribution.threeStar],[2,reviewObject.reviewsDistribution.twoStar],[1,reviewObject.reviewsDistribution.oneStar]].map((Num) => {
            return <View style={{ height: '20%', width: '100%', flexDirection: 'row', justifyContent: 'space-around', }}>
              <View style={{ backgroundColor: primary, alignSelf: 'center', height: '33%', width: `${Num[1]? ((Num[1]/reviewObject.reviewsCount)*100)*1.2: 0}%`, borderRadius: 12 ,position:'absolute', zIndex: 1}}></View>
            <View style={{ backgroundColor: onBackground, alignSelf:'center', height: '33%', width: '80%', borderRadius: 12 }}></View>
              <Text style={{ fontSize: 15, fontWeight: 'bold', color: primary}}>{Num[0]}</Text>
          </View>
          })}
        </View>
        </View>
    )
}