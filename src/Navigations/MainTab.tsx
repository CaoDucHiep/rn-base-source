import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { AppContext } from '@/Config/ContextConfig'
import Settings from '@/Containers/Main/Settings'
import { Name } from '@/Containers/Name'
import { TrueWhite, WhiteSmoke } from '@/Theme/ThemeColor'
import { Bold, CenterCenter, LargeFont, RadiusBorder } from '@/Theme/ThemeStyle'
import { WIDTH } from '@/Utils/Const'
import HomeScreen from '@/Containers/Main/Home'
import { BG_TABBAR, HOME_TAB, SETTING_VECTOR } from '@/Assets/Images'
import { OnPrimaryText } from '@/Theme'
import CheckTicket from '@/Containers/Main/Scanner'
import { ScannerButton } from '@/Containers/Main/Scanner/ScannerButton'

const Tab = createBottomTabNavigator()

function MainTab(props: any) {
  const {} = props
  const Languages = React.useContext(AppContext).language

  useEffect(() => {
    // onGetRoute({
    //   loading: true,
    // });
  }, [])

  return (
    <Tab.Navigator
      screenOptions={{
        freezeOnBlur: true,
        tabBarShowLabel: false,
        tabBarLabelStyle: styles.navigation,
        headerShown: false,
        tabBarBackground: () => {
          return (
            <Image
              source={BG_TABBAR}
              resizeMode='stretch'
              style={{ width: WIDTH, height: '100%', backgroundColor: TrueWhite }}
            />
          )
        },
        tabBarStyle: {
          // backgroundColor: '#308ffd',
          shadowColor: TrueWhite,
          minHeight: 70,
          backfaceVisibility: 'hidden'
        }
      }}
    >
      <Tab.Screen
        name={Name.App_home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={[styles.navView]}>
              <Image source={HOME_TAB} resizeMode='contain' style={{ width: 25, height: 25, tintColor: WhiteSmoke }} />
              <OnPrimaryText style={[Bold, LargeFont]}>{Name.App_home}</OnPrimaryText>
            </View>
          )
        }}
      />

      <Tab.Screen
        name={'Scannerbutton'}
        component={CheckTicket}
        listeners={{
          tabPress: (e) => {
            // add your conditions here
            e.preventDefault() // <-- this function blocks navigating to screen
          }
        }}
        options={{
          tabBarIcon: ({ focused }) => <ScannerButton />
        }}
      />

      <Tab.Screen
        name={Name.Home_settings}
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.navView}>
              <Image
                source={SETTING_VECTOR}
                resizeMode='contain'
                style={{ width: 25, height: 25, tintColor: WhiteSmoke }}
              />
              <OnPrimaryText style={[Bold, LargeFont]}>{Name.Home_settings}</OnPrimaryText>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

const mapStateToProps = (state: any) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTab)

const styles = StyleSheet.create({
  navigation: {
    position: 'absolute',
    elevation: 0,
    backgroundColor: '#1076fa'
  },
  navView: {
    ...RadiusBorder,
    ...CenterCenter,
    minHeight: 70,
    zIndex: 0
  },
  navImage: {
    width: 20,
    height: 20
  }
})
