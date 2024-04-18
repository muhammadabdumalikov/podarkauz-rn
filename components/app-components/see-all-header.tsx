import { textColors } from '@/constants/Colors';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export const SeeAllHeader = (
  { headerName, link, style, onPress, btnName }
    :
  { headerName: string, link?: string, style?: object, onPress: () => void, btnName: string }) => {
  return <View style={[styles.box, style]}>
    <Text style={styles.headerName}>{headerName}</Text>
    {link
      ?
      (<Link href={link as `${string}:${string}`} asChild>
        <Pressable onPress={onPress}>
          <Text style={styles.seeAll}>{btnName}</Text>
        </Pressable>
      </Link>)
      :
      (<Pressable onPress={onPress}>
        <Text style={styles.seeAll}>{btnName}</Text>
      </Pressable>)
    }
  </View>
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    maxHeight: 50,
    height: 50,
    backgroundColor: textColors.pureWhite,
    paddingHorizontal: 25
  },
  headerName: {
    fontSize: 16,
    fontWeight: '500',
    color: textColors.mainBlack,
  },
  seeAll: {
    fontSize: 12,
    fontWeight: '600',
    color: textColors.blueOcean,
  }
});