import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { UrbanistSemiboldText } from '../StyledText';
import { textColors } from '@/constants/Colors';

const data = [
  { id: '1', title: 'День рождения', image: require('@/assets/images/surprise-box.png') },
  { id: '2', title: 'Проф. праздники', image: require('@/assets/images/closed-box') },
  { id: '3', title: 'Подарочные наборы', image: require('@/assets/images/closed-box') },
  { id: '4', title: 'День учителя', image: require('@/assets/images/closed-box') },
  { id: '5', title: 'Юбилей', image: require('@/assets/images/closed-box') },
  { id: '6', title: 'Свадьба', image: require('@/assets/images/closed-box') },
  { id: '7', title: 'Подарочные наборы', image: require('@/assets/images/closed-box') },
  { id: '8', title: 'Все поводы', image: require('@/assets/images/closed-box') },
];

export const CategoryFlatlist = () => {
  return (
    <View style={styles.container}>
      {data?.map(item => (
        <TouchableOpacity key={item.id} style={styles.itemContainer}>
          <View style={styles.imageBox}>
            <Image source={item.image} style={styles.image} />
          </View>
          <UrbanistSemiboldText numberOfLines={2} style={styles.title}>{item.title}</UrbanistSemiboldText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: verticalScale(230),
    maxHeight: verticalScale(230),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(11)
  },
  itemContainer: {
    height: verticalScale(100),
    // maxHeight: verticalScale(100),
    width: verticalScale(88),
    margin: verticalScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(15)
  },
  imageBox: {
    width: verticalScale(60),
    height: verticalScale(60),
    marginBottom: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: textColors.softPurple,
    borderRadius: moderateScale(15),
    overflow: 'hidden'
  },
  image: {
    width: verticalScale(55),
    height: verticalScale(55),
    left: verticalScale(10),
    top: verticalScale(10),
    resizeMode: 'contain'
  },
  title: {
    height: verticalScale(28),
    fontSize: moderateScale(12),
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: verticalScale(14),
  },
});

