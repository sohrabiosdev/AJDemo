import {applyMiddleware, combineReducers, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from '@react-native-community/async-storage';
import {UserReducer} from "../reducers/User";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["happinessCount", "happinessDate"],
};

const rootReducer = combineReducers({
    userReducer: persistReducer(persistConfig, UserReducer)
});

let store = createStore(rootReducer, applyMiddleware(thunk));

export default  store;

export const persistedStore = persistStore(store);
