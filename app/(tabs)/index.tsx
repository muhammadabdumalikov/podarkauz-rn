import { useEffect, useRef } from 'react';
import { Animated, FlatList, StyleSheet, Text, SafeAreaView, Dimensions } from 'react-native';
import { FlashList } from "@shopify/flash-list";

import { View, SectionList } from '@/components/Themed';
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
import { ProductModalView } from '@/components/app-components/product-modal';

const DATA = [
  {
    title: 'Main dishes',
    data: [{
      name: 'x',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps', '1', '2', '3', '4']
    }],
  },
];

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
      <View style={{flex: 1}}>
        <FlashList
          data={section.data[0].data}
          contentContainerStyle={{backgroundColor: textColors.offGrey}}
          numColumns={2}
          renderItem={({ item }) => <ProductCard key={item as string} onSelectHandle={onProductCardSelectHandler} />}
          keyExtractor={item => item as string}
          estimatedItemSize={10}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <SectionList
        ListHeaderComponent={
          <>
            <InputBox handleSearch={(input: string) => { }} />
            <AdsBox />
            <SeeAllHeader headerName='Categories' link='/profile' />
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
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { title } }) => (
          <SeeAllHeader headerName='Featured products' link='/profile' style={{backgroundColor: textColors.offGrey}} />
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
