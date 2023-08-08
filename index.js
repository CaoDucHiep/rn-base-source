/**
 * @format
 */

import { AppRegistry, NativeModules } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

export const signalr = './node_modules/react-native-signalr/src/index';

AppRegistry.registerComponent(appName, () => App);
