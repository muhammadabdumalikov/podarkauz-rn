import { useEffect, useRef } from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView, Dimensions, Pressable } from 'react-native';
import { FlashList } from "@shopify/flash-list";

import { View, SectionList } from '@/components/Themed';
import { AdsBox } from '@/components/app-components/ads-box';
import { SeeAllHeader } from '@/components/app-components/see-all-header';
import { textColors } from '@/constants/Colors';
import { ProductCard } from '@/components/app-components/product-card';
import { RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import { openProduct } from '@/store/reducer';
import { ProductModalView } from '@/components/app-components/product-modal';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { DATA } from '@/constants/data';

const CATEGORY_DATA = [
  {
    title: 'Main dishessss',
  },
  {
    title: 'Main dishes',
  },
  {
    title: 'Main dishes',
  },
  {
    title: 'Main dishes',
  },
  {
    title: 'Main dishes',
  },
  {
    title: 'Main dishes',
  },
  {
    title: 'Main dishes',
  },
  {
    title: 'Main dishes',
  },
  {
    title: 'Main dishes',
  },
  {
    title: 'Main dishes',
  },
  {
    title: 'Main dishes',
  },
  {
    title: 'Main dishes',
  },
];

export interface MyRefType {
  open: () => void;
  close: () => void;
}

export default function HomeScreen() {
  const { productData, isLoading } = useSelector((state: RootState) => state.openProduct);
  const refRBSheet = useRef<MyRefType>(null);

  const dispatch = useDispatch();

  const CategoryItem = ({ title }) => {
    return <View style={styles.categoryItem}>
      <View style={styles.categoryItemImg}></View>
      <Text style={styles.categoryItemTxt}>{title}</Text>
    </View>
  }

  const onProductCardSelectHandler = (productId: string) => {
    dispatch(openProduct({ productId }));
  }

  useEffect(() => {
    if (productData !== null) refRBSheet.current?.open();
  }, [productData])

  const handleModalClose = () => {
    refRBSheet.current?.close();
  }

  const handleOnPress = () => {
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
          data={section.data[0].data}
          contentContainerStyle={{ backgroundColor: textColors.offGrey }}
          numColumns={2}
          renderItem={({ item }) => <ProductCard key={item as string} onSelectHandle={onProductCardSelectHandler} />}
          keyExtractor={item => item as string}
          estimatedItemSize={10}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: textColors.pureWhite }} >
      <View style={styles.searchHeader}>
        <Link href="/screens/searchScreen" asChild >
          <Pressable style={styles.searchBoxElement}>
            <AntDesign name="search1" size={28} color={textColors.navyBlack} />
          </Pressable>
        </Link>
        <Link href="/screens/notificationScreen" asChild>
          <Pressable style={styles.searchBoxElement}>
            <Ionicons name="notifications-outline" size={28} color={textColors.navyBlack} />
          </Pressable>
        </Link>
      </View>
      <SectionList
        // contentContainerStyle={styles.container}
        ListHeaderComponent={
          <>
            <AdsBox />
            <SeeAllHeader headerName='Categories' btnName='See all' link='/profile' onPress={handleOnPress} />
            <FlatList
              style={styles.categoryList}
              contentContainerStyle={styles.categoryListContent}
              data={CATEGORY_DATA}
              renderItem={({ item }) => <CategoryItem key={item.title} title={item.title} />}
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
            onPress={handleOnPress} />
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
    maxHeight: 80,
    marginVertical: 15,
    marginHorizontal: -25,
    paddingLeft: 25
  },
  categoryListContent: {
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    height: 80,
    width: 70,
    marginHorizontal: 2
  },
  categoryItemImg: {
    height: 48,
    width: 48,
    borderRadius: 10,
    backgroundColor: 'yellow',
    marginBottom: 5
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
