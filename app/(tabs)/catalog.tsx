import { StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { ProductCard } from '@/components/app-components/product-card';
import { IProduct, PRODUCT_DATA } from '@/constants/data';
import { FlashList } from '@shopify/flash-list';
import { horizontalScale } from '@/utils/metrics';
// import { getFavoriteProducts } from '@/utils/favorites.storage';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useFavorites } from '@/hooks/queries/storage.hooks';

export default function CatalogScreen() {
  const { getFavoriteProducts } = useFavorites();
  const data = getFavoriteProducts();

  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        numColumns={2}
        contentContainerStyle={{paddingHorizontal: horizontalScale(8)}}
        renderItem={({ item }) => <ProductCard key={item.id} product={item} />}
        keyExtractor={item => item.id}
        estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
