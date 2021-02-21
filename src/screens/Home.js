import React from 'react'
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LocalReviews from '../components/LocalReviews/LocalReviews'
import MenuList from '../components/MenuList/MenuList'
import RecommendList from '../components/RecommendList/RecommendList'
import SearchButton from '../components/SearchButton/SearchButton'

const Home = () => {
	return (
		<React.Fragment>
			<StatusBar translucent={false} backgroundColor='white' barStyle='dark-content' />
			<ScrollView
				overScrollMode='never'
				stickyHeaderIndices={[ 1 ]}
				showsHorizontalScrollIndicator={false}
				style={{ backgroundColor: 'white' }}
				contentContainerStyle={{ paddingBottom: 24, paddingTop: 16 }}>
				<SearchButton />
				<MenuList />
				<RecommendList />
				<LocalReviews />
				<Text style={[ styles.text, styles.reviewText ]}>Destination Highlights</Text>
			</ScrollView>
		</React.Fragment>
	)
}

export default Home

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
