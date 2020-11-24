import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import bgimage from '../assets/backgrounds/mainBg.jpg'
import incorrect from '../img/incorrect.png'

export default function InCorrectQuestionPage() {

  return (
    <ImageBackground source={bgimage} style={styles.background}>
      <View style={styles.BoxQ}>
        <View style={styles.topicC}>
          <Text style={styles.TopicQ}>
            False
          </Text>
        </View>
        <View style={styles.im}>
          <Image source={incorrect} style={styles.imagecorrect} />
        </View>
        <View style={styles.con}>
          <TouchableOpacity style={styles.btnlogin}>
            <Text style={styles.textstyle}>Replay</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, BoxQ: {
    width: 300,
    height: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    borderRadius: 25,
    alignItems: 'center'
  },
  Topic: {
    margin: 20,
  },
  TopicQ: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    borderBottomWidth: 3,
    margin: 10,
    width: 250,
    textAlign:'center'
  },
  item: {
    backgroundColor: 'rgba(0, 70, 150, 0.29)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
  title: {
    fontSize: 32,

  },
  flat: {
    margin: 20
  },
  im: {
    
  },
  imagecorrect: {
    width: 200,
    height: 200,
  },
  btnlogin: {
    width: 250,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF8C00',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  con: {
    
  },
  textstyle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25
  }
});
