import AppContextProvider, { AppContext } from '@/Config/ContextConfig'
import { getLoginData } from '@/Containers/Auth/action'
import Login from '@/Containers/Auth/Login'
import HomeScreen from '@/Containers/Main/Home'
import Report from '@/Containers/Main/Report'
import Sale from '@/Containers/Main/Sale'
import Printer from '@/Containers/Main/Settings/Printer'
import { getPrinter, getPrinterSetting } from '@/Containers/Main/Settings/Printer/action'
import VehicleForm from '@/Containers/Main/Vehicle'
import { Name } from '@/Containers/Name'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Alert, Linking } from 'react-native'
import VersionCheck from 'react-native-version-check'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainTab from './MainTab'
import { navigationRef } from './RootNavigation'
import ReportByUser from '@/Containers/Main/Report/ReportByUser'
import Parking from '@/Containers/Main/Parking'
import Settings from '@/Containers/Main/Settings'
import TicketSale from '@/Containers/Main/Parking/TicketSale'
import ReportHD from '@/Containers/Main/Parking/ReportHD'
import TicketManage from '@/Containers/Main/Parking/TicketManage'
import HomeTKCH from '@/Containers/Main/TicketCatHai/HomeTKCH'
import ParkingTicketCH from '@/Containers/Main/TicketCatHai/ParkingTicketCH'
import ServiceTicketCH from '@/Containers/Main/TicketCatHai/ServiceTicketCH'
import ReportTicketCH from '@/Containers/Main/TicketCatHai/ReportTicketCH'
import ReportRevenueHD from '@/Containers/Main/Parking/ReportHD/ReportRenevue'
import DischargeStation from '@/Containers/Main/Extends/DischargeStation'
import ReportSummaryTicketSale from '@/Containers/Main/Report/ReportByTicket'
import HomeTicketDS from '@/Containers/Main/TicketDoSon/Home'
import TicketReportDS from '@/Containers/Main/TicketDoSon/Report'
import TicketSaleDS from '@/Containers/Main/TicketDoSon/Sale'
import TicketHomeBB from '@/Containers/Main/TicketBenBinh'
import TicketSaleBB from '@/Containers/Main/TicketBenBinh/Sale'
import TicketReportBB from '@/Containers/Main/TicketBenBinh/Report'
import Splash from '@/Containers/Splash'

const RootStack = createStackNavigator()

function Application(props: any) {
  const { onGetLoginData, onGetPrinter, onGetPrinterSetting } = props
  const Languages = React.useContext(AppContext).language

  useEffect(() => {
    onGetLoginData()
    onGetPrinterSetting()

    VersionCheck.needUpdate().then(async (res: any) => {
      if (res?.isNeeded) {
        createThreeButtonAlert(res?.storeUrl)
      }
    })
  }, [])

  const createThreeButtonAlert = async (storeURL: any) =>
    Alert.alert(Languages.label.hasUpdate, Languages.label.plsUpdate, [
      {
        text: Languages.label.cancel,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: Languages.label.update,
        onPress: () => Linking.openURL(storeURL) // open store if update is needed.
      }
    ])

  return (
    <AppContextProvider>
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator initialRouteName={Name.App_splash}>
          <RootStack.Group screenOptions={{ headerShown: false }}>
            {/* VIEW MAIN */}
            <RootStack.Screen name={Name.App_splash} component={Splash} />
            <RootStack.Screen name={Name.App_Login} component={Login} />
            <RootStack.Screen name={Name.Setting_Printer} component={Printer} />
            <RootStack.Screen name={Name.Home_settings} component={Settings} />
            <RootStack.Screen name={Name.MainTab} component={MainTab} />

            {/* Vé Cát Bà */}
            <RootStack.Screen name={Name.App_home} component={HomeScreen} />
            <RootStack.Screen name={Name.Sale} component={Sale} />
            <RootStack.Screen name={Name.Report} component={Report} />
            <RootStack.Screen name={Name.VehicleForm} component={VehicleForm} />
            <RootStack.Screen name={Name.ReportByUser} component={ReportByUser} />
            <RootStack.Screen name={Name.ReportSummaryTicketSale} component={ReportSummaryTicketSale} />
            <RootStack.Screen name={Name.DischargeStation} component={DischargeStation} />

            {/* Vé Hòn Dấu */}
            <RootStack.Screen name={Name.Parking} component={Parking} />
            <RootStack.Screen name={Name.SaleHD} component={TicketSale} />
            <RootStack.Screen name={Name.ReportHD} component={ReportHD} />
            <RootStack.Screen name={Name.ReportRevenueHD} component={ReportRevenueHD} />
            <RootStack.Screen name={Name.SaleManageHD} component={TicketManage} />

            {/* Vé Cát Hải */}
            <RootStack.Screen name={Name.HomeTicketCH} component={HomeTKCH} />
            <RootStack.Screen name={Name.ParkingTicketCH} component={ParkingTicketCH} />
            <RootStack.Screen name={Name.ServiceTicketCH} component={ServiceTicketCH} />
            <RootStack.Screen name={Name.ReportTicketCH} component={ReportTicketCH} />

            {/* Vé Cát Hải */}
            <RootStack.Screen name={Name.TicketHomeDS} component={HomeTicketDS} />
            <RootStack.Screen name={Name.TicketSaleDS} component={TicketSaleDS} />
            <RootStack.Screen name={Name.TicketReportDS} component={TicketReportDS} />

            {/* Vé Bến Bính */}
            <RootStack.Screen name={Name.TicketHomeBB} component={TicketHomeBB} />
            <RootStack.Screen name={Name.TicketSaleBB} component={TicketSaleBB} />
            <RootStack.Screen name={Name.TicketReportBB} component={TicketReportBB} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </AppContextProvider>
  )
}

const mapStateToProps = (state: any) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetLoginData: bindActionCreators(getLoginData, dispatch),
    onGetPrinter: bindActionCreators(getPrinter, dispatch),
    onGetPrinterSetting: bindActionCreators(getPrinterSetting, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)
