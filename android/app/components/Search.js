import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons'



export default class Search extends React.Component {
      static navigationOptions = {
          tabBarLabel: 'Search',
         tabBarIcon: () => <Icon size={30} name="search"  />
      }

      render() {
        return(

            <View style={{
                    backgroundColor:"#54AFF5",
                    flex:1
                }}>


              <Text>Search</Text>


            </View>


        );
      }
  }
