import React, {Component} from 'react';
import {Text} from 'react-native';
class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const {navigation} = this.props;
    return (
      <Text style={{fontSize:20, backgroundColor: 'red', padding: 20}}>Profile of: {navigation.getParam('name')}</Text>
    );
  }
}

module.exports = {ProfileScreen};
