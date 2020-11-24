import React, { Component, useState } from 'react';
// import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';

import { Dimensions, View, Image, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';
import { green } from 'ansi-colors';
import Animated from "react-native-reanimated";
import { decompose2d, tween2d, useLoop } from "react-native-redash";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//timeer
// import moment from "moment";
// import momentDurationFormatSetup from "moment-duration-format";
// momentDurationFormatSetup(moment);

import { Col, Row, Grid } from "react-native-easy-grid";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = (CARD_WIDTH * ratio) / 3;

const CENTER_ratio = 228 / 362;
export const CENTER_CARD_WIDTH = width * 0.8;
export const CENTER_CARD_HEIGHT = CENTER_CARD_WIDTH;



export default GamePlayPage = () => {
  const arrowColor = "#222831";
  const moveLenght = 10;
  const [arrowBox, setArrowBox] = new useState([]);

  const [characterMoveX, setCharacterMoveX] = new useState(0);
  const [characterMoveY, setCharacterMoveY] = new useState(140);

  const moveCharacter = () => {
    arrowBox.forEach(moveArrow => {
      switch (moveArrow) {
        case "arrow-bottom-left-thick":
          setCharacterMoveY(oldPosition => oldPosition + moveLenght);
          if (characterMoveX < moveLenght) {
            setCharacterMoveX(oldPosition => -(moveLenght - oldPosition));
            break;
          }
          setCharacterMoveX(oldPosition => oldPosition - moveLenght);

          break;
        case "arrow-top-left-thick":
          if (characterMoveX < moveLenght) {
            setCharacterMoveX(oldPosition => -(moveLenght - oldPosition));
          }
          if (characterMoveY < moveLenght) {
            setCharacterMoveY(oldPosition => -(moveLenght - oldPosition));
          }
          if (characterMoveX > moveLenght) {
            setCharacterMoveX(oldPosition => oldPosition - moveLenght);
          }
          if (characterMoveY > moveLenght) {
            setCharacterMoveY(oldPosition => oldPosition - moveLenght);

          }
          break;
        case "arrow-top-right-thick":
          setCharacterMoveX(oldPosition => oldPosition + moveLenght);
          if (characterMoveY < moveLenght) {
            setCharacterMoveY(oldPosition => -(moveLenght - oldPosition));
            break;
          }
          setCharacterMoveY(oldPosition => oldPosition - moveLenght);
          break;
        case "arrow-bottom-right-thick":
          setCharacterMoveY(oldPosition => oldPosition + moveLenght);
          setCharacterMoveX(oldPosition => oldPosition + moveLenght);
          break;
        default:
      }
    });
    setArrowBox([])

  }

  const selectArrow = (newArrow) => {
    if (arrowBox.length < 4) {
      setArrowBox(oldArray => [...oldArray, newArrow])
    }
  }
  const removeArrow = (arrowTarget) => {
    if (arrowBox.length > 0) {
      arrowBox.splice(arrowTarget, 1);
      setArrowBox(oldArray => [...oldArray])
    }
  }
  // const transform2 = [
  //   { translateY: -10 },
  //   { translateX: 0 },
  //   { rotate: Math.PI / 0.5 },
  //   { skewY: Math.PI / 6 },
  //   { scale: 0.8 },
  // ];
  const transform2 = [
    { translateY: 30 },
    { translateX: -135 },
    { rotate: 0 },
    { skewY: 0.3 },
    { scale: 0.8 },
  ];
  const transform3 = [
    { translateY: -(CARD_HEIGHT - 30) },
    { translateX: (width / 2) - 80 },
    { rotate: 0 },
    { skewY: -0.3 },
    { scale: 0.8 },
  ];
  const centerMap = [
    { translateY: 150 },
    { translateX: 0 },
    // { rotateX: '-45deg' },
    { rotate: 2.15 },
    { skewY: 0.7 },
    { skewX: 0.3 },
    { scale: 0.8 },
  ];
  const character = [
    { translateY: characterMoveY },
    { translateX: characterMoveX },
    // { rotateX: '-45deg' },
    // { rotate: 2.15 },
    // { skewY: 0.7 },
    // { skewX: 0.3 },
    // { scale: 0.8 },
  ];
  const monster = [
    { translateY: 100 },
    { translateX: characterMoveX },
  ];

  // source={require("../assets/card1.png")}
  return (
    <View style={styles.container}>
      <View style={styles.navbar}></View>
      <View style={styles.navbar}>
        <View style={{ flex: 0.3, textAlign: "left" }}>
          <TouchableOpacity onPress={() => Actions.popTo("loginPage")}>
          <Icon name="arrow-left-bold" size={40} color={"#222"} />
          
          </TouchableOpacity>
        </View>
        <Text style={{ flex: 0.4, textAlign: "center", fontSize: 30 }}>TIME
       </Text>
        <View style={{ flex: 0.3 }}>
          <Text style={{ textAlign: "right" }}>
            <Icon name="lightbulb-outline" size={40} color={arrowColor} />
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Animated.View style={{ transform: decompose2d(centerMap) }}>
          <Image style={styles.CENTER_MAP} />
        </Animated.View>
        <Animated.View style={{ transform: decompose2d(transform2) }}>
          <Image style={styles.card} />
        </Animated.View>
        <Animated.View style={{ transform: decompose2d(transform3) }}>
          <Image style={styles.card} />
        </Animated.View>

        {/* <Animated.Image style={[styles.monster,{ transform: decompose2d(monster) }]} source={require('../assets/alphabet/A.png')}></Animated.Image> */}

        <Animated.View style={[styles.character, { transform: decompose2d(character) }]}></Animated.View>

      </View>

      {/* <TouchableOpacity style={styles.pageTwoBtn} onPress={()=> Actions.popTo("loginPage")}>
            <Text>go to login page</Text>
        </TouchableOpacity> */}

      <View style={styles.copyRight}>
        <Grid>
          <Col>
            <Row style={styles.selectBox} size={1}>
              <TouchableOpacity style={styles.arrowBox} onPress={() => { removeArrow(0) }}>
                <Icon name={arrowBox[0]} size={40} color={arrowColor} /></TouchableOpacity>
            </Row>
            <Row style={styles.selectBtn} size={1}>
              <TouchableOpacity style={styles.arrowBtn} onPress={() => { selectArrow("arrow-bottom-left-thick") }}>
                <Icon name="arrow-bottom-left-thick" size={40} color={arrowColor} />
              </TouchableOpacity>
            </Row>
          </Col>
          <Col>

            <Row style={styles.selectBox} size={1}>
              <TouchableOpacity style={styles.arrowBox} onPress={() => { removeArrow(1) }}>
                <Icon name={arrowBox[1]} size={40} color={arrowColor} /></TouchableOpacity>
            </Row>
            <Row style={styles.selectBtn} size={1}>
              <TouchableOpacity style={styles.arrowBtn} onPress={() => { selectArrow("arrow-bottom-right-thick") }}>
                <Icon name="arrow-bottom-right-thick" size={40} color={arrowColor} />
              </TouchableOpacity>
            </Row>
          </Col>
          <Col>
            <Row style={styles.selectBox} size={1}>
              <TouchableOpacity style={styles.arrowBox} onPress={() => { removeArrow(2) }}>
                <Icon name={arrowBox[2]} size={40} color={arrowColor} /></TouchableOpacity>
            </Row>
            <Row style={styles.selectBtn} size={1}>
              <TouchableOpacity style={styles.arrowBtn} onPress={() => { selectArrow("arrow-top-right-thick") }}>
                <Icon name="arrow-top-right-thick" size={40} color={arrowColor} />
              </TouchableOpacity>
            </Row>
          </Col>
          <Col>
            <Row style={styles.selectBox} size={1}>
              <TouchableOpacity style={styles.arrowBox} onPress={() => { removeArrow(3) }}>
                <Icon name={arrowBox[3]} size={40} color={arrowColor} /></TouchableOpacity>
            </Row>
            <Row style={styles.selectBtn} size={1}>
              <TouchableOpacity style={styles.arrowBtn} onPress={() => { selectArrow("arrow-top-left-thick") }}>
                <Icon name="arrow-top-left-thick" size={40} color={arrowColor} />
              </TouchableOpacity>
            </Row>
          </Col>
          <Col>
            <Row style={styles.selectBox} size={1}>
              <TouchableOpacity style={styles.clearBtn} onPress={() => { setArrowBox([]) }}>
                <Text>CLEAR</Text>
              </TouchableOpacity>
            </Row>
            <Row style={styles.selectBtn} size={1}>
              <TouchableOpacity style={styles.goBtn} onPress={() => { moveCharacter() }}>
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
  character: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    position: "absolute",
  },
  container: {
    flex: 1,
    backgroundColor: '#0278ae',
    alignItems: "center",
    zIndex: 0
  },
  pageTwoBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  navbar: {
    flex: 0.08,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10
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
    backgroundColor: '#5a3e1f'
  },
  CENTER_MAP: {
    width: CENTER_CARD_WIDTH,
    height: CENTER_CARD_HEIGHT,
    backgroundColor: "#cbe926"
  },
  selectBtn: {
    justifyContent: "center",
  },
  selectBox: {
    justifyContent: "center",
    alignItems: "center"
  },
  arrowBtn: {
    backgroundColor: '#9ad3bc',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center",
    borderWidth: 3,
    borderRadius: (70 / 2),
    width: 70,
    height: 70,
  },
  arrowBox: {
    backgroundColor: 'rgba(20,174,255,0.51)',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 10,
    width: 70,
    height: 70,
  },
  goBtn: {
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
  clearBtn: {
    backgroundColor: '#ec524b',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 3,
    borderRadius: 10,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  monster:{
    position: 'absolute',
    width:70,
    height:70,
  }
})
