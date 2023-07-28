// export async function hasPermissionIOS() {
//   const openSetting = () => {
//     Linking.openSettings().catch(() => {
//       Alert.alert('Unable to open settings');
//     });
//   };
//   const status = await Geolocation.requestAuthorization('whenInUse');

import { navigate } from '@/Navigations/RootNavigation'
import { BackHandler } from 'react-native'
import { toastMsg } from './Toast'

//   if (status === 'granted') {
//     return true;
//   }

//   if (status === 'denied') {
//     Alert.alert('Location permission denied');
//   }

//   if (status === 'disabled') {
//     Alert.alert(
//       `Turn on Location Services to allow PCCC Bách Khoa to determine your location.`,
//       '',
//       [
//         {text: 'Go to Settings', onPress: openSetting},
//         {text: "Don't Use Location", onPress: () => {}},
//       ],
//     );
//   }

//   return false;
// }

// export async function hasLocationPermission() {
//   if (Platform.OS === 'ios') {
//     const hasPermission = await hasPermissionIOS();
//     return hasPermission;
//   }

//   if (Platform.OS === 'android' && Platform.Version < 23) {
//     return true;
//   }

//   const hasPermission = await PermissionsAndroid.check(
//     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//   );

//   if (hasPermission) {
//     return true;
//   }

//   const status = await PermissionsAndroid.request(
//     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//   );

//   if (status === PermissionsAndroid.RESULTS.GRANTED) {
//     return true;
//   }

//   if (status === PermissionsAndroid.RESULTS.DENIED) {
//     ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
//   } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
//     ToastAndroid.show(
//       'Location permission revoked by user.',
//       ToastAndroid.LONG,
//     );
//   }

//   return false;
// }

export function removeVietnameseTones(str: string) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, ' ')
  str = str.trim()
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ')
  return str
}

export function removeVietnameseTonesButNotRemovePunctuations(str: string) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, ' ')
  str = str.trim()
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  return str
}

export function removeVietnameseTonesNoneMinus(str: string) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, ' ')
  str = str.trim()
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|{|}|\||\\/g, ' ')
  return str
}

export function removeVietnameseTonesForDate(str: string) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, ' ')
  str = str.trim()
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|{|}|\||\\/g, ' ')
  return str
}

export function isEmptyValue(value: any) {
  let empty = false

  if (value === null || value === undefined || value === '') {
    empty = true
  }

  return empty
}

export function isEmptyArray(array: Array<any>) {
  let empty = false

  if (array === null || array === undefined || array.length === 0) {
    empty = true
  }

  return empty
}

export function isEmptyObject(obj: any) {
  let empty = false
  if (obj === null || obj === undefined || Object.keys(obj).length == 0) {
    empty = true
  }

  return empty
}

export function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export function GetName(value: string) {
  if (value == null || value == '') return ''
  let nameArr = value.trim().toLocaleUpperCase().split(' ')

  if (nameArr.length == 1) {
    return nameArr[0].charAt(0)
  } else {
    return nameArr[0].charAt(0) + nameArr[nameArr.length - 1].charAt(0)
  }
}

export function getUrlString(url: string, params: any) {
  return (url +=
    '?' +
    Object.keys(params)
      .map((k) => k + '=' + encodeURIComponent(params[k]))
      .join('&'))
}

// export const numberFormat = number => {
//   const output = isEmptyValue(number)
//     ? ''
//     : new Intl.NumberFormat('vn-IN', {
//         style: 'currency',
//         currency: 'VND',
//       }).format(number);

//   return output;
// };

// export const numberFormat = number => {
//   const output = isEmptyValue(number)
//     ? ''
//     : Number.parseInt(number).toLocaleString('vn-IN');

//   return output;
// };

// Update by hiepcd
export const setObjectValue = (ObjectData: any, Key: string, Value: any, setData: any) => {
  type ObjectKey = keyof typeof ObjectData
  const temp = Object.assign(
    {},
    {
      ...ObjectData,
      [Key as ObjectKey]: Value
    }
  )
  setData(temp)
}

export const numberFormat = (number: any) => {
  const output = isEmptyValue(number) ? '' : number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return output
}

export const currencyFormat = (number: number, maxFractionDigits?: number, shortCurrency?: boolean) => {
  const output = isEmptyValue(number)
    ? 0
    : Intl.NumberFormat('vi-VN', {
        maximumFractionDigits: maxFractionDigits || 0
      }).format(number)
  return output + (!shortCurrency ? ' ₫' : 'đồng')
}

