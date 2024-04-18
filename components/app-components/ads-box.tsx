import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

export const AdsBox = ({ customStyles }: {customStyles?: object}) => {
  return (
    <PagerView style={[styles.pagerView, customStyles]} initialPage={0}>
      <View style={styles.box} key="1">
        <Text>First page</Text>
      </View>
      <View style={styles.box} key="2">
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    height: 150,
    backgroundColor: 'red',
    borderRadius: 10,
    marginVertical: 15,
    marginHorizontal: 25
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});