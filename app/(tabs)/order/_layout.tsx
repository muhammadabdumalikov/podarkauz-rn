import { Dimensions, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { textColors } from '@/constants/Colors';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import {
  NavigationContainer,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import Constants from 'expo-constants';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function Layout() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: textColors.purple,
          tabBarInactiveTintColor: textColors.grey5,
          tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabelStyle,
        }}
      >
        <MaterialTopTabs.Screen
          name='current'
          options={{ tabBarLabel: 'Текущие' }}
        />
        <MaterialTopTabs.Screen
          name='completed'
          options={{ tabBarLabel: 'Завершенные' }}
        />
      </MaterialTopTabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBarIndicatorStyle: {
    backgroundColor: textColors.purple,
    width: horizontalScale(184),
    height: verticalScale(4),
    borderRadius: 4,
    marginLeft: Dimensions.get('screen').width / 2 / 2 - horizontalScale(92),
  },
  tabBarStyle: {
    backgroundColor: textColors.grey1,
    shadowOpacity: 0,
  },
  tabBarLabelStyle: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    textTransform: 'none',
  },
});
