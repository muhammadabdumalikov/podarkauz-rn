import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have installed @expo/vector-icons
import { CustomHeader } from '@/components/app-components/go-back';
import { textColors } from '@/constants/Colors';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { UrbanistSemiboldTextInput } from '@/components/StyledText';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { LinearWrapper } from '@/components/app-components/linear-wrapper';

const selectorWidth = horizontalScale(198);

const EditProfileScreen = () => {
  const [selectedGender, setSelectedGender] = useState('male'); // Initial gender
  const translateX = useSharedValue(0); // Animation value for the indicator

  const handlePress = (gender: 'male' | 'female') => {
    setSelectedGender(gender);
    translateX.value = withTiming(
      gender === 'male' ? 0 : selectorWidth - horizontalScale(4)
    ); // Slide animation
  };

  // Animated style for the sliding indicator
  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      {/* Header */}
      <CustomHeader title='Редактировать профиль' />

      {/* Form Fields */}
      <View style={styles.form}>
        {/* Full Name */}
        <UrbanistSemiboldTextInput
          style={styles.input}
          placeholder='Аббос Хазратов'
        />

        {/* First Name */}
        <UrbanistSemiboldTextInput style={styles.input} placeholder='Аббос' />

        {/* Date of Birth */}
        <View style={styles.inputWithIcon}>
          <UrbanistSemiboldTextInput
            style={[styles.input, styles.internalInput]}
            placeholder='15/03/1990'
            keyboardType='numeric'
          />
          <Ionicons name='calendar-outline' size={24} color='black' />
        </View>

        {/* Email */}
        <View style={styles.inputWithIcon}>
          <UrbanistSemiboldTextInput
            style={[styles.input, styles.internalInput]}
            placeholder='abboskhazratov11@gmail.com'
            keyboardType='email-address'
          />
          <Ionicons name='mail-outline' size={24} color='black' />
        </View>

        {/* Location */}
        <View style={styles.inputWithIcon}>
          <UrbanistSemiboldTextInput
            style={[styles.input, styles.internalInput]}
            placeholder='Ташкент'
          />
          <Ionicons name='chevron-down-outline' size={24} color='black' />
        </View>

        {/* Gender Selection */}
        <View style={styles.genderBackgroundBox}>
          {/* Animated indicator */}
          <Animated.View style={[styles.indicator, animatedIndicatorStyle]} />
          {/* Gender options */}
          <Pressable
            onPress={() => handlePress('male')}
            style={styles.pressable}
          >
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
        {/* Phone Number */}
        <View style={styles.inputWithFlag}>
          <Image
            style={styles.flag}
            source={{ uri: 'https://flagcdn.com/w320/uz.png' }}
          />
          <UrbanistSemiboldTextInput
            style={styles.phoneInput}
            placeholder='+998 94 678 97 58'
          />
        </View>

        {/* Update Button */}
        <Pressable>
          <LinearWrapper style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Обновить</Text>
          </LinearWrapper>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColors.pureWhite,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  form: {
    flex: 1,
    marginTop: verticalScale(16),
    paddingHorizontal: horizontalScale(16),
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    height: verticalScale(56),
    paddingHorizontal: horizontalScale(16),
    marginBottom: verticalScale(24),
    fontSize: 16,
  },
  internalInput: {
    marginBottom: 0,
  },
  inputWithIcon: {
    flexDirection: 'row',
    height: verticalScale(56),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingRight: horizontalScale(16),
    marginBottom: verticalScale(24),
  },
  inputWithFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    height: verticalScale(56),
    paddingHorizontal: horizontalScale(16),
    marginBottom: verticalScale(48),
  },
  flag: {
    width: verticalScale(24),
    height: verticalScale(24),
    marginRight: 10,
    borderRadius: verticalScale(24)
  },
  phoneInput: {
    fontSize: 16,
  },
  updateButton: {
    width: horizontalScale(396),
    height: verticalScale(60),
    borderRadius: verticalScale(60),
    alignItems: 'center',
    justifyContent: 'center'
  },
  updateButtonText: {
    color: textColors.pureWhite,
    fontSize: moderateScale(16),
    fontWeight: '700',
  },
  genderBackgroundBox: {
    flexDirection: 'row',
    width: selectorWidth * 2, // Two options (male, female)
    height: verticalScale(48),
    backgroundColor: '#f0f0f0', // Light gray background
    borderRadius: moderateScale(12),
    padding: verticalScale(4),
    alignSelf: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    marginBottom: verticalScale(24),
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
    width: selectorWidth - horizontalScale(4), // Indicator width slightly smaller for padding effect
    height: verticalScale(40),
    top: verticalScale(4),
    left: verticalScale(4),
    backgroundColor: textColors.pureWhite, // White indicator color
    borderRadius: moderateScale(8),
    elevation: 2, // Shadow effect
  },
});

export default EditProfileScreen;
