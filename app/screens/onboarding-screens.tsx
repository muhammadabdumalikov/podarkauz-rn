import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  FlatList,
  Pressable,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  runOnJS,
} from 'react-native-reanimated';
import { LinearWrapper } from '@/components/app-components/linear-wrapper';
import { UrbanistBoldText } from '@/components/StyledText';
import { textColors } from '@/constants/Colors';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/metrics';
import { MMKV } from 'react-native-mmkv';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('screen');

const data = [
  {
    title: 'Добро пожаловать в Hadya',
    subtitle: 'Лучшее приложение для покупки подарков!',
    image: require('../../assets/images/lego.png'),
  },
  {
    title: 'Мы предлагаем высококачественные подарки',
    subtitle: '',
    image: require('../../assets/images/lego.png'),
  },
  {
    title: 'Ваше удовлетворение — наш приоритет',
    subtitle: '',
    image: require('../../assets/images/lego.png'),
  },
  {
    title: 'Давайте удовлетворим ваши потребности с Hadya!',
    subtitle: '',
    image: require('../../assets/images/lego.png'),
  },
];

const _dotSize = 8;

export const ONBOARDING_KEY = 'hasSeenOnboarding'; // Key to track if onboarding has been seen
const storage = new MMKV();

const OnboardingItem = ({ item, index, scrollX }) => {
  const style = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value / width,
        [index - 0.6, index, index + 0.6],
        [0, 1, 0]
      ),
    };
  });

  return (
    <View style={styles.slide}>
      <Animated.Image source={item.image} style={[styles.image, style]} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

const PaginationDot = ({ index, scrollX }) => {
  const style = useAnimatedStyle(() => {
    return {
      width: interpolate(
        scrollX.value / width,
        [index - 1, index, index + 1],
        [_dotSize, _dotSize * 3, _dotSize],
        Extrapolation.CLAMP
      ),
      opacity: interpolate(
        scrollX.value / width,
        [index - 1, index, index + 1],
        [0.2, 1, 0.2],
        Extrapolation.CLAMP
      ),
    };
  });

  return <Animated.View style={[styles.paginationDot, style]} />;
};

const Pagination = ({ data, scrollX }) => {
  return (
    <View style={styles.pagination}>
      {data.map((_, index) => (
        <PaginationDot key={index} index={index} scrollX={scrollX} />
      ))}
    </View>
  );
};

export default function OnboardingCarousel() {
  const scrollX = useSharedValue(0);
  const flatListRef = useRef(null); // Ref to control the FlatList
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter(); // Initialize the router

  // Function to update state outside the worklet
  const updateIndex = index => {
    setCurrentIndex(index);
  };

  const onScroll = useAnimatedScrollHandler(ev => {
    const index = Math.round(ev.contentOffset.x / width);
    runOnJS(updateIndex)(index); // Safely call setCurrentIndex using runOnJS
    scrollX.value = ev.contentOffset.x;
  });

  const handleNextPress = () => {
    if (currentIndex < data.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      storage.set(ONBOARDING_KEY, true);
      router.replace('(tabs)');
    }
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item, index) => `${index}`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        bounces={false}
        renderItem={({ item, index }) => {
          return <OnboardingItem item={item} index={index} scrollX={scrollX} />;
        }}
      />
      <Pagination data={data} scrollX={scrollX} />
      <Pressable
        onPress={handleNextPress} // Call handleNextPress when Next button is pressed
      >
        <LinearWrapper
          style={{
            marginHorizontal: horizontalScale(16),
            width: horizontalScale(398),
            height: verticalScale(58),
            position: 'absolute',
            bottom: verticalScale(48),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}
        >
          <UrbanistBoldText
            style={{
              fontSize: moderateScale(16),
              fontWeight: '700',
              color: textColors.pureWhite,
            }}
          >
            {currentIndex === 3 ? 'Начать' : 'Следующий'}
          </UrbanistBoldText>
        </LinearWrapper>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    marginTop: verticalScale(120),
    width,
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(16),
    marginBottom: verticalScale(194),
  },
  image: {
    width: '100%',
    height: verticalScale(420),
    resizeMode: 'contain',
  },
  textContainer: {
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
  },
  pagination: {
    position: 'absolute',
    bottom: verticalScale(146),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  paginationDot: {
    width: _dotSize,
    height: _dotSize,
    borderRadius: _dotSize / 2,
    backgroundColor: '#873afd',
    marginHorizontal: _dotSize / 2,
  },
});
