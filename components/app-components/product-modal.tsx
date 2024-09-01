import React, { useEffect, useRef, useState } from 'react';
import { textColors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { StyleSheet, View, Text, Pressable, Animated } from 'react-native';
import { ScrollView } from '../Themed';
import { AntDesign, Feather } from '@expo/vector-icons';
import { MyRefType } from '@/app/(tabs)';
import { ProductModalShopHeader } from './product-modal-shop-header';
import { CardSkeleton } from './modal-skeleton';
import Carousel from 'react-native-reanimated-carousel';

const animationTime = 500;

export const ProductModalView = React.forwardRef(({ onModalClose }: any, ref) => {
  const counterAnimatedValue = useRef(new Animated.Value(0)).current;
  const [isLoading, setIsLoading] = useState(true);
  const [productCountCounter, setProductCountCounter] = useState(0);

  useEffect(() => {

    // Simulating an asynchronous data fetch 
    setTimeout(() => {

      // Set isLoading to false after 
      // the data is fetched 
      setIsLoading(false);

      // Adjust the timeout value 
      // according to your needs 
    }, 500);
  }, []);

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

  return <View style={styles.box} ref={ref}>
    {!isLoading ? (
      <>
        <View style={styles.headerBox}>
          <Text style={styles.headerTxt}>Detail Product</Text>
          <Pressable style={styles.closeBtn} onPress={onModalClose}>
            <AntDesign name="close" size={24} color={textColors.navyBlack} />
          </Pressable>
        </View>
        <ScrollView style={styles.box} contentContainerStyle={styles.boxContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.imageBox}>
            <Carousel
              loop
              width={325}
              height={325}
              // autoPlay={true}
              data={[...new Array(6).keys()]}
              scrollAnimationDuration={1000}
              onSnapToItem={(index) => console.log('current index:', index)}
              renderItem={({ index }) => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.imageCounter}>
                    {index}/6
                  </Text>
                </View>
              )}
            />
          </View>

          <View style={styles.cardFooter}>
            <Text numberOfLines={1} style={styles.productTitle}>TMA-2 HD Wireleswwwws</Text>
            <Text style={styles.productPrice}>Rp. 1.500.000</Text>

            <View style={styles.details}>
              <View style={styles.starAndRate}>
                <AntDesign name="star" size={14} color={textColors.orangeFresh} />
                <Text style={styles.rateTxt}>4.6</Text>
              </View>

              <Text style={styles.commentTxt}>86 Reviews</Text>
              <View style={styles.countTxtBox}>
                <Text style={styles.countTxt}>Count: 45</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <ProductModalShopHeader />

          <View style={styles.divider} />

          <View style={styles.productDescriptionBox}>
            <Text style={styles.productDescriptionTitle}>
              Product Description
            </Text>

            <Text style={styles.productDescriptionTxt} numberOfLines={13}>
              The speaker unit contains a diaphragm that is precision-grown from NAC Audio bio-cellulose, making it stiffer, lighter and stronger than regular PET speaker units, and allowing the sound-producing diaphragm to vibrate without the levels of distortion found in other speakers. {"\n"}
              {"\n"}
              The speaker unit contains a diaphragm that is precision-grown from NAC Audio bio-cellulose, making it stiffer, lighter and stronger than regular PET speaker units, and allowing the sound-producing diaphragm to vibrate without the levels of distortion found in other speakers.
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.amountBox}>
            <Text style={styles.counterBoxTxt}>
              Amount:
            </Text>

            <View style={styles.counterBox}>
              <Pressable style={styles.counterIconsStyle} onPress={counterDecrement}>
                <AntDesign name="minus" size={24} color="black" />
              </Pressable>
              <Animated.Text
                style={[{ transform: [{ scale: counterScale }], fontWeight: '500', fontSize: 16 }]}>
                {productCountCounter}
              </Animated.Text>
              <Pressable style={styles.counterIconsStyle} onPress={counterIncrement}>
                <AntDesign name="plus" size={24} color="black" />
              </Pressable>
            </View>
          </View>
        </ScrollView>
       
        <View style={styles.modalFooterPrice}>
          <Text style={styles.modalFooterPriceTxt}>3000 UZS</Text>
          <Pressable style={styles.buyBtn}></Pressable>
        </View>
      </>
    ) : <CardSkeleton />}
  </View>
});

const styles = StyleSheet.create({
  box: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100
  },
  headerBox: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  headerTxt: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16
  },
  closeBtn: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    height: 35,
    width: 35,
    // borderRadius: '50%',
    // backgroundColor: '#00000020',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBox: {
    flex: 1,
    height: 325,
    backgroundColor: textColors.grey1y,
    borderRadius: 10,
    marginBottom: 30
  },
  imageCounter:
  {
    fontSize: 20,
    position: 'absolute',
    bottom: 10,
    left: 10
  },
  cardFooter: {
    width: '100%',
  },
  productTitle: {
    fontWeight: '600',
    fontSize: 22,
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
    width: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rateTxt: {
    marginLeft: 5,
    fontSize: 14
  },
  commentTxt: {
    marginRight: 50,
    fontSize: 14
  },
  countTxtBox: {
    borderRadius: 20,
    backgroundColor: textColors.green2,
  },
  countTxt: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    fontSize: 12,
    fontWeight: '500',
    color: textColors.green2
  },
  divider: {
    width: '100%',
    height: 1,
    marginVertical: 30,
    backgroundColor: textColors.grey1
  },
  productDescriptionBox: {
    width: '100%',
    height: 320,
  },
  productDescriptionTxt: {
    lineHeight: 22
  },
  productDescriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15
  },
  amountBox: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  counterBox: {
    backgroundColor: textColors.grey1y,
    padding: 3,
    borderRadius: 30,
    width: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  counterBoxTxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  counterIconsStyle: {
    backgroundColor: textColors.pureWhite,
    borderRadius: 100
  },
  modalFooterPrice: {
    height: 100,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 25,
    position: 'absolute',
    backgroundColor: textColors.grey1y,
    zIndex: 1
  },
  modalFooterPriceTxt: {
    fontSize: 30,
    fontWeight: '500',
    color: textColors.navyBlack,
  }
});