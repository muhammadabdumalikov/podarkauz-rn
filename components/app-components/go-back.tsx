import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Or any icon library you're using
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';

export const GoBackButton = ({ absolute = false }: {absolute?: boolean}) => {
  const navigation = useNavigation();

  return (
    <Pressable style={[
      styles.goBackButton,
      absolute && {
        position: 'absolute',
        zIndex: 3,
        top: verticalScale(48),
        left: horizontalScale(15),
        padding: 10,
      }
    ]} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={moderateScale(28)} color="black" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});