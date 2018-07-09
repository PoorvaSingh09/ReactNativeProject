import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, ActivityIndicator, ScrollView, FlatList } from 'react-native';
import Blink from './custom/Blink';
import {styles} from './custom/Styles';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollContainerStyle}>
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
        <View>
          <Image style={{width:100, height:100}}
                  source={{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </View>
        <View style={{height:100}}>
          <FlatList
            data={[{key: 'Line 1'}, {key: 'Line 2'}, {key: 'Line 3'}, {key: 'Line 4'}, {key: 'Line 5'},
                    {key: 'Line 6'}, {key: 'Line 7'}, {key: 'Line 8'}, {key: 'Line 9'}, {key: 'Line 10'}]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />
        </View>
      </View>

      </ScrollView>
    );
  }
}
