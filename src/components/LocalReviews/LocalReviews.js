import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const LocalReviews = () => {
	return (
		<React.Fragment>
			<Text style={[ styles.text, styles.reviewText ]}>Local Reviews</Text>
			<View
				style={{
					backgroundColor: 'white',
					elevation: 2,
					borderRadius: 18,
					padding: 16,
					marginHorizontal: 24,
					marginTop: 16
				}}>
				<View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
					<View style={{ flex: 0.2 }}>
						<Image
							style={{ height: 45, width: 45, borderRadius: 100 }}
							source={{ uri: 'https://randomuser.me/api/portraits/men/51.jpg' }}
						/>
					</View>
					<View style={{ flex: 0.6 }}>
						<Text style={[ styles.text, { fontFamily: 'Poppins-Italic', fontSize: 11, opacity: 0.6 } ]}>
							Review on Raja Ampat
						</Text>
						<Text style={[ styles.text, { color: '#22879B' } ]}>Fulan binti Fulana</Text>
					</View>
					<View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'flex-end' }}>
						<Icon name={'star'} color='#FFC107' size={15} />
						<Icon name={'star'} color='#FFC107' size={15} />
						<Icon name={'star'} color='#FFC107' size={15} />
						<Icon name={'star'} color='#FFC107' size={15} />
						<Icon name={'star'} color='#FFC107' size={15} />
					</View>
				</View>
				<Text style={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna purus, faucibus id nunc quis,
					tempus fermentum neque.
				</Text>
			</View>
		</React.Fragment>
	)
}

export default LocalReviews

const styles = StyleSheet.create({
	text: {
		color: 'black',
		includeFontPadding: false,
		fontFamily: 'Poppins-Regular'
	},
	reviewText: {
		fontFamily: 'Poppins-SemiBold',
		fontSize: 18,
		color: '#22879B',
		marginTop: 24,
		marginLeft: 24
	}
})
