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
const Application =StackNavigator({
  Home:{screen:Loginm},
  Profile:{screen:Profile}
},{
  navigationOptions:{
    header:false,
  }
});
const store = createStore(allReducers);
export default class App extends React.Component  {
  render() {
    return (
        <Provider store={store}>
            <Application />
        </Provider>

    );
  }
}
