import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PagerView from 'react-native-pager-view';
import CarouselOne from '../../assets/svg/CarouselOne';
import CarouselTwo from '../../assets/svg/CarouselTwo';
import Diagnostics from '../../assets/svg/Diagnostics';
import Pathology from '../../assets/svg/Pathology';
import Welness from '../../assets/svg/Welness';

const BenefitScreen = ({ navigation }) => {
  const handleNavigate = (screen, params) => {
    navigation.navigate(screen, params);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
        {/* Div 1 */}
        <View style={styles.div}>
          <View style={styles.divRow}>
            <View style={styles.profileSection}>
              <Icon name="account-circle" size={30} color="black" />
              <Text style={styles.username}>User Name</Text>
              <View style={styles.switchSection}>
                <Text style={styles.switchName}>Switch</Text>
              </View>
            </View>
            <View style={styles.yearSection}>
              <Text style={styles.year}>2024</Text>
              <Icon name="calendar-month" size={28} color="#1F78F1" />
            </View>
          </View>
        </View>

        {/* Div 2 */}
        <View style={styles.div}>
          <PagerView style={styles.carousel} initialPage={0}>
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
        </View>

        {/* Div 3 */}
        <View style={styles.div}>
  <View style={styles.header}>
    <Text style={styles.heading}>Wellness Hub</Text>
    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
  <Text style={styles.seeAll}>See All {'>'}</Text>
</TouchableOpacity>
  </View>
    <View style={styles.itemsContainer}>
      <TouchableOpacity style={styles.item} onPress={() => handleNavigate('DetailScreen', { type: 'Diagnostics' })}>
        <View style={styles.itemBackground}>
          <Diagnostics width={35} height={35} />
        </View>
        <Text style={{fontWeight:'500',marginTop:3}}>Diagnostics</Text>
        <Text style={{fontSize:12,marginTop:5}}> 6 Offers </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => handleNavigate('DetailScreen', { type: 'Pathology' })}>
        <View style={styles.itemBackground}>
          <Pathology width={35} height={35} />
        </View>
        <Text style={{fontWeight:'500',marginTop:3}}>Pathology</Text>
        <Text style={{fontSize:12,marginTop:5}}> 2 Offers </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => handleNavigate('DetailScreen', { type: 'Welness' })}>
        <View style={styles.itemBackground}>
          <Welness width={35} height={35} />
        </View>
        <Text style={{fontWeight:'500',marginTop:3}}>Welness</Text>
        <Text style={{fontSize:12,marginTop:5}}> 3 Offers </Text>
      </TouchableOpacity>
    </View>
</View>



        {/* Div 4 */}
        <View style={styles.div}>
          <Text style={styles.heading}>Trusted Partner</Text>
          <View style={styles.trustedPartner}>
            <View style={styles.partnerItem}>
              <View style={styles.partnerImage} />
              <Text>Partner 1</Text>
            </View>
            <View style={styles.partnerItem}>
              <View style={styles.partnerImage} />
              <Text>Partner 2</Text>
            </View>
            <View style={styles.partnerItem}>
              <View style={styles.partnerImage} />
              <Text>Partner 3</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  main: {
    width: '90%',
    alignSelf: 'center',
  },
  div: {
    marginVertical: 10,
  },
  divRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 12,
  },
  switchSection: {
    backgroundColor: '#1F78F1',
    padding: 12,
    borderRadius: 16,
  },
  username: {
    marginHorizontal: 10,
    fontSize: 15,
  },
  switchName: {
    marginHorizontal: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  yearSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
  },
  year: {
    marginRight: 10,
    color: '#1F78F1',
    fontSize: 14,
  },
  carousel: {
    height: 200,
  },
  carouselItem: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    bottom: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
  },
  seeAll: {
    color: '#1F78F1',
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  
  item: {
    marginRight: 10,
    alignItems: 'center',
  },
  itemBackground: {
    backgroundColor: '#C3CDEE',
    borderRadius: 100,
    padding: 15,
  },
  trustedPartner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  partnerItem: {
    alignItems: 'center',
  },
  partnerImage: {
    width: 100,
    height: 100,
    backgroundColor: '#eee', 
  },
});

export default BenefitScreen;
