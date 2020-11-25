import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import bgimage from '../assets/backgrounds/mainBg.jpg'
// import Zebra from '../img/zebra.png'

const problem = [
  {
    proposition: 'Cat',
    anwser: 'แมว'
  }
]

const choice1 = [
  {
    choice: 'นก'
  },
  {
    choice: 'สุนัข'
  },
  {
    choice: 'หนู'
  },
]

const Itemp = ({ anwser }) => (
  <TouchableOpacity style={styles.item2} onPress={() => Actions.correctquestionPage()}>
    <Text style={styles.choice}>{anwser}</Text>
  </TouchableOpacity >
)

const Item = ({ choice }) => (
  <TouchableOpacity style={styles.item} onPress={() => Actions.incorrectquestionPage()}>
    <Text style={styles.choice}>{choice}</Text>
  </TouchableOpacity >
);
export default function QuestionPage() {
  const renderItem = ({ item }) => (
    <Item choice={item.choice} />
  );
  const renderItem2 = ({ item }) => (
    <Itemp anwser={item.anwser}></Itemp>
  )
  return (
    <ImageBackground source={bgimage} style={styles.background}>
      {/* <View style={styles.Topic}>
        <Text style={styles.TopicQ}>
          Question
        </Text>
      </View> */}

      <View style={styles.boxPro}>
        <Text style={styles.Pro}>
          C A T
        </Text>
      </View>
      <View style={styles.BoxQ}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={choice1}
            renderItem={renderItem}
            style={styles.flat}
          />
        </SafeAreaView>
        <View style={styles.boxincor}>
          {/* <TouchableOpacity style={styles.item2} onPress={() => Actions.correctquestionPage()}>
            <Text style={styles.choice2}>ม้าลาย</Text>
          </TouchableOpacity > */}
          <FlatList
            data={problem}
            renderItem={renderItem2}
            style={styles.flat}
          />
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
  },
  BoxQ: {
    width: 300,
    height: 375,
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    borderRadius: 25,
  },
  // Topic: {

  // },
  // TopicQ: {
  //   fontSize: 40,
  //   fontWeight: 'bold',
  // },
  item: {
    backgroundColor: 'rgba(0, 70, 150, 0.29)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
  item2: {
    backgroundColor: 'rgba(0, 70, 150, 0.29)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
    width: 230,
    height: 65,
    marginTop: 1
  },
  title: {
    fontSize: 32,

  },
  flat: {
    margin: 20
  },
  boxPro: {
    margin: 10,
    marginTop: -60
  },
  Pro: {
    fontSize: 100,
    borderBottomWidth: 3,
  },
  // cat: {
  //   width: 190,
  //   height: 190
  // },
  choice: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  choice2: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  boxincor: {
    alignItems: 'center',
    marginTop:-30
  },

});
