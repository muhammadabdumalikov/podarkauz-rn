import { textColors } from '@/constants/Colors';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { StyleSheet, View, Text, Pressable, Animated } from 'react-native';

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
    <Animated.View style={[styles.image, {opacity: fadeAnimation}]}>
      <Pressable onPress={onHeartPressHandler}>
        <AntDesign
          name={favourite ? 'heart' : 'hearto'}
          size={20}
          color={favourite ? textColors.redVelvet : textColors.pureWhite}
          style={styles.heartIconStyle} />
      </Pressable>
    </Animated.View>
    <View style={styles.cardFooter}>
      <Text numberOfLines={1} style={styles.productTitle}>TMA-2 HD Wireleswwwws</Text>
      <Text style={styles.productPrice}>Rp. 1.500.000</Text>

      <View style={styles.details}>
        <View style={styles.starAndRate}>
          <AntDesign name="star" size={12} color={textColors.orangeFresh} />
          <Text style={styles.rateTxt}>4.6</Text>
        </View>

        <Text style={styles.commentTxt}>86 Reviews</Text>

        <Pressable>
          <Feather name="more-vertical" size={16} color={textColors.darkGrey} />
        </Pressable>
      </View>
    </View>
  </Pressable>
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'space-between',
    width: 180,
    height: 290,
    backgroundColor: textColors.pureWhite,
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 190,
    backgroundColor: 'grey',
  },
  cardFooter: {
    padding: 15
  },
  productTitle: {
    // fontWeight: '600',
    fontSize: 14,
    color: textColors.navyBlack,
    marginBottom: 4,
  },
  productPrice: {
    color: textColors.redVelvet,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  starAndRate: {
    width: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rateTxt: {
    fontSize: 10
  },
  commentTxt: {
    marginRight: 10,
    fontSize: 10
  },
  heartIconStyle: {
    position: 'absolute',
    right: 5,
    top: 5,
    padding: 10,
  }
});