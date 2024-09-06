import { textColors } from '@/constants/Colors';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { UrbanistBoldText } from '../StyledText';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';

export const SeeAllHeader = (
  { headerName, link, style, onPress, btnName }
    :
  { headerName: string, link?: string, style?: object, onPress: () => void, btnName: string }) => {
  return <View style={[styles.box, style]}>
    <UrbanistBoldText style={styles.headerName}>{headerName}</UrbanistBoldText>
    {link
      ?
      (<Link href={link as `${string}:${string}`} asChild>
        <Pressable onPress={onPress}>
          <Text style={styles.seeAll}>{btnName}</Text>
        </Pressable>
      </Link>)
      :
      (<Pressable onPress={onPress}>
        <Text style={styles.seeAll}>{btnName}</Text>
      </Pressable>)
    }
  </View>
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    height: verticalScale(30),
    backgroundColor: textColors.pureWhite,
    paddingHorizontal: horizontalScale(25),
    marginVertical: verticalScale(15)
  },
  headerName: {
    fontSize: moderateScale(20),
    fontWeight: '700',
    color: textColors.navyBlack,
  },
  seeAll: {
    fontSize: moderateScale(16),
    fontWeight: '700',
    color: textColors.navyBlack,
  }
});