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
import Login from './android/app/components/Login.js';
const Application =StackNavigator({
  Home:{screen:Login},
},{
  navigationOptions:{
    header:false,
  }
});
export default class App extends React.Component  {
  render() {
    return (
      <Application />
    );
  }
}
