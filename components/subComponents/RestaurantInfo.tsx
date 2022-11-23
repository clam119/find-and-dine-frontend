/** @format */

import { Text, View } from 'react-native';
import { background, primary } from '../styles';
import styles from '../styles';



export function RestaurantInfo(props: { info: any }) {
	const info = props.info;

	const categories = info.categories.filter((cat: any) => cat !== info.categoryName).slice(0,3);
	
	return (
		<View style={styles.expandedInfo}>
			<Text
				style={{
					fontSize: 16,
					color: primary,
					fontFamily: 'Metrophobic_400Regular',
					marginTop: 2,
					fontStyle: 'italic',
					paddingLeft: '4%'
				}}>
				{info.categoryName}
			</Text>
			{categories.length ? (
				
				<Text
					style={{
						padding: '1%',
						fontSize: 15,
						paddingLeft: '4%',
						color: primary,
						fontFamily: 'Metrophobic_400Regular',
					}}>{categories.join('\n')}</Text>
			) : (
				<></>
			)}
			<Text
				style={{
					fontSize: 15,
					paddingLeft: '4%',
					color: primary,
					fontFamily: 'Metrophobic_400Regular',
					fontStyle: 'italic'
				}}>
				{info.address.endsWith('United Kingdom') ? info.address.slice(0, -16): info.address}
			</Text>
		</View>
	);
}

