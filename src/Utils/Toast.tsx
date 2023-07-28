import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-simple-toast'

export function toastMsg(message: any) {
  return Toast.show(message, Toast.SHORT)
}

// ==============================================
// Login

export function toastLoginSuccess() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Login success!', Toast.SHORT)

      default:
        return Toast.show('Đăng nhập thành công!', Toast.SHORT)
    }
  })
}

export function toastCheckMail() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Password recovery successful! Please check your email to reset your password.', Toast.SHORT)
      default:
        return Toast.show('Khôi phục mật khẩu thành công! Vui lòng kiểm tra email để lấy lại mật khẩu.', Toast.SHORT)
    }
  })
}

export function toastNulLEmail() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Emial does not exist, please check again', Toast.SHORT)
      default:
        return Toast.show('Email không tồn tại, vui lòng kiểm tra lại', Toast.SHORT)
    }
  })
}

export function toastLoginError() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Wrong login information!', Toast.SHORT)
      default:
        return Toast.show('Sai thông tin đăng nhập!', Toast.SHORT)
    }
  })
}

export function toastLoginFail() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Login fail!', Toast.SHORT)
      default:
        return Toast.show('Đăng nhập thất bại!', Toast.SHORT)
    }
  })
}

export function toastLockedAccount() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Locked account!', Toast.SHORT)

      default:
        return Toast.show('Tài khoản bị khóa!', Toast.SHORT)
    }
  })
}

export function toastNotExistAccount() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show(
          // 'Account does not exist!',
          'Wrong account or password!',
          Toast.SHORT
        )
      default:
        return Toast.show(
          // 'Tài khoản không tồn tại!',
          'Sai tài khoản hoặc mật khẩu!',
          Toast.SHORT
        )
    }
  })
}

export function toastWrongPassword() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show(
          // 'Wrong password!',
          'Wrong account or password!',
          Toast.SHORT
        )
      default:
        return Toast.show(
          // 'Sai mật khẩu!',
          'Sai tài khoản hoặc mật khẩu!',
          Toast.SHORT
        )
    }
  })
}

export function toastNotExistTaxcode() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Tax code does not exist!', Toast.SHORT)
      default:
        return Toast.show('Mã số thuế không tồn tại!', Toast.SHORT)
    }
  })
}

// ==============================================

export function toastNotNull() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Required fields cannot be left blank!', Toast.SHORT)

      default:
        return Toast.show('Mục bắt buộc không được để trống!', Toast.SHORT)
    }
  })
}

export function toastUpdateSuccess() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Update success!', Toast.SHORT)

      default:
        return Toast.show('Cập nhật thành công!', Toast.SHORT)
    }
  })
}

export function toastUpdateFail() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Update fail!', Toast.SHORT)

      default:
        return Toast.show('Cập nhật thất bại!', Toast.SHORT)
    }
  })
}

export function toastDeleteSuccess() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Delete success!', Toast.SHORT)

      default:
        return Toast.show('Xóa thành công!', Toast.SHORT)
    }
  })
}

export function toastDeleteFail() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Delete fail!', Toast.SHORT)

      default:
        return Toast.show('Xóa thất bại!', Toast.SHORT)
    }
  })
}

export function toastAddSuccess() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Add success!', Toast.SHORT)

      default:
        return Toast.show('Thêm mới thành công!', Toast.SHORT)
    }
  })
}

export function toastAddFail() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Add fail!', Toast.SHORT)

      default:
        return Toast.show('Thêm mới thất bại!', Toast.SHORT)
    }
  })
}

export function toastNullError() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('* fields cannot be left blank!', Toast.SHORT)
      default:
        return Toast.show('Không được để trống các mục đánh dấu *', Toast.SHORT)
    }
  })
}

export function internetError() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show("Can't connect to INTERNET!", Toast.SHORT)

      default:
        return Toast.show('Không thể kết nối INTERNET!', Toast.SHORT)
    }
  })
}

export function serverBusy() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'vi':
        return Toast.show('Server đang bận!', Toast.SHORT)

      default:
        return Toast.show('Server is busy!', Toast.SHORT)
    }
  })
}

export function toastSamePass() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show(
          'The new password is the same as the old password',

          Toast.SHORT
        )

      default:
        return Toast.show(
          'Mật khẩu mới trùng với mật khẩu cũ',

          Toast.SHORT
        )
    }
  })
}

