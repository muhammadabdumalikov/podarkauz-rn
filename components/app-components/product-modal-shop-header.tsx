import { textColors } from '@/constants/Colors';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const ProductModalShopHeader = () => {
  return (
    <View style={styles.box}>
      <View style={styles.shopImgTxtBox}>
        <View style={styles.shopImage}>
        </View>

        <View style={styles.shopInfoBox}>
          <Text style={styles.shopNameTxt} numberOfLines={1}>Shop Larsson Electronic</Text>
          <View style={styles.shopStatusBox}>
            <Text style={styles.shopStatusTxt}>Official Store</Text>
            <MaterialCommunityIcons name="check-decagram" size={14} color={textColors.blueOcean} />
          </View>
        </View>
      </View>

      <AntDesign name="right" size={20} color={textColors.grey3} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  shopImgTxtBox: {
    flex: 1,
    flexDirection: 'row',
  },
  shopImage: {
    height: 50,
    width: 50,
    backgroundColor: textColors.grey1y,
    borderRadius: 100,
    marginRight: 20
  },
  shopInfoBox: {
    display: 'flex',
    width: 165,
    height: '100%',
    justifyContent: 'space-evenly',
    marginRight: 20
  },
  shopStatusBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  shopNameTxt: {
    fontSize: 14,
    fontWeight: '500'
  },
  shopStatusTxt: {
    fontSize: 12,
    marginRight: 5
  },
});