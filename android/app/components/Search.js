import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import SearchBar from 'react-native-material-design-searchbar'
import Suggestorprofile from "./searchcomponents/Suggestorprofile.js"
import DismissKeyboard from 'dismissKeyboard';

export default class Search extends React.Component {
      static navigationOptions = {
          tabBarLabel: 'Search',
         tabBarIcon: () => <Icon size={30} name="search"  />
      }


      render() {
        return(
            <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>
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
                        height={40}
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
                      <Suggestorprofile
                          name="Jacob thomas"></Suggestorprofile>
                      <Suggestorprofile
                          name="Alwin"></Suggestorprofile>


            </View>
        </TouchableWithoutFeedback>

        );
      }
  }
