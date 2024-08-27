import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const SemiFilledStar = ({ rating }: { rating: number }) => {
  const percentage = (rating / 5) * 100; // Calculate the percentage

  return (
    <View style={styles.starContainer}>
      {/* Background Star (Full Color) */}
      <AntDesign name="star" size={18} color="#ddd" style={styles.backgroundStar} />

      {/* Foreground Star (Clipped by percentage) */}
      <View style={[styles.foregroundStar, { width: `${percentage}%` }]}>
        <AntDesign name="star" size={18} color="#FFA500" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    position: 'relative',
    width: 18,
    height: 18,
  },
  backgroundStar: {
    position: 'absolute',
  },
  foregroundStar: {
    position: 'absolute',
    overflow: 'hidden',
  },
});