import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ActivityIndicator } from 'react-native';
import Blink from './custom/Blink';
import {styles} from './custom/Styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Blink text="Test Blinking" />
          <Blink text="Now you see it!"/>
        </View>
        <View>
          <TextInput
            style={styles.normalText}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={styles.bigText}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <ActivityIndicator size="large" color="#33FFEC" />
          <ActivityIndicator size="small" color="#33FF77"/>
          <ActivityIndicator size="large" color="#33FF77"/>
          <ActivityIndicator size="small" color="#33FFEC"/>
        </View>
      </View>
    );
  }
}
