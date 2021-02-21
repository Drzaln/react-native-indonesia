import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = ({ previous, navigation, scene }) => {
	const { options } = scene.descriptor
	const title =
		options.headerTitle !== undefined
			? options.headerTitle
			: options.title !== undefined ? options.title : scene.route.name
	return (
		<View style={styles.header}>
			<Text style={styles.headerText}>Explore Indonesia</Text>
			<Image
				style={{ height: 40, width: 40, borderRadius: 100 }}
				source={{ uri: 'https://randomuser.me/api/portraits/men/15.jpg' }}
			/>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		backgroundColor: 'white',
		justifyContent: 'space-between',
		paddingHorizontal: 24,
		alignItems: 'center',
		paddingVertical: 8
	},
	headerText: {
		fontFamily: 'Poppins-SemiBold',
		fontSize: 23,
		color: '#22879B'
	}
})
