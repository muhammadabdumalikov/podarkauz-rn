import { FlatList, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';

import { textColors } from '@/constants/Colors';
import { DATA_WITH_ID_10 } from '@/constants/data';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/service/api/categort-list';
import SubcategoriesListItem from '@/components/app-components/subcategories-list-item';
import { AntDesign } from '@expo/vector-icons';
import { InputBox } from '@/components/app-components/input-box';
import { goBack } from '@/shared/functions';

export default function ListScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

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
        data={isLoading ? DATA_WITH_ID_10 : data.data}
        contentContainerStyle={{ backgroundColor: textColors.pureWhite, paddingHorizontal: 20 }}
        renderItem={({ item, index }) => (
          <SubcategoriesListItem 
            item={item} 
            isLoading={isLoading} 
            key={isLoading ? `loading-${index}` : item.id}
            itemIndex={index}
          />
        )}
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
    height: 150,
    width: 165,
    // marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    overflow: 'hidden'
  },
   row: {
    flex: 1,
    justifyContent: 'space-between',
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
