import React, { Component } from 'react';
// import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';

import {Dimensions, View, Image, Text, Button, TouchableOpacity, StyleSheet} from "react-native";
import { Actions } from 'react-native-router-flux';
import { green } from 'ansi-colors';
import Animated from "react-native-reanimated";
import { decompose2d, tween2d, useLoop } from "react-native-redash";

import { Col, Row, Grid } from "react-native-easy-grid";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = (CARD_WIDTH * ratio)/2;

const CENTER_ratio = 228 / 362;
export const CENTER_CARD_WIDTH = width * 0.8;
export const CENTER_CARD_HEIGHT = CENTER_CARD_WIDTH;
export default GamePlayPage = () => {
  // const transform2 = [
  //   { translateY: -10 },
  //   { translateX: 0 },
  //   { rotate: Math.PI / 0.5 },
  //   { skewY: Math.PI / 6 },
  //   { scale: 0.8 },
  // ];
  const transform2 = [
    { translateY: 60 },
    { translateX: -135 },
    { rotate: 0},
    { skewY: 0.3 },
    { scale: 0.8 },
  ];
  const transform3 = [
    { translateY: -(CARD_HEIGHT-60) },
    { translateX: (width/2) -80 },
    { rotate: 0},
    { skewY: -0.3 },
    { scale: 0.8 },
  ];
  const centerMap = [
    { translateY: 180 },
    { translateX: 0 },
    // { rotateX: '-45deg' },
    { rotate: 2.15 },
    { skewY:  0.7 },
    { skewX: 0.3},
    { scale: 0.8 },
  ];
  // source={require("../assets/card1.png")}
    return (
      <View style={styles.container}>
      <View style={styles.content}>
      <Animated.View style={{ transform: decompose2d(centerMap) }}>
        <Image style={styles.CENTER_MAP} />
        </Animated.View>
        <Animated.View style={{ transform: decompose2d(transform2) }}>
        <Image style={styles.card}  />
        </Animated.View>
        <Animated.View style={{ transform: decompose2d(transform3) }}>
        <Image style={styles.card} />
        </Animated.View>
      </View>
        {/* <TouchableOpacity style={styles.pageTwoBtn} onPress={()=> Actions.popTo("loginPage")}>
            <Text>go to login page</Text>
        </TouchableOpacity> */}
     
        <View style={styles.copyRight}>
        <Grid>
          <Col>
          <Row style={styles.selectBox} size={1}>
          </Row>
          <Row style={styles.selectBtn} size={1}></Row>
          </Col>
          <Col>
          <Row style={styles.selectBox} size={1}></Row>
          <Row style={styles.selectBtn} size={1}></Row>
          </Col>
          <Col>
          <Row style={styles.selectBox} size={1}></Row>
          <Row style={styles.selectBtn} size={1}></Row>
          </Col>
          <Col>
          <Row style={styles.selectBox} size={1}></Row>
          <Row style={styles.selectBtn} size={1}></Row>
          </Col>
          <Col><Row style={styles.selectBtn} size={1}></Row></Col>
        </Grid>
            {/* <Text>@ game play page</Text> */}
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0278ae'
  },
  pageTwoBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  copyRight: {
      flex: 0.5,
      alignItems: "center"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'brown'
  },
  CENTER_MAP:{
    width: CENTER_CARD_WIDTH,
    height: CENTER_CARD_HEIGHT,
    backgroundColor:"lightgreen"
  },
  selectBtn:{
    backgroundColor: "orange"
  },
  selectBox:{
    backgroundColor: "red"
  }
})