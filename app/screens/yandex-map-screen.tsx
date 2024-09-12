import { textColors } from '@/constants/Colors';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image, NativeSyntheticEvent, PermissionsAndroid, Platform, Pressable, StyleSheet, View } from 'react-native';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import YaMap, { CameraPosition, Geocoder, Point } from 'react-native-yamap';
import Geolocation from '@react-native-community/geolocation';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { UrbanistBoldText, UrbanistMediumText, UrbanistSemiboldText } from '@/components/StyledText';
import { InputBox } from '@/components/app-components/input-box';
import { LinearWrapper } from '@/components/app-components/linear-wrapper';
import { CustomHeader } from '@/components/app-components/go-back';

interface Location {
  lat: number;
  lon: number;
}

// const LOCA TION_CHANGE_THRESHOLD = 0.00001; // Adjust this value as needed

export default function YandexMapScreen() {
  const [mapCenter, setMapCenter] = useState<Location>({ lat: 55.751244, lon: 37.618423 });
  const [currentLocation, setCurrentLocation] = useState<Location>({ lat: 55.751244, lon: 37.618423 });
  const [isChecked, setChecked] = useState(false);

  // Handle checkbox press
  const handlePress = () => {
    setChecked(!isChecked);
  };

  const mapRef = useRef<YaMap | null>(null);
  const lastUpdateRef = useRef<Location>(mapCenter);

  const reverseGeocode = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://geocode-maps.yandex.ru/1.x/?apikey=b7e92bd0-0f80-42c3-82ec-15a7b5171739&geocode=${longitude},${latitude}&format=json`
      );
      const data = await response.json();
    
      if (data && data.response && data.response.GeoObjectCollection.featureMember.length > 0) {
        const address = data.response.GeoObjectCollection.featureMember[0].GeoObject.name;
        return address;
      } else {
        // console.log('No address found for these coordinates.');
      }
    } catch (error) {
      console.error('Error fetching the address:', error);
    }
  };


  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        moveToLocation({ lat: latitude, lon: longitude });
      },
      (error) => console.log('Error getting location:', error),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const moveToLocation = (location: Location) => {
    mapRef.current?.setCenter({ ...location, zoom: 18 }, 0, 0, 0, 500);
    setMapCenter(location);
    lastUpdateRef.current = location;
  };

  useEffect(() => {
    const checkPermissions = async () => {
      let permissionGranted = false;
      if (Platform.OS === 'ios') {
        const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        permissionGranted = result === RESULTS.GRANTED;
      } else if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        permissionGranted = granted === PermissionsAndroid.RESULTS.GRANTED;
      }

      if (permissionGranted) {
        YaMap.init('8e3ed980-d7b6-4dcc-ad54-7d06df299397');  // Ensure correct API key is used
        getCurrentLocation();
      }
    };

    checkPermissions();
  }, []);

  const onCameraPositionChangeEnd = useCallback((event: NativeSyntheticEvent<CameraPosition>) => {
    const { lat, lon } = event.nativeEvent.point;
    // const geo2 = reverseGeocode(lat, lon).then(d => console.log(d))
    // const geo = Geocoder.geoToAddress(event.nativeEvent.point)
    //   .then(data => console.log(data))
    //   .catch(e => console.log(e));    

    setMapCenter({ lat: undefined as unknown as number, lon: undefined as unknown as number });
    setCurrentLocation({ lat, lon });
    lastUpdateRef.current = { lat, lon };
  }, []);

  return (
    <View style={styles.container}>
      <CustomHeader title='Добавить новый адрес'/>
      <YaMap
        ref={mapRef}
        style={styles.map}
        showUserPosition={false}
        rotateGesturesEnabled={false}
        // onCameraPositionChange={onCameraPositionChange}
        onCameraPositionChangeEnd={onCameraPositionChangeEnd}
        initialRegion={{
          lat: mapCenter.lat,
          lon: mapCenter.lon,
          zoom: 18,
          azimuth: 0,
        }}
      />
      
      <View style={styles.centerMarkerContainer}>
        <View style={styles.markerContainer}>
            <Image 
            source={require('@/assets/images/location-marker.png')} 
            style={styles.markerImage}
          />
          <View style={styles.markerContainer2}>
          <Image 
            source={require('@/assets/images/lego.png')} 
            style={styles.legoImage}
          />
          </View>
        </View>
      </View>

      <Pressable style={styles.floatingButton} onPress={getCurrentLocation}>
        <MaterialIcons name="my-location" size={24} color="black" />
      </Pressable>

      <View style={styles.bottomSheetBox}>
        <UrbanistBoldText style={styles.bottomSheetBoxHeader}>Подробная информация</UrbanistBoldText>

        <UrbanistMediumText style={styles.addressName}>Название Адреса</UrbanistMediumText>
        <InputBox handleSearch={() => null} style={styles.addressNameInput} editable={false}/>

        <UrbanistMediumText style={styles.addressName}>Подробный адресс</UrbanistMediumText>
        <InputBox handleSearch={() => null} style={styles.addressNameInput} editable={false} />

        <Pressable style={styles.allowRow} onPress={handlePress}>
          <View style={styles.checkbox}>
            {isChecked && <FontAwesome name="check" size={moderateScale(16)} color={textColors.purple} />}
          </View>
          <UrbanistSemiboldText style={styles.label}>Сделать это в качестве адреса по умолчанию</UrbanistSemiboldText>
        </Pressable>

        <LinearWrapper style={{borderRadius: 100}}>
          <Pressable style={[styles.addBtnBox, !isChecked && styles.addBtnBoxDisabled]} disabled={!isChecked ?? true}>
            <UrbanistBoldText style={styles.addBtnTxt}>Добавить</UrbanistBoldText>
          </Pressable>
        </LinearWrapper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: textColors.pureWhite
  },
  map: {
    flex: 1,
  },
  centerMarkerContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  markerContainer: {
    width: verticalScale(70),
    height: verticalScale(70),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '25%', // This moves the marker up by 10% of the screen height
  },
  markerContainer2: {
    width: verticalScale(42),
    height: verticalScale(42),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: textColors.pureWhite,
    borderRadius: verticalScale(42),
  },
  markerImage: {
    marginTop: verticalScale(10),
    width: verticalScale(60),
    height: verticalScale(60),
    resizeMode: 'contain',
  },
  legoImage: {
    width: verticalScale(35),
    height: verticalScale(35),
    resizeMode: 'contain',
    backgroundColor: textColors.navyBlack,
    borderRadius: verticalScale(35),
  },
  floatingButton: {
    position: 'absolute',
    bottom: verticalScale(470),
    right: horizontalScale(20),
    backgroundColor: 'white',
    borderRadius: verticalScale(30),
    width: verticalScale(60),
    height: verticalScale(60),
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  bottomSheetBox: {
    width: '100%',
    height: verticalScale(450),
    backgroundColor: textColors.pureWhite,
    borderTopLeftRadius: verticalScale(30),
    borderTopRightRadius: verticalScale(30),
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: horizontalScale(16)
  },
  bottomSheetBoxHeader: {
    fontWeight: '700',
    fontSize: moderateScale(22),
    marginTop: verticalScale(30),
    textAlign: 'center',
    marginBottom: verticalScale(40)
  },
  addressName: {
    fontWeight: '400',
    fontSize: moderateScale(16),
    letterSpacing: 0.2,
    marginBottom: verticalScale(16)
  },
  addressNameInput: {
    height: verticalScale(55),
    width: horizontalScale(390),
    alignSelf: 'center',
    marginBottom: verticalScale(16)
  },
  allowRow: {
    height: verticalScale(25),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: horizontalScale(15)
  },
  checkbox: {
    width: verticalScale(24),
    height: verticalScale(24),
    borderRadius: verticalScale(8),
    borderWidth: 2,
    borderColor: textColors.navyBlack,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  label: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: textColors.navyBlack,
  },
  addBtnBox: {
    height: verticalScale(55),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  addBtnBoxDisabled: {
    backgroundColor: textColors.grey3,
  },
  addBtnTxt: {
    fontWeight: '700',
    fontSize: moderateScale(16),
    color: textColors.pureWhite
  }
});