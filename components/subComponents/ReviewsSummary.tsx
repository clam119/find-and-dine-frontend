/** @format */

import { Text, View } from 'react-native';
import styles from '../styles';
import { background } from '../styles';
import { onBackground, primary } from '../styles';
export function ReviewsSummary(props: { reviews: any }) {
	const reviewObj = props.reviews;
console.log(reviewObj.reviewsDistribution.fiveStar)
	const votes =
		Math.round(
			(10 *
				(reviewObj.reviewsDistribution.oneStar * 1 +
					reviewObj.reviewsDistribution.twoStar * 2 +
					reviewObj.reviewsDistribution.threeStar * 3 +
					reviewObj.reviewsDistribution.fourStar * 4 +
					reviewObj.reviewsDistribution.fiveStar * 5)) /
				reviewObj.reviewsCount
		) / 10;

	return (
		<View style={styles.expandedReviews}>
			<View
				style={{
					width: '100%',
					height: '50%',
					justifyContent: 'space-around',
					padding: '1%',
				}}>
				<Text
					style={{
						textAlign: 'center',
						alignSelf: 'center',
						fontSize: 42,
						color: primary,
					}}>
					{votes}
				</Text>
				<Text
					style={{
						textAlign: 'center',
						alignSelf: 'center',
						fontSize: 15,
					}}>
					{'⭐'.repeat(Math.round(votes))}
				</Text>
				<Text
					style={{
						textAlign: 'center',
						alignSelf: 'center',
						fontSize: 12,
						color: primary,
					}}>
					{reviewObj.reviewsCount} reviews
				</Text>
			</View>
			<View
				style={{
					width: '100%',
					height: '50%',
					flexDirection: 'column',
					flexWrap: 'nowrap',
					justifyContent: 'space-around',
					paddingTop: '2%',
					paddingBottom: '10%',
				}}>
				{[
					[5, reviewObj.reviewsDistribution.fiveStar],
					[4, reviewObj.reviewsDistribution.fourStar],
					[3, reviewObj.reviewsDistribution.threeStar],
					[2, reviewObj.reviewsDistribution.twoStar],
					[1, reviewObj.reviewsDistribution.oneStar],
				].map((Num, i) => {
					return (
						<View
							key={i}
							style={{
								height: '20%',
								width: '100%',
								flexDirection: 'row',
								justifyContent: 'space-around',
							}}>
							<View
								style={{
									backgroundColor: background,
									alignSelf: 'center',
									height: '33%',
									width: `${
										Num[1]
											? (Num[1] /
													reviewObj.reviewsCount) *
											  100 *
											  0.8
											: 0
									}%`,
									borderRadius: 12,
									position: 'absolute',
									zIndex: 1,
								}}
							/>
							<View
								style={{
									backgroundColor:
										onBackground,
									alignSelf: 'center',
									height: '33%',
									width: '80%',
									borderRadius: 12,
								}}></View>
							<Text
								style={{
									fontSize: 15,
									fontWeight: 'bold',
									color: primary,
								}}>
								{Num[0]}
							</Text>
						</View>
					);
				})}
			</View>
		</View>
	);
}
