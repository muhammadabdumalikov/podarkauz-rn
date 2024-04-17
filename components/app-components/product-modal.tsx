import { textColors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { ScrollView } from '../Themed';
import { AntDesign } from '@expo/vector-icons';
import { MyRefType } from '@/app/(tabs)';

export const ProductModalView = ({ ref }) => {
  console.log(ref);
  
  return <View style={styles.box}>
    <View style={styles.headerBox}>
      <Text style={styles.headerTxt}>Detail Product</Text>
      <Pressable style={styles.closeBtn} onPress={()=> ref.current?.close()}>
        <AntDesign name="close" size={24} color={textColors.navyBlack} />
      </Pressable>
    </View>

    <ScrollView style={styles.box} contentContainerStyle={styles.boxContainer}>
      <View style={styles.imageBox}></View>
    </ScrollView>
  </View>
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBox: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  headerTxt: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16
  },
  closeBtn: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    height: 35,
    width: 35,
    // borderRadius: '50%',
    // backgroundColor: '#00000020',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageBox: {
    width: 300,
    height: 325,
    backgroundColor: 'red',
    borderRadius: 10
  }
});