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
          style={{height: 200, margin: 40}}
          showsUserLocation={true}
        />
      </View>
    );
  }
}

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
    width: 100
  },
  'userTitle':{
    fontSize: 20,
  },
  'userTeam': {
    fontSize: 15,
  },
});

AppRegistry.registerComponent('muchobarrio', () => muchobarrio);
