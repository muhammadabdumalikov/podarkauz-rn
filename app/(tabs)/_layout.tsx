import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import {colors as Colors} from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

import HomeSvg from '../../assets/icons/home_menu';
import WishlistSvg from '../../assets/icons/heart_menu';
import OrdersSvg from '../../assets/icons/order_menu';
import ProfileSvg from '../../assets/icons/profile_menu';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

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
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeSvg stroke={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
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
