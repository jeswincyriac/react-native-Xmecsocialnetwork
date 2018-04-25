import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Picker,

} from 'react-native';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Account from './Account.js';
import Search from './Search.js';
import Notification from './Notification.js';

const Navigation = TabNavigator(
  {
    Search: { screen: Search },
    Account: { screen: Account},
    Notify: {screen: Notification }
  },
  {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      bottomNavigationOptions: {

        rippleColor: 'blue',
        style:{
                      height:56,
                      borderColor:"black",
                      borderWidth: 0.5,
                      elevation:10//apply shadows for both ios and android




                  },

        tabs: {
          Search: {


          },
          Account: {


          },
          Notification: {


          }
        }
      }
    }
  }
)

export default class Profile extends React.Component {
    render() {
      return(
                   <Navigation/>
            );
          }

}
//badge size and position and a
