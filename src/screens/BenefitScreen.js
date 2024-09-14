import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconP from 'react-native-vector-icons/Feather';
import Diagnostics from '../../assets/svg/Diagnostics';
import Pathology from '../../assets/svg/Pathology';
import Welness from '../../assets/svg/Welness';
import BeWell from '../../assets/svg/BeWell';
import Max from '../../assets/svg/max';
import Healthians from '../../assets/svg/Healthians';
import Carousel from '../components/CarouselList';

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
              <IconP name="user" size={30} color="black" />
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
        
        <View style={styles.div}>
        <Carousel/>
        </View>

        {/* Div 3 */}
        <View style={styles.div}>
          <View style={styles.header}>
            <Text style={styles.heading}>Wellness Hub</Text>
            <TouchableOpacity onPress={() => navigation.navigate('WellnessHub')}>
              <Text style={styles.seeAll}>See All {'>'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.itemsContainer}>
            <TouchableOpacity style={styles.item} onPress={() => handleNavigate('WellnessHub', { type: 'Diagnostics' })}>
              <View style={styles.itemBackground}>
                <Diagnostics width={35} height={35} />
              </View>
              <Text style={{ fontWeight: '500', marginTop: 3 }}>Diagnostics</Text>
              <Text style={{ fontSize: 12, marginTop: 5 }}>6 Offers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleNavigate('WellnessHub', { type: 'Pathology' })}>
              <View style={styles.itemBackground}>
                <Pathology width={35} height={35} />
              </View>
              <Text style={{ fontWeight: '500', marginTop: 3 }}>Pathology</Text>
              <Text style={{ fontSize: 12, marginTop: 5 }}>2 Offers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => handleNavigate('WellnessHub', { type: 'Welness' })}>
              <View style={styles.itemBackground}>
                <Welness width={35} height={35} />
              </View>
              <Text style={{ fontWeight: '500', marginTop: 3 }}>Welness</Text>
              <Text style={{ fontSize: 12, marginTop: 5 }}>3 Offers</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Div 4 */}
        <View style={styles.Trusteddiv}>
          <View style={{ backgroundColor: '#e8e9eb' }}>
            <Text style={styles.TrustedHeading}>Trusted Partner</Text>
            <View style={styles.trustedPartner}>
              <View style={styles.partnerItem}>
                <View style={styles.partnerImage}>
                  <BeWell width={60} height={60} />
                </View>
                <Text style={{ marginTop: 10, fontWeight: '500' }}>BeWell Hospital</Text>
              </View>
              <View style={styles.partnerItem}>
                <View style={styles.partnerImage}>
                  <Max width={60} height={60} />
                </View>
                <Text style={{ marginTop: 10, fontWeight: '500' }}>Max Healthcare</Text>
              </View>
              <View style={styles.partnerItem}>
                <View style={styles.partnerImage}>
                  <Healthians width={60} height={60} />
                </View>
                <Text style={{ marginTop: 10, fontWeight: '500' }}>Healthians</Text>
              </View>
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
  Trusteddiv:{
    marginVertical: 10,
  },
  divRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:15,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
  },
  switchSection: {
    backgroundColor: '#1F78F1',
    padding: 15,
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
    padding: 13,
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
    fontSize: 20,
    fontWeight: '500',
  },
  TrustedHeading:{
    fontSize: 20,
    fontWeight: '500',
    marginLeft:20,
    marginTop:15
  },
  seeAll: {
    color: '#1F78F1',
    fontSize:16
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
    padding: 10,
    borderRadius: 12,
    marginBottom:15
  },
  partnerItem: {
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  partnerImage: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default BenefitScreen;
