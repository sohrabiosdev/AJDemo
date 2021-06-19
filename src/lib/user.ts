import store from "../boot/store";
import {DATE_UPDATED, HAPPINESS_COUNT_UPDATED} from "../actions/actionTypes";


export function setHappinessCount(count) {
    store.dispatch({
        type: HAPPINESS_COUNT_UPDATED,
        payload: count,
    });
}

export function getHappinessCount() {
    return store.getState().userReducer.happinessCount;
}

export function setHappinessDate(date) {
    store.dispatch({
        type: DATE_UPDATED,
        payload: date,
    });
}

export function getHappinessDate() {
    return store.getState().userReducer.happinessDate;
}

