import { FlatList, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import EmptySvg from '@/assets/images/empty';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { UrbanistBoldText, UrbanistMediumText } from '@/components/StyledText';
import { textColors } from '@/constants/Colors';
import { ProductCardFullScreenForCurrent } from '@/components/app-components/product-card-full-screen';

const data = ['1', '2', '3', '4', '5', '6'];

export default function TabTwoScreen() {
  return data.length > 0 ?
    <View style={{ flex: 1 }}>
       <FlatList
        data={data}
        style={{backgroundColor: textColors.grey1}}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => <ProductCardFullScreenForCurrent key={item} />}
        keyExtractor={item => item}
        // estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
      />
    </View>
    :
     <View style={styles.container}>
      <EmptySvg width={horizontalScale(250)} height={verticalScale(244)} />
      <UrbanistBoldText style={styles.emptyTxt}>У вас еще нет заказа</UrbanistBoldText>
      <UrbanistMediumText style={styles.emptySmallTxt}>В данный момент у вас нет текущих заказов</UrbanistMediumText>
    </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
    backgroundColor: textColors.grey1,
  },
  emptyTxt: {
    marginTop: verticalScale(40),
    marginBottom: verticalScale(12),
    fontSize: moderateScale(24),
    fontWeight: '700'
  },
  emptySmallTxt: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    color: textColors.grey3
  }
});
