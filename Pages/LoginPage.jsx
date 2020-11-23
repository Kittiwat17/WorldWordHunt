import React, { Component } from 'react';

import { Actions } from 'react-native-router-flux';
import { green } from 'ansi-colors';
import {View, TextInput, StyleSheet, TouchableOpacity, ImageBackground,Text } from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage';
import bgimage from '../img/bg.jpg'

export default class LoginPage extends Component {
  //  state = {
  //     'name': ''
  //  }
  //  componentDidMount = () => AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }))



  //  setName = (value) => {
  //     AsyncStorage.setItem('name', value);
  //     this.setState({ 'name': value });
  //  }
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
                  <TouchableOpacity style={styles.btnlogin} onPress={()=> Actions.storyPage()}>
                     <Text style={styles.textstyle}>PLAY</Text>
                  </TouchableOpacity>
               </View>
               <View>
                  <Text style={styles.text}>
                     
                  </Text>
               </View>
            </View>
         </ImageBackground>
      )
   }
}
// export default LoginPage

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
   text: {
      marginTop: 10,
      fontSize: 16,
      width: 300
   },
   textContainer: {
      alignItems: 'center',
   },
   logotext: {
      fontSize: 36,
      fontWeight: '500',
      opacity: 0.5,
      margin:50
   }
})