import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Or any icon library you're using
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';

const GoBackButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.goBackButton} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={moderateScale(28)} color="black" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goBackButton: {
    position: 'absolute',
    zIndex: 3,
    top: verticalScale(48), // Adjust according to your design
    left: horizontalScale(15), // Adjust according to your design
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: add background for better visibility
    padding: 10,
    borderRadius: 10, // Optional: rounded corners
  },
  goBackText: {
    marginLeft: 5,
    fontSize: 16,
    color: 'black',
  },
});

export default GoBackButton;
