import React from 'react'
import { Text, ImageBackground, StyleSheet, StatusBar, Pressable, View, TextInput } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import Icon from 'react-native-vector-icons/Ionicons'
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated'
import { mixColor, onScrollEvent, useValue } from 'react-native-redash/lib/module/v1'

const Login = ({ navigation }) => {
	const [ secureText, setSecureText ] = React.useState(true)
	const [ layoutWidth, setLayoutWidth ] = React.useState(265)
	const [ measure, setMeasure ] = React.useState(0)
	const selected = useValue(0)
	const scrollRef = React.useRef()
	const signupRef = React.useRef()
	const navRef = React.useRef()
	const { width } = useWindowDimensions()

	React.useEffect(() => {
		signupRef.current.measureLayout(navRef.current, (x) => {
			setMeasure(x)
		})
	}, [])

	const measureWidth = (e) => {
		const eWidth = Math.floor(e.nativeEvent.layout.width - 64)
		setLayoutWidth(eWidth)
	}

	const translateX = interpolate(selected, {
		inputRange: [ 0, 1 ],
		outputRange: [ 0, measure ],
		extrapolate: Extrapolate.CLAMP
	})

	const onScroll = onScrollEvent({ x: selected })

	return (
		<React.Fragment>
			<StatusBar translucent backgroundColor='transparent' barStyle='light-content' animated />
			<ImageBackground
				source={{
					uri:
						'https://images.unsplash.com/photo-1611243017235-84454d0491aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
				}}
				style={styles.image}>
				<View style={styles.sectionContainer(width)} onLayout={(e) => measureWidth(e)}>
					<View style={styles.logSelection}>
						<Animated.View style={[ styles.indicator, { transform: [ { translateX } ] } ]} />
						<View ref={navRef} style={styles.rowWrapper}>
							<Pressable
								style={{ flex: 1 }}
								hitSlop={{ top: 6, bottom: 6 }}
								onPress={() => {
									scrollRef.current.getNode().scrollTo({ x: 0, y: 0, animated: true })
								}}>
								<Animated.Text
									style={[
										styles.text,
										styles.logText,
										{ color: mixColor(selected, '#fff', '#22879B') }
									]}>
									Log In
								</Animated.Text>
							</Pressable>
							<View ref={signupRef} style={{ flex: 1 }}>
								<Pressable
									hitSlop={{ top: 6, bottom: 6 }}
									onPress={() => {
										scrollRef.current.getNode().scrollTo({ x: layoutWidth, y: 0, animated: true })
									}}>
									<Animated.Text
										style={[
											styles.text,
											styles.logText,
											{ color: mixColor(selected, '#22879B', '#fff') }
										]}>
										Sign Up
									</Animated.Text>
								</Pressable>
							</View>
						</View>
					</View>
					<Animated.ScrollView
						ref={scrollRef}
						horizontal
						overScrollMode='never'
						showsHorizontalScrollIndicator={false}
						pagingEnabled
						scrollEventThrottle={1}
						// onScroll={(r) => {
						// 	selected.setValue(r.nativeEvent.contentOffset.x)
						// }}
						decelerationRate='fast'
						{...{ onScroll }}>
						<View style={{ marginTop: 50, width: layoutWidth }}>
							<View
								style={{
									backgroundColor: 'white',
									borderRadius: 100,
									paddingHorizontal: 16,
									justifyContent: 'center',
									elevation: 2
								}}>
								<TextInput
									placeholder='Enter email or username'
									keyboardType='email-address'
									style={{ height: 40 }}
								/>
							</View>
							<View
								style={{
									backgroundColor: 'white',
									borderRadius: 100,
									paddingHorizontal: 16,
									alignItems: 'center',
									marginTop: 16,
									elevation: 2,
									flexDirection: 'row'
								}}>
								<TextInput
									placeholder='Password'
									secureTextEntry={secureText}
									style={{ height: 40, flex: 0.9 }}
								/>
								<Pressable
									onPress={() => setSecureText(!secureText)}
									hitSlop={{ top: 16, bottom: 16, left: 16 }}
									style={{ flex: 0.1 }}>
									<Icon name={secureText ? 'eye-off' : 'eye'} color='#A8A7A7' size={20} />
								</Pressable>
							</View>
							<View style={styles.forgotContainer}>
								<Text style={[ styles.text, styles.forgotText ]}>Forgot Password?</Text>
							</View>
							<Pressable style={[ styles.button, { marginTop: 90 } ]} onPress={() => {}}>
								<Text style={[ styles.text, styles.buttonText ]}>Log In</Text>
							</Pressable>
							<Text style={styles.text} />
						</View>
						<View style={{ marginTop: 50, width: layoutWidth }}>
							<View
								style={{
									backgroundColor: 'white',
									borderRadius: 100,
									paddingHorizontal: 16,
									justifyContent: 'center',
									elevation: 2
								}}>
								<TextInput
									placeholder='Enter email or username'
									keyboardType='email-address'
									style={{ height: 40 }}
								/>
							</View>
							<View
								style={{
									backgroundColor: 'white',
									borderRadius: 100,
									paddingHorizontal: 16,
									alignItems: 'center',
									marginTop: 16,
									elevation: 2,
									flexDirection: 'row'
								}}>
								<TextInput
									placeholder='Password'
									secureTextEntry={secureText}
									style={{ height: 40, flex: 0.9 }}
								/>
								<Pressable
									onPress={() => setSecureText(!secureText)}
									hitSlop={{ top: 16, bottom: 16, left: 16 }}
									style={{ flex: 0.1 }}>
									<Icon name={secureText ? 'eye-off' : 'eye'} color='#A8A7A7' size={20} />
								</Pressable>
							</View>
							<View
								style={{
									backgroundColor: 'white',
									borderRadius: 100,
									paddingHorizontal: 16,
									alignItems: 'center',
									marginTop: 16,
									elevation: 2,
									flexDirection: 'row'
								}}>
								<TextInput
									placeholder='Confirm Password'
									secureTextEntry={secureText}
									style={{ height: 40, flex: 0.9 }}
								/>
								<Pressable
									onPress={() => setSecureText(!secureText)}
									hitSlop={{ top: 16, bottom: 16, left: 16 }}
									style={{ flex: 0.1 }}>
									<Icon name={secureText ? 'eye-off' : 'eye'} color='#A8A7A7' size={20} />
								</Pressable>
							</View>
							<Pressable style={styles.button}>
								<Text style={[ styles.text, styles.buttonText ]}>Sign Up</Text>
							</Pressable>
							<Text style={styles.text} />
						</View>
					</Animated.ScrollView>
				</View>
			</ImageBackground>
		</React.Fragment>
	)
}

