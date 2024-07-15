import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const SkeletonLoader = ({ width, height }) => {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: true,
        duration: 1000,
      })
    ).start();
  }, [width]);

  return (
    <View style={{ width, height, backgroundColor: '#E1E9EE', overflow: 'hidden' }}>
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          transform: [{ translateX }],
        }}
      >
        <LinearGradient
          style={{ width: '100%', height: '100%' }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#E1E9EE', '#F2F8FC', '#E1E9EE']}
        />
      </Animated.View>
    </View>
  );
};

export default SkeletonLoader;