export function toastNotMatchPass() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('The re-entered password does not match the new password', Toast.SHORT)
      default:
        return Toast.show('Mật khẩu nhập lại không khớp với mật khẩu mới', Toast.SHORT)
    }
  })
}

export function toastChangePassSuccess() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show(
          'Changing password success',

          Toast.SHORT
        )

      default:
        return Toast.show('Đổi mật khẩu thành công', Toast.SHORT)
    }
  })
}

export function toastChangePassFail() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Changing password fail', Toast.SHORT)

      default:
        return Toast.show('Đổi mật khẩu thất bại', Toast.SHORT)
    }
  })
}

export function toastOldPassWrong() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Current password wrong', Toast.SHORT)

      default:
        return Toast.show('Mật khẩu hiện tại sai', Toast.SHORT)
    }
  })
}

export function successfulTimekeeping() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Successful timekeeping', Toast.SHORT)

      default:
        return Toast.show('Chấm công thành công', Toast.SHORT)
    }
  })
}

export function timekeepingFail() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Timekeeping failed', Toast.SHORT)

      default:
        return Toast.show('Chấm công thất bại', Toast.SHORT)
    }
  })
}

export function emptyList() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('List is empty', Toast.SHORT)

      default:
        return Toast.show('Danh sách trống', Toast.SHORT)
    }
  })
}

export function toastGetDataSuccess() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Get data success', Toast.SHORT)

      default:
        return Toast.show('Lấy dữ liệu thành công', Toast.SHORT)
    }
  })
}

export function toastGetDataFail(text?: any) {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Get data fail', Toast.SHORT)

      default:
        return Toast.show('Lấy dữ liệu thất bại' + (text ? ' (' + text + ')' : ''), Toast.SHORT)
    }
  })
}

export function toastSaveSuccess() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Save success', Toast.SHORT)

      default:
        return Toast.show('Lưu thành công', Toast.SHORT)
    }
  })
}

export function toastSaveFail() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Save fail', Toast.SHORT)

      default:
        return Toast.show('Lưu thất bại', Toast.SHORT)
    }
  })
}

export function toastCanceled() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Canceled', Toast.SHORT)

      default:
        return Toast.show('Đã hủy', Toast.SHORT)
    }
  })
}

export function toastExistItemNumber() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Number of items already in existence!', Toast.SHORT)

      default:
        return Toast.show('Mã hàng đã tồn tại!', Toast.SHORT)
    }
  })
}

export function toastCheckValidate() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Checking data...', Toast.SHORT)

      default:
        return Toast.show('Đang kiểm tra dữ liệu...', Toast.SHORT)
    }
  })
}

export function toastLargeSize(size: any, usage: any) {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Size is too big. Limit ' + size + usage + '!', Toast.SHORT)

      default:
        return Toast.show('Kích thước quá lớn. Tối đa ' + size + usage + '!', Toast.SHORT)
    }
  })
}

export function toastNotAllowedImageType(eg?: any) {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show(
          'Image type is not allowed. Try again with another image! ' + eg,
          eg ? Toast.LONG : Toast.SHORT
        )

      default:
        return Toast.show('Không hỗ trợ định dạng ảnh hiện tại. Vui lòng thử lại! ' + eg, eg ? Toast.LONG : Toast.SHORT)
    }
  })
}

export function toastNotEnoughtMoney(label?: any) {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Not enough money! Set (' + label + ') to 0 for quick payout.', Toast.LONG)

      default:
        return Toast.show('Thanh toán không đủ tiền!', Toast.LONG)
    }
  })
}

export function toastNotEnoughStock() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('You cannot use this mode. The number of managed repositories is less than 2!', Toast.LONG)

      default:
        return Toast.show('Bạn không thể sử dụng chế độ này. Số lượng kho được quản lý ít hơn 2!', Toast.LONG)
    }
  })
}

export function toastPaymentMethodUnavailable() {
  AsyncStorage.getItem('language').then((value) => {
    switch (value) {
      case 'en':
        return Toast.show('Payment method currently unavailable!', Toast.SHORT)

      default:
        return Toast.show('Phương thức thanh toán không khả dụng!', Toast.SHORT)
    }
  })
}
