import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';

  export default class Notification extends React.Component {
      static navigationOptions = {
         tabBarIcon: () => <Icon size={24} name="notifications" isBadgeVisible="true"
                     badgeSize={10}  />

      }
      render() {
        return(

            <View>

              <Text>notification</Text>

            </View>


        );
      }


    }
