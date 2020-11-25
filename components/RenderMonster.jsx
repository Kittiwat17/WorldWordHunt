import React, { useState } from 'react';
import { Dimensions, View, Image, Text, ScrollView, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import Animated from "react-native-reanimated";
import { decompose2d, tween2d, useLoop } from "react-native-redash";
import { url } from 'inspector';

const monster = [
    { translateY: 250 },
    { translateX: 200 },
];

export default RenderMonster = (prop) => {
    return (
        <>
            <Animated.Image style={[styles.monster, { transform: decompose2d(monster) }]} source={require('../assets/alphabet/A.png')}></Animated.Image>
            <Animated.Image style={[styles.monster, { transform: decompose2d(monster) }]} source={require('../assets/alphabet/N.png')}></Animated.Image>
            <Animated.Image style={[styles.monster, { transform: decompose2d(monster) }]} source={require('../assets/alphabet/T.png')}></Animated.Image>
        </>
    );
}

const styles = StyleSheet.create({
    monster: {
        position: 'absolute',
        width: 70,
        height: 70,
        zIndex: 998
    },
})

