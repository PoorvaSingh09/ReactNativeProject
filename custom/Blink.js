import React, { Component } from 'react';
import { Text } from 'react-native';
import {styles} from './Styles';

class Blink extends Component {
  constructor(props) {
   super(props);
   this.state = {isShowingText: true};

   setInterval(() => {
     this.setState(previousState => {
       return { isShowingText: !previousState.isShowingText };
     });
   }, 1000);
 }

  render() {
    let display = this.state.isShowingText ? this.props.text: '';
    return (<Text style={styles.normalText}>{display}</Text>);
  }
}

module.exports = Blink;
