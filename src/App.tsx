/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Alert, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import Home from './screens/Home';
import {LiquidScreen} from './components/LiquidSwipe';
import {Happiness} from "./screens/Happiness";


export default function App() {
    return (
        <View style={{flex: 1, justifyContent: "center"}}>
            <LiquidScreen />
        </View>
    );
};

