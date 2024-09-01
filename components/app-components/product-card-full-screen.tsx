import React, { useRef, useState } from 'react';
import { StyleSheet, Pressable, ImageBackground } from 'react-native';
import { textColors } from '@/constants/Colors';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { View } from '../Themed';
import { UrbanistBoldText, UrbanistMediumText, UrbanistSemiboldText } from '../StyledText';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import ReviewSvg from '@/assets/icons/review';

export const ProductCardFullScreenForCurrent = () => {
  return (
    <Pressable style={styles.box}>
      <ImageBackground source={require('../../assets/images/lego.png')} style={styles.image} />
      <View style={styles.detail}>
        <UrbanistBoldText style={styles.productTitle}>Сумка из кожи</UrbanistBoldText>

        <View style={styles.info}>
          <View style={styles.colorCircle} />
          <UrbanistMediumText style={styles.infoTxt}>Цвет | Размер = M | Qty = 1</UrbanistMediumText>
        </View>

        <UrbanistSemiboldText style={styles.processTxt}>В доставке</UrbanistSemiboldText>

        <View style={styles.priceRow}>
          <UrbanistBoldText style={styles.priceTxt}>445 000 сум</UrbanistBoldText>
          
          <Pressable >
            <LinearGradient
              colors={['#7210FF', '#9D59FF']}
              style={styles.priceBtn}
            >
              <AntDesign name="arrowright" size={20} color={textColors.pureWhite} />
            </LinearGradient>
          </Pressable>
          
        </View>
      </View>
    </Pressable>
  );
};

export const ProductCardFullScreenForCompleted = () => {
  return (
    <Pressable style={styles.box}>
      <ImageBackground source={require('../../assets/images/lego.png')} style={styles.image} />
      <View style={styles.detail}>
        <UrbanistBoldText style={styles.productTitle}>Сумка из кожи</UrbanistBoldText>

        <View style={styles.info}>
          <View style={styles.colorCircle} />
          <UrbanistMediumText style={styles.infoTxt}>Цвет | Размер = M | Qty = 1</UrbanistMediumText>
        </View>

        <UrbanistSemiboldText style={[
          styles.processTxt,
          { backgroundColor: textColors.green1, color: textColors.green2 }
        ]}>Доставлено</UrbanistSemiboldText>

        <View style={styles.priceRow}>
          <UrbanistBoldText style={styles.priceTxt}>445 000 сум</UrbanistBoldText>
          
          <Pressable >
            <LinearGradient
              colors={['#7210FF', '#9D59FF']}
              style={styles.priceBtn}
            >
            <ReviewSvg height={verticalScale(20)} width={verticalScale(20)}/>
            </LinearGradient>
          </Pressable>
          
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    width: '100%',
    height: verticalScale(152),
    marginVertical: verticalScale(8),
    backgroundColor: textColors.pureWhite,
    borderRadius: moderateScale(32),
    alignSelf: 'center',
    padding: verticalScale(16),
    flexDirection: 'row',
  },
  image: {
    width: horizontalScale(120),
    height: horizontalScale(120),
    backgroundColor: textColors.grey2,
    borderRadius: moderateScale(20),
  },
  detail: {
    // Remove or adjust flex: 1 here if needed for layout
    width: horizontalScale(230),
    marginLeft: horizontalScale(16),
  },
  productTitle: {
    fontWeight: '700',
    fontSize: moderateScale(18),
    marginBottom: verticalScale(8),
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(8),
  },
  colorCircle: {
    backgroundColor: textColors.redVelvet,
    width: verticalScale(16),
    height: verticalScale(16),
    borderRadius: moderateScale(16),
    marginRight: horizontalScale(8),
  },
  infoTxt: {
    fontWeight: '500',
    fontSize: moderateScale(12),
    color: textColors.darkGrey,
  },
  processTxt: {
    fontWeight: '600',
    fontSize: moderateScale(10),
    lineHeight: verticalScale(12),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(6),
    backgroundColor: textColors.grey3,
    borderRadius: moderateScale(6),
    overflow: 'hidden',
    marginBottom: verticalScale(8),
    alignSelf: 'flex-start',
  },
  priceRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: verticalScale(32),
  },
  priceTxt: {
    fontWeight: '700',
    fontSize: moderateScale(18),
  },
  priceBtn: {
    width: horizontalScale(52),
    height: '100%',
    borderRadius: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

