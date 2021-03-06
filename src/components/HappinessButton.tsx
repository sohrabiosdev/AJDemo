import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { AppIcon } from "../lib/IconUtils";
import { Icons } from "../icons/common";

const {sub, interpolate, Extrapolate} = Animated;
const {width} = Dimensions.get("window");
const size = 50;

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
    }
});

// This component shows the draggable smiley button on the top of other view.
interface ButtonProps {
    progress: Animated.Node<number>;
    y: Animated.Node<number>;
}

export default ({progress, y}: ButtonProps) => {
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
    return (
        <Animated.View style={[styles.container, {transform: [{translateX}, {translateY}], opacity}]}>
            <View style={styles.button}>
                <AppIcon
                    name={"happy_face"}
                    color={"#0BB5FF"}
                    provider={Icons}
                    size={40}/>
            </View>
        </Animated.View>
    );
};
