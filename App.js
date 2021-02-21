import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Welcome from './src/screens/Welcome'
import Login from './src/screens/Login'
import Home from './src/screens/Home'
import Header from './src/components/Header/Header'

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
		<Stack.Navigator
			headerMode='float'
			screenOptions={{
				header: (props) => {
					return <Header {...props} />
				},
				...TransitionPresets.SlideFromRightIOS
			}}>
			<Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
			<Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
			<Stack.Screen name='Home' component={Home} />
		</Stack.Navigator>
	)
}
