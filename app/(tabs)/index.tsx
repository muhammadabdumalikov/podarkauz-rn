import { useEffect, useRef } from 'react';
import { Animated, FlatList, StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { FlashList } from "@shopify/flash-list";

import { View, ScrollView } from '@/components/Themed';
import { InputBox } from '@/components/app-components/input-box';
import { AdsBox } from '@/components/app-components/ads-box';
import { SeeAllHeader } from '@/components/app-components/see-all-header';
import { textColors } from '@/constants/Colors';
import { ProductCard } from '@/components/app-components/product-card';
import { RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import { openProduct } from '@/store/reducer';
import CustomFlatList from '@/components/CustomFlatlist/customFlatlist';

const DATA = [
  {
    id: 1,
    title: "First Item",
  },
  {
    id: 2,
    title: "Second Item",
  },
  {
    id: 3,
    title: "third Item",
  },
  {
    id: 4,
    title: "fourth Item",
  },
  {
    id: 5,
    title: "fifth Item",
  },
  {
    id: 6,
    title: "sixth Item",
  },
  {
    id: 7,
    title: "seventh Item",
  },
  {
    id: 8,
    title: "eight Item",
  },
];

interface MyRefType {
  open: () => void;
  close: () => void;
}

export default function HomeScreen() {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
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

  return (
    <SafeAreaView style={{ flex: 1 }} >
      {/* <ScrollView
        contentContainerStyle={styles.container}
        stickyHeaderIndices={[4]}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
      >
        <InputBox handleSearch={(input: string) => {
          console.log(input);
        }} />

        <AdsBox />

        <SeeAllHeader headerName='Categories' link='/profile' />

        <FlatList
          style={styles.categoryList}
          contentContainerStyle={styles.categoryListContent}
          data={DATA}
          renderItem={({ item }) => <CategoryItem key={item.id} title={item.title} />}
          showsHorizontalScrollIndicator={false}
          horizontal
        />

        <SeeAllHeader headerName='Featured products' link='/profile' />

        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({ item }) => <ProductCard key={item.id} onSelectHandle={onProductCardSelectHandler} />}
          keyExtractor={item => item.title}
        />

      </ScrollView> */}
      <CustomFlatList
        numColumns={2}
        data={DATA}
        style={styles.list}
        renderItem={({ item }) => <ProductCard key={item.id} onSelectHandle={onProductCardSelectHandler} />}
        contentContainerStyle={{ paddingHorizontal: 25, }}
        HeaderComponent={
          <>
            <InputBox handleSearch={(input: string) => { }} />
            <AdsBox />
            <SeeAllHeader headerName='Categories' link='/profile' />
            <FlatList
              style={styles.categoryList}
              contentContainerStyle={styles.categoryListContent}
              data={DATA}
              renderItem={({ item }) => <CategoryItem key={item.id} title={item.title} />}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
          </>
        }
        StickyElementComponent={<SeeAllHeader headerName='Featured products' link='/profile' style={{ marginHorizontal: 25 }} />}
        TopListElementComponent={<View style={styles.topList} />}
      />
      <RBSheet
        ref={refRBSheet}
        // useNativeDriver={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
      </RBSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 25,
  },
  adsBox: {
    height: 150,
    backgroundColor: 'red',
    width: '100%',
    borderRadius: 10,
    marginTop: 30
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
    backgroundColor: 'red',
    alignItems: 'center',
    height: 80,
    width: 70,
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
