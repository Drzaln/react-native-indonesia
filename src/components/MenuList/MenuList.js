import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const MenuList = () => {
	const MENU = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: 'Destinations',
			backgroundColor: '#FF4A4A'
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'Attraction',
			backgroundColor: '#FFC848'
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: 'Event & Festivals',
			backgroundColor: '#06D6A0'
		}
	]
	const renderItem = ({ item, index }) => <MenuItem item={item} index={index} />
	return (
		<FlatList
			horizontal
			data={MENU}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
			contentContainerStyle={{ paddingRight: 24, backgroundColor: 'white', paddingTop: 16, paddingBottom: 16 }}
			showsHorizontalScrollIndicator={false}
			overScrollMode='never'
		/>
	)
}

export default MenuList

const MenuItem = ({ item, index }) => (
	<View
		style={{
			marginLeft: index === 0 ? 24 : 16,
			backgroundColor: item.backgroundColor,
			borderRadius: 100,
			flexDirection: 'row',
			padding: 1,
			alignItems: 'center',
			paddingRight: 16
		}}>
		<View style={{ height: 25, width: 25, backgroundColor: 'white', borderRadius: 100, marginRight: 16 }} />
		<Text style={[ styles.text, { color: 'white' } ]}>{item.title}</Text>
	</View>
)

const styles = StyleSheet.create({
	text: {
		color: 'black',
		includeFontPadding: false,
		fontFamily: 'Poppins-Regular'
	}
})
