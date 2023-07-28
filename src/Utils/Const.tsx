import { Dimensions, Platform } from 'react-native'
import {
  currentMonth,
  currentQuarter,
  currentWeek,
  currentYear,
  getMonth,
  getQuarter,
  nextMonth,
  nextWeek,
  previousMonth,
  previousQuarter,
  previousWeek,
  previousYear,
  yesterday
} from './PeriodHelper'

export const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height

export const PERIODS = [
  { key: 1, name: 'Hôm nay', startDate: new Date(), endDate: new Date() },
  {
    key: 2,
    name: 'Tuần này',
    startDate: currentWeek.startDate,
    endDate: currentWeek.endDate
  },
  {
    key: 3,
    name: 'Đầu tuần đến hiện tại',
    startDate: currentWeek.startDate,
    endDate: new Date()
  },
  {
    key: 4,
    name: 'Tháng này',
    startDate: currentMonth.startDate,
    endDate: currentMonth.endDate
  },
  {
    key: 5,
    name: 'Đầu tháng đến hiện tại',
    startDate: currentMonth.startDate,
    endDate: new Date()
  },
  {
    key: 6,
    name: 'Quý này',
    startDate: currentQuarter.startDate,
    endDate: currentQuarter.endDate
  },
  {
    key: 7,
    name: 'Đầu quý đến hiện tại',
    startDate: currentQuarter.startDate,
    endDate: new Date()
  },
  {
    key: 8,
    name: 'Năm nay',
    startDate: currentYear.startDate,
    endDate: currentYear.endDate
  },
  {
    key: 9,
    name: 'Đầu năm đến hiện tại',
    startDate: currentYear.startDate,
    endDate: new Date()
  },
  {
    key: 10,
    name: '6 tháng đầu năm',
    startDate: currentYear.startDate,
    endDate: getMonth(6, 'end')
  },
  {
    key: 11,
    name: '6 tháng cuối năm',
    startDate: getMonth(6, 'start'),
    endDate: currentYear.endDate
  },
  {
    key: 12,
    name: 'Tháng 1',
    startDate: getMonth(1, 'start'),
    endDate: getMonth(1, 'end')
  },
  {
    key: 13,
    name: 'Tháng 2',
    startDate: getMonth(2, 'start'),
    endDate: getMonth(2, 'end')
  },
  {
    key: 14,
    name: 'Tháng 3',
    startDate: getMonth(3, 'start'),
    endDate: getMonth(3, 'end')
  },
  {
    key: 15,
    name: 'Tháng 4',
    startDate: getMonth(4, 'start'),
    endDate: getMonth(4, 'end')
  },
  {
    key: 16,
    name: 'Tháng 5',
    startDate: getMonth(5, 'start'),
    endDate: getMonth(5, 'end')
  },
  {
    key: 17,
    name: 'Tháng 6',
    startDate: getMonth(6, 'start'),
    endDate: getMonth(6, 'end')
  },
  {
    key: 18,
    name: 'Tháng 7',
    startDate: getMonth(7, 'start'),
    endDate: getMonth(7, 'end')
  },
  {
    key: 19,
    name: 'Tháng 8',
    startDate: getMonth(8, 'start'),
    endDate: getMonth(8, 'end')
  },
  {
    key: 20,
    name: 'Tháng 9',
    startDate: getMonth(9, 'start'),
    endDate: getMonth(9, 'end')
  },
  {
    key: 21,
    name: 'Tháng 10',
    startDate: getMonth(10, 'start'),
    endDate: getMonth(10, 'end')
  },
  {
    key: 22,
    name: 'Tháng 11',
    startDate: getMonth(11, 'start'),
    endDate: getMonth(11, 'end')
  },
  {
    key: 23,
    name: 'Tháng 12',
    startDate: getMonth(12, 'start'),
    endDate: getMonth(12, 'end')
  },
  {
    key: 24,
    name: 'Quý 1',
    startDate: getQuarter(1, 'start'),
    endDate: getQuarter(1, 'end')
  },
  {
    key: 25,
    name: 'Quý 2',
    startDate: getQuarter(2, 'start'),
    endDate: getQuarter(2, 'end')
  },
  {
    key: 26,
    name: 'Quý 3',
    startDate: getQuarter(3, 'start'),
    endDate: getQuarter(3, 'end')
  },
  {
    key: 27,
    name: 'Quý 4',
    startDate: getQuarter(4, 'start'),
    endDate: getQuarter(4, 'end')
  },
  {
    key: 28,
    name: 'Hôm qua',
    startDate: yesterday.startDate,
    endDate: yesterday.endDate
  },
  {
    key: 29,
    name: 'Tuần trước',
    startDate: previousWeek.startDate,
    endDate: previousWeek.endDate
  },
  {
    key: 30,
    name: 'Tháng trước',
    startDate: previousMonth.startDate,
    endDate: previousMonth.endDate
  },
  {
    key: 31,
    name: 'Quý trước',
    startDate: previousQuarter.startDate,
    endDate: previousQuarter.endDate
  },
  {
    key: 32,
    name: 'Năm trước',
    startDate: previousYear.startDate,
    endDate: previousYear.endDate
  },
  { key: 0, name: 'Tùy chọn' }
]

