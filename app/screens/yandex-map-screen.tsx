import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform, StyleSheet, View } from 'react-native';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import YaMap, { Marker } from 'react-native-yamap';

export default function YandexMapScreen() {
  useEffect(() => {
    const checkPermissions = async () => {
      if (Platform.OS === 'ios') {
        const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        if (result === RESULTS.GRANTED) {
          YaMap.init('b7e92bd0-0f80-42c3-82ec-15a7b5171739');
        }
      } else if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          YaMap.init('b7e92bd0-0f80-42c3-82ec-15a7b5171739');
        }
      }
    };

    checkPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <YaMap
        style={styles.map}
        showUserPosition={true}
        initialRegion={{
          lat: 55.751244,
          lon: 37.618423,
          zoom: 10,
          azimuth: 0,
          tilt: 100,
        }}
      >
        <Marker
          point={{ lat: 55.751244, lon: 37.618423 }}
          source={require('@/assets/images/lego.png')}
          onPress={() => console.log('Marker pressed')}
        />
      </YaMap>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
