
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window')

export default class Root extends Component {
  render () {
    return <View style={styles.container}>
      <Text style={styles.num}>HEJ HEJ</Text>

      <TouchableOpacity style={styles.btn} onPress={() => console.log('onPress')}>
        <Text>PUSH ME BABY</Text>
      </TouchableOpacity>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  num: {
    fontSize: 60
  },
  btn: {
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#73BD92',
    width: width - 40
  }
})