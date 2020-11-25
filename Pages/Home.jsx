import React, { Component, useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Text } from 'react-native'
import { Actions } from 'react-native-router-flux';
import bgimage from '../assets/backgrounds/mainBg.jpg'

const MyHome = () => {
    return (
        <ImageBackground source={bgimage} style={styles.background}>
           <View style={styles.container}>
              <View style={styles.textContainer}>
                 <Text style={styles.logotext}>World Word Hunt</Text>
              </View>
              <View style={styles.TInput}>
                 <TouchableOpacity style={styles.btnlogin}>
                    <Text style={styles.textstyle} onPress={() => Actions.loginPage()}>PLAY</Text>
                 </TouchableOpacity>
              </View>
           </View>
        </ImageBackground>
     )
  
   };

   


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
      width: 200,
      height: 45,
      borderWidth: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.19)',
      borderRadius: 25,
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
   },
   btnlogin: {
      width: 200,
      height: 45,
      borderRadius: 25,
      justifyContent: 'center',
      margin: 10,

   },
   textstyle: {
      color: 'rgba(0, 0, 0, 0.39)',
      fontSize: 50,
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
      opacity: 0.5
   },
})

export default MyHome;