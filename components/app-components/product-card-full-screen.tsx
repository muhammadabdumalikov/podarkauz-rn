import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Pressable, Animated, ImageBackground, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { textColors } from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

export const ProductCardFullScreen = () => {
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
  };

  return (
    <Pressable style={styles.box}>
      <Animated.View style={[styles.image, { opacity: fadeAnimation }]}>
        <ImageBackground
          style={styles.imageBox}
          source={{ uri: 'https://picsum.photos/800/1200' }} // Adjusted for full screen
        />
      </Animated.View>
      <View style={styles.cardFooter}>
        <Text numberOfLines={1} style={styles.productTitle}>TMA-2 HD Wireless</Text>
        <Text style={styles.productPrice}>Rp. 1.500.000</Text>

        <View style={styles.details}>
          <View style={styles.starAndRate}>
            <AntDesign name="star" size={12} color={textColors.orangeFresh} />
            <Text style={styles.rateTxt}>4.6</Text>
          </View>

          <Text style={styles.commentTxt}>86 Reviews</Text>

          <Pressable onPress={onHeartPressHandler}>
            <AntDesign
              name={favourite ? 'heart' : 'hearto'}
              size={20}
              color={textColors.navyBlack}
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: textColors.pureWhite,
  },
  image: {
    height: height * 0.6, // Adjust based on desired ratio
  },
  imageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  cardFooter: {
    padding: 15,
    backgroundColor: textColors.pureWhite,
  },
  productTitle: {
    fontSize: 18,
    color: textColors.navyBlack,
    marginBottom: 4,
  },
  productPrice: {
    color: textColors.redVelvet,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  starAndRate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateTxt: {
    fontSize: 12,
    marginLeft: 5,
  },
  commentTxt: {
    fontSize: 12,
  },
});
