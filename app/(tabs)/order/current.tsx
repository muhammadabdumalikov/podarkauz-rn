import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import EmptySvg from '@/assets/images/empty';
import { horizontalScale, verticalScale } from '@/utils/metrics';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <EmptySvg width={horizontalScale(250)} height={verticalScale(244)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
