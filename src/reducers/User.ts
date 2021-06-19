import {DATE_UPDATED, HAPPINESS_COUNT_UPDATED} from "../actions/actionTypes";

let defaultState = {
    happinessCount: 0,
    happinessDate: Date.now()
};

export function UserReducer(state = defaultState, action) {
    switch (action.type) {

        case DATE_UPDATED:
            return {...state, happinessDate: action.payload};

        case HAPPINESS_COUNT_UPDATED:
            return {...state, happinessCount: action.payload};

        default:
            return state;
    }
}
