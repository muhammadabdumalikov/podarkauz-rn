import React, { useRef, useState, useMemo, useCallback } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  Pressable,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { View, SectionList } from '@/components/Themed';
import { SeeAllHeader } from '@/components/app-components/see-all-header';
import { ProductCard } from '@/components/app-components/product-card';
import { Link } from 'expo-router';
import { fetchCategories } from '@/service/api/categort-list';
import { useQuery } from '@tanstack/react-query';
import AdsBoxCarousel from '@/components/app-components/ads-box-carousel';
import { FlashList } from '@shopify/flash-list';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { textColors } from '@/constants/Colors';
import { DATA, IProduct, PRODUCT_DATA } from '@/constants/data';
import BellSvg from '@/assets/icons/bell';
import LocationColorfulSvg from '@/assets/icons/location-colorful';
import { LinearWrapper } from '@/components/app-components/linear-wrapper';
import { UrbanistMediumText } from '@/components/StyledText';
import CategoryScrollView from '@/components/app-components/selected-categories-scroll';
import { CategoryFlatlist } from '@/components/app-components/category-flatlist-index';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { WishlistHeartSvg } from '@/assets/icons/favorite-heart';

export default function HomeScreen() {
  // const { data: categoryData, isLoading: isCategoryLoading } = useQuery({
  //   queryKey: ['categories'],
  //   queryFn: fetchCategories,
  // });

  const subCategories = ['Все', 'Женщинам', 'Мужчинам', 'Детям', 'Женщинамm'];

  const handleCategoryOnPress = () => {};

  const renderSection = useCallback(
    ({
      section,
    }: {
      section: {
        title?: string;
        data: IProduct[] | any;
      };
    }) => {
      return (
        <View style={{ flex: 1 }}>
          <FlashList
            data={PRODUCT_DATA}
            numColumns={2}
            contentContainerStyle={{
              paddingHorizontal: horizontalScale(8),
              paddingBottom: verticalScale(80),
            }}
            renderItem={({ item }) => (
              <ProductCard product={item} key={item.id} />
            )}
            keyExtractor={item => item.id}
            estimatedItemSize={10}
            showsVerticalScrollIndicator={false}
          />
        </View>
      );
    },
    []
  );

  // if (isCategoryLoading) {
  //   return <ActivityIndicator size="large" />;
  // }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: textColors.pureWhite }}>
      <View style={styles.searchHeader}>
        <Pressable>
          <LinearWrapper style={styles.locationBox}>
            <LocationColorfulSvg
              width={verticalScale(24)}
              height={verticalScale(24)}
            />
            <UrbanistMediumText numberOfLines={1} style={styles.locationTxt}>
              Ташкент, Мирзо Улугбек район, Карасув-3, улица Мингбулок, 38.
            </UrbanistMediumText>
          </LinearWrapper>
        </Pressable>
        <Link href='/screens/notification-screen' asChild>
          <Pressable style={styles.searchBoxElement}>
            <BellSvg
              width={verticalScale(30)}
              height={verticalScale(30)}
              color={textColors.navyBlack}
            />
          </Pressable>
        </Link>
        <Link href='/screens/wishlist-screen' asChild>
          <Pressable style={styles.searchBoxElement}>
            <WishlistHeartSvg
              width={verticalScale(30)}
              height={verticalScale(30)}
              color={textColors.navyBlack}
            />
          </Pressable>
        </Link>
      </View>

      <SectionList
        ListHeaderComponent={
          <>
            <Link href='/screens/search-screen' asChild>
              <Pressable>
                <View style={[styles.inputBox]}>
                  <Feather
                    name='search'
                    size={moderateScale(24)}
                    color={textColors.navyBlack}
                  />

                  <MaterialCommunityIcons
                    name='tune-variant'
                    size={moderateScale(24)}
                    color={textColors.navyBlack}
                  />
                </View>
              </Pressable>
            </Link>

            <AdsBoxCarousel />
            <SeeAllHeader
              headerName='Categories'
              btnName='See all'
              link='/screens/search-screen'
              onPress={handleCategoryOnPress}
            />
            <CategoryFlatlist />
            <SeeAllHeader
              headerName='Популярные'
              btnName='Посмотреть все'
              link='/profile'
              onPress={handleCategoryOnPress}
            />
            {/* <FlatList
              style={styles.categoryList}
              contentContainerStyle={styles.categoryListContent}
              data={categoryData?.data}
              renderItem={({ item, index }) => <CategoryItem key={item.name_uz} params={{ ...item, key: index }} />}
              showsHorizontalScrollIndicator={false}
              horizontal
            /> */}
          </>
        }
        sections={DATA}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderSection}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ backgroundColor: textColors.backgroundBlur }}>
            <CategoryScrollView subCategories={subCategories} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchHeader: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 50,
    width: '100%',
    paddingHorizontal: 5,
    marginVertical: verticalScale(12),
  },
  locationBox: {
    width: horizontalScale(310),
    height: verticalScale(44),
    borderRadius: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
  },
  locationTxt: {
    marginLeft: horizontalScale(10),
    width: horizontalScale(252),
    fontWeight: '400',
    fontSize: moderateScale(15),
    letterSpacing: 0.2,
    color: textColors.pureWhite,
  },
  inputBox: {
    flexDirection: 'row',
    backgroundColor: textColors.grey2,
    justifyContent: 'space-between',
    width: horizontalScale(395),
    alignItems: 'center',
    height: verticalScale(56),
    borderRadius: 15  ,
    marginHorizontal: horizontalScale(16),
    paddingHorizontal: 15,
    marginBottom: verticalScale(24),
  },
  searchBoxElement: {
    marginHorizontal: 3,
    padding: 5,
  },
  categoryList: {
    maxHeight: 85,
    marginVertical: 15,
    marginHorizontal: -25,
    paddingLeft: 25,
  },
  categoryListContent: {
    paddingRight: 50,
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    height: 85,
    width: 70,
    marginHorizontal: 2,
  },
  categoryItemImgBox: {
    height: 52,
    width: 52,
    borderRadius: 10,
    padding: 5,
    marginBottom: 5,
    overflow: 'hidden',
    backgroundColor: '#3498db',
  },
  categoryItemImg: {
    flex: 1,
  },
  categoryItemTxt: {
    fontSize: 12,
    fontWeight: '500',
    color: textColors.navyBlack,
    textAlign: 'center',
  },
});
