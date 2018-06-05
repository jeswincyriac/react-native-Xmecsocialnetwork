import {combineReducers} from "redux"
import componentStates from "./Reducer-component-states.js"

const allReducers = combineReducers({
    states: componentStates
});

export default allReducers;
