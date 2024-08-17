import { textColors } from '@/constants/Colors';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

const { width } = Dimensions.get('window');

const ads = [
  {
    id: 1,
    image: 'https://example.com/ad1.jpg',
    title: 'Ad 1',
    description: 'Description for ad 1',
    color: textColors.redVelvet
  },
  {
    id: 2,
    image: 'https://example.com/ad2.jpg',
    title: 'Ad 2',
    description: 'Description for ad 2',
    color: textColors.blueOcean
  },
  {
    id: 3,
    image: 'https://example.com/ad3.jpg',
    title: 'Ad 3',
    description: 'Description for ad 3',
    color: textColors.navyBlack
  },
];

export const AdsBox = ({ customStyles }: { customStyles?: object }) => {
  const pagerViewRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => {
        const nextPage = (prevPage + 1) % ads.length;
        pagerViewRef.current?.setPage(nextPage);
        return nextPage;
      });
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handlePageSelected = (e: any) => {
    const newPage = e.nativeEvent.position;
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  return (
    <View style={[styles.container, customStyles]}>
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        ref={pagerViewRef}
        onPageSelected={handlePageSelected}
      >
        {ads.map((ad) => (
          <View style={[styles.page, {backgroundColor: ad.color}]} key={ad.id}>
            <Image source={{ uri: ad.image }} style={styles.image} />
          </View>
        ))}
      </PagerView>
      <View style={styles.pagination}>
        {ads.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { opacity: currentPage === index ? 1 : 0.4 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagerView: {
    height: 170,
  },
  page: {
    flex: 1,
    borderRadius: 10,
    marginVertical: 2,
    marginHorizontal: 20,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width - 40,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    margin: 5,
  },
});
