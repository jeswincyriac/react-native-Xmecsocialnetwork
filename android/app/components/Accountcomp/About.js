import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  var {bp, vw, vh} = require('react-native-relative-units')(375);
  export default class About extends React.Component {

      render() {
        return(

            <View style={{
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
                        }}>About</Text>
                    <View style={{
                            height:2,
                            backgroundColor:"#54AFF5",
                            alignSelf: 'stretch',
                            borderRadius:20,
                            marginTop:4
                        }}>
                    </View>
                    <Text style={{
                            marginTop:24,
                            color:"rgba(0,0,0,.87)"
                        }}>Hello.This is what i have to say about myself</Text>
                    <View style={{
                            flex:1,
                            borderWidth:1,

                            borderColor:"#cfd8dc",
                            marginTop:24
                        }}>

                                  <Text>hello</Text>

                    </View>



            </View>


        );
      }


    }
