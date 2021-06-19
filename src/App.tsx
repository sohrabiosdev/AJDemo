/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from "react-redux";
import store, {persistedStore} from "./boot/store";
import {PersistGate} from "redux-persist/integration/react";
import {LiquidScreen} from "./components/LiquidSwipe";


export default function App() {
    return  (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                <LiquidScreen />
            </PersistGate>
        </Provider>
    )
};

