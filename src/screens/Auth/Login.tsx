import { useIsFocused } from '@react-navigation/native'
import { ApplicationScreenProps } from 'MyApp/@types/navigation'
import { TextInput } from 'MyApp/src/components'
import { useTheme } from 'MyApp/src/hooks'
import { ThemeState, changeTheme } from 'MyApp/src/store/theme'
import i18next from 'i18next'
import React, { memo, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Animated, Easing, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ILoginData {
  username: string
  password: string
}

const initLoginData = {
  username: '',
  password: ''
}

function Login({ navigation }: ApplicationScreenProps) {
  const { t } = useTranslation(['toast', 'button', 'placeholder'])
  const { Common, Fonts, Gutters, Layout, Images, darkMode: isDark, Colors } = useTheme()
  const dispatch = useDispatch()

  const animatedValue = useRef(new Animated.Value(0)).current
  const opacityAnimation = useRef(new Animated.Value(0)).current
  const opacityStyle = { opacity: opacityAnimation }

  const [loginData, setLoginData] = useState<ILoginData>(initLoginData)

  const isFocused = useIsFocused()

  useEffect(() => {
    setTimeout(async () => {
      await startSlideUpAnimation(1)
      await startOpacityAnimation(1)
    }, 0)
  }, [isFocused])

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  const onChangeLanguage = (lang: 'fr' | 'en') => {
    i18next.changeLanguage(lang)
  }

  const startSlideUpAnimation = async (toValue: any) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start()
  }

  const startOpacityAnimation = async (toValue: any) => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 2700,
      useNativeDriver: false
    }).start()
  }

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
    extrapolate: 'extend'
  })

  return (
    <ScrollView
      style={[Layout.fill, { backgroundColor: '#e3bdc5' }]}
      contentContainerStyle={[Layout.fullSize, Layout.fill]}
    >
      <View style={[Layout.center, Layout.fill]}>
        <View style={[Layout.w70, Layout.h80]}>
          <View style={[Layout.center, Layout.flex[3]]}>
            <Animated.Image
              source={Images.subLogo}
              resizeMode='cover'
              resizeMethod='resize'
              style={[styles.logoStyle, opacityStyle, { transform: [{ translateY }] }]}
            />
          </View>

          <View style={[Layout.mv5, Layout.colCenterEnd, Layout.flex[1]]}>
            <Text style={[Fonts.textCenter, Fonts.textBold, Fonts.titleSmall, { color: Colors.surBlack }]}>
              {t('button:login').toUpperCase()}
            </Text>
          </View>

          <View style={[Layout.flex[2], Layout.mt10]}>
            <TextInput
              value={loginData.username}
              setValue={{ key: 'username', state: loginData, setState: setLoginData }}
              placeholder={t('placeholder:username')}
            />
            <View style={Layout.mt5} />
            <TextInput
              value={loginData.password}
              setValue={{ key: 'password', state: loginData, setState: setLoginData }}
              placeholder={t('placeholder:password')}
            />
          </View>
        </View>
      </View>

      <View style={[Layout.rowEndCenter]}>
        <TouchableOpacity activeOpacity={0.7}>
          <View
            style={[
              Layout.cirleBorder,
              Layout.blackBorder,
              { backgroundColor: Colors.trueBlack, height: 35, width: 35 }
            ]}
          >
            {/* <MaterialIcons name='language' size={20}  /> */}
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logoStyle: {
    width: 150,
    height: 150,
    marginVertical: 20,
    top: 0,
    borderRadius: 36
  }
})

export default memo(Login)
