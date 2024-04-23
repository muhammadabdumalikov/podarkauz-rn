import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';

import { textColors } from '@/constants/Colors';
import { CATEGORY_DATA } from '@/constants/data';
import { InputBox } from '@/components/app-components/input-box';
import { AntDesign } from '@expo/vector-icons';
import { goBack } from '@/shared/functions';

export default function CategoryListScreen() {
  const handleSearch = (input: string) => {
    console.log(input);
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.headerBox}>
        <Pressable onPress={goBack}>
          <AntDesign name="left" size={24} color="black" />
        </Pressable>
        <InputBox customStyles={styles.inputBox} handleSearch={handleSearch} />
      </View>
       <FlatList
          data={CATEGORY_DATA}
          contentContainerStyle={{ backgroundColor: textColors.offGrey }}
          renderItem={({ item }) => <Pressable style={styles.categoryBox} key={item.title}></Pressable>}
          keyExtractor={item => item.title}
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
    marginRight: 25,
    marginLeft: 15
  },
  inputBox: {
    marginLeft: 25
  },
  categoryBox: {
    height: 100,
    backgroundColor: 'red',
    margin: 5
  }
});
