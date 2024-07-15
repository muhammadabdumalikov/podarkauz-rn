import React from 'react';
import { Pressable, ImageBackground, View, Text, StyleSheet } from 'react-native';
import SkeletonLoader from './skeleton-loadder';
import { textColors } from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    <Pressable style={styles.box} key={item.id}>
      <View style={styles.shopImgTxtBox}>
        <ImageBackground
          style={styles.shopImage}
          source={{ uri: `https://picsum.photos/id/${itemIndex}/64/64` }}
        />

        <View style={styles.shopInfoBox}>
          <Text style={styles.shopNameTxt} numberOfLines={1}>{ item.name_uz }</Text>
        </View>
      </View>
    </Pressable>
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
  shopImage: {
    height: 64,
    width: 64,
    backgroundColor: textColors.softGrey,
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden'
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