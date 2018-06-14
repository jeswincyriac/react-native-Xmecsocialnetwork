import {combineReducers} from "redux"
import Loginstate from "./Loginreducer.js"
import Registerdetails from "./Registerdetails"
import {createStore} from 'redux';
const allReducers = combineReducers({
    Logstate:Loginstate,
    regdetails:Registerdetails
});

export default createStore(allReducers);
