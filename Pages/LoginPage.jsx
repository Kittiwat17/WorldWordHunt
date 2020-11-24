import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';
import { green } from 'ansi-colors';
import { View, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import bgimage from '../assets/backgrounds/mainBg.jpg'

export default class LoginPage extends Component {
  //จะต้องเก็บแบบArray List เก็บได้มากกว่า1
  state = {
    'name': ''
  }
  array = {
    
  }
  componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))


  setName = (value) => {
    //จะต้องมีเช็คว่า เป็นAccountที่มีอยู่ หรือเพิ่มเข้ามาใหม่
    //ถ้ามีอยู่แล้วจะดึง Account นั้นมาเลย
    AsyncStorage.setItem('name', value);//ถ้าใหม่จะsetเพิ่มทันที
    this.setState({ 'name': value });
  }

  //หลังจากกดปุ่ม Play จะไปหน้าถัดไปของ Account นั้น


  render() {
    return (
      <ImageBackground source={bgimage} style={styles.background}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.logotext}>World Word Hunt</Text>
          </View>
          <View style={styles.TInput}>
            <TextInput style={styles.textInput}
              placeholder={'Username'}
              placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
              underlineColorAndroid='transparent'
              autoCapitalize='none'
              maxLength={10}
              onChangeText={this.setName} />
            <TouchableOpacity style={styles.btnlogin} onPress={() => Actions.storyPage()}>
              <Text style={styles.textstyle}>PLAY</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{margin:10}}>
              User list : {this.state.name}
            </Text>
          </View>
        </View>
      </ImageBackground>
    )
  }
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  textInput: {
    marginTop: 10,
    width: 250,
    height: 45,
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.19)',
    borderRadius: 25,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  btnlogin: {
    width: 250,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F6BCB0',
    justifyContent: 'center',
    marginTop: 20,

  },
  textstyle: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textContainer: {
    alignItems: 'center',
  },
  logotext: {
    fontSize: 36,
    fontWeight: '500',
    opacity: 0.5,
    margin: 50
  }
})