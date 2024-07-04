import { FlatList, ImageBackground, Pressable, SafeAreaView, StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import { textColors } from '@/constants/Colors';
import { CATEGORY_DATA } from '@/constants/data';
import { InputBox } from '@/components/app-components/input-box';
import { AntDesign } from '@expo/vector-icons';
import { goBack } from '@/shared/functions';
import useCategories from '@/hooks/queries/categories';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/service/api/categort-list';

export default function CategoryListScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });
  console.log(22222, data);
  
  if (isLoading) {
    return <ActivityIndicator />;
  }
  
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
        data={data}
        contentContainerStyle={{ backgroundColor: textColors.pureWhite }}
        renderItem={({ item }) => <Pressable style={styles.categoryBox} key={item.id}>
          <ImageBackground style={styles.categoryImage} source={{ uri: 'https://picsum.photos/200/300?grayscale' }} />

          <View style={styles.categoryTxtBox}>
            <Text style={styles.categoryTxt}>{item.name_uz}</Text>
          </View>
        </Pressable>}
        keyExtractor={item => item.id}
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
    marginLeft: 15,
    marginBottom: 10
  },
  inputBox: {
    marginLeft: 25
  },
  categoryBox: {
    height: 120,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  categoryImage: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryTxtBox: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoryTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: textColors.pureWhite
  }
});
