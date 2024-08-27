import { ImageBackground, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { textColors } from '@/constants/Colors';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.productImage} source={require('../../assets/images/Rectangle 5.png')} />
      
      <View style={styles.detailsBox}>
        <View style={styles.commentsBox}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 350,
  },
  detailsBox: {
    width: '100%',
    // height: 100,
    flex: 1,
    marginTop: -20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 20,
  },
  commentsBox: {
    marginTop: 112,
    width: '100%',
    height: 70,
    backgroundColor: textColors.offGrey,
    borderRadius: 8,
    alignSelf: 'center'
  }
});
