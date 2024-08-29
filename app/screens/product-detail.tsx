import { StyleSheet, StatusBar, Pressable, Animated } from 'react-native';

import { ScrollView, Text, View } from '@/components/Themed';
import { textColors } from '@/constants/Colors';
import ProductDetailCarousel from '@/components/app-components/product-detail-carousel';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import FavoriteHeartSvg from '@/assets/icons/favorite-heart';
import { UrbanistBoldText, UrbanistMediumText, UrbanistSemiboldText } from '@/components/StyledText';
import { SemiFilledStar } from '@/components/app-components/star-percentage';
import { AntDesign } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import BagSvg from '@/assets/icons/bag';

export default function ProductDetailScreen() {
  const animationTime = 500;

  const counterAnimatedValue = useRef(new Animated.Value(0)).current;
  const [productCountCounter, setProductCountCounter] = useState(0);


  const startCounterAnimation = (value: number) => {
    return Animated.spring(counterAnimatedValue, {
      toValue: value,
      useNativeDriver: true,
      // damping: 3
    })
  }

  const counterScale = counterAnimatedValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1.5, 1, 1.5],
    extrapolate: 'clamp'
  })
  
  const counterDecrement = () => {
    setProductCountCounter(productCountCounter - 1);
    startCounterAnimation(-1).start();
    setTimeout(() => {
      startCounterAnimation(0).start()
    }, animationTime);
  }

  const counterIncrement = () => {
    setProductCountCounter(productCountCounter + 1);
    startCounterAnimation(1).start();
    setTimeout(() => {
      startCounterAnimation(0).start()
    }, animationTime);
  }

  return (<>
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.carouselStyle}>
        <ProductDetailCarousel/>
      </View>

      <View style={styles.productTitleRow}>
        <UrbanistBoldText
          numberOfLines={2}
          style={styles.productTitle}>
          Подарочный набор для мужчин THE MOON
        </UrbanistBoldText>
        <FavoriteHeartSvg
          width={horizontalScale(28)}
          height={verticalScale(28)}
          color={textColors.navyBlack}/>
      </View>
      
      <View style={styles.rateRow}>
        <UrbanistSemiboldText style={styles.ordersTxt}>8633 заказов</UrbanistSemiboldText>
        <View style={styles.starAndRate}>
          <SemiFilledStar rating={3}/>
          <UrbanistMediumText style={styles.rateTxt}>4.6</UrbanistMediumText>
          <UrbanistMediumText style={styles.rateTxt}>(6,378 заказов)</UrbanistMediumText>
        </View>
      </View>

      <View style={styles.dividerBox}>
        <View style={styles.divider} />
      </View>

      <View style={styles.descriptionBox}>
        <UrbanistBoldText style={styles.descriptionTxt}>Описание</UrbanistBoldText>
        <UrbanistMediumText style={styles.descriptionDetailTxt}>
        Подарочный набор The MOON создан специально для современных мужчин. Уникальные формулы косметических средств, пленительный и стойкий аромат с нотами эфирных масел подарят ощущение непревзойденной свежести и уверенности в себе!
        Состав набора:
        1. Гель для душа THE MOON 250мл.
        2. Шампунь для всех типов THE MOON 250мл
        </UrbanistMediumText>
      </View>

      <View style={styles.countBox}>
        <UrbanistBoldText style={styles.countTxt}>Количество</UrbanistBoldText>
        <View style={styles.counterBox}>
          <Pressable style={styles.counterIconsStyle} onPress={counterDecrement}>
            <AntDesign name="minus" size={24} color="black" />
          </Pressable>
          <Animated.Text
            style={[{ transform: [{ scale: counterScale }], fontWeight: '700', fontSize: moderateScale(18), fontFamily: 'UrbanistBold'}]}>
            {productCountCounter}
          </Animated.Text>
          <Pressable style={styles.counterIconsStyle} onPress={counterIncrement}>
            <AntDesign name="plus" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </ScrollView>
     <View style={styles.modalFooterPrice}>
        <View style={styles.modalFooterPriceBox}>
          <UrbanistMediumText style={styles.modalFooterPriceTitle}>Итоговая цена</UrbanistMediumText>
          <UrbanistBoldText style={styles.modalFooterPriceTxt}>3000 UZS</UrbanistBoldText>
        </View>
        <Pressable style={styles.buyBtn}>
          <LinearGradient
            colors={['#7210FF', '#9D59FF']}
            style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems:'center', borderRadius: 100}}
          >
            <BagSvg height={verticalScale(20)} width={horizontalScale(20)}/>
            <UrbanistBoldText style={styles.buyBtnTxt}>В корзину</UrbanistBoldText>
        </LinearGradient>
        </Pressable>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColors.pureWhite
  },
  contentContainer: {
    alignItems: 'center',
  },
  carouselStyle: {
    height: verticalScale(428)
  },
  productTitleRow: {
    width: '100%',
    paddingHorizontal: horizontalScale(16),
    marginTop: verticalScale(16),
    maxHeight: verticalScale(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  productTitle: {
    width: horizontalScale(358),
    fontWeight: '700',
    fontSize: moderateScale(24),
    color: textColors.navyBlack,
  },
  rateRow: {
    width: '100%',
    paddingHorizontal: horizontalScale(16),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: verticalScale(12),
    alignItems: 'center',
    fontWeight: '700',
    fontSize: moderateScale(24),
    height: verticalScale(24),
  },
  ordersTxt: {
    marginRight: horizontalScale(16),
    fontWeight: '600',
    fontSize: moderateScale(12),
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(8),
    borderRadius: 6,
    backgroundColor: textColors.transparentSilver,
    overflow: 'hidden'
  },
  starAndRate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rateTxt: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginLeft: horizontalScale(8)
  },
  dividerBox: {
    paddingHorizontal: horizontalScale(16),
    marginVertical: 16,
    height: 1,
    width: '100%',
  },
  divider: {
    height: 1,
    backgroundColor: textColors.softGrey
  },
  descriptionBox: {
    width: '100%',
    paddingHorizontal: horizontalScale(16),
  },
  descriptionTxt: {
    fontWeight: '700',
    fontSize: moderateScale(18),
  },
  descriptionDetailTxt: {
    marginTop: verticalScale(8),
    paddingLeft: horizontalScale(24),
    fontSize: moderateScale(14),
    fontWeight: '400',
    lineHeight: 19,
  },
  countBox: {
    width: '100%',
    marginTop: verticalScale(16),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
  },
  countTxt: {
    fontWeight: '700',
    fontSize: moderateScale(18),
    marginRight: horizontalScale(20)
  },
  counterBox: {
    backgroundColor: textColors.offGrey,
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(12),
    borderRadius: 100,
    height: verticalScale(48),
    width: verticalScale(130),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  counterIconsStyle: {
    justifyContent: "center",
    alignItems: 'center'
  },
  modalFooterPrice: {
    height: verticalScale(110),
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    borderColor: textColors.softGrey,
    borderWidth: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: horizontalScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    position: 'absolute',
    zIndex: 1
  },
  modalFooterPriceBox: {
  },
  modalFooterPriceTitle: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    color: textColors.darkGrey,
    marginBottom: verticalScale(6)
  },
  modalFooterPriceTxt: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    color: textColors.navyBlack,
  },
  buyBtn: {
    width: horizontalScale(235),
    height: verticalScale(58)
  },
  buyBtnTxt: {
    marginLeft: horizontalScale(16),
    fontSize: moderateScale(16),
    color: textColors.pureWhite
  }
});
