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
                      }}>Work Experience</Text>

                  <View style={{
                          height:2,
                          backgroundColor:"#54AFF5",
                          alignSelf: 'stretch',
                          borderRadius:20,
                          marginTop:4
                      }}>
                  </View>
                  <View style={{
                          flex:1,
                          borderWidth:1,
                          alignSelf:"stretch",
                          borderColor:"#cfd8dc",
                          marginTop:24,
                          padding:7
                      }}>

                                <Text style={{
                                          color:"rgba(0,0,0,.87)",
                                          fontWeight:"bold",
                                          fontSize:16
                                    }}
                                    >UI Designer</Text>
                                <Text style={{
                                          color:"rgba(0,0,0,.53)",
                                          fontWeight:"bold"
                                    }}
                                    >Facebook</Text>
                                <Text style={{
                                          color:"rgba(0,0,0,.53)",
                                          fontWeight:"bold"
                                    }}
                                    >(2010-2016)</Text>
                                <Text style={{
                                          color:"rgba(0,0,0,.53)",
                                          fontWeight:"bold",
                                          marginTop:5
                                    }}
                                    >Additional info to be displayed,if the user suggests</Text>


                  </View>
                  <View style={{
                          flex:1,
                          borderWidth:1,
                          alignSelf:"stretch",
                          borderColor:"#cfd8dc",
                          marginTop:12,
                          padding:7
                      }}>

                                <Text style={{
                                          color:"rgba(0,0,0,.87)",
                                          fontWeight:"bold",
                                          fontSize:16
                                    }}
                                    >Data Analyst</Text>
                                <Text style={{
                                          color:"rgba(0,0,0,.53)",
                                          fontWeight:"bold"
                                    }}
                                    >Facebook</Text>
                                <Text style={{
                                          color:"rgba(0,0,0,.53)",
                                          fontWeight:"bold"
                                    }}
                                    >(2010-2016)</Text>
                                <Text style={{
                                          color:"rgba(0,0,0,.53)",
                                          fontWeight:"bold",
                                          marginTop:5
                                    }}
                                    >Additional info to be displayed,if the user suggests</Text>


                  </View>



            </View>


        );
      }


    }
