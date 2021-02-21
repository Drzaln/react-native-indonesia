import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const { width } = Dimensions.get('screen')
const IMAGE_WIDTH = width * 0.7
const IMAGE_HEIGHT = IMAGE_WIDTH * 0.6

const RecommendList = () => {
	const RECOMMENDED = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			title: 'Raja Ampat',
			image:
				'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			title: 'Kalimantan',
			image:
				'https://images.unsplash.com/photo-1593704372594-1f04284a0e7f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			title: 'Lombok',
			image:
				'https://images.unsplash.com/photo-1506026410707-9ae71625e5a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1573&q=80'
		}
	]
	const renderItem = ({ item, index }) => <RecommendItem item={item} index={index} />
	return (
		<React.Fragment>
			<Text style={[ styles.text, styles.recommendedText ]}>Recommended</Text>
			<FlatList
				horizontal
				data={RECOMMENDED}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				style={{ marginTop: 18 }}
				contentContainerStyle={{ paddingRight: 24 }}
				showsHorizontalScrollIndicator={false}
				overScrollMode='never'
				decelerationRate='fast'
				snapToAlignment='start'
				snapToInterval={IMAGE_WIDTH}
			/>
		</React.Fragment>
	)
}

export default RecommendList

const RecommendItem = ({ item, index }) => {
	return (
		<View
			style={{
				marginLeft: index === 0 ? 24 : 16,
				borderRadius: 18
			}}>
			<ImageBackground
				style={{ height: IMAGE_HEIGHT, width: IMAGE_WIDTH, justifyContent: 'flex-end', alignItems: 'center' }}
				imageStyle={{ borderRadius: 18 }}
				source={{ uri: item.image }}>
				<Text style={[ styles.text, styles.captionRecommend ]}>{item.title}</Text>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	text: {
		color: 'black',
		includeFontPadding: false,
		fontFamily: 'Poppins-Regular'
	},
	recommendedText: {
		fontFamily: 'Poppins-SemiBold',
		fontSize: 18,
		color: '#22879B',
		marginTop: 8,
		marginLeft: 24
	},
	captionRecommend: {
		color: 'white',
		fontFamily: 'Poppins-SemiBold',
		fontSize: 16,
		marginBottom: 8
	}
})
