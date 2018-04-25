import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';

  export default class Account extends React.Component {
      static navigationOptions = {
         tabBarIcon: () => <Icon size={24} name="account-circle"  />
      }
      render() {
        return(

            <View>

              <Text>Account</Text>

            </View>


        );
      }
}
