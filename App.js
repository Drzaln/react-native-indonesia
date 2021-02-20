import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Welcome from './src/screens/Welcome'
import Login from './src/screens/Login'

const App = () => {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	)
}

export default App

const Stack = createStackNavigator()
const MyStack = () => {
	return (
		<Stack.Navigator headerMode='none' screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
			<Stack.Screen name='Welcome' component={Welcome} />
			<Stack.Screen name='Login' component={Login} />
		</Stack.Navigator>
	)
}
