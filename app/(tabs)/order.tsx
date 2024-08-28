import { ImageBackground, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { textColors } from '@/constants/Colors';
import Carousel from '@/components/app-components/open-peeps-carousel';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.carouselStyle}>
        <Carousel/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  carouselStyle: {
    height: 350
  }
});
