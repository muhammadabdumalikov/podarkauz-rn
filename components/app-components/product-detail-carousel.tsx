import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { images as data } from './product-card';
import Animated, {
  Extrapolation,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { textColors } from '@/constants/Colors';
import { horizontalScale } from '@/utils/metrics';
const AnimatedFlatList = Animated.FlatList;

const { width, height } = Dimensions.get('window');

const _dotSize = horizontalScale(8);

export const Item = ({ item, index, scrollX }) => {
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
    <View style={
      {
        width, height: height / 2,
        backgroundColor: textColors.softPurple
      }
    }>
      <Animated.Image
        source={item}
        style={[{ flex: 1, width: '100%', resizeMode: 'contain' }, style]}
      />
    </View>
  );
};

export const PaginationDot = ({ index, scrollX }) => {
  const style = useAnimatedStyle(() => {    
    return {
      width: interpolate(
        scrollX.value / width,
        [index - 1, index, index + 1],
        [_dotSize * 1, _dotSize * 4, _dotSize * 1],
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
  return (
    <Animated.View
      style={[
        {
          width: _dotSize,
          height: _dotSize,
          borderRadius: _dotSize,
          backgroundColor: '#873afd',
          marginHorizontal: _dotSize / 2,
        },
        style,
      ]}
    />
  );
};

export const Pagination = ({ data, scrollX }) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 16,
        alignSelf: 'center',
        flexDirection: 'row',
      }}>
      {data.map((_, index) => (
        <PaginationDot index={index} scrollX={scrollX} key={index}/>
      ))}
    </View>
  );
};

export default function ProductDetailCarousel({ scrollY }) {  
  const scrollX = useSharedValue(0);  

  const onHorizontalScroll = useAnimatedScrollHandler((event) => {    
    scrollX.value = event.contentOffset.x;
  });
  
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      [0, 100],  // Adjust these values based on how quickly you want the image to shrink
      [1, 0.8],  // Scale from 1 to 0.8
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <View style={styles.container}>
      <AnimatedFlatList
        data={data}
        keyExtractor={(item) => item}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onHorizontalScroll}
        scrollEventThrottle={16}
        bounces={false}
        renderItem={({ item, index }) => {
          return (
            <Animated.View style={[{ width, height: height / 2 }, animatedStyle]} key={index}>
              <Animated.Image
                source={item}
                style={[{ flex: 1, width: '100%', resizeMode: 'contain' }, animatedStyle]}
              />
            </Animated.View>
          );
        }}
      />
      <Pagination data={data} scrollX={scrollX} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
