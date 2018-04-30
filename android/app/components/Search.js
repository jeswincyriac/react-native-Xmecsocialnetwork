import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons'
  import SearchBar from 'react-native-material-design-searchbar'



export default class Search extends React.Component {
      static navigationOptions = {
          tabBarLabel: 'Search',
         tabBarIcon: () => <Icon size={30} name="search"  />
      }


      render() {
        return(

            <View style={{
                    backgroundColor:"#ffff",
                    flex:1
                }}>

                     <View style={{
                             backgroundColor:"#54AFF5",
                             elevation:4
                         }}>
                      <SearchBar
                        onSearchChange={() => console.log('On Search Change')}
                        height={50}
                        onFocus={() => console.log('On Focus')}
                        onBlur={() => console.log('On Blur')}
                        placeholder={'Search...'}
                        autoCorrect={false}
                        padding={5}
                        returnKeyType={'search'}
                        inputProps={{autoFocus: true}}
                        inputStyle={{
                            backgroundColor:"#fff",
                            borderRadius:60,

                        }}
                        />
                      </View>
                      <View style={{
                              height:30,
                              backgroundColor:"#fff",
                              justifyContent:"center",
                             padding:5
                          }}>
                          <Text>Suggestions</Text>
                      </View>
                      <View style={{
                              borderColor:"#cfd8dc",
                              borderWidth:2,
                              padding:10,
                              flexDirection:"row",
                              alignItems:"center"
                          }}>
                          <Image style={{
                                   width:70,
                                   height:70,
                                   borderRadius:130
                              }}
                              source={
                                  require("./images/profilepic.jpeg")}
                                  >

                          </Image>
                          <View style={{


                                  marginLeft:20,
                              }}>
                              <Text
                                  style={{
                                      fontSize:18,
                                      fontFamily:"sans-serif-medium",
                                      color:"rgba(0,0,0,.87)",

                                  }}>Jacob Thomas kochuparampil</Text>
                                  <Text
                                      style={{
                                          fontSize:15,
                                          fontFamily:"sans-serif",
                                         color:"rgba(0,0,0,.87)"
                                      }}>Ui Designer  </Text>
                                  <Text
                                      style={{
                                          fontSize:15,
                                         // fontFamily:"sans-serif-medium",
                                         color:"rgba(0,0,0,.87)",
                                     }}>Computer Science</Text>
                                 <Text
                                     style={{
                                         fontSize:15,
                                        // fontFamily:"sans-serif-medium",
                                        color:"rgba(0,0,0,.87)",
                                    }}>(2010-2014)</Text>
                          </View>
                          <TouchableOpacity style={{
                                 backgroundColor: "transparent",
                                 width: 100,
                                 height: 30,
                                 borderColor: "#54AFF5",
                                 borderWidth: 2,
                                 borderRadius: 20,
                                 //marginTop:vh*8,
                                 elevation:2,
                                 justifyContent:"center",
                                 alignItems:"center",
                                 position:"absolute",
                                 right:15,


                             }}>
                                <Text style={{
                                        color:"rgba(0,0,0,0.87)",
                                       fontSize:16
                                    }}>Connect</Text>
                            </TouchableOpacity>

                      </View>






            </View>


        );
      }
  }
