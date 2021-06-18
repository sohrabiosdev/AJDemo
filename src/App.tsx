/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import Home from './screens/Home';
import {LiquidScreen} from './components/LiquidSwipe';


export default function App() {
    return (
        <View style={{flex: 1}}>
            <LiquidScreen />
        </View>
    );
};

