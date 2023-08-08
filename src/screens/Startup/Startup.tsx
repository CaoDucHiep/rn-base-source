import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useTheme } from '../../hooks'
import { Brand } from '../../components'
import { setDefaultTheme } from '../../store/theme'
import { ApplicationScreenProps } from '../../../@types/navigation'
import i18next from 'i18next'

const Startup = ({ navigation }: ApplicationScreenProps) => {
  const { Layout, Gutters } = useTheme()

  const init = async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(true)
      }, 2000)
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigation.navigate('Login')
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Login' }],
    // });
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
    </View>
  )
}

export default Startup
