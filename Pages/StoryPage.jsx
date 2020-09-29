import React, { Component } from 'react';
// import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';

import {View, Text, Button, TouchableOpacity, StyleSheet} from "react-native";
import { Actions } from 'react-native-router-flux';

export default class StoryPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.pageTwoBtn} onPress={()=> Actions.gamePlayPage()}>
            <Text>go to game play page</Text>
        </TouchableOpacity>
        <View style={styles.copyRight}>
            <Text>@ story page</Text>
        </View>
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#1e5f74'
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