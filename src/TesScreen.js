import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StatusBar, Animated, ScrollView, Image, Easing } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import BottomSheet from './BottomSheet'

export default function index () {
	const scrollViewRef = useRef()
	const { width, height } = useWindowDimensions()

	const indicator = useRef(new Animated.Value(0)).current

	const widthByScreen = (input) => width * input / 100

	const heightByScreen = (input) => height * input / 100

	const onButtonClick = (id, easing, scrollTo) => {
		Animated.timing(indicator, {
			toValue: id,
			duration: 100,
			easing
		}).start()
		scrollViewRef.current.scrollTo({
			x: scrollTo
		})
	}

	return (
		<View style={{ backgroundColor: '#91c542', flex: 1 }}>
			<StatusBar backgroundColor='#91c542' />
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 22
				}}>
				<TouchableOpacity
					onPress={() => {
						onButtonClick(0, Easing.inOut(Easing.quad), 0)
					}}
					style={{ flexDirection: 'row' }}>
					<Icon name='percent' size={15} color='#fff' />
					<Text style={{ color: 'white', marginLeft: 10 }}>Promo</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						onButtonClick(1, Easing.inOut(Easing.quad), widthByScreen(100))
					}}
					style={{ flexDirection: 'row' }}>
					<Icon name='home' size={15} color='#fff' />
					<Text style={{ color: 'white', marginLeft: 10 }}>Beranda</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						onButtonClick(2, Easing.inOut(Easing.quad), widthByScreen(200))
					}}
					style={{ flexDirection: 'row' }}>
					<Icon name='comment' size={15} color='#fff' />
					<Text style={{ color: 'white', marginLeft: 10 }}>Chat</Text>
				</TouchableOpacity>
			</View>
			<Animated.View
				style={{
					height: 10,
					width: '33.3333333333%',
					alignItems: 'center',
					position: 'absolute',
					transform: [
						{
							translateX: indicator.interpolate({
								inputRange: [ 0, widthByScreen(100) ],
								outputRange: [ 0, widthByScreen(33.3333333333) ]
							})
						}
					]
				}}>
				<View
					style={{
						position: 'absolute',
						height: 45,
						width: '80%',
						borderRadius: 10,
						top: 10,
						backgroundColor: 'rgba(224, 224, 224, 0.4)'
					}}
				/>
			</Animated.View>

			<ScrollView
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				ref={scrollViewRef}
				onScroll={Animated.event([
					{
						nativeEvent: {
							contentOffset: {
								x: indicator
							}
						}
					}
				])}>
				<View style={{ width: widthByScreen(100) }}>
					<Image
						source={{ uri: 'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg' }}
						style={{ width: '100%', height: heightByScreen(100), top: -70 }}
						resizeMode='contain'
					/>
					{/* <BottomSheet>
						<Image
							source={{ uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/12/Beautiful-Landscape-Background-for-PC.jpg' }}
							style={{ width: '100%', height: heightByScreen(100), top: -70 }}
							resizeMode='contain'
						/>
					</BottomSheet> */}
				</View>
				<View style={{ width: widthByScreen(100) }}>
					<Image
						source={{ uri: 'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg' }}
						style={{ width: '100%', height: heightByScreen(100), top: -180 }}
						resizeMode='contain'
					/>
					<BottomSheet>
						<Image
							source={{ uri: 'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg' }}
							style={{ width: '100%', height: heightByScreen(100), top: -100 }}
							resizeMode='contain'
						/>
					</BottomSheet>
				</View>
				<View style={{ width: widthByScreen(100) }}>
					<Image
						source={{ uri: 'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg' }}
						style={{ width: '100%', height: heightByScreen(100), top: -70 }}
						resizeMode='contain'
					/>
					<BottomSheet>
						<Image
							source={{ uri: 'https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg' }}
							style={{ width: '100%', height: heightByScreen(100), top: -70 }}
							resizeMode='contain'
						/>
					</BottomSheet>
				</View>
			</ScrollView>
		</View>
	)
}
