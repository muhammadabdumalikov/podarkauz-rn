import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Or any icon library you're using
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import Constants from 'expo-constants';
import { textColors } from '@/constants/Colors';

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

export const CustomHeader = ({ title }: {title: string}) => {
  return (
    <View style={styles.headerContainer}>
      <GoBackButton/>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: verticalScale(68),
    marginTop: Constants.statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: textColors.pureWhite,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  headerTitle: {
    marginLeft: horizontalScale(16),
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
    goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});