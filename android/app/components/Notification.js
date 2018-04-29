import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
 var {bp, vw, vh} = require('react-native-relative-units')(375);
  export default class Notify extends React.Component {
      static navigationOptions = {
          tabBarLabel: 'Notifications',
         tabBarIcon: () => <Icon size={30} name="notifications"   />

      }
      render() {
        return(
            <ScrollView>

            <View style={{
                    minHeight:vh*100,
                    backgroundColor:"#cfd8dc",

                }}>
                <View style={{
                        backgroundColor:"#54AFF5",
                        height:56,
                        alignSelf:"stretch",
                        padding:20,
                        justifyContent:"center",
                        alignItems:"center",

                    }}>
                    <Text style={{
                            color:"#fff",
                            fontSize:20,
                            fontWeight:"300",
                            fontFamily:"sans-serif-medium"
                        }}>Notifications</Text>

                </View>
                <View style={{

                        borderWidth:1,
                        alignSelf:"stretch",
                        borderColor:"#cfd8dc",
                        marginTop:12,
                        marginLeft:12,
                        marginRight:12,
                        borderRadius:10,
                        padding:10,
                        backgroundColor:"#fff",
                        elevation:4,
                    }}
                           >
                              <View style={{
                                      flexDirection:"row",
                                      alignItems:"center",
                                  }}>
                                  <View style={{
                                          backgroundColor:"#54AFF5",
                                          width:16,
                                          height:16,
                                          borderRadius:150,

                                      }}>
                                  </View>
                                  <Text style={{
                                            color:"rgba(0,0,0,.87)",
                                            fontWeight:"bold",
                                            fontSize:16,
                                            marginLeft:10
                                      }}
                                      >Welcome!!</Text>
                              </View>
                              <Text style={{
                                        color:"rgba(0,0,0,.53)",
                                        fontWeight:"bold",
                                        fontSize:16,
                                  }}
                                  >Welcome to the Xmec network</Text>

               </View>



            </View>

            </ScrollView>
        );
      }


    }
