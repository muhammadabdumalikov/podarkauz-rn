import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import YaMap from 'react-native-yamap';
import { useColorScheme } from '@/components/useColorScheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import CustomSplashScreen from '@/components/app-components/splash-screen';
import OnboardingCarousel, { ONBOARDING_KEY } from './screens/onboarding-screens';
import { MMKV } from 'react-native-mmkv';

YaMap.init('8e3ed980-d7b6-4dcc-ad54-7d06df299397');

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();
const storage = new MMKV();
const isOnboardingCompleted = storage.getBoolean(ONBOARDING_KEY);

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    UrbanistBold: require('../assets/fonts/Urbanist-Bold.ttf'),
    UrbanistSemibold: require('../assets/fonts/Urbanist-SemiBold.ttf'),
    UrbanistMedium: require('../assets/fonts/Urbanist-Medium.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <CustomSplashScreen />;
  }
  
  if (!isOnboardingCompleted) {
    return <OnboardingCarousel />;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
            <Stack.Screen
              name='screens/search-screen'
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='screens/product-detail'
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='screens/notification-screen'
              options={{ headerShown: false }}
            />
            <Stack.Screen name='screens/adresses-screen' />
            <Stack.Screen name='screens/add-new-card-screen' />
          </Stack>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
