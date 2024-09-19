import BellSvg from '@/assets/icons/bell';
import { WishlistHeartSvg } from '@/assets/icons/favorite-heart';
import {
  UrbanistBoldText,
  UrbanistMediumText,
  UrbanistSemiboldText,
} from '@/components/StyledText';
import { textColors } from '@/constants/Colors';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { FlashList } from '@shopify/flash-list';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  SafeAreaView,
} from 'react-native';

const categories = [
  'Дом',
  'Бизнес',
  'Романтика',
  'Семья и дети',
  'Еда и напитки',
  'Практичные вещи',
  'Юмор и сувениры',
  'Игры и игрушки',
  'Коллекционирование',
  'Красота и уход',
  'Украшения',
  'Мода и стиль',
  'Дача',
  'Другие разделы',
];

const itemsByCategory = {
  Бизнес: [
    { name: 'Подарки шефу' },
    { name: 'Бизнес-аксессуары' },
    { name: 'Корпоративные сувениры' },
    { name: 'Настольные наборы' },
    { name: 'Письменные наборы' },
    { name: 'Подарочные ручки' },
  ],
  Дом: [
    { name: 'Ежедневники' },
    { name: 'Книги-сейфы' },
    { name: 'Карманные визитницы' },
    { name: 'Настольные визитницы' },
    { name: 'Настольные часы' },
  ],
  // Add more categories and items here...
};

const CatalogScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Бизнес'); // Default to 'Бизнес'

  const renderItem = ({ item }: {item: any}) => (
    <View style={styles.item}>
      <Image
        source={require('@/assets/images/lego.png')}
        style={styles.itemImage}
      />
      <UrbanistMediumText style={styles.itemText}>
        {item.name}
      </UrbanistMediumText>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <UrbanistBoldText style={styles.headerText}>Каталог</UrbanistBoldText>
        <View style={{flexDirection: 'row'}}>
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
      </View>

      <View style={styles.content}>
        {/* Sidebar */}
        <ScrollView style={styles.sidebar}>
          {categories.map((category, index) => (
            <Pressable
              key={index}
              style={[
                styles.categoryItem,
                selectedCategory === category && styles.selectedCategoryItem,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <View
                style={[
                  styles.categoryTextBox,
                  selectedCategory === category &&
                    styles.selectedCategoryTextBox,
                ]}
              >
                {selectedCategory === category ? (
                  <UrbanistSemiboldText
                    numberOfLines={2}
                    style={[styles.categoryText, styles.selectedCategoryText]}
                  >
                    {category}
                  </UrbanistSemiboldText>
                ) : (
                  <UrbanistMediumText
                    numberOfLines={2}
                    style={styles.categoryText}
                  >
                    {category}
                  </UrbanistMediumText>
                )}
              </View>
            </Pressable>
          ))}
        </ScrollView>

        {/* Dynamic Content based on selected category */}
        <FlashList
          data={itemsByCategory[selectedCategory]} // Load items based on the selected category
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          estimatedItemSize={10}
          contentContainerStyle={styles.gridContent}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerText}>Главная</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerText}>Идеи</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerItem, styles.selectedFooter]}>
          <Text style={[styles.footerText, styles.selectedFooterText]}>
            Каталог
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerText}>Корзина</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerText}>Кабинет</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: verticalScale(50),
    width: '100%',
    paddingHorizontal: 5,
    marginVertical: verticalScale(12),
  },
  headerText: {
    marginLeft: horizontalScale(16),
    fontSize: moderateScale(24),
    fontWeight: '700',
  },
  searchBoxElement: {
    marginHorizontal: 3,
    padding: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    maxWidth: horizontalScale(110),
    width: horizontalScale(110),
    backgroundColor: textColors.softPurple,
    paddingTop: verticalScale(8),
    paddingLeft: verticalScale(8),
  },
  categoryItem: {
    height: verticalScale(34),
    maxHeight: verticalScale(45),
    width: horizontalScale(102),
    marginBottom: verticalScale(8),
    paddingLeft: verticalScale(8),
    borderTopLeftRadius: moderateScale(4),
    borderBottomLeftRadius: moderateScale(4),
  },
  categoryTextBox: {
    height: verticalScale(34),
    maxHeight: verticalScale(45),
    width: horizontalScale(86),
    paddingVertical: verticalScale(2),
    justifyContent: 'center',
  },
  selectedCategoryTextBox: {},
  categoryText: {
    fontSize: moderateScale(12),
    fontWeight: '500',
    color: textColors.navyBlack,
  },
  selectedCategoryItem: {
    backgroundColor: textColors.pureWhite,
  },
  selectedCategoryText: {
    fontWeight: '700',
    color: textColors.purple,
  },
  gridContent: {
    paddingHorizontal: horizontalScale(8),
    paddingBottom: verticalScale(80),
  },
  item: {
    width: horizontalScale(86),
    height: verticalScale(100),
    alignItems: 'center',
    marginVertical: verticalScale(12),
  },
  itemImage: {
    width: verticalScale(60),
    height: verticalScale(60),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: textColors.softPurple,
    borderRadius: moderateScale(15),
    overflow: 'hidden',
  },
  itemText: {
    marginTop: verticalScale(10),
    fontSize: moderateScale(12),
    fontWeight: '400',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },
  footerItem: {
    flex: 1,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
  },
  selectedFooter: {
    backgroundColor: '#6200EE',
  },
  selectedFooterText: {
    color: '#fff',
  },
});

export default CatalogScreen;
