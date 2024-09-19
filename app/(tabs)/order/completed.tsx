import {
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';

import { Text, View } from '@/components/Themed';
import EmptySvg from '@/assets/images/empty';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { UrbanistBoldText, UrbanistMediumText, UrbanistSemiboldTextInput } from '@/components/StyledText';
import { textColors } from '@/constants/Colors';
import { ProductCardFullScreenForCompleted } from '@/components/app-components/product-card-full-screen';
import RBSheet from 'react-native-raw-bottom-sheet';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { MyRefType } from '@/app/screens/search-screen';

const data = ['1', '2', '3', '4', '5', '6'];

export default function CompletedOrders() {
  const refRBSheet = useRef<MyRefType>(null);
  const [rating, setRating] = useState(4); // Default rating of 4 stars
  const [review, setReview] = useState('Продукт хороший и доставка быстрая!');

  const handleRating = (newRating: number) => {
    setRating(newRating);
  };

  const openBottomSheet = () => {
    refRBSheet.current?.open();
  };

  const closeBottomSheet = () => {
    refRBSheet.current?.close();
  };

  return data.length > 0 ? (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        style={{ backgroundColor: textColors.grey1 }}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <ProductCardFullScreenForCompleted
            key={item}
            openBottomSheet={openBottomSheet}
          />
        )}
        keyExtractor={item => item}
        // estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
      />

      {/* Review Bottom Sheet */}
      <RBSheet
        ref={refRBSheet}
        height={verticalScale(670)}
        openDuration={250}
        customStyles={{
          container: {
            borderTopLeftRadius: moderateScale(40),
            borderTopRightRadius: moderateScale(40),
            backgroundColor: textColors.grey3,
          },
        }}
      >
        <View style={styles.sheetContent}>
          <UrbanistBoldText style={styles.headerText}>
            Оставить отзыв
          </UrbanistBoldText>

          {/* Product Information */}
          <ProductCardFullScreenForCompleted />

          {/* Rating Section */}
          <UrbanistBoldText style={styles.questionText}>
            Как ваш покупки?
          </UrbanistBoldText>
          <UrbanistMediumText style={styles.instructionText}>
            Плиз, поставьте свою оценку и оставьте отзыв
          </UrbanistMediumText>

          {/* Star Rating */}
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map(star => (
              <Pressable
                style={styles.star}
                key={star}
                onPress={() => handleRating(star)}
              >
                <AntDesign
                  name={star <= rating ? 'star' : 'staro'}
                  size={moderateScale(28)}
                  color={star <= rating ? textColors.purple : textColors.purple} // Purple for selected stars
                />
              </Pressable>
            ))}
          </View>

          {/* Review Input */}
          <UrbanistSemiboldTextInput
            style={styles.reviewInput}
            placeholder='Напишите отзыв'
            value={review}
            onChangeText={setReview}
          />

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <Pressable style={styles.cancelButton} onPress={closeBottomSheet}>
              <UrbanistBoldText style={styles.cancelButtonText}>Отменить</UrbanistBoldText>
            </Pressable>
            <Pressable style={styles.submitButton}>
              <UrbanistBoldText style={styles.submitButtonText}>Submit</UrbanistBoldText>
            </Pressable>
          </View>
        </View>
      </RBSheet>
    </View>
  ) : (
    <View style={styles.container}>
      <EmptySvg width={horizontalScale(250)} height={verticalScale(244)} />
      <UrbanistBoldText style={styles.emptyTxt}>
        У вас еще нет заказа
      </UrbanistBoldText>
      <UrbanistMediumText style={styles.emptySmallTxt}>
        В данный момент у вас нет текущих заказов
      </UrbanistMediumText>
    </View>
  );
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
    fontWeight: '700',
  },
  emptySmallTxt: {
    fontSize: moderateScale(18),
    fontWeight: '400',
    color: textColors.grey3,
  },
  sheetContent: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
    paddingTop: verticalScale(28),
    backgroundColor: '#F5F5F5',
  },
  headerText: {
    fontSize: moderateScale(23),
    fontWeight: '700',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(40),
    alignSelf: 'center',
    letterSpacing: 0.5,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDetails: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  deliveredLabel: {
    fontSize: 12,
    color: 'green',
    marginTop: 5,
  },
  questionText: {
    fontSize: moderateScale(23),
    fontWeight: '700',
    marginTop: verticalScale(40),
    marginBottom: verticalScale(16),
    alignSelf: 'center',
    letterSpacing: 0.5,
  },
  instructionText: {
    fontSize: moderateScale(16),
    color: textColors.darkGrey,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: verticalScale(24),
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: textColors.grey1,
    marginBottom: verticalScale(28),
  },
  star: {
    marginHorizontal: horizontalScale(12),
  },
  reviewInput: {
    height: verticalScale(56),
    paddingHorizontal: verticalScale(18),
    alignItems: 'center',
    backgroundColor: textColors.grey3,
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(48),
    fontWeight: '600',
    fontSize: moderateScale(14),
    letterSpacing: 0.3
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: textColors.grey1,
  },
  cancelButton: {
    backgroundColor: textColors.grey4,
    width: horizontalScale(193),
    height: verticalScale(58),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  cancelButtonText: {
    color: textColors.navyBlack,
    fontWeight: '700',
    fontSize: moderateScale(16),
    letterSpacing: 0.3,
  },
  submitButton: {
    backgroundColor: textColors.purple,
    width: horizontalScale(193),
    height: verticalScale(58),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  submitButtonText: {
    color: textColors.pureWhite,
    fontWeight: '700',
    fontSize: moderateScale(16),
    letterSpacing: 0.3,
  },
});
