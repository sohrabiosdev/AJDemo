import React, {Component, useEffect, useState} from "react";
import {Alert, Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Animated, {
    Value,
    cond,
    multiply,
    divide,
    interpolate,
} from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import {onGestureEvent, snapPoint} from "react-native-redash";

import Weave from "./Weave";
import { followPointer, snapProgress } from "./AnimationHelpers";
import {
    initialSideWidth,
    initialWaveCenter,
    sideWidth,
    waveHorRadius,
    waveHorRadiusBack,
    waveVertRadius,
} from "./WeaveHelpers";
import Content from "./Content";
import Button from "./Button";
import Home from "../screens/Home";
import {Happiness} from "../screens/Happiness";

export const assets = [
    require("../assets/firstPageImage.png"),
    require("../assets/secondPageImage.png"),
];

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
});

export const LiquidScreen = () => {
    const [showModal, setShowModal] = useState(true);
    const y = new Value(initialWaveCenter);
    const translationX = new Value(0);
    const velocityX = new Value(0);
    const state = new Value(State.UNDETERMINED);
    const gestureHandler = onGestureEvent({
        translationX,
        velocityX,
        y,
        state,
    });
    const maxDist = width - initialSideWidth;
    const isBack = new Value(0);
    const gestureProgress = cond(
        isBack,
        // interpolate(translationX[" __value"], [0, maxDist], [1, 0]),
        // interpolate(translationX[" __value"], [-maxDist, 0], [0.4, 1]),
        interpolate(translationX, {
            inputRange: [0, maxDist],
            outputRange: [1, 0],
        }),
        interpolate(translationX, {
            inputRange: [-maxDist, 0],
            outputRange: [0.4, 0],
        })
    );
    const progress = snapProgress(
        gestureProgress,
        state,
        isBack,
        snapPoint(
            gestureProgress,
            divide(
                multiply(-1, velocityX),
                cond(isBack, maxDist, multiply(maxDist, 0.4))
            ),
            [0, 1]
        )
    );
    const centerY = followPointer(y);
    const horRadius = cond(
        isBack,
        waveHorRadiusBack(progress),
        waveHorRadius(progress)
    );
    const vertRadius = waveVertRadius(progress);
    const sWidth = sideWidth(progress);
    return (
        <View style={styles.container}>
            <Happiness/>
            {/*<Modal visible={true} transparent={true}>*/}
            {/*    <PanGestureHandler {...gestureHandler}>*/}
            {/*        <Animated.View style={StyleSheet.absoluteFill}>*/}
            {/*            <Weave sideWidth={sWidth} {...{ centerY, horRadius, vertRadius }}>*/}
            {/*                <Content*/}
            {/*                    backgroundColor="red"*/}
            {/*                    source={assets[1]}*/}
            {/*                    title1="For"*/}
            {/*                    title2="Gamers"*/}
            {/*                    color="#fd5587"*/}
            {/*                />*/}
            {/*            </Weave>*/}
            {/*            <Button y={centerY} {...{ progress }} />*/}
            {/*        </Animated.View>*/}
            {/*    </PanGestureHandler>*/}
            {/*</Modal>*/}
        </View>
    );
};
