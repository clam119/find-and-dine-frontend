/** @format */

import { StyleSheet } from 'react-native';


export const primary = '#2C000A';
export const primaryVariant = 'darkgray';
export const secondary = '#950023';
export const secondaryVariant = '#950023';

export const onPrimary = 'white';
export const onSecondary = 'black';
export const onSurface = 'transparent';
export const onBackground = '#E9CCD3';
export const onError = '#800D09';
export const onSuccess = '#50C878';

export const surface = '#F5F5F4';
export const background = '#D50033';

const styles = StyleSheet.create({
	backgroundImage: {
		height: '100%',
		width: '100%',
		borderRadius: 15,
		overflow: 'hidden',
	},
	body: {
		width: '100%',
		height: '100%',
		alignItems: 'center',
		position: 'absolute',
		top: 0,
		backgroundColor: background,
	},
	bottomNavBar: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	binIcon: {
		padding: 20,
		right: '15%',
		backgroundColor: onError,
	},
	button: {
		position: 'absolute',
		top: '1%',
		right: '76%',
		paddingLeft: 10,
		paddingRight: 10,
		padding: 4,
		backgroundColor: secondaryVariant,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		borderRadius: 8,
		borderWidth: 4,
		borderColor: primary,
		zIndex:3,
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		fontWeight: 'bold'
	},
	card: {
		width: '85%',
		height: '85%',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		borderRadius: 13,
		borderWidth: 0,
	},
	cardGradient: {
		height: '100%',
		width: '100%',
		borderRadius: 10,
		position: 'absolute',
		zIndex: 2,
	},
	cardClick: {
		height: '100%',
		width: '100%',
		borderRadius: 10,
		position: 'absolute',
		zIndex: 10,
	},
	cardTitle: {
		color: onPrimary,
		fontSize: 24,
		position: 'absolute',
		bottom: '10%',
		zIndex: 2,
		marginLeft: 5,
		marginRight: 5,
		fontFamily: 'NotoSans_700Bold'
	},
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: background,
	},
	containerList: {
		paddingTop: '30%',
		paddingBottom: '30%',
		width: '100%',
		minHeight: '100%',
		top: 0,
		backgroundColor: background,
	},
	delete: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		top: 0,
	},
	expandedInfo: {
		top:'2%',
		textAlign: 'left',
		position: 'absolute',
		width: '48%',
		height: '31%',
		justifyContent: 'space-around',
		padding: '0%',
	},
	expandedCardTitle:{
		alignSelf: "center",
		top: -55,
		fontSize: 23,
		fontFamily: 'BigshotOne_400Regular'
	},

	expandedGallery: {
		backgroundColor: background,
		margin: '1%',
		position: 'absolute',
		top: '41%',
		width: '98%',
		height: '58%',
		borderRadius: 10,
	},
	expandedReviews: {
		margin: '1%',
		position: 'absolute',
		width: '47%',
		height: '40%',
		left: '50%',
	},
	header: {
		width: '100%',
		height: '10%',
		alignItems: 'center',
		position: 'absolute',
		top: 0,
		backgroundColor: background,
	},
	helperIconLeft: {
		position: 'absolute',
		top: '6%',
		right: '10%',
		aspectRatio: 1,
		width: 80,
		height: 80,
		zIndex: 2,
	},
	helperIconRight: {
		position: 'absolute',
		top: '6%',
		left: '10%',
		aspectRatio: 1,
		width: 80,
		height: 80,
		zIndex: 2,
	},
	imageGallery: {
		width: '100%',
		height: 395,
    resizeMode: 'cover',
	borderRadius: 10,

	},
	item: {
		width: '90%',
		flexDirection: 'row',
		alignSelf: 'center',
		backgroundColor: surface,
		marginTop: '1%',
		marginBottom: '1%',
		marginLeft: '2%',
		marginRight: '2%',
		borderRadius: 10,
		borderWidth: 0,
		borderColor: onSurface,
	},
	loading: {
		alignSelf: 'center',
		resizeMode: 'contain',
		width: '80%'
	},
	loadingContainer: {
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		backgroundColor: background
	},
	loadingText: {
		position: 'absolute',
		top: '75%',
		alignSelf: 'center',
		fontSize: 36,
		color: onBackground,
		fontWeight: 'bold'
	},
	modalContainer: {
		top: '10%',
		left: '0%',
		width: '100%',
		height: '90%',
		position: 'absolute',
		borderRadius: 0,
		borderWidth: 0,
		backgroundColor: background,
	},
	modalContent: {
		top: '3%',
		left: '7%',
		right: '7%',
		width: '85%',
		height: '90%',
		position: 'absolute',
		borderRadius: 13,
		borderWidth: 0,
		backgroundColor: surface,
	},
	modalClose: {
		left: '87%',
		top: '96%',
		height: '10%',
		aspectRatio: 1,
		backgroundColor: secondaryVariant,
		borderRadius: 50,
		borderWidth: 5,
		borderColor: primary,
		padding: '1%',
		position: 'absolute',
	},
	modalFav: {
		right: '86%',
		bottom: '-6%',
		height: '10%',
		aspectRatio: 1,
		position: 'absolute',
		zIndex: 2,
		backgroundColor: secondaryVariant,
		borderRadius: 50,
		borderWidth: 5,
		borderColor: primary,
	},
	modalIcon: {
		width: '90%',
		height: '90%',
		margin: '5%',
	},
	modalLink: {
		left: '2%',
		top: '30%',
		height: '10%',
		aspectRatio: 1,
		padding: '1%',
		position: 'absolute',
	},
	modalListIcon: {
		aspectRatio: 1,
		top: '33%',
		width: 40,
		height: 40,
		padding: '0%',
		justifyContent: 'center',
		alignSelf: 'center',
		zIndex: 2,
	},
	modalListIconContainer: {
		left: '84.8%',
		top: '4%',
		height: '92%',
		width: 50,
		position: 'absolute',
		zIndex: 1,
		backgroundColor: secondaryVariant,
		borderRadius: 10,
		borderWidth: 4,
		borderColor: primary,
	},
	modalOpen: {
		position: 'absolute',
		right: '5%',
		bottom: '3%',
		width: '12%',
		aspectRatio: 1,
		borderRadius: 50,
		zIndex: 2,
	},
	modalNav: {
		width: 70,
		left: '1.6%',
		top: '35%',
		right: '93%',
		height: '10%',
		aspectRatio: 1,
		position: 'absolute',
		zIndex: 2,
	},
	websiteIconText: {
		position: 'absolute',
		top: '30%',
		width: 160,
		color: '#3668FF',
		fontSize: 18,
	},
	locationIconText:{
		position: 'absolute',
		top: '17%',
		width: 160,
		color: '#3668FF',
		fontSize: 18,
		marginLeft: 1,
	},
	logo: {
		aspectRatio: 1,
		height: 60,
		width: 120,
		borderRadius: 10,
		margin: '0%',
	},
	refreshIcon: {
		padding:20,
		left: '16%',
		backgroundColor: onSuccess,
	},
	title: {
		top: 20,
		justifyContent: 'center',
	},
	titleList: {
		position: 'absolute',
		left: '33%',
		right: '16%',
		fontSize: 18,
		textAlign: 'center',
		alignSelf: 'center',
		color: onSecondary,
		fontFamily: 'NotoSans_700Bold',
	},
	votes: {
		position: 'absolute',
		textAlign: 'center',
		alignSelf: 'flex-end',
		bottom: '5.5%',
		left: '4.5%',
		zIndex: 2,
	},
});

export default styles;
