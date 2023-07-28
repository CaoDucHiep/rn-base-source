/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { BarChart, LineChart, PieChart } from 'react-native-gifted-charts';
import { FontStyle } from 'react-native-svg';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

interface ItemChart {
  value: number;
  shiftX?: number;
  shiftY?: number;
  color?: string;
  gradientCenterColor?: string;
  text?: string;
  textColor?: string;
  textSize?: number;
  fontStyle?: FontStyle;
  fontWeight?: string;
  font?: string;
  textBackgroundColor?: string;
  textBackgroundRadius?: number;
  shiftTextX?: number;
  shiftTextY?: number;
  labelPosition?: 'onBorder' | 'outward' | 'inward' | 'mid';
  onPress?: Function;
  onLabelPress?: Function;
  strokeWidth?: number;
  strokeColor?: string;
  focused?: boolean;
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const data: ItemChart[] = [{value: 50, text:'ádas'}];

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {/* <BarChart data={data}  /> */}
          {/* <LineChart data={data} donut /> */}
          {/* <PieChart data={data} donut centerLabelComponent={() => (
            <Text>
              Chart donut pie
            </Text>
          )} labelsPosition='outward' /> */}
          {/* <BarChart data={data} horizontal /> */}
          <LineChart data={[{
            label: 'a',
            labelComponent: () => {}
          }]} areaChart />
          {/* <PieChart data={data} donut /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
