import React from 'react';
import { Pressable, ImageBackground, View, Text, StyleSheet } from 'react-native';
import SkeletonLoader from './skeleton-loadder';
import { textColors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const SubcategoriesListItem = ({ item, isLoading, itemIndex }: { item: any, isLoading: boolean, itemIndex: number }) => {  
  if (isLoading) {
    return (
      <View style={styles.categoryBox}>
        <SkeletonLoader width={200} height={300} />
        <View style={styles.categoryTxtBox}>
          <SkeletonLoader width={100} height={20} />
        </View>
      </View>
    );
  }

  return (
    <Link href={{ pathname: "/screens/inSubcategoryScreen" }}  asChild >
      <Pressable style={styles.box} key={item.id}>
        <View style={styles.shopImgTxtBox}>
          <View style={styles.shopImageBox}>
            <ImageBackground
              resizeMode='center'
              style={styles.shopImage}
              source={{ uri: item.image_original }}
            />
          </View>

          <View style={styles.shopInfoBox}>
            <Text style={styles.shopNameTxt} numberOfLines={1}>{ item.name_uz }</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12
  },
   categoryBox: {
    height: 140,
    width: 170,
    // marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden'
  },
  categoryTxtBox: {
    width: '75%',
    position: 'absolute',
    left: 12,
    right: 0,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  shopImgTxtBox: {
    flex: 1,
    flexDirection: 'row',
  },
  shopImageBox: {
    height: 64,
    width: 64,
    backgroundColor: textColors.grey1y,
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden',
    padding: 5
  },
  shopImage: {
    flex: 1
  },
  shopInfoBox: {
    display: 'flex',
    width: 165,
    height: '100%',
    justifyContent: 'space-evenly',
    marginRight: 20
  },
  shopNameTxt: {
    fontSize: 16,
    fontWeight: '500'
  },
});

export default SubcategoriesListItem;