export default Login

const styles = StyleSheet.create({
	text: {
		color: 'white',
		textAlign: 'center',
		includeFontPadding: false,
		fontFamily: 'Poppins-Regular'
	},
	logText: {
		fontFamily: 'Poppins-SemiBold',
		fontSize: 12
	},
	forgotText: {
		color: 'rgba(255,255,255, 0.9)',
		fontSize: 10
	},
	buttonText: {
		fontSize: 14,
		fontFamily: 'Poppins-SemiBold'
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		height: '130%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	sectionContainer: (width) => ({
		backgroundColor: 'rgba(0,0,0,0.5)',
		padding: 32,
		borderRadius: 18,
		justifyContent: 'center',
		width: width * 0.8
	}),
	logSelection: {
		flexDirection: 'row',
		backgroundColor: 'white',
		alignItems: 'center',
		borderRadius: 100
	},
	rowWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingVertical: 6,
		flex: 1,
		borderRadius: 100
	},
	indicator: {
		position: 'absolute',
		backgroundColor: '#22879B',
		height: '100%',
		width: '50%',
		borderRadius: 100
	},
	forgotContainer: {
		marginTop: 16
	},
	button: {
		backgroundColor: '#22879B',
		borderRadius: 100,
		marginTop: 64,
		paddingVertical: 14
	}
})
