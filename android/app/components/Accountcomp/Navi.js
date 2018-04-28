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
import About from './About.js';
import Contacts from './Contacts.js';
import Work from './Work.js';

const Navigation = TabNavigator(
  {
    About: { screen: About},
    Contacts: { screen: Contacts},
    Work: {screen: Work},

  },
  {

    tabBarPosition: 'top',
    backBehavior:"none",

    tabBarOptions: {

        style:{

                      elevation:0,//apply shadows for both ios and android
                      //backgroundColor:"#cfd8dc"
                      backgroundColor:"#fff",
                      borderTopWidth:1,
                      borderBottomWidth:1,

                      borderColor:"#cfd8dc"
                  },
        activeTintColor :"rgba(0,0,0,0.87)",
        inactiveTintColor:"rgba(0,0,0,0.68)",
        labelStyle:{
            fontWeight:"bold"
        },
        indicatorStyle:{
            //backgroundColor:"#2962ff"
            backgroundColor:"#54AFF5"
        }

    }
  }
);

export default class Navi extends React.Component {
    render() {
      return(
                   <Navigation/>
            );
          }

}
