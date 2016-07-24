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
  MapView,
  Image,
  View,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');
const route = [{"coordinates":[
  {"latitude":36.247885,"longitude":-115.241129},
  {"latitude":36.243418,"longitude":-115.242348},
  {"latitude":36.239584,"longitude":-115.242358},
  {"latitude":36.23578,"longitude":-115.242393},
  {"latitude":36.231903,"longitude":-115.242427},
  {"latitude":36.229585,"longitude":-115.242415},
  {"latitude":36.224785,"longitude":-115.242414},
  {"latitude":36.221195,"longitude":-115.242405},
  {"latitude":36.217347,"longitude":-115.24243},
  {"latitude":36.215033,"longitude":-115.242406},
  {"latitude":36.210149,"longitude":-115.242391},
  {"latitude":36.20647,"longitude":-115.242386},
  {"latitude":36.202831,"longitude":-115.2424},
  {"latitude":36.19934,"longitude":-115.24239},
  {"latitude":36.194403,"longitude":-115.242406},
  {"latitude":36.191834,"longitude":-115.242414},
  {"latitude":36.187962,"longitude":-115.242414},
  {"latitude":36.185028,"longitude":-115.242402},
  {"latitude":36.180135,"longitude":-115.242479},
  {"latitude":36.173039,"longitude":-115.244581},
  {"latitude":36.169996,"longitude":-115.244534},
  {"latitude":36.165939,"longitude":-115.244469},
  {"latitude":36.161132,"longitude":-115.244019},
  {"latitude":36.158408,"longitude":-115.243867},
  {"latitude":36.154912,"longitude":-115.243678},
  {"latitude":36.150976,"longitude":-115.243466},
  {"latitude":36.147311,"longitude":-115.243281},
  {"latitude":36.14347,"longitude":-115.24309},
  {"latitude":36.08441,"longitude":-115.242962}]
  ,"strokeColor":"#820233","lineWidth":2}];

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
        <MapView overlays={route}
          style={styles.map}
          region={{
            latitude: 36.14211,
            longitude: -115.1846213,
            latitudeDelta: 0.4,
            longitudeDelta: 0.4
          }}
          pitchEnabled={false}
          rotateEnabled={false}
          showsUserLocation={false} />
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
