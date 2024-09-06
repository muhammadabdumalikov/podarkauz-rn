import React, { useRef, useState, useMemo, useCallback } from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView, Dimensions, Pressable, ActivityIndicator, ImageBackground } from 'react-native';
import { View, SectionList } from '@/components/Themed';
import { SeeAllHeader } from '@/components/app-components/see-all-header';
import { ProductCard } from '@/components/app-components/product-card';
import RBSheet from 'react-native-raw-bottom-sheet';
import { closeProductModal } from '@/store/reducer';
import { ProductModalView } from '@/components/app-components/product-modal';
import { Link } from 'expo-router';
import { fetchCategories } from '@/service/api/categort-list';
import { useQuery } from '@tanstack/react-query';
import AdsBoxCarousel from '@/components/app-components/ads-box-carousel';
import { FlashList } from '@shopify/flash-list';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { textColors } from '@/constants/Colors';
import { DATA, IProduct, PRODUCT_DATA } from '@/constants/data';
import { InputBoxBtn } from '@/components/app-components/input-box';
import BellSvg from '@/assets/icons/bell';
import LocationColorfulSvg from '@/assets/icons/location-colorful';
import { LinearWrapper } from '@/components/app-components/linear-wrapper';
import { UrbanistMediumText } from '@/components/StyledText';
import CategoryScrollView from '@/components/app-components/selected-categories-scroll';
import { CategoryFlatlist } from '@/components/app-components/category-flatlist-index';

export interface MyRefType {
  open: () => void;
  close: () => void;
}

export default function HomeScreen() {
  const refRBSheet = useRef<MyRefType>(null);
  const { data: categoryData, isLoading: isCategoryLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const subCategories = ['Все', 'Женщинам', 'Мужчинам', 'Детям', 'Женщинамm'];

  // Memoize the CategoryItem to prevent unnecessary re-renders
  const CategoryItem = useMemo(() => ({
    params: { name_uz, name_ru, image_small, image_original, key }
  }: {
    params: {
      name_uz: string,
      name_ru: string,
      image_small: string;
      image_original: string;
      key: any;
    }
  }) => {
    return (
      <Link href={{ pathname: "/screens/inCategoryScreen", params: { categoryName: name_uz } }} asChild key={key}>
        <Pressable style={styles.categoryItem}>
          <View style={styles.categoryItemImgBox}>
            <ImageBackground 
              style={styles.categoryItemImg}
              source={{ uri: image_original }}
              resizeMode='center'
            />
          </View>
          <Text style={styles.categoryItemTxt}>{name_uz}</Text>
        </Pressable>
      </Link>
    );
  }, []);

  // Centralized handler to open modal
  const handleModalClose = useCallback(() => {
    closeProductModal();
    refRBSheet.current?.close();
  }, []);

  const handleCategoryOnPress = () => {
  }

  const renderSection = useCallback(({ section }: { 
    section: { 
      title?: string; 
      data: IProduct[] | any; 
    } 
  }) => {
    return (
      <View style={{ flex: 1 }}>
        <FlashList
          data={PRODUCT_DATA}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: horizontalScale(8), paddingBottom: verticalScale(80) }}
          renderItem={({ item }) => <ProductCard product={item} key={item.id}/>}
          keyExtractor={(item) => item.id}
          estimatedItemSize={10}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }, []);


  if (isCategoryLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: textColors.pureWhite }} >
      <View style={styles.searchHeader}>
        {/* <Link href="/screens/searchScreen" asChild>
          <Pressable style={styles.searchBoxElement}>
            <AntDesign name="search1" size={28} color={textColors.navyBlack} />
          </Pressable>
        </Link> */}
        <Pressable>
          <LinearWrapper style={styles.locationBox}>
            <LocationColorfulSvg width={verticalScale(24)} height={verticalScale(24)} />
            <UrbanistMediumText numberOfLines={1} style={styles.locationTxt}>Ташкент, Мирзо Улугбек район, Карасув-3, улица Мингбулок, 38.</UrbanistMediumText>
          </LinearWrapper>
        </Pressable>
        <Link href="/screens/notification-screen" asChild>
          <Pressable style={styles.searchBoxElement}>
            <BellSvg width={verticalScale(30)} height={verticalScale(30)} color={textColors.navyBlack} />
          </Pressable>
        </Link>
      </View>

      <SectionList
        ListHeaderComponent={
          <>
            <InputBoxBtn />
            <AdsBoxCarousel />
            <SeeAllHeader headerName='Categories' btnName='See all' link='/screens/categoryListScreen' onPress={handleCategoryOnPress} />
            <CategoryFlatlist />
            <SeeAllHeader headerName='Популярные' btnName='Посмотреть все' link='/profile' onPress={handleCategoryOnPress} />
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
          <View style={{backgroundColor: textColors.pureWhite}}>
            <CategoryScrollView subCategories={subCategories}/>
          </View>
        )}
      />

      <RBSheet
        ref={refRBSheet}
        customStyles={{
          wrapper: { backgroundColor: '#00000080' },
          draggableIcon: { backgroundColor: '#000' },
          container: { backgroundColor: textColors.pureWhite, borderRadius: 20 }
        }}
        height={Dimensions.get('screen').height * 0.9}>
        <ProductModalView ref={refRBSheet} onModalClose={handleModalClose} />
      </RBSheet>
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
    width: horizontalScale(358),
    height: verticalScale(44),
    borderRadius: moderateScale(12),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
  },
  locationTxt: {
    marginLeft: horizontalScale(10),
    width: horizontalScale(292),
    fontWeight: '400',
    fontSize: moderateScale(15),
    letterSpacing: 0.2,
    color: textColors.pureWhite,
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
