/** @format */

import { Text, View } from 'react-native';
import { background, primary } from '../styles';
import styles from '../styles';



export function RestaurantInfo(props: { info: any }) {
	const info = props.info;

	const categories = info.categories.filter((cat: any) => cat !== info.categoryName);
	
	return (
		<View style={styles.expandedInfo}>
			<Text
				style={{
					fontSize: 18,
					color: primary,
					textAlign: 'center',
					alignSelf: 'center',
					fontFamily: 'Metrophobic_400Regular',
					marginTop: 5,
					fontStyle: 'italic',
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
						fontFamily: 'Metrophobic_400Regular',
						padding: '3%'
					}}>{categories.join(' ')}</Text>
			) : (
				<></>
			)}
			<Text
				style={{
					textAlign: 'center',
					alignSelf: 'center',
					fontSize: 15,
					color: primary,
					fontFamily: 'Metrophobic_400Regular',
					fontStyle: 'italic'
				}}>
				{info.address.slice(0, info.address.indexOf(','))}
			</Text>
			<Text
				style={{
					textAlign: 'center',
					alignSelf: 'center',
					fontSize: 15,
					color: primary,
					fontFamily: 'Metrophobic_400Regular',
					fontStyle: 'italic'
				}}>
				{info.city}
			</Text>
			<Text
				style={{
					textAlign: 'center',
					alignSelf: 'center',
					fontSize: 15,
					color: primary,
					marginBottom: '5%',
					fontFamily: 'Metrophobic_400Regular',
					fontStyle: 'italic'
				}}>
				{info.postalCode}
			</Text>
		</View>
	);
}

