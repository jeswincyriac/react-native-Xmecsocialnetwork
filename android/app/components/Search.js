import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Search extends React.Component {
      static navigationOptions = {
         tabBarIcon: () => <Icon size={24} name="search"  />
      }

      render() {
        return(

            <View>

              <Text>Search</Text>

            </View>


        );
      }
  }
