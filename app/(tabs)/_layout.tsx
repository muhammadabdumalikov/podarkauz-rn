import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';

import { colors as Colors, textColors } from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import HomeSvg from '../../assets/icons/home_menu';
import {WishlistMenuIcon, WishlistMenuIconInactive} from '../../assets/icons/heart_menu';
import {OrderMenuIcon, OrderMenuIconInactive} from '../../assets/icons/order_menu';
import {ProfileMenuIcon, ProfileMenuIconInactive} from '../../assets/icons/profile_menu';
// import { View } from '@/components/Themed';
import { styles } from './styles';
import BellIcon from '@/assets/icons/bell';
import BoxSvg from '@/assets/icons/box';
import { BlurView } from 'expo-blur';
import { verticalScale } from '@/utils/metrics';
import { CatalogSvg } from '@/assets/icons/catalog';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarHideOnKeyboard: true,
        headerShown: useClientOnlyValue(false, true),
        tabBarBackground: () => (
          <BlurView intensity={50} tint="light" style={{ flex: 1 }} />
        ),
        tabBarStyle: {
          position: 'absolute',
          height: verticalScale(90),
          backgroundColor: textColors.bottomBarBlur,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Mega Mall',
          tabBarIcon: ({ color, focused }) => <HomeSvg stroke={ focused ? color : textColors.bottomBarInactiveIconColor } fill={focused ? textColors.navyBlack : 'none'} />,
          headerRight: ({ tintColor }) => (
            <View style={styles.headerTwoBtns}>
              <Link href="/modal" asChild>
                <Pressable style={{ height: 24, width: 24 }}>
                  {({ pressed }) => (
                    <BellIcon color={tintColor} />
                  )}
                </Pressable>
              </Link>

              <Link href="/modal" asChild>
                <Pressable style={{ height: 24, width: 24 }}>
                  {({ pressed }) => (
                    <BoxSvg color={tintColor} />
                  )}
                </Pressable>
              </Link>
            </View>
          ),
          headerStyle: { height: 100 },
          headerTitleStyle: {
            color: textColors.blueOcean
          }
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          title: 'Catalog',
          tabBarIcon: ({ color, focused }) => <CatalogSvg stroke={ focused ? color : textColors.bottomBarInactiveIconColor } fill={focused ? textColors.navyBlack : 'none'} />,
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color, focused }) => (
            focused
              ? <WishlistMenuIconInactive width={verticalScale(28)} height={verticalScale(28)} />
              : <WishlistMenuIcon width={verticalScale(28)} height={verticalScale(28)} />),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          // headerShown: false,
          title: 'Orders',
          tabBarIcon: ({ color, focused }) => (
            focused
              ? < OrderMenuIcon width={verticalScale(28)} height={verticalScale(28)} />
              : <OrderMenuIconInactive width={verticalScale(28)} height={verticalScale(28)} />)
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            focused
              ? <ProfileMenuIcon width={verticalScale(28)} height={verticalScale(28)} />
              : <ProfileMenuIconInactive width={verticalScale(28)} height={verticalScale(28)} />)        }}
      />
    </Tabs>
  );
}
