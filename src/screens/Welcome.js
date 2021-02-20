import React from 'react'
import { Text, ImageBackground, StyleSheet, StatusBar, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Welcome = ({ navigation }) => {
	return (
		<React.Fragment>
			<StatusBar animated translucent backgroundColor='transparent' barStyle='dark-content' />
			<ImageBackground
				source={{
					uri:
						'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1954&q=80'
				}}
				style={styles.image}>
				<LinearGradient
					colors={[ 'transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)' ]}
					style={styles.textContainer}>
					<Text style={[ styles.text, styles.header ]}>WELCOME TO INDONESIA</Text>
					<Text style={[ styles.text, styles.subHeader ]}>
						Catch a glimpse of Indonesia's bewitching attractions without having to put on your shoes and
						discover the ultimate destination that matches your soul.
					</Text>
					<Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
						<Text style={[ styles.text, styles.buttonText ]}>Guide Me</Text>
					</Pressable>
				</LinearGradient>
			</ImageBackground>
		</React.Fragment>
	)
}

export default Welcome

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: 'cover',
		height: '130%',
		width: '103%',
		justifyContent: 'flex-end'
	},
	textContainer: {
		paddingHorizontal: 64,
		alignItems: 'center',
		paddingBottom: 46
	},
	text: {
		color: 'white',
		textAlign: 'center',
		includeFontPadding: false
	},
	header: {
		fontSize: 33,
		fontFamily: 'Poppins-SemiBold'
	},
	subHeader: {
		fontSize: 14,
		fontFamily: 'Poppins-Regular',
		marginHorizontal: 18,
		marginTop: 16
	},
	button: {
		paddingHorizontal: 32,
		paddingVertical: 12,
		borderRadius: 100,
		backgroundColor: 'white',
		marginTop: 32
	},
	buttonText: {
		color: 'black',
		fontSize: 20,
		fontFamily: 'Poppins-SemiBold'
	}
})
