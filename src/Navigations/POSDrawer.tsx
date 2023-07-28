import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerProgress
} from '@react-navigation/drawer'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ModalCC } from '@/Components'
import { AppContext } from '@/Config/ContextConfig'
import { postLogout } from '@/Containers/Auth/action'

import { Bold, m15, RowCenterCenter, XLargeFont } from '@/Theme/ThemeStyle'
import { WIDTH } from '@/Utils/Const'
import { capitalizeFirst } from '@/Utils/Helper'
import { OnPrimaryText } from '@/Theme'

const Drawer = createDrawerNavigator()

function CustomDrawerContent(props: any) {
  const { onLogout } = props
  const Languages = React.useContext(AppContext).language
  const Theme = React.useContext(AppContext).theme
  const progress: any = useDrawerProgress()
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0]
  })

  const [modalVisible, setModalVisible] = useState(false)
  const onModalChange = () => setModalVisible((prevState) => !prevState)

  const [companyName, setCompanyName] = useState<any>('')
  // useEffect(() => {
  //   onGetConfig();
  // }, []);
  // const onGetConfig = async () => {
  //   setCompanyName(
  //     (
  //       await getConfig({
  //         key: ['company'],
  //       })
  //     )?.company,
  //   );
  // };

  const RenderHeader = () => (
    <View
      style={{
        backgroundColor: Theme.color.Primary,
        paddingTop: getStatusBarHeight()
      }}
    >
      <OnPrimaryText style={[Bold, XLargeFont, m15]}>{capitalizeFirst(companyName)}</OnPrimaryText>
    </View>
  )

  const RenderFooter = () => (
    <View
      style={{
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderTopColor: '#ccc'
      }}
    >
      <TouchableOpacity
        onPress={() => {
          setModalVisible((prevState) => !prevState)
        }}
        style={{ paddingVertical: 15 }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name='exit-outline' size={25} />
          <Text
            style={{
              marginLeft: 25
            }}
          >
            {Languages.label.logout}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {RenderHeader()}

      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
        <Animated.View style={{ transform: [{ translateX }] }}>
          <DrawerItemList {...props} />
        </Animated.View>

        <ModalCC
          visible={modalVisible}
          onModalChange={onModalChange}
          title={Languages.sub.logout}
          leftText={Languages.label.logout}
          rightText={Languages.label.cancel}
          leftFunc={onLogout}
        />
      </DrawerContentScrollView>

      {RenderFooter()}
    </SafeAreaView>
  )
}

function POSDrawer(props: any) {
  const { onLogout } = props
  const Languages = React.useContext(AppContext).language

  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} onLogout={onLogout} />}
      // initialRouteName={Name.Home}
    >
      <Drawer.Group screenOptions={{ headerShown: false }}>
        {/* <Drawer.Screen
          name={Name.Home}
          component={Home}
          options={{
            drawerLabel: Name.Home,
            drawerIcon: ({color, size, focused}) => (
              <Image
                resizeMode="contain"
                source={HOME}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                }}
              />
            ),
            drawerItemStyle: {
              marginTop: 5,
              justifyContent: 'center',
              height: 50,
            },
          }}
        />
        <Drawer.Screen
          name={Name.Sell}
          component={Sell}
          options={{
            drawerLabel: Languages.name.Sell,
            drawerIcon: ({color, size, focused}) => (
              <Image
                resizeMode="contain"
                source={SELL}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                }}
              />
            ),
            drawerItemStyle: {
              height: permissionUser.find((x: any) => x === 'sales') ? 50 : 0,
              ...styles(permissionUser.find((x: any) => x === 'sales'))
                .styleItem,
            },
          }}
        />
        */}
      </Drawer.Group>
    </Drawer.Navigator>
  )
}

const mapStateToProps = (state: any) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogout: bindActionCreators(postLogout, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(POSDrawer)

const styles = (isHidden: any) =>
  StyleSheet.create({
    header: {
      paddingTop: getStatusBarHeight()
    },
    cancelContainer: {
      padding: 15,
      borderRadius: 10,
      width: WIDTH * 0.8
    },
    btn: {
      borderRadius: 10,
      width: 100,
      ...RowCenterCenter
    },
    styleItem: {
      justifyContent: 'center',
      marginTop: !isHidden ? -5 : 5
    }
  })
