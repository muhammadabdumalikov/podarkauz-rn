import { textColors } from '@/constants/Colors';
import { AntDesign, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from 'react';
import { StyleSheet, View, Text, Pressable, Animated, ImageBackground, Dimensions } from 'react-native';
import { UrbanistBoldText, UrbanistMediumText, UrbanistSemiboldText } from '../StyledText';
import { SemiFilledStar } from './star-percentage';
import FavoriteHeartSvg from '@/assets/icons/favorite-heart';
import {getRandomElement} from '@/utils/random';
import { horizontalScale, verticalScale } from '@/utils/metrics';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('screen');

export const images = [require('../../assets/images/lego.png'), require('../../assets/images/toy.png'), require('../../assets/images/sumka.png')]

export const ProductCard = () => {
  const [favourite, setFavorite] = useState(false);
  const fadeAnimation = useRef(new Animated.Value(1)).current;

  const onHeartPressHandler = () => {
    setFavorite(!favourite);
    // Trigger fade animation
    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }

  return <Link href={{ pathname: "/screens/product-detail" }} asChild >
    <Pressable style={styles.box}>
      <View style={[styles.image]}>
        <ImageBackground style={styles.imageBox} source={getRandomElement(images)}/>
      </View>
      <View style={styles.cardFooter}>
        <UrbanistBoldText numberOfLines={2} style={styles.productTitle}>TMA-2 HD Wireleswwwws ssasdasdsa</UrbanistBoldText>

        <View style={styles.details}>
          <View style={styles.starAndRate}>
            <SemiFilledStar rating={3}/>
            <UrbanistMediumText style={styles.rateTxt}>4.6</UrbanistMediumText>
          </View>

          <View style={styles.divider} />

          <UrbanistSemiboldText style={styles.ordersTxt}>8633 заказов</UrbanistSemiboldText>
        </View>
      
        <UrbanistBoldText style={styles.productPrice}>445 000 сум</UrbanistBoldText>
      </View>

      <Pressable onPress={onHeartPressHandler} style={styles.favoriteHeartBox}>
        <LinearGradient
          colors={['#7210FF', '#9D59FF']}
          style={{flex: 1, justifyContent: 'center', alignItems:'center', borderRadius: 30}}
        >
          <Animated.View style={{ opacity: fadeAnimation }}>
            <FavoriteHeartSvg
              width={18}
              height={18}
              color={favourite ? textColors.redVelvet : textColors.pureWhite}
            />
          </Animated.View>
        </LinearGradient>
      </Pressable>
    </Pressable>
  </Link>
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'space-between',
    // width: width*0.44,
    width: horizontalScale(190),
    // height: width*0.64,
    height: verticalScale(300),
    backgroundColor: textColors.pureWhite,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginHorizontal: horizontalScale(8),
    marginVertical: verticalScale(10),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    // height: width*0.44-10,
    height: verticalScale(182),
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: textColors.softPurple
  },
  imageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  cardFooter: {
    // height: width * 0.195,
    height: verticalScale(106),
    gap: 8
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 18,
    color: textColors.navyBlack,
    height: verticalScale(44),
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  starAndRate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rateTxt: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8
  },
  ordersTxt: {
    marginRight: horizontalScale(10),
    fontWeight: '600',
    fontSize: 10,
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(8),
    borderRadius: 6,
    backgroundColor: textColors.transparentSilver,
    overflow: 'hidden'
  },
  favoriteHeartBox: {
    position: 'absolute',
    top: 14,
    right: 12,
    height: 28,
    width: 28,
  },
   divider: {
    width: 1,
    height: '60%',
    backgroundColor: '#333',
    marginHorizontal: 10,
  },
});