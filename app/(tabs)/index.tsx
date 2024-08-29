import { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView, Dimensions, Pressable, ActivityIndicator, ImageBackground } from 'react-native';
// import { FlashList } from "@shopify/flash-list";

import { View, SectionList } from '@/components/Themed';
import { SeeAllHeader } from '@/components/app-components/see-all-header';
import { textColors } from '@/constants/Colors';
import { ProductCard } from '@/components/app-components/product-card';
import { useDispatch } from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import { closeProductModal, openProduct } from '@/store/reducer';
import { ProductModalView } from '@/components/app-components/product-modal';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { DATA } from '@/constants/data';
import { fetchCategories } from '@/service/api/categort-list';
import { useQuery } from '@tanstack/react-query';
import AdsBoxCarousel from '@/components/app-components/ads-box-carousel';
import { FlashList } from '@shopify/flash-list';

export interface MyRefType {
  open: () => void;
  close: () => void;
}

export default function HomeScreen() {
  // const { productData, isLoading } = useSelector((state: RootState) => state.openProduct);
  const refRBSheet = useRef<MyRefType>(null);
  const { data: categoryData, isLoading: isCategoryLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
  
  const dispatch = useDispatch();

  const CategoryItem = ({
    params: {
      name_uz,
      name_ru,
      image_small,
      image_original,
      key,
    }
  }: {
    params: {
      name_uz: string,
      name_ru: string,
      image_small: string
      image_original: string;
      key: any;
    }
  }) => {
    
    return (
      <Link href={{ pathname: "/screens/inCategoryScreen", params: { categoryName: name_uz} }}  asChild key={key}>
        <Pressable style={styles.categoryItem}>
          <View
            style={styles.categoryItemImgBox}
          >
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
  }

  const handleModalClose = () => {
    closeProductModal();
    refRBSheet.current?.close();
  }

  const handleCategoryOnPress = () => {
  }

  const renderSection = ({ section }: {
    section: {
      title?: string;
      data: any | {
        name: string;
        data: string[];
      }[];
    }
  }) => {

    return (
      <View style={{ flex: 1 }}>
       <FlashList
        data={DATA[0].data[0].data}
        numColumns={2}
        renderItem={({ item }) => <ProductCard key={item} />}
        keyExtractor={item => item}
        estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
      />
      </View>
    );
  };

  if (isCategoryLoading) {
    return <ActivityIndicator size="large" />
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: textColors.pureWhite }} >
      <View style={styles.searchHeader}>
        <Link href="/screens/searchScreen" asChild >
          <Pressable style={styles.searchBoxElement}>
            <AntDesign name="search1" size={28} color={textColors.navyBlack} />
          </Pressable>
        </Link>
        <Link href="/screens/notification-screen" asChild>
          <Pressable style={styles.searchBoxElement}>
            <Ionicons name="notifications-outline" size={28} color={textColors.navyBlack} />
          </Pressable>
        </Link>
      </View>
      <SectionList
        // contentContainerStyle={styles.container}
        ListHeaderComponent={
          <>
            <AdsBoxCarousel />
            <SeeAllHeader headerName='Categories' btnName='See all' link='/screens/categoryListScreen' onPress={handleCategoryOnPress} />
            <FlatList
              style={styles.categoryList}
              contentContainerStyle={styles.categoryListContent}
              data={categoryData?.data}
              renderItem={({ item, index }) => <CategoryItem key={item.name_uz} params={{...item, key: index}} />}
              showsHorizontalScrollIndicator={false}
              horizontal />
          </>
        }
        sections={DATA}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderSection}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { title } }) => (
          <SeeAllHeader
            headerName='Featured products'
            btnName='See all' link='/profile'
            style={{ backgroundColor: textColors.offGrey }}
            onPress={handleCategoryOnPress} />
        )}
      />

      <RBSheet
        ref={refRBSheet}
        // useNativeDriver={true}
        customStyles={{
          wrapper: {
            backgroundColor: '#00000080',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            backgroundColor: textColors.pureWhite,
            borderRadius: 20
          }
        }}
        height={Dimensions.get('screen').height * 0.9}
        customModalProps={{
          animationType: 'fade',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <ProductModalView ref={refRBSheet} onModalClose={handleModalClose} />
      </RBSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   alignItems: 'center',
  //   paddingTop: 15,
  // },
  searchHeader: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 50,
    width: '100%',
    paddingHorizontal: 5
  },
  searchBoxElement: {
    marginHorizontal: 3,
    padding: 5
  },
  categoryList: {
    maxHeight: 85,
    marginVertical: 15,
    marginHorizontal: -25,
    paddingLeft: 25,
  },
  categoryListContent: {
    paddingRight: 50
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    height: 85,
    width: 70,
    marginHorizontal: 2
  },
  categoryItemImgBox: {
    height: 52,
    width: 52,
    borderRadius: 10,
    padding: 5,
    marginBottom: 5,
    overflow: 'hidden',
    backgroundColor: '#3498db', // Custom background color
  },
  categoryItemImg: {
    flex: 1,
  },
  categoryItemTxt: {
    fontSize: 12,
    fontWeight: '500',
    color: textColors.navyBlack,
    textAlign: 'center'
  },

  header: {
    borderColor: "red",
    borderWidth: 5,
    height: 100,
    marginBottom: 6,
    width: "100%"
  },
  item: {
    borderColor: "green",
    borderWidth: 5,
    height: 100,
    marginBottom: 6,
    width: "100%"
  },
  list: {
    columnGap: 10,
    rowGap: 25,
    overflow: "hidden",
  },
  sticky: {
    backgroundColor: "#2555FF50",
    borderColor: "blue",
    borderWidth: 5,
    height: 100,
    marginBottom: 6,
    width: "100%"
  },
  topList: {
    borderColor: "orange",
    borderWidth: 5,
    height: 100,
    marginVertical: 15,
    // marginHorizontal: 25,
  }
});
