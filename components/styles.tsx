/** @format */

import { StyleSheet } from 'react-native';
/*
import { Appearance, useColorScheme } from 'react-native';
const theme = () => {
  if (useColorScheme() === 'dark') {
    // render some dark thing
  } else {
    // render some light thing
  }
}; theme()
*/

export const primary = 'black';
export const primaryVariant = 'darkgray';
export const secondary = 'gray';
export const secondaryVariant = 'darkgray';

export const onPrimary = 'white';
export const onSecondary = 'gray';
export const onSurface = 'transparent';
export const onBackground = 'white';
export const onError = '#DC143C';
export const onSuccess = '#50C878';

export const surface = 'lightgray';
export const background = 'gray';

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
		padding: 30,
		right: '16%',
		backgroundColor: onError,
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
		fontWeight: 'bold',
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
		margin: '1%',
		position: 'absolute',
		width: '48%',
		height: '38%',
		borderRadius: 10,
		justifyContent: 'space-evenly',
		padding: '5%',
	},
	expendedCardTitle:{
		alignSelf: "center",
		top: -40,
		fontSize: 23,
		fontFamily: "Optima-Bold",

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
		width: 50,
		height: 50,
		zIndex: 2,
	},
	helperIconRight: {
		position: 'absolute',
		top: '6%',
		left: '10%',
		aspectRatio: 1,
		width: 50,
		height: 50,
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
		left: '7.5%',
		width: '85%',
		height: '82.5%',
		position: 'absolute',
		borderRadius: 13,
		borderWidth: 0,
		backgroundColor: background,
	},
	modalContent: {
		top: '1.5%',
		left: '2.5%',
		width: '95%',
		height: '97%',
		position: 'absolute',
		borderRadius: 13,
		borderWidth: 0,
		backgroundColor: surface,
	},
	modalClose: {
		left: '91%',
		top: '96%',
		height: '10%',
		aspectRatio: 1,
		backgroundColor: secondary,
		borderRadius: 50,
		borderWidth: 5,
		borderColor: secondaryVariant,
		padding: '1%',
		position: 'absolute',
	},
	modalIcon: {
		width: '90%',
		height: '90%',
		margin: '5%',
	},
	modalLink: {
		right: '91%',
		top: '96%',
		height: '10%',
		aspectRatio: 1,
		backgroundColor: secondary,
		borderRadius: 50,
		borderWidth: 5,
		borderColor: secondaryVariant,
		padding: '1%',
		position: 'absolute',
	},
	modalListIcon: {
		aspectRatio: 1,
		height: 50,
		width: 50,
		marginTop: '7%',
		backgroundColor: secondary,
		borderRadius: 50,
		borderWidth: 3,
		borderColor: secondaryVariant,
		padding: '4%',
		textAlign: 'center',
		alignSelf: 'flex-start',
		top: '2.5%',
		right: '4.5%',
		zIndex: 2,
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
		right: '65%',
		top: '36.5%',
		height: '10%',
		aspectRatio: 1,
		backgroundColor: secondary,
		borderRadius: 50,
		borderWidth: 5,
		borderColor: secondaryVariant,
		padding: '1%',
		position: 'absolute',
		zIndex: 2,
	},
	logo: {
		aspectRatio: 1,
		height: 60,
		width: 120,
		borderRadius: 10,
		margin: '0%',
	},
	refreshIcon: {
		padding: 30,
		left: '16%',
		backgroundColor: onSuccess,
	},
	title: {
		top: 20,
		justifyContent: 'center',
	},
	titleList: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		alignSelf: 'center',
		fontWeight: 'bold',
		color: onSecondary,
	},
	votes: {
		position: 'absolute',
		textAlign: 'center',
		alignSelf: 'flex-end',
		bottom: '5.5%',
		left: '4.5%',
		zIndex: 2,
	},
	button: {
		margin: 10,
		padding: 10,
		backgroundColor: 'orange',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
	},
	buttonText: {
		fontSize: 18,
		color: '#444',
	},
});

export default styles;
