import { CommonActions, createNavigationContainerRef, DrawerActions, StackActions } from '@react-navigation/native'

type RootStackParamList = {
  MainTab: undefined
  AppName: undefined
  App_home: undefined
  App_splash: undefined
  App_Login: undefined
  // ==================================================
  // Cài đặt
  // ==================================================
  Home_settings: undefined
  Setting_Printer: undefined

  // Screen
  Scanner: undefined
  Sale: undefined
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export function navigate(name?: keyof RootStackParamList | any, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export function navigateAndReset(routes = [], index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes
      })
    )
  }
}

export function navigateAndSimpleReset(name: string, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }]
      })
    )
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack()
  }
}

export function replace(name: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params))
  }
}

export function openDrawer() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.openDrawer())
  }
}

export function closeDrawer() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.closeDrawer())
  }
}
