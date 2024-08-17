import React from 'react';
import { Pressable, ImageBackground, View, Text, StyleSheet } from 'react-native';
import SkeletonLoader from './skeleton-loadder';
import { textColors } from '@/constants/Colors';
import { Link } from 'expo-router';

const CategoriesListItem = ({ item, isLoading, itemIndex }: { item: any, isLoading: boolean, itemIndex: number }) => {
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
    <Link href={`/screens/subcategoriesListScreen`} asChild>
      <Pressable style={styles.categoryBox} key={item.id}>
        <View style={styles.categoryImageBox}>
          <ImageBackground 
            style={styles.categoryImage} 
            source={{ uri: item.image_original }} 
            // resizeMode='center'
          />
        </View>
        {/* <View style={styles.categoryTxtBox}> */}
          <Text style={styles.categoryTxt}>{item.name_uz}</Text>
        {/* </View> */}
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  categoryBox: {
    height: 140,
    width: 170,
    // marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#f3f3f3'
  },
  categoryImageBox: {
    width: 90,
    height: 90,
    marginVertical: 10,
    alignSelf: 'center',
    overflow: 'hidden'
  },
  categoryImage: {
    flex: 1,
  },
  categoryTxtBox: {
    width: '75%',
    position: 'absolute',
    left: 12,
    right: 0,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  categoryTxt: {
    fontSize: 14,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: textColors.navyBlack,
  }
});

export default CategoriesListItem;