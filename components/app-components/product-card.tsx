import { textColors } from '@/constants/Colors';
import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';
import { UrbanistBoldText, UrbanistMediumText, UrbanistSemiboldText } from '../StyledText';
import { SemiFilledStar } from './star-percentage';
import { horizontalScale, verticalScale } from '@/utils/metrics';
import { Link } from 'expo-router';
import { FavoriteHeartBtn } from './favorte-btn';
import { IProduct } from '@/constants/data';
import React, { useMemo } from 'react';

export const ProductCard = React.memo(function({ product }: { product: IProduct }) {
  return (
    <Link href={{ pathname: "/screens/product-detail" }} asChild>
      <Pressable style={styles.box}>
        <View style={[styles.image]}>
          <ImageBackground style={styles.imageBox} source={product.image} />
        </View>
        <View style={styles.cardFooter}>
          <UrbanistBoldText numberOfLines={2} style={styles.productTitle}>
            {product.name}
          </UrbanistBoldText>

          <View style={styles.details}>
            <View style={styles.starAndRate}>
              <SemiFilledStar rating={3} />
              <UrbanistMediumText style={styles.rateTxt}>4.6</UrbanistMediumText>
            </View>
            <View style={styles.divider} />
            <UrbanistSemiboldText style={styles.ordersTxt}>8633 заказов</UrbanistSemiboldText>
          </View>
          <UrbanistBoldText style={styles.productPrice}>{product.price} сум</UrbanistBoldText>
        </View>
        <FavoriteHeartBtn product={product} key={product.id} />
      </Pressable>
    </Link>
  );
});

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
    height: verticalScale(106),
    gap: 8,
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
    marginLeft: 8,
  },
  ordersTxt: {
    marginRight: horizontalScale(10),
    fontWeight: '600',
    fontSize: 10,
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(8),
    borderRadius: 6,
    backgroundColor: textColors.transparentSilver,
    overflow: 'hidden',
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: '#333',
    marginHorizontal: 10,
  },
});
