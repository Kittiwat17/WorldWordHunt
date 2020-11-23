import { Row } from "native-base";
import React, { Component, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
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

const Item = ({ item, onPress, style, separators }) => {
  if (item.title == "Coming Soon") {
    return (
      <TouchableOpacity
        style={[styles.item, style]}
        onPress={() => Actions.gamePlayPage()}
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity
        style={[styles.item, style]}
        onPress={() => Actions.gamePlayPage()}
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    )
  }


}


const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 0.3, textAlign: "left" }}>
          <TouchableOpacity onPress={() => Actions.loginPage()}>
            <Text style={{ fontSize: 25 }}>
              {"< |"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ flex: 0.4, textAlign: "center", fontSize: 40 }}>
          Story
        </Text>
        <View>
          <Text style={{ flex: 0.3, textAlign: "right" }}></Text>
        </View>
      </View>
      <FlatList style={{ flex: 0.02 }}
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
    backgroundColor: "#9ad3bc",
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
