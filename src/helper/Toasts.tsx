import Toast from 'react-native-simple-toast'
import { Colors } from '../theme/Variables'
import { useTranslation } from 'react-i18next'

export function toastMsg(message: any) {
  return Toast.show(message, Toast.SHORT, {
    backgroundColor: Colors.whiteBlue,
    textColor: Colors.trueBlack
  })
}

// ==============================================
// Login

export function toastLoginSuccess() {
}
