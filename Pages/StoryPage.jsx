import { Row } from "native-base";
import React, { Component, useState } from "react";
// import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  AsyncStorage
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";

const DATA = [
  {
    id: "1",
    title: "Game Play Modes",
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

const Item = ({ item, onPress, style, separators }) => {
 
  if (item.title == "Coming Soon") {
    return (
      <View style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  } else {
    return (
      <TouchableOpacity onPress={() => 
      Actions.gamePlayPage()
      }>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20}}>
          <Image
            style={{ width: Dimensions.get('window').width * 0.95, height: Dimensions.get('window').height / 4.2, borderRadius: 8}}
            source={require("../assets/list1.png")}
          />
        </View>
      </TouchableOpacity>
    );
  }
};

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [name, setName] = useState();
  // AsyncStorage.getItem('name').then((value) => setName(value[0]))
 
  AsyncStorage.getItem('name').then((value)=> setName(value));
    
  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 0.3, textAlign: "left" }}>
          <TouchableOpacity onPress={() => Actions.loginPage()}>
            <Text style={{ fontSize: 25 , marginTop:25}}>{"< |"}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ flex: 0.4, textAlign: "center", fontSize: 40 , marginTop:20}}>
        {name}
          .Story
        </Text>
        <View>
          <Text style={{ flex: 0.3, textAlign: "right" }}></Text>
        </View>
      </View>
      <FlatList
        style={{ flex: 0.02 }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
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
    padding: 100,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#EFF0F1",
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
  },
  header: {
    flex: 0.08,
    // justifyContent: "center",
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
  },
});

export default App;
