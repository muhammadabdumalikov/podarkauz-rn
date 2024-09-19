import {
  ActivityIndicator,
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import { Text } from '@/components/Themed';
import { SearchInputBox } from '@/components/app-components/input-box';
import { textColors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { SeeAllHeader } from '@/components/app-components/see-all-header';
import { useRef, useState } from 'react';
import { PRODUCT_DATA } from '@/constants/data';
import { FlashList } from '@shopify/flash-list';
import { ProductCard } from '@/components/app-components/product-card';
import RBSheet from 'react-native-raw-bottom-sheet';
import { goBack } from '@/shared/functions';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import CategoryScrollView from '@/components/app-components/selected-categories-scroll';
import {
  UrbanistBoldText,
  UrbanistMediumText,
  UrbanistSemiboldText,
} from '@/components/StyledText';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { LinearWrapper } from '@/components/app-components/linear-wrapper';
import RatingScrollFilter from '@/components/app-components/rating-scroll-filter';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen');

const subCategories = ['Все', 'Женщинам', 'Мужчинам', 'Детям', 'Женщинамm'];
const ratings = ['Все', 5, 4, 3, 2, 1];

export interface MyRefType {
  open: () => void;
  close: () => void;
}

export default function SearchScreen() {
  const refRBSheet = useRef<MyRefType>(null);
  const [priceRange, setPriceRange] = useState([100000, 1200000]);
  const [rating, setRating] = useState('Все');
  const [lastSearches, setLastSearches] = useState([
    'sports',
    'phones',
    'apple',
  ]);
  const [screen, setScreen] = useState('');
  const [isLoading, setLoading] = useState(false);

  const priceDistribution = [
    10, 50, 80, 100, 60, 30, 90, 70, 110, 60, 90, 20, 30, 70, 50, 100, 90, 110,
  ];

  const openBottomSheet = () => {
    refRBSheet.current?.open();
  };

  const handleSearch = (input: string) => {
    setLoading(true);
    setScreen(input);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleClearAll = () => {
    setLastSearches([]);
  };

  const handleDeleteLastSearch = (index: number) => {
    setLastSearches(prev => {
      return lastSearches.slice(0, index).concat(lastSearches.slice(index + 1));
    });
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        size={'large'}
        color={'red'}
      />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerBox}>
          <Pressable onPress={goBack} style={styles.goBackBtn}>
            <AntDesign name='left' size={24} color='black' />
          </Pressable>
          <SearchInputBox
            style={styles.inputBox}
            handleSearch={handleSearch}
            openBottomSheet={openBottomSheet}
            placeholder={screen}
          />
        </View>

        <RBSheet
          ref={refRBSheet}
          height={verticalScale(740)}
          openDuration={300}
          draggable
          dragOnContent
          customStyles={{
            container: {
              borderTopLeftRadius: moderateScale(40),
              borderTopRightRadius: moderateScale(40),
            },
          }}
        >
          <ScrollView
            contentContainerStyle={styles.sheetContent}
            nestedScrollEnabled
          >
            <UrbanistBoldText style={styles.title}>
              Сортировка и фильтр
            </UrbanistBoldText>

            {/* Categories */}
            <UrbanistSemiboldText style={styles.sectionTitle}>
              Категории
            </UrbanistSemiboldText>
            <CategoryScrollView
              subCategories={subCategories}
              nestedScrollEnabled
            />

            {/* Price Slider */}
            <UrbanistSemiboldText style={styles.sectionTitle}>
              Цена, сум
            </UrbanistSemiboldText>

            {/* Custom bar chart below the slider */}
            <View style={styles.chartContainer}>
              {priceDistribution.map((height, index) => (
                <View
                  key={index}
                  style={{
                    height: `${(verticalScale(height) / (verticalScale(80) + verticalScale(20))) * 100}%`,
                    width: horizontalScale(4),
                    backgroundColor: textColors.grey5,
                    marginHorizontal: horizontalScale(1),
                    borderTopRightRadius: horizontalScale(4),
                    borderTopLeftRadius: horizontalScale(4),
                  }}
                />
              ))}
            </View>

            <MultiSlider
              values={priceRange}
              min={100000}
              max={1200000}
              step={10000}
              onValuesChange={setPriceRange}
              containerStyle={{ alignItems: 'center' }}
              sliderLength={width - horizontalScale(60)}
              selectedStyle={{ backgroundColor: textColors.purple }} // Track between thumbs
              unselectedStyle={{ backgroundColor: textColors.grey3 }} // Track outside thumbs
              trackStyle={{ height: 4 }}
              customMarker={() => (
                <View style={styles.markerOutlineBox}>
                  <View style={styles.markerInlineBox}></View>
                </View>
              )}
            />
            <UrbanistSemiboldText style={styles.sliderLabel}>
              {`${priceRange[0].toLocaleString().replace('/,/g', ' ')} - ${priceRange[1].toLocaleString().replace('/,/g', ' ')}`}
            </UrbanistSemiboldText>

            {/* Sort by */}
            <UrbanistBoldText style={styles.sectionTitle}>
              Сортировать по
            </UrbanistBoldText>
            <CategoryScrollView
              subCategories={subCategories}
              nestedScrollEnabled
            />

            {/* Rating */}
            <UrbanistBoldText style={styles.sectionTitle}>
              Рейтинг
            </UrbanistBoldText>
            <RatingScrollFilter ratings={ratings} nestedScrollEnabled />

            {/* Buttons */}
            <View style={styles.buttonsContainer}>
              <Pressable style={styles.resetButton}>
                <Text style={styles.resetText}>Сбросить</Text>
              </Pressable>
              <LinearWrapper style={styles.applyButton}>
                <Pressable>
                  <Text style={styles.applyText}>Применить</Text>
                </Pressable>
              </LinearWrapper>
            </View>
          </ScrollView>
        </RBSheet>

        {screen.length === 0 ? (
          <>
            <SeeAllHeader
              headerName='Last Search'
              btnName='Clear all'
              onPress={handleClearAll}
            />
            <View style={styles.lastSearchBox}>
              {lastSearches.map((item, index) => (
                <Pressable
                  style={styles.lastSearchElement}
                  key={index}
                  onPress={() => handleSearch(item)}
                >
                  <View style={styles.circleTxt}>
                    <AntDesign
                      name='clockcircleo'
                      size={20}
                      color={textColors.darkGrey}
                    />
                    <UrbanistMediumText
                      style={styles.lastSearchTxt}
                      numberOfLines={1}
                    >
                      {item}
                    </UrbanistMediumText>
                  </View>
                  <Pressable
                    style={styles.removeSearchBox}
                    onPress={() => handleDeleteLastSearch(index)}
                  >
                    <AntDesign
                      name='close'
                      size={14}
                      color={textColors.darkGrey}
                    />
                  </Pressable>
                </Pressable>
              ))}
            </View>
          </>
        ) : (
          <>
            <SeeAllHeader
              headerName={`"${screen}"`}
              btnName='Очистить все'
              onPress={handleClearAll}
            />

            {/* <View style={{ flex: 1 }}> */}
            <FlashList
              data={PRODUCT_DATA}
              contentContainerStyle={{
                backgroundColor: textColors.pureWhite,
                paddingHorizontal: horizontalScale(8),
                paddingBottom: verticalScale(80),
              }}
              numColumns={2}
              renderItem={({ item }) => (
                <ProductCard key={item.id} product={item} />
              )}
              keyExtractor={item => item.id}
              estimatedItemSize={10}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: textColors.pureWhite,
  },
  headerBox: {
    height: verticalScale(60),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(16),
  },
  inputBox: {
    width: horizontalScale(360),
    marginBottom: 0,
    marginLeft: 0,
  },
  lastSearchBox: {
    paddingHorizontal: horizontalScale(25),
  },
  lastSearchElement: {
    flexDirection: 'row',
    marginVertical: verticalScale(5),
    height: verticalScale(40),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circleTxt: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastSearchTxt: {
    fontSize: moderateScale(18),
    marginLeft: horizontalScale(10),
    fontWeight: '500',
    color: textColors.darkGrey,
  },
  goBackBtn: {
    paddingRight: horizontalScale(10),
    paddingVertical: verticalScale(5),
  },
  removeSearchBox: {
    width: verticalScale(24),
    height: verticalScale(24),
    borderRadius: verticalScale(8),
    borderWidth: 1,
    borderColor: textColors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(23),
    fontWeight: '700',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(48),
    alignSelf: 'center',
    letterSpacing: 0.5,
  },
  sheetContent: {
    paddingBottom: verticalScale(80),
  },
  sectionTitle: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: verticalScale(24),
    marginHorizontal: horizontalScale(16),
  },
  chartContainer: {
    flexDirection: 'row',
    height: verticalScale(60),
    marginHorizontal: horizontalScale(16),
    alignItems: 'flex-end',
  },
  sliderLabel: {
    fontSize: moderateScale(14),
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: verticalScale(24),
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(16),
    justifyContent: 'space-between',
    marginTop: 20,
  },
  resetButton: {
    flex: 1,
    height: horizontalScale(58),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 30,
    marginRight: 10,
  },
  resetText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  applyButton: {
    flex: 1,
    height: horizontalScale(58),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  applyText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  markerOutlineBox: {
    height: verticalScale(24),
    width: verticalScale(24),
    borderRadius: verticalScale(12),
    backgroundColor: textColors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerInlineBox: {
    height: verticalScale(14),
    width: verticalScale(14),
    borderRadius: verticalScale(7),
    backgroundColor: textColors.pureWhite,
  },
});
