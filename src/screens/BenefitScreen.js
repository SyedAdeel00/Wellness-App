import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PagerView from 'react-native-pager-view';

const BenefitScreen = ({ navigation }) => {
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
            <View key="1"><Image source={{ uri: 'https://via.placeholder.com/400' }} style={styles.image} /></View>
            <View key="2"><Image source={{ uri: 'https://via.placeholder.com/400' }} style={styles.image} /></View>
            <View key="3"><Image source={{ uri: 'https://via.placeholder.com/400' }} style={styles.image} /></View>
          </PagerView>
        </View>

        {/* Div 3 */}
        <View style={styles.div}>
          <View style={styles.header}>
            <Text style={styles.heading}>Wellness Hub</Text>
            <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.item}>
              <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.itemImage} />
              <Text>Item 1</Text>
            </View>
            <View style={styles.item}>
              <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.itemImage} />
              <Text>Item 2</Text>
            </View>
            <View style={styles.item}>
              <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.itemImage} />
              <Text>Item 3</Text>
            </View>
          </ScrollView>
        </View>

        {/* Div 4 */}
        <View style={styles.div}>
          <Text style={styles.heading}>Trusted Partner</Text>
          <View style={styles.trustedPartner}>
            <View style={styles.partnerItem}>
              <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.partnerImage} />
              <Text>Partner 1</Text>
            </View>
            <View style={styles.partnerItem}>
              <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.partnerImage} />
              <Text>Partner 2</Text>
            </View>
            <View style={styles.partnerItem}>
              <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.partnerImage} />
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
    backgroundColor:"#fff",
    padding:5,
    borderRadius:12
  },
  switchSection:{
    backgroundColor:'#1F78F1',
    padding:12,
    borderRadius:16
  },
  username: {
    marginHorizontal: 10,
    fontSize:15,
  },
  switchName: {
    marginHorizontal: 10,
    color:'#fff',
    fontSize:16,
    fontWeight:'700'
  },
  yearSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#fff',
    padding:10,
    borderRadius:12
  },
  year: {
    marginRight: 10,
    color:'#1F78F1',
    fontSize:14
  },
  carousel: {
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:10,
    bottom:5
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
  },
  seeAll: {
    color: 'blue',
  },
  item: {
    marginRight: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
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
  },
});

export default BenefitScreen;
