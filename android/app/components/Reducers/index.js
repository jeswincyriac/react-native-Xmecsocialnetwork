import {combineReducers} from "redux"
import Loginstate from "./Loginreducer.js"
import Registerdetails from "./Registerdetails"
import Userdetails from "./Userreducer"
import Searchreducer from "./Searchreducer.js"
import {createStore} from 'redux';
const allReducers = combineReducers({
    Logstate:Loginstate,
    regdetails:Registerdetails,
    userdetails:Userdetails,
    searchdetails:Searchreducer
});

export default createStore(allReducers);
