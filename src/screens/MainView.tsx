import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, { cond, divide, interpolate, multiply, Value, } from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { onGestureEvent, snapPoint } from "react-native-redash";
import Weave from "../components/Weave";
import { followPointer, snapProgress } from "../helpers/AnimationHelpers";
import {
    initialSideWidth,
    initialWaveCenter,
    sideWidth,
    waveHorRadius,
    waveHorRadiusBack,
    waveVertRadius,
} from "../helpers/WeaveHelpers";
import Content from "../components/Content";
import HappinessButton from "../components/HappinessButton";
import { Happiness } from "./Happiness";

export const assets = [
    require("../assets/back.png"),
    require("../assets/back.png"),
];

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
});

export const MainView = () => {
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
            {/*Comment the section below to test the working of Happiness Screen*/}
            <PanGestureHandler {...gestureHandler}>
                <Animated.View style={StyleSheet.absoluteFill}>
                    <Weave sideWidth={sWidth} {...{ centerY, horRadius, vertRadius }}>
                        <Content
                            backgroundColor="black"
                            source={assets[1]}
                            title1="For"
                            title2="Department of Ajman Digital"
                            color="white"
                        />
                    </Weave>
                    <HappinessButton y={centerY} {...{ progress }} />
                </Animated.View>
            </PanGestureHandler>
        </View>
    );
};
