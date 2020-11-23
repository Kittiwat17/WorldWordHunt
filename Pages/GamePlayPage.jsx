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
      <View style={styles.navbar}></View>
      <View style={styles.navbar}>
      <Text style={{flex:0.3, textAlign:"left"}}>{'< |'}</Text>
        <Text style={{flex:0.4, textAlign:"center"}}>TIME 00:00</Text>
        <Text style={{flex:0.3, textAlign:"right"}}>dd</Text>
      </View>
      <View style={styles.content}>
      {/* <Animated.View style={{ transform: decompose2d(centerMap) }}>
        <Image style={styles.CENTER_MAP} />
        </Animated.View>
        <Animated.View style={{ transform: decompose2d(transform2) }}>
        <Image style={styles.card}  />
        </Animated.View>
        <Animated.View style={{ transform: decompose2d(transform3) }}>
        <Image style={styles.card} />
        </Animated.View> */}
      </View>
        {/* <TouchableOpacity style={styles.pageTwoBtn} onPress={()=> Actions.popTo("loginPage")}>
            <Text>go to login page</Text>
        </TouchableOpacity> */}
     
        <View style={styles.copyRight}>
        <Grid>
          <Col>
          <Row style={styles.selectBox} size={1}>
          <TouchableOpacity style={styles.arrowBox}></TouchableOpacity>
          </Row>
          <Row style={styles.selectBtn} size={1}>
          <TouchableOpacity style={styles.arrowBtn}></TouchableOpacity>
          </Row>
          </Col>
          <Col>
          
          <Row style={styles.selectBox} size={1}>
          <TouchableOpacity style={styles.arrowBox}></TouchableOpacity>
          </Row>
          <Row style={styles.selectBtn} size={1}>
          <TouchableOpacity style={styles.arrowBtn}></TouchableOpacity>
          </Row>
          </Col>
          <Col>
          <Row style={styles.selectBox} size={1}>
          <TouchableOpacity style={styles.arrowBox}></TouchableOpacity>
          </Row>
          <Row style={styles.selectBtn} size={1}>
          <TouchableOpacity style={styles.arrowBtn}></TouchableOpacity>
          </Row>
          </Col>
          <Col>
            <Row style={styles.selectBox} size={1}>
              <TouchableOpacity style={styles.arrowBox}></TouchableOpacity>
            </Row>
            <Row style={styles.selectBtn} size={1}>
              <TouchableOpacity style={styles.arrowBtn}></TouchableOpacity>
            </Row>
          </Col>
          <Col>
            <Row style={styles.selectBox} size={1}>
              <TouchableOpacity style={styles.clearBtn}>
                <Text>CLEAR</Text>
              </TouchableOpacity>
            </Row>
            <Row style={styles.selectBtn} size={1}>
              <TouchableOpacity style={styles.goBtn}>
                <Text>GO</Text>
              </TouchableOpacity>
            </Row>
          </Col>
          {/* <Col><Row style={styles.selectBtn} size={1}></Row></Col> */}
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
  navbar:{
    flex:0.08,
    backgroundColor:"red",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  copyRight: {
      flex: 0.4,
      alignItems: "center"
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
    justifyContent:"center",
  },
  selectBox:{
    justifyContent:"center",
    alignItems:"center"
  },
  arrowBtn:{
    backgroundColor: '#9ad3bc',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 3,
    borderRadius: (70 / 2),
    width: 70,
    height: 70,
  },
  arrowBox:{
    backgroundColor: 'rgba(20,174,255,0.51)',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 3,
    borderRadius: 10,
    width: 70,
    height: 70,
  },
  goBtn:{
    backgroundColor: '#f5b461',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 3,
    borderRadius: 10,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  clearBtn:{
    backgroundColor: '#ec524b',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 3,
    borderRadius: 10,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  }

})
