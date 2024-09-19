import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const selectorWidth = width * 0.5 - 32; // Adjust width based on screen size

const GenderSelector = () => {
  const [selectedGender, setSelectedGender] = useState('male'); // Initial gender
  const translateX = useSharedValue(0); // Animation value for the indicator

  const handlePress = gender => {
    setSelectedGender(gender);
    translateX.value = withTiming(gender === 'male' ? 0 : selectorWidth); // Slide animation
  };

  // Animated style for the sliding indicator
  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      {/* Background box with border */}
      <View style={styles.backgroundBox}>
        {/* Animated indicator */}
        <Animated.View style={[styles.indicator, animatedIndicatorStyle]} />
        {/* Gender options */}
        <Pressable onPress={() => handlePress('male')} style={styles.pressable}>
          <Text
            style={[
              styles.text,
              selectedGender === 'male' && styles.selectedText,
            ]}
          >
            Мужской
          </Text>
        </Pressable>
        <Pressable
          onPress={() => handlePress('female')}
          style={styles.pressable}
        >
          <Text
            style={[
              styles.text,
              selectedGender === 'female' && styles.selectedText,
            ]}
          >
            Женский
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 16,
  },
  backgroundBox: {
    flexDirection: 'row',
    width: selectorWidth * 2, // Two options (male, female)
    backgroundColor: '#f0f0f0', // Light gray background
    borderRadius: 25,
    padding: 4,
    justifyContent: 'space-between',
    position: 'relative',
  },
  pressable: {
    width: selectorWidth,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  selectedText: {
    color: '#000',
  },
  indicator: {
    position: 'absolute',
    width: selectorWidth - 4, // Indicator width slightly smaller for padding effect
    height: '100%',
    backgroundColor: '#ffffff', // White indicator color
    borderRadius: 20,
    elevation: 2, // Shadow effect
  },
});

export default GenderSelector;
