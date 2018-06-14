import {combineReducers} from "redux"
//import componentStates from "./Reducer-component-states.js"
import Registerdetails from "./Registerdetails"
import {createStore} from 'redux';
const allReducers = combineReducers({

    regdetails:Registerdetails
});

export default createStore(allReducers);
