import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,

  } from 'react-native';

  import Mainpart from "./Accountcomp/Mainpart.js";
  import Icon from 'react-native-vector-icons/MaterialIcons';

  export default class Account extends React.Component {
      static navigationOptions = {
          tabBarLabel: 'Account',
         tabBarIcon: () => <Icon size={30} name="account-circle"  />
      }
      render() {
        return(
            <View>
              <Mainpart/>
           </View>
        );
      }
}
