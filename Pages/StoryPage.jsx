import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";

export default class StoryPage extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        {/* <ScrollView> */}
        <View style={styles.buttonStyle}>
          <TouchableOpacity style={styles.TouchableOpacityStyle}>
            <Text style={styles.textStyle}>GO TO GAME PLAY PAGE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonComingStyle}>
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            disabled={true}
          >
            <Text style={styles.textStyle}>COMING SOON!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonComingStyle}>
          <TouchableOpacity
            style={styles.TouchableOpacityStyle}
            disabled={true}
          >
            <Text style={styles.textStyle}>COMING SOON!</Text>
          </TouchableOpacity>
        </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    paddingTop: '25%'
  },
  buttonStyle: {
    width: "90%",
    height: "25%",
    backgroundColor: "blue",
    borderRadius: 40,
    marginVertical: 40,
  },
  buttonComingStyle: {
    width: "90%",
    height: "25%",
    backgroundColor: "gray",
    borderRadius: 40,
    marginVertical: 40,
  },
  textStyle: {
    color: "black",
    alignSelf: "center",
    paddingVertical: 20,
    color: "white",
  },
  TouchableOpacityStyle: {
    flex: 1,
    justifyContent: "center",
  },
});
