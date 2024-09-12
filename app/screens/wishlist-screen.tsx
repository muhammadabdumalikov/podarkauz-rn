import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { ProductCard } from '@/components/app-components/product-card';
import { FlashList } from '@shopify/flash-list';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
// import { getFavoriteProducts } from '@/utils/favorites.storage';
import { useFavorites } from '@/hooks/queries/storage.hooks';
import EmptySvg from '@/assets/images/empty';
import { UrbanistBoldText, UrbanistMediumText } from '@/components/StyledText';
import { textColors } from '@/constants/Colors';
import { CustomHeader } from '@/components/app-components/go-back';

export default function WishlistScreen() {
  const { getFavoriteProducts } = useFavorites();
  const data = getFavoriteProducts();

  return data.length > 0 ? (
    <View style={styles.flatlistStyleView}>
      <CustomHeader title='Мои желания' />
      <FlashList
        data={data}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: horizontalScale(8) }}
        renderItem={({ item }) => <ProductCard key={item.id} product={item} />}
        keyExtractor={item => item.id}
        estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <CustomHeader title='Мои желания' />
      <EmptySvg width={horizontalScale(250)} height={verticalScale(244)} />
      <UrbanistBoldText style={styles.emptyTxt}>
        У вас еще нет заказа
      </UrbanistBoldText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlistStyleView: {
    flex: 1,
  },
  emptyTxt: {
    marginTop: verticalScale(40),
    marginBottom: verticalScale(12),
    fontSize: moderateScale(24),
    fontWeight: '700',
  },
});
