import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { store } from '../store/store';
import { Provider } from 'react-redux'

import YaMap from 'react-native-yamap';

import { useColorScheme } from '@/components/useColorScheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import queryClient from '@/service/api/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

YaMap.init('8e3ed980-d7b6-4dcc-ad54-7d06df299397');

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

const queryClient = new QueryClient()

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    UrbanistBold: require('../assets/fonts/Urbanist-Bold.ttf'),
    UrbanistSemibold: require('../assets/fonts/Urbanist-SemiBold.ttf'),
    UrbanistMedium: require('../assets/fonts/Urbanist-Medium.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
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
            <Stack.Screen
              name='screens/add-new-card-screen'
            />
          </Stack>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
