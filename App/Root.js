
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native'

const { width } = Dimensions.get('window')

import { wrap } from 'tictail-tide'

class Root extends Component {

  render () {
    console.log('PROPS', this.props)
    return <View style={styles.container}>
      <Text style={styles.num}>CLICKER HERE</Text>

      <TouchableOpacity style={styles.btn} onPress={() => console.log('onPress')}>
        <Text>PUSH ME BABY</Text>
      </TouchableOpacity>
    </View>
  }
}

export default wrap(Root, {value: 'clicker'})

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