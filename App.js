/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {createStore} from 'redux';
import {Provider} from "react-redux"
import allReducers from "./android/app/components/Reducers/index.js"
import Loginm from './android/app/components/Loginm.js';
import Profile from './android/app/components/Profile.js';
import Mainpart from './android/app/components/Accountcomp/Mainpart.js';
const Application =StackNavigator({
  Home:{screen:Loginm},
  Profile:{screen:Profile},
  Logout:{screen:Mainpart}
},{
  navigationOptions:{
    header:false,
  }
});
const _XHR = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest

XMLHttpRequest = _XHR
const store = allReducers;
export default class App extends React.Component  {
  render() {
    return (
        <Provider store={store}>
            <Application />
        </Provider>

    );
  }
}
