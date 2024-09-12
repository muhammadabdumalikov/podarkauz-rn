import React, { useState } from 'react';
import { ScrollView, Pressable } from 'react-native';
import { moderateScale, verticalScale, horizontalScale } from '@/utils/metrics'; // Assuming you have scale utilities
import { textColors } from '@/constants/Colors'; // Assuming your color palette
import { UrbanistSemiboldText } from '../StyledText';
import { LinearWrapper } from './linear-wrapper';
import { AntDesign } from '@expo/vector-icons';
import { ScrollViewProps } from '../Themed';

export default function RatingScrollFilter(props: ScrollViewProps & { ratings: (string | number)[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | number>(5);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(5),
      }}
      style={{ marginBottom: verticalScale(15) }}
    >
      {props.ratings?.map(item =>
        selectedCategory === item ? (
          <Pressable key={item} onPress={() => setSelectedCategory(item)}>
            <LinearWrapper
              style={{
                height: verticalScale(38),
                paddingHorizontal: horizontalScale(20),
                borderWidth: 2,
                borderColor: textColors.purple,
                borderRadius: verticalScale(38),
                backgroundColor: 'transparent',
                marginHorizontal: horizontalScale(6),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AntDesign
                name='star'
                size={moderateScale(16)}
                color={textColors.pureWhite}
              />
              <UrbanistSemiboldText
                style={{
                  marginLeft: horizontalScale(8),
                  fontSize: moderateScale(16),
                  fontWeight: '600',
                  color: 'white',
                }}
              >
                {item}
              </UrbanistSemiboldText>
            </LinearWrapper>
          </Pressable>
        ) : (
          <Pressable
            key={item}
            onPress={() => setSelectedCategory(item)}
            style={{
              height: verticalScale(38),
              paddingHorizontal: horizontalScale(20),
              borderWidth: 2,
              borderColor: textColors.purple,
              borderRadius: verticalScale(38),
              backgroundColor: 'transparent',
              marginHorizontal: horizontalScale(6),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AntDesign
              name='star'
              size={moderateScale(16)}
              color={textColors.purple}
            />
            <UrbanistSemiboldText
              style={{
                marginLeft: horizontalScale(8),
                fontSize: moderateScale(16),
                fontWeight: '600',
                color: textColors.purple,
              }}
            >
              {item}
            </UrbanistSemiboldText>
          </Pressable>
        )
      )}
    </ScrollView>
  );
}
