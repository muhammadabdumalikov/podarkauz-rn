import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Or any icon library you're using
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import Constants from 'expo-constants';
import { textColors } from '@/constants/Colors';
import { ViewProps } from '../Themed';

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

export const CustomHeader = (props: ViewProps & {title: string}) => {
  return (
    <View style={[styles.headerContainer, props?.style]}>
      <GoBackButton/>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: verticalScale(68),
    marginTop: Constants.statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(18),
    backgroundColor: textColors.pureWhite,
    // borderBottomWidth: 1,
    // borderBottomColor: '#EDEDED',
  },
  headerTitle: {
    marginLeft: horizontalScale(16),
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: '#000',
  },
    goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});