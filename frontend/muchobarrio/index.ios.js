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
  MapView,
  TouchableOpacity
} from 'react-native';

import HomeView from './src/HomeView'

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
  constructor(props, context){
      super(props, context)
      this.state = {
        region: {
          'latitude': 19.439748,
          'longitude': -99.134112
        },
        currentQuest: {
          timeLeft: '12:02',
          barrioPoints: 150,
          name: '¡Virgencita Pliz!',
          description: 'Tomate 3 mezcales en menos de una hora en el bar Al Andara'
        }
      }
  }

  showQuests () {
    console.warn('lololololol')
  }

  render() {
    const {region, currentQuest} = this.state

    return (
      <View style={styles.container}>
        <View style={styles.top}></View>
        <TouchableOpacity onPress={this.showQuests.bind(this)} style={styles.challengesButtonView}>
          <Image source={require('./img/dare-button.png')} style={styles.challengesButtonImage}></Image>
        </TouchableOpacity>
        <Image source={require('./img/stats.png')} style={styles.statsButton}></Image>
        <View style={styles.userContainer}>
          <Image source={require('./img/04-lady-barrio.png')} style={styles.avatar}/>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userTitle}>Magio</Text>
            <View style={styles.baseProgressBar}>
              <View style={styles.levelProgressBar}></View>
            </View>
            <Text style={styles.userTeam}>Darks</Text>
          </View>
        </View>
        <HomeView data={{region: region, currentQuest: currentQuest, markers: markers}}></HomeView>
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
    backgroundColor: '#ff3366',
  },
  top: {
    backgroundColor: '#c2185b',
    height: 18
  },
  userContainer:{
    position:'relative',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: 120,
    backgroundColor: '#ff3366'
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
    color: '#ffffff',
    marginBottom: 5
  },
  'baseProgressBar': {
    backgroundColor: '#e2e2e2',
    width: 200,
    height: 5,
    borderRadius: 5
  },
  'levelProgressBar': {
    height: 5,
    width: 100,
    backgroundColor: '#ffff66',
    borderRadius: 5
  },
  'userTeam': {
    marginTop: 5,
    fontSize: 15,
    color: '#ffffff'
  },
  'challengesButtonView': {
    position: 'absolute',
    top: 100,
    right: 25,
    zIndex: 10,
    height: 80,
    width: 80
  },
  challengesButtonImage: {
    height: 80,
    width: 80
  },
  'statsButton': {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 80,
    width: 80,
    zIndex: 10
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});

AppRegistry.registerComponent('muchobarrio', () => muchobarrio);