export const capitalizeFirst = (str: string) => {
  const output = isEmptyValue(str) ? '' : str.charAt(0).toUpperCase() + str.slice(1)
  return output
}

export const floatFormat = (number: number, maxFractionDigits?: number, minimumFractionDigits?: number) => {
  const output = isEmptyValue(number)
    ? ''
    : Intl.NumberFormat('vi-VN', {
        maximumFractionDigits: maxFractionDigits || 2,
        minimumFractionDigits: minimumFractionDigits || 0
      }).format(number)
  return output
}

export function hardwareBackPressHandle(viewName: string) {
  const backAction = () => {
    navigate(viewName)
    return true
  }
  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
  return () => backHandler.remove()
}
// END update by hiepcd

export function getDateBetween(startDate: any, endDate: any) {
  const start = new Date(new Date(startDate).setHours(0, 0, 0, 0))
  const end = new Date(new Date(endDate).setHours(0, 0, 0, 0))

  const date = new Date(start.getTime())

  const dates: Date[] = []

  while (date <= end) {
    dates.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }

  return dates
}

export function isEmpty(input: any) {
  let empty = false

  if (input === null || input === undefined) {
    return true
  }

  switch (Array.isArray(input)) {
    case true:
      if (input.length == 0) {
        empty = true
      }
    default:
      switch (typeof input) {
        case 'string':
          if (input == '') {
            empty = true
          }
          break

        case 'object':
          if (Object.keys(input).length == 0) {
            empty = true
          }
          break

        default:
          if (input.length == 0) {
            empty = true
          }
          break
      }
  }

  return empty
}

export const sortData = (input: Array<any>, output: (value: any) => void | void) => {
  const order = Object.fromEntries(input.map(({ item_id }, i) => [item_id, i + 1]))

  output((prevState: any) =>
    prevState.sort((a: any, b: any) => (order[a.item_id] || Number.MAX_VALUE) - (order[b.item_id] || Number.MAX_VALUE))
  )
}

export const responseFetchHelper = (response: any, body: any, target: string) => {
  if (response.status == 500) {
    toastMsg('Error 500: Không xác định được lỗi cụ thể. ' + `(${target})`)
    return false
  } else if (response.status == 400) {
    toastMsg(
      'Error 400: Máy chủ từ chối hoặc không thể xử lý yêu cầu. Kiểm tra lại kết nối hoặc dữ liệu của bạn!' +
        `(${target})`
    )
    return false
  } else if (response.status == 401) {
    toastMsg('Error 401: Xác thực quyền thất bại hoặc không có quyền truy cập dữ liệu này!' + `(${target})`)
    return false
  } else if (response.status == 404) {
    toastMsg('Error 404: Không tìm thấy dữ liệu!' + `(${target})`)
    return false
  } else if (response.status == 200) {
    return body
  }
}

const breakLinWithTypePrinter = (str: string, is58: true | false) => {
  const spaces = str.split(' ')
  let temp: string = ''
  for (let x = 0; x < spaces.length; x++) {
    if (x % (is58 ? 6 : 7) === 0 && x !== 0) {
      temp += spaces[x] + '\n'
    } else {
      temp += spaces[x] + ' '
      if (x == spaces.length - 1) {
        temp += '\n\r'
      }
    }
  }
  return temp
}

const breakLinWithNumberWhiteSpace = (str: string, num: number) => {
  const spaces = str.split(' ')
  let temp: string = ''
  for (let x = 0; x < spaces.length; x++) {
    if (x % (num ? num : 7) === 0 && x !== 0) {
      temp += spaces[x] + '\n'
    } else {
      temp += spaces[x] + ' '
      if (x == spaces.length - 1) {
        temp += '\n\r'
      }
    }
  }
  return temp
}

export const onLogRequest = ({ token, url, params }: { token: any; url: string; params?: any }) => {
  console.log('Token: ' + token)
  console.log('URL: ' + url)
  console.log('Params: ' + JSON.stringify(params, null, 2))
}

/**
 * @returns
 *
 * @array Mảng cần replace
 * @item Obj cần tìm
 * @itemKey key tham chiếu của Obj cần tìm đối với Obj mục tiêu trong mảng array ở trên
 * @itemReplace Obj mới được thay thế cho item
 */
export const replaceObjectInArray = (array: Array<any>, item: any, itemKey: string, itemReplace: any) => {
  const tmp = array.map((x: any) => {
    if (item[itemKey] === x[itemKey]) {
      return itemReplace
    } else {
      return x
    }
  })
  return tmp
}
