/** @format */

import { Text, View } from 'react-native';
import { primary } from '../styles';
import styles from '../styles';

export function RestaurantInfo(props: { info: any }) {
	const info = props.info;

	const categories = info.categories.filter((cat: any) => cat !== info.categoryName);
	return (
		<View style={styles.expandedInfo}>
			<Text 
				style = {{
					top: -20,
					fontSize: 21,
					color: primary,
					marginBottom: 20,

				}}>
				{info.categoryName}
			</Text>
			{categories.length ? (
				<Text
					style={{
						textAlign: 'center',
						alignSelf: 'center',
						fontSize: 15,
						color: primary,
					}}>
					{}
				</Text>
			) : (
				<></>
			)}
			<Text
				style={{
					fontSize: 15,
					color: primary,
					top: -50,
				}}>
				{info.address.slice(0, info.address.indexOf(','))}
			</Text>
			<Text
				style={{
					fontSize: 15,
					color: primary,
					top: -55,
				}}>
				{info.city}
			</Text>
			<Text
				style={{
					fontSize: 15,
					color: primary,
					top:-60,
				}}>
				{info.postalCode}
			</Text>
		</View>
	);
}
