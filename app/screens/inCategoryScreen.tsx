import { Dimensions, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';

import { InputBox } from '@/components/app-components/input-box';
import { textColors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef } from 'react';
import { DATA } from '@/constants/data';
import { FlashList } from '@shopify/flash-list';
import { ProductCard } from '@/components/app-components/product-card';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { MyRefType } from '../(tabs)';
import { Text } from '@/components/Themed';

export default function InCategoryScreen() {
  const params = useLocalSearchParams();
  
  const { productData, isLoading } = useSelector((state: RootState) => state.openProduct);
  const refRBSheet = useRef<MyRefType>(null);

  useEffect(() => {
    if (productData !== null) refRBSheet.current?.open();
  }, [productData])

  const handleSearch = (input: string) => {
    console.log(input);
  }

  const goBack = () => {
    router.back();
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.headerBox}>
        <Pressable onPress={goBack} style={styles.goBackBtn}>
          <AntDesign name="left" size={24} color="black" />
        </Pressable>
        <InputBox customStyles={styles.inputBox} handleSearch={handleSearch} />
      </View>

      <Text style={styles.categoryName} numberOfLines={2}>{params.categoryName}</Text>
      
      <FlashList
        data={DATA[0].data[0].data}
        numColumns={2}
        renderItem={({ item }) => <ProductCard key={item} />}
        keyExtractor={item => item}
        estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
      />
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
    // marginRight: 25,
    marginLeft: 15
  },
  inputBox: {
    marginLeft: 25
  },
  categoryName: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 25,
    marginTop: 20,
    marginBottom: 20
  },
  goBackBtn: {
    padding: 5
  }
});

