import {combineReducers} from "redux"
import componentStates from "./Reducer-component-states.js"
import {createStore} from 'redux';
const allReducers = combineReducers({
    states: componentStates
});

export default createStore(allReducers);
