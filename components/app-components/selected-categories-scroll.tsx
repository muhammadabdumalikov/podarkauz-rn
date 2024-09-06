import React, { useState } from 'react';
import { ScrollView, Pressable } from 'react-native';
import { moderateScale, verticalScale, horizontalScale } from '@/utils/metrics'; // Assuming you have scale utilities
import { textColors } from '@/constants/Colors'; // Assuming your color palette
import { UrbanistSemiboldText } from '../StyledText';
import { LinearWrapper } from './linear-wrapper';

export default function CategoryScrollView({ subCategories }: { subCategories: string[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ flexDirection: 'row', paddingHorizontal: horizontalScale(10) }}
      style={{marginBottom: verticalScale(15)}}
    >
      {subCategories?.map(item => (
        selectedCategory === item
          ?
          <Pressable
            key={item}
            onPress={() => setSelectedCategory(item)}
          >
            <LinearWrapper
              style={{
                height: verticalScale(38),
                paddingHorizontal: horizontalScale(20),
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: textColors.purple,
                borderRadius: verticalScale(38),
                backgroundColor: selectedCategory === item ? textColors.purple : 'transparent', // Conditionally change background color
                marginHorizontal: horizontalScale(6),
              }}>
              <UrbanistSemiboldText
                style={{
                  fontSize: moderateScale(16),
                  fontWeight: '600',
                  color: selectedCategory === item ? 'white' : textColors.purple, // Conditionally change text color
                }}
              >
                {item}
              </UrbanistSemiboldText>
            </LinearWrapper>
          </Pressable>
          :
          <Pressable
            key={item}
            onPress={() => setSelectedCategory(item)}
            style={{
              height: verticalScale(38),
              paddingHorizontal: horizontalScale(20),
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: textColors.purple,
              borderRadius: verticalScale(38),
              backgroundColor: selectedCategory === item ? textColors.purple : 'transparent', // Conditionally change background color
              marginHorizontal: horizontalScale(6),
            }}>
              <UrbanistSemiboldText
                style={{
                  fontSize: moderateScale(16),
                  fontWeight: '600',
                  color: selectedCategory === item ? 'white' : textColors.purple, // Conditionally change text color
                }}
              >
                {item}
              </UrbanistSemiboldText>
            </Pressable>
      ))}
    </ScrollView>
  );
}
