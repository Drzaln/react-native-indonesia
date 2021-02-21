import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const SearchButton = () => {
	return (
		<Pressable style={styles.searchButton}>
			<Icon name={'search-outline'} color='#22879B' size={20} />
			<Text style={[ styles.text, styles.searchText ]}>Search your destination here</Text>
		</Pressable>
	)
}

export default SearchButton

const styles = StyleSheet.create({
	text: {
		color: 'black',
		includeFontPadding: false,
		fontFamily: 'Poppins-Regular'
	},
	searchButton: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 24,
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 100,
		backgroundColor: 'white',
		elevation: 2
	},
	searchText: {
		color: '#1D1D1D',
		opacity: 0.4,
		marginLeft: 8
	}
})
