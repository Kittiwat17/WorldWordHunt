import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import bgimage from '../img/bg.jpg'


const DATA = [
  {
    title: 'Question1',
  },
  {
    title: 'Question2',
  },
  {
    title: 'Question3',
  },
  {
    title: 'Question4',
  },
];


const Item = ({ title }) => (
  <TouchableOpacity style={styles.item} >
    <Text style={styles.title}>{title}</Text>

  </TouchableOpacity >
);
export default  function QuestionPage() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  return (
    <ImageBackground source={bgimage} style={styles.background}>
      <View style={styles.Topic}>
        <Text style={styles.TopicQ}>
          Question
        </Text>
      </View>
      <View style={styles.BoxQ}>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            style={styles.flat}
          />
        </SafeAreaView>
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
    height: 470,
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
    borderRadius: 25,
  },
  Topic: {
    margin: 20
  },
  TopicQ: {
    fontSize: 40,
    fontWeight: 'bold',
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
  }
});
