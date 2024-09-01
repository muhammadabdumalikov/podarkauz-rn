import { Dimensions, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';

import { Text } from '@/components/Themed';
import { InputBox } from '@/components/app-components/input-box';
import { textColors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { SeeAllHeader } from '@/components/app-components/see-all-header';
import { useRef, useState } from 'react';
import { DATA } from '@/constants/data';
import { FlashList } from '@shopify/flash-list';
import { ProductCard } from '@/components/app-components/product-card';
import { MyRefType } from '../(tabs)';
import RBSheet from 'react-native-raw-bottom-sheet';
import { ProductModalView } from '@/components/app-components/product-modal';
import { goBack } from '@/shared/functions';

export default function SearchScreen() {
  const [selectedProduct, setSelectedProduct] = useState<{productId: string}>();
  const [lastSearches, setLastSearches] = useState(['sports', 'phones', 'apple',]);

  const refRBSheet = useRef<MyRefType>(null);

   const onProductCardSelectHandler = (productId: string) => {
    setSelectedProduct({ productId });
    refRBSheet.current?.open();
  }

  const handleModalClose = () => {
    closeProductModal();
    refRBSheet.current?.close();
  }

  const handleSearch = (input: string) => {
    console.log(input);
  }

  const handleClearAll = () => {
    setLastSearches([]);
  }

  const handleDeleteLastSearch = (index: number) => {
    setLastSearches(prev => {
      return lastSearches.slice(0, index).concat(lastSearches.slice(index + 1));
    })
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.headerBox}>
        <Pressable onPress={goBack} style={styles.goBackBtn}>
          <AntDesign name="left" size={24} color="black" />
        </Pressable>
        <InputBox customStyles={styles.inputBox} handleSearch={handleSearch} />
      </View>
      {lastSearches.length > 0 &&
        <>
          <SeeAllHeader headerName='Last Search' btnName='Clear all' onPress={handleClearAll} />
          <View style={styles.lastSearchBox}>
            {lastSearches.map((item, index) => (
              <View style={styles.lastSearchElement} key={index}>
                <View style={styles.circleTxt}>
                  <AntDesign name="clockcircleo" size={20} color={textColors.grey2rey} />
                  <Text style={styles.lastSearchTxt} numberOfLines={1}>{item}</Text>
                </View>
                <Pressable onPress={() => handleDeleteLastSearch(index)}>
                  <AntDesign name="close" size={20} color={textColors.navyBlack} style={styles.lastSearchDeleteBtn} />
                </Pressable>
              </View>
            ))}
          </View>
        </>
      }

      <SeeAllHeader headerName='Featured Products' btnName='See all' onPress={handleClearAll} />

      {/* <View style={{ flex: 1 }}> */}
      <FlashList
        data={DATA[0].data[0].data}
        contentContainerStyle={{ backgroundColor: textColors.grey2 }}
        numColumns={2}
        renderItem={({ item }) => <ProductCard key={item} onSelectHandle={onProductCardSelectHandler} />}
        keyExtractor={item => item}
        estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
      />
      {/* </View> */}

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
    flex: 1,
    backgroundColor: textColors.pureWhite
  },
  headerBox: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 25,
    marginLeft: 15
  },
  inputBox: {
    marginLeft: 25
  },
  lastSearchBox: {
    paddingHorizontal: 25,
  },
  lastSearchElement: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleTxt: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  lastSearchTxt: {
    fontSize: 14,
    marginLeft: 10,
    color: textColors.navyBlack
  },
  lastSearchDeleteBtn: {
    padding: 5,
  },
  goBackBtn: {
    padding: 5
  }
});

