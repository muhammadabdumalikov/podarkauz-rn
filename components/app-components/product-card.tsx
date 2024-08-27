import { textColors } from '@/constants/Colors';
import { AntDesign, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from 'react';
import { StyleSheet, View, Text, Pressable, Animated, ImageBackground, Dimensions } from 'react-native';
import { UrbanistBoldText, UrbanistMediumText, UrbanistSemiboldText } from '../StyledText';
import { SemiFilledStar } from './star-percentage';

const { width, height } = Dimensions.get('screen');

export const ProductCard = ({ onSelectHandle }) => {
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

  return <Pressable style={styles.box} onPress={onSelectHandle}>
    <View style={[styles.image]}>
      <ImageBackground style={styles.imageBox} source={require('../../assets/images/lego.png')}/>
    </View>
    <View style={styles.cardFooter}>
      <UrbanistBoldText numberOfLines={1} style={styles.productTitle}>TMA-2 HD Wireleswwwws</UrbanistBoldText>

      <View style={styles.details}>
        <View style={styles.starAndRate}>
          <SemiFilledStar rating={3}/>
          <UrbanistMediumText style={styles.rateTxt}>4.6</UrbanistMediumText>
        </View>

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
          <AntDesign
            name={favourite ? 'heart' : 'hearto'}
            size={16}
            color={favourite ? textColors.redVelvet : textColors.pureWhite}
          />
        </Animated.View>
      </LinearGradient>
    </Pressable>
  </Pressable>
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'space-between',
    width: width*0.44,
    height: width*0.64,
    backgroundColor: textColors.pureWhite,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginHorizontal: 8,
    marginVertical: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: width*0.44-10,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: textColors.softPurple
  },
  imageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  cardFooter: {
    height: width * 0.195,
    justifyContent: 'space-between'
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 18,
    color: textColors.navyBlack,
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    // marginBottom: 10,
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
    marginRight: 15
  },
  rateTxt: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8
  },
  ordersTxt: {
    marginRight: 10,
    fontWeight: '600',
    fontSize: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
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
  }
});