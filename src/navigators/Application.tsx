import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { Startup } from '../screens'
import { useTheme } from '../hooks'
import MainNavigator from './Main'
import { useFlipper } from '@react-navigation/devtools'
import { ApplicationStackParamList } from '../../@types/navigation'
import Login from '../screens/Auth/Login'
import ChatScreen from '../screens/Chat'

const Stack = createStackNavigator<ApplicationStackParamList>()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  const navigationRef = useNavigationContainerRef()

  useFlipper(navigationRef)

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} hidden />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Startup' component={Startup} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Main' component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
