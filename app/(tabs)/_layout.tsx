import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';

import { colors as Colors, textColors } from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import HomeSvg from '../../assets/icons/home_menu';
import WishlistSvg from '../../assets/icons/heart_menu';
import OrdersSvg from '../../assets/icons/order_menu';
import ProfileSvg from '../../assets/icons/profile_menu';
// import { View } from '@/components/Themed';
import { styles } from './styles';
import BellIcon from '@/assets/icons/bell';
import BoxSvg from '@/assets/icons/box';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Mega Mall',
          tabBarIcon: ({ color }) => <HomeSvg stroke={color} />,
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
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color }) => <WishlistSvg stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          // headerShown: false,
          title: 'Orders',
          tabBarIcon: ({ color }) => <OrdersSvg stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <ProfileSvg stroke={color} />,
        }}
      />
    </Tabs>
  );
}
