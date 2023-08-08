import { StyleSheet } from 'react-native'
import { ThemeVariables } from '../../@types/theme'
import { Colors } from './Variables'
import { Key } from 'react'

export default function ({ }: ThemeVariables) {
  return StyleSheet.create({
    /* Column Layouts */
    col: {
      flexDirection: 'column'
    },
    colReverse: {
      flexDirection: 'column-reverse'
    },
    colCenter: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    colVCenter: {
      flexDirection: 'column',
      alignItems: 'center'
    },
    colHCenter: {
      flexDirection: 'column',
      justifyContent: 'center'
    },
    /* Row Layouts */
    row: {
      flexDirection: 'row'
    },
    rowReverse: {
      flexDirection: 'row-reverse'
    },
    rowCenter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    rowVCenter: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    rowHCenter: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    rowCenterEnd: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    rowEndCenter: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    colCenterEnd: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    colEndCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    /* Default Layouts */
    center: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    alignItemsCenter: {
      alignItems: 'center'
    },
    alignItemsStart: {
      alignItems: 'flex-start'
    },
    alignItemsStretch: {
      alignItems: 'stretch'
    },
    alignItemsEnd: {
      alignItems: 'flex-end'
    },
    justifyContentCenter: {
      justifyContent: 'center'
    },
    justifyContentAround: {
      justifyContent: 'space-around'
    },
    justifyContentBetween: {
      justifyContent: 'space-between'
    },
    justifyContentEnd: {
      justifyContent: 'flex-end'
    },
    scrollSpaceAround: {
      flexGrow: 1,
      justifyContent: 'space-around'
    },
    scrollSpaceBetween: {
      flexGrow: 1,
      justifyContent: 'space-between'
    },
    selfStretch: {
      alignSelf: 'stretch'
    },
    /* Sizes Layouts */
    fill: {
      flex: 1
    },
    fullSize: {
      height: '100%',
      width: '100%'
    },
    halfSize: {
      height: '50%',
      width: '50%'
    },
    fullWidth: {
      width: '100%'
    },
    halfWidth: {
      width: '50%'
    },
    fullHeight: {
      height: '100%'
    },
    halfHeight: {
      height: '50%'
    },
    w10: {
      width: '10%',
    },
    h10: {
      height: '10%',
    },
    w20: {
      width: '20%',
    },
    h20: {
      height: '20%',
    },
    w30: {
      width: '30%',
    },
    h30: {
      height: '30%',
    },
    w40: {
      width: '40%',
    },
    h40: {
      height: '40%',
    },
    w50: {
      width: '50%',
    },
    h50: {
      height: '50%',
    },
    w60: {
      width: '60%',
    },
    h60: {
      height: '60%',
    },
    w70: {
      width: '70%',
    },
    h70: {
      height: '70%',
    },
    w80: {
      width: '80%',
    },
    h80: {
      height: '80%',
    },
    w90: {
      width: '90%',
    },
    h90: {
      height: '90%',
    },
    /* Operation Layout */
    mirror: {
      transform: [{ scaleX: -1 }]
    },
    rotate90: {
      transform: [{ rotate: '90deg' }]
    },
    rotate90Inverse: {
      transform: [{ rotate: '-90deg' }]
    },
    // Position
    relative: {
      position: 'relative'
    },
    absolute: {
      position: 'absolute'
    },
    top0: {
      top: 0
    },
    bottom0: {
      bottom: 0
    },
    left0: {
      left: 0
    },
    right0: {
      right: 0
    },
    /**Border */
    blackBorder: {
      borderWidth: 1,
      borderColor: Colors.black
    },
    blackBorderHalfpx: {
      borderWidth: 0.5,
      borderColor: Colors.black
    },
    radiusBorder: {
      borderRadius: 10
    },
    cirleBorder: {
      borderRadius: 36
    },
    // BG color
    whiteBG: {
      backgroundColor: Colors.white,
    },
    mediumBlueBG: {
      backgroundColor: Colors.mediumBlue,
    },
    whiteBlueBG: {
      backgroundColor: Colors.whiteBlue,
    },
    // Flex
    flex: {
      ['1' as Key]: { flex: 1, },
      ['2' as Key]: { flex: 2, },
      ['3' as Key]: { flex: 3, },
      ['4' as Key]: { flex: 4, },
      ['5' as Key]: { flex: 5, },
    },
    // margin
    mt5: {
      marginTop: 5,
    },
    mt10: {
      marginTop: 10,
    },
    mt15: {
      marginTop: 15,
    },
    mb5: {
      marginBottom: 5,
    },
    mb10: {
      marginBottom: 10,
    },
    mb15: {
      marginBottom: 15,
    },
    ml5: {
      marginLeft: 5,
    },
    ml10: {
      marginLeft: 10,
    },
    ml15: {
      marginLeft: 15,
    },
    mr5: {
      marginRight: 5,
    },
    mr10: {
      marginRight: 10,
    },
    mr15: {
      marginRight: 15,
    },
    mh5: {
      marginHorizontal: 5,
    },
    mh10: {
      marginHorizontal: 10,
    },
    mh15: {
      marginHorizontal: 15,
    },
    mv5: {
      marginVertical: 5,
    },
    mv10: {
      marginVertical: 10,
    },
    mv15: {
      marginVertical: 15,
    },
    m5: {
      margin: 5,
    },
    m10: {
      margin: 10,
    },
    m15: {
      margin: 15,
    },
    // Padding
    pt5: {
      paddingTop: 5,
    },
    pt10: {
      paddingTop: 10,
    },
    pt15: {
      paddingTop: 15,
    },
    pb5: {
      paddingBottom: 5,
    },
    pb10: {
      paddingBottom: 10,
    },
    pb15: {
      paddingBottom: 15,
    },
    pl5: {
      paddingLeft: 5,
    },
    pl10: {
      paddingLeft: 10,
    },
    pl15: {
      paddingLeft: 15,
    },
    pr5: {
      paddingRight: 5,
    },
    pr10: {
      paddingRight: 10,
    },
    pr15: {
      paddingRight: 15,
    },
    ph5: {
      paddingHorizontal: 5,
    },
    ph10: {
      paddingHorizontal: 10,
    },
    ph15: {
      paddingHorizontal: 15,
    },
    pv5: {
      paddingVertical: 5,
    },
    pv10: {
      paddingVertical: 10,
    },
    pv15: {
      paddingVertical: 15,
    },
    p5: {
      padding: 5,
    },
    p10: {
      padding: 10,
    },
    p15: {
      padding: 15,
    },

  })
}
