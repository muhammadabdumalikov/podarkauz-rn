import { Dimensions, ImageBackground, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { textColors } from '@/constants/Colors';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions
} from '@react-navigation/material-top-tabs';
import { NavigationContainer, ParamListBase, TabNavigationState } from '@react-navigation/native';
import Constants from 'expo-constants';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs =
  withLayoutContext<
    MaterialTopTabNavigationOptions,
    typeof Navigator,
    TabNavigationState<ParamListBase>,
    MaterialTopTabNavigationEventMap
    >
    (Navigator);

export default function Layout() {
  return <MaterialTopTabs>
    <MaterialTopTabs.Screen
      name='current'
      options={
        {
          tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarLabel: 'Текущие',
        }
      }
    />    
    <MaterialTopTabs.Screen
      name='completed'
      options={
        {
          tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
          tabBarLabel: 'Завершенные'
        }
      }
    /> 
  </MaterialTopTabs>;
}

const styles = StyleSheet.create({
  tabBarIndicatorStyle: {
    backgroundColor: 'blue',
    width: horizontalScale(184),
    height: verticalScale(4),
    borderRadius: 4,
    marginLeft: (Dimensions.get('screen').width / 2) / 2 - horizontalScale(92),
  },
  tabBarStyle: {
    backgroundColor: textColors.pureWhite,
  },
  tabBarLabelStyle: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    textTransform: 'none',
  },
})
