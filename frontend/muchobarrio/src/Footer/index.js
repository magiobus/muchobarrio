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

const {height, width} = Dimensions.get('window')

class Footer extends Component{

  render(){
    const {data} = this.props

    return (
      <View style={styles.buttom}>
        <View style={styles.buttomTexts}>
          <Text style={styles.questBarrioPowerPointsText}>+ {data.barrioPoints} BarrioPower</Text>
          <Text style={styles.questNameText}>{data.name}</Text>
          <Text style={styles.questDescription}>{data.description}</Text>
        </View>
        <View style={styles.buttomGraphics}>
          <Image style={styles.currentQuestImage} source={require('../../img/mariachi.png')}></Image>
          <Text style={styles.rejectBtn}>ME RAJO</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttom: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  buttomTexts: {
    width: (width * 0.7)
  },
  questBarrioPowerPointsText: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 13,
    color: '#5e5e5e'
  },
  questNameText: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 24,
    color: '#303030'
  },
  questDescription: {
    marginLeft: 10,
    marginTop: 15,
    color: '#b6b6b6',
    fontSize: 14
  },
  buttomGraphics: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width * 0.3)
  },
  currentQuestImage: {
    width: 80,
    height: 80
  },
  rejectBtn: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: '#ff3366',
    fontWeight: 'bold'

  }
})

module.exports = Footer
