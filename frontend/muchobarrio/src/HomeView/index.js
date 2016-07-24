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

import Footer from '../../src/Footer'

const {height, width} = Dimensions.get('window')

class HomeView extends Component{

  render(){

    const {data} = this.props
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

    return (
      <View style={styles.homeContainer}>
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
        <View style={styles.timeBar}>
          <View style={styles.leftTimeBar}></View>
          <Text style={styles.leftTimeText}>{data.currentQuest.timeLeft}</Text>
        </View>
        <Footer data={data.currentQuest}></Footer>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#ff3366',
  },
  map: {
    flex: 1,
    width: width,
    height: (height * 0.5 ) - 138 - 18
  },
  timeBar: {
    height: 18,
    width: width,
    backgroundColor: '#e2e2e2',
    position: 'relative'
  },
  leftTimeBar: {
    height: 18,
    width: (width - 200),
    backgroundColor: '#ffff66',
  },
  leftTimeText: {
    position: 'absolute',
    top: 0,
    right: 5
  }
})

module.exports = HomeView
