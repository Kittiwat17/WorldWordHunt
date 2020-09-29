import React, { Component } from 'react';
// import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';

import {View, Text, Button, TouchableOpacity, StyleSheet} from "react-native";
import { Actions } from 'react-native-router-flux';
import { green } from 'ansi-colors';

export default class GamePlayPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.pageTwoBtn} onPress={()=> Actions.popTo("loginPage")}>
            <Text>go to login page</Text>
        </TouchableOpacity>
        <View style={styles.copyRight}>
            <Text>@ game play page</Text>
        </View>
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0278ae'
  },
  pageTwoBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  copyRight: {
      flex: 0.05,
      alignItems: "center"
  }
})