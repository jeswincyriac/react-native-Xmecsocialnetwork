import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';

  export default class Work extends React.Component {
     
      render() {
        return(

            <View  style={{
                flex:1,
                backgroundColor:"#fff",
                elevation:4,
                padding:16,
                justifyContent:"center",
                alignItems:"center",
                marginTop:8
                }}>

                  <Text style={{
                          color:"rgba(0,0,0,.87)",
                          fontSize:16,
                          fontWeight:"bold"
                      }}>Work</Text>

                  <View style={{
                          height:2,
                          backgroundColor:"#54AFF5",
                          alignSelf: 'stretch',
                          borderRadius:20,
                          marginTop:4
                      }}>
                  </View>


            </View>


        );
      }


    }