export const ANDROID_SUPPORTS_RIPPLE = Platform.OS === 'android' && Platform.Version >= 21

// Setting phần in
export const OPTION_PRINTER_FONT0 = {
  encoding: 'UTF-8',
  codepage: Platform.OS === 'ios' ? '30' : 0,
  fonttype: Platform.OS === 'ios' ? '0' : 0
}
export const OPTION_PRINTER_FONT1 = {
  encoding: 'UTF-8',
  codepage: Platform.OS === 'ios' ? '30' : 30,
  fonttype: Platform.OS === 'ios' ? '1' : 1
}
export const OPTION_PRINTER_FONT2 = {
  encoding: 'UTF-8',
  codepage: Platform.OS === 'ios' ? '30' : 30,
  fonttype: Platform.OS === 'ios' ? '0' : 0
}
export const OPTION_PRINTER_FONT3 = {
  encoding: 'UTF-8',
  codepage: Platform.OS === 'ios' ? '30' : 30,
  fonttype: Platform.OS === 'ios' ? '3' : 3
}
export const OPTION_PRINTER_FONT5 = {
  encoding: 'UTF-8',
  codepage: Platform.OS === 'ios' ? '30' : 30,
  fonttype: Platform.OS === 'ios' ? '5' : 5
}
export const OPTION_PRINTER_FONT7 = {
  encoding: 'UTF-8',
  codepage: Platform.OS === 'ios' ? '30' : 30,
  fonttype: Platform.OS === 'ios' ? '7' : 7
}
export const OPTION_PRINTER_FONT8 = {
  encoding: 'UTF-8',
  codepage: Platform.OS === 'ios' ? '30' : 30,
  fonttype: Platform.OS === 'ios' ? '8' : 8
}
export const OPTION_PRINTER_FONT25 = {
  encoding: 'UTF-8',
  codepage: Platform.OS === 'ios' ? '30' : 30,
  fonttype: Platform.OS === 'ios' ? '49' : 49
}
export const OPTION_PRINTER_FONT48 = {
  encoding: 'UTF-8',
  codepage: Platform.OS === 'ios' ? '30' : 30,
  fonttype: Platform.OS === 'ios' ? '48' : 48
}

export const ARRAY_COLOR = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
  '#80B300',
  '#809900',
  '#E6B3B3',
  '#6680B3',
  '#66991A',
  '#FF99E6',
  '#CCFF1A',
  '#FF1A66',
  '#E6331A',
  '#33FFCC',
  '#66994D',
  '#B366CC',
  '#4D8000',
  '#B33300',
  '#CC80CC',
  '#66664D',
  '#991AFF',
  '#E666FF',
  '#4DB3FF',
  '#1AB399',
  '#E666B3',
  '#33991A',
  '#CC9999',
  '#B3B31A',
  '#00E680',
  '#4D8066',
  '#809980',
  '#E6FF80',
  '#1AFF33',
  '#999933',
  '#FF3380',
  '#CCCC00',
  '#66E64D',
  '#4D80CC',
  '#9900B3',
  '#E64D66',
  '#4DB380',
  '#FF4D4D',
  '#99E6E6',
  '#6666FF'
]

export const MONTHS = [
  {
    label: 'Tháng 1',
    value: 1
  },
  {
    label: 'Tháng 2',
    value: 2
  },
  {
    label: 'Tháng 3',
    value: 3
  },
  {
    label: 'Tháng 4',
    value: 4
  },
  {
    label: 'Tháng 5',
    value: 5
  },
  {
    label: 'Tháng 6',
    value: 6
  },
  {
    label: 'Tháng 7',
    value: 7
  },
  {
    label: 'Tháng 8',
    value: 8
  },
  {
    label: 'Tháng 9',
    value: 9
  },
  {
    label: 'Tháng 10',
    value: 10
  },
  {
    label: 'Tháng 11',
    value: 11
  },
  {
    label: 'Tháng 12',
    value: 12
  }
]

// Code status
export const SUCCESS = 200
export const NOTFOUND = 404
export const NOTFOUNDs = 401
