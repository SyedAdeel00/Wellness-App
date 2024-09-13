import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import CarouselOne from '../../assets/svg/CarouselOne';
import CarouselTwo from '../../assets/svg/CarouselTwo';

const Carousel = () => {
  const [activePage, setActivePage] = useState(0); 

  const handlePageSelected = (event) => {
    setActivePage(event.nativeEvent.position); 
  };

  return (
    <View style={styles.div}>
      <PagerView 
        style={styles.carousel} 
        initialPage={0} 
        onPageSelected={handlePageSelected} 
      >
        <View key="1" style={styles.carouselItem}>
          <CarouselOne />
        </View>
        <View key="2" style={styles.carouselItem}>
          <CarouselTwo />
        </View>
        <View key="3" style={styles.carouselItem}>
          <CarouselOne />
        </View>
        <View key="4" style={styles.carouselItem}>
          <CarouselTwo />
        </View>
      </PagerView>

      {/* Pagination dots */}
      <View style={styles.pagination}>
        {[0, 1, 2, 3].map((pageIndex) => (
          <TouchableOpacity key={pageIndex} style={[styles.dot, activePage === pageIndex ? styles.activeDot : styles.inactiveDot]} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  div: {
    marginVertical: 10,
  },
  carousel: {
    height: 200,
  },
  carouselItem: {
    width: '100%',
    height: '100%',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000', 
  },
  inactiveDot: {
    backgroundColor: '#ccc', 
  },
});

export default Carousel;
