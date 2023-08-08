/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from '../../@types/theme'

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  //Typography
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  textGray200: '#A1A1A1',
  primary: '#0054EA',
  success: '#28a745',
  error: '#dc3545',
  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
  blue: '#0054EA',
  mediumBlue: '#348DF3',
  whiteBlue: '#e7f1fe',
  trueWhite: '#FFFFFF',
  grey: '#C4C4C4',
  brightGray: '#E8E9EB',
  darkerGrey: '#787878',
  whiteSmoke: '#F5F5F5',
  trueBlack: '#000000',
  black: '#404040',
  surBlack: '#1F1F1F',
  red: '#dd2c00',
  crimson: '#DC143C',
  tintsRed: '#CF6679',
  green: '#50cebb',
  darkGreen: '#006400',
  orange: '#ffa375',
  yellow: '#FFD500',
  ripple: 'rgba(52, 141, 243,0.2)',
  status0: 'rgba(173, 216, 230,0.5)',
  status1: 'rgba(144, 238, 144,0.5)',
  status2: 'rgba(255, 204, 204,0.5)',
  status3: 'rgba(245, 245, 245,0.5)'
}

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#EFEFEF',
  card: '#EFEFEF'
}

/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  large: 40
}

/**
 * Metrics Sizes
 */
const tiny = 10
const small = tiny * 2 // 20
const regular = tiny * 3 // 30
const large = regular * 2 // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large
}

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes
}

export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const tmp = [];
for (var i = 0; i < 100; i++) {
  tmp.push(getRandomColor());
}
