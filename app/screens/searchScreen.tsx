import { Pressable, SafeAreaView, StyleSheet, View } from 'react-native';

import { Text } from '@/components/Themed';
import { InputBox } from '@/components/app-components/input-box';
import { textColors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { SeeAllHeader } from '@/components/app-components/see-all-header';
import { router } from 'expo-router';
import { useState } from 'react';

export default function SearchScreen() {
  const [lastSearches, setLastSearches] = useState(['sports', 'phones', 'apple',]);

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

  const goBack = () => {
    router.back();
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.headerBox}>
        <Pressable onPress={goBack}>
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
                  <AntDesign name="clockcircleo" size={20} color={textColors.halfGrey} />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
  }
});
