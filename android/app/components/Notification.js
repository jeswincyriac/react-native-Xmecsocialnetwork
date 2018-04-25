import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';

  export default class Notify extends React.Component {
      static navigationOptions = {
          tabBarLabel: 'Notifications',
         tabBarIcon: () => <Icon size={30} name="notifications"   />

      }
      render() {
        return(

            <View>

              <Text>notification</Text>

            </View>


        );
      }


    }
