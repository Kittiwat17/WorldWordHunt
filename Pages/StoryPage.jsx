import { Row } from "native-base";
import React, { Component, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";

const DATA = [
  {
    id: "1",
    title: "Game Play Mode",
  },
  {
    id: "2",
    title: "Coming Soon",
  },
  {
    id: "3",
    title: "Coming Soon",
  },
  {
    id: "4",
    title: "Coming Soon",
  },
  {
    id: "5",
    title: "Coming Soon",
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity  style={[styles.item, style]} onPress={()=> Actions.gamePlayPage()}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{flex:0.3, textAlign:"left", fontSize: 30}}>{'< |'}</Text>
        <Text style={{flex: 0.4, textAlign:"center", fontSize: 60}}>Story</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 80,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    fontSize: 60,
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
  },
});

export default App;