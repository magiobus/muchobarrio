/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  MapView
} from 'react-native';

var {height, width} = Dimensions.get('window')
var markers = [
  {
    latitude: 19.436417,
    longitude: -99.141791,
    title: 'Bellas Artes',
    subtitle: 'Ve aquí papu'
  },
  {
    latitude: 19.433459,
    longitude: -99.141224,
    title: 'FrikiPlaza',
  },
  {
    latitude: 19.435059,
    longitude: -99.140001,
    title: 'Sanborns Azulejos',
  },
  {
    latitude: 19.434134,
    longitude: -99.141617,
    title: 'Sears Centro Histórico',
  },
  {
    latitude: 19.435706,
    longitude: -99.140269,
    title: 'Palacio Postal',
  },
  {
    latitude: 19.435848,
    longitude: -99.139595,
    title: 'Palacio de Minería',
  },
];

class muchobarrio extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}></View>
        <View style={styles.userContainer}>
          <Image source={require('./img/grumpycat.jpeg')} style={styles.avatar}/>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userTitle}>Magio</Text>
            <Text style={styles.userTeam}>Darks</Text>
          </View>
        </View>
        <MapView
          style={styles.map}
          region={{
            latitude:   19.433435,
            longitude: -99.141208,
            latitudeDelta: 0.008,
            longitudeDelta: 0.001
          }}
          zoomEnabled={true}
          showsUserLocation={true}
          annotations={markers}
        />
      </View>
    );
  }
}

// 2460 total pizzas
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  top: {
    backgroundColor: '#0097a7',
    height: 18
  },
  userContainer:{
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 120,
    backgroundColor: '#00bcd4'
  },
  userInfoContainer:{
    width: (width - 100) * 0.8,
  },
  avatar: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  'userTitle':{
    fontSize: 20,
  },
  'userTeam': {
    fontSize: 15,
  },
  map:{
    flex: 1,
    width: width,
  }
});

AppRegistry.registerComponent('muchobarrio', () => muchobarrio);
