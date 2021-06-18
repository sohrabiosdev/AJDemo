import React from "react";
import {Dimensions, Text, View} from "react-native";
import Animated from "react-native-reanimated";
// import { Feather as Icon } from "@expo/vector-icons";

const {sub, interpolate, Extrapolate} = Animated;
const {width} = Dimensions.get("window");
const size = 50;

interface ButtonProps {
    progress: Animated.Node<number>;
    y: Animated.Node<number>;
}

export default ({progress, y}: ButtonProps) => {
    //const translateX = interpolate(progress[" __value"], [0,0.4], [width - size - 8, 0]);
    const translateX = interpolate(progress, {
        inputRange: [0, 0.4],
        outputRange: [width - size - 8, 0],
    });
    const translateY = sub(y, size / 2);
    const opacity = interpolate(progress, {
        inputRange: [0, 0.1],
        outputRange: [1, 0],
        extrapolate: Extrapolate.CLAMP,
    });
    // const opacity =interpolate(progress[" __value"], [0, 0.1], [1, 0], Extrapolate.CLAMP);
    return (
        <Animated.View
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: size,
                height: size,
                borderRadius: size / 2,
                justifyContent: "center",
                alignItems: "center",
                transform: [{translateX}, {translateY}],
                opacity,
            }}
        >
            <View style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: "red",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Text style={{fontSize: 15, fontWeight: "500"}}> {">"} </Text>
            </View>
        </Animated.View>
    );
};
