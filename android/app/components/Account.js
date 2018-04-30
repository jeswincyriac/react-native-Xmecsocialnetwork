import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList

  } from 'react-native';
  var {bp, vw, vh} = require('react-native-relative-units')(375);
  import About from './Accountcomp/About.js';

  import Work from './Accountcomp/Work.js';
  import Education from './Accountcomp/Education.js';


  import Mainpart from "./Accountcomp/Mainpart.js";

  import Icon from 'react-native-vector-icons/MaterialIcons';

  export default class Account extends React.Component {
      static navigationOptions = {
          tabBarLabel: 'My Account',
         tabBarIcon: () => <Icon size={30} name="account-circle"  />
      }
      render() {
        return(
            <ScrollView style={{

                }}>
                <View style={{

                        //height:vh*120,
                        flex:1

                    }}>
                  <Mainpart/>

                 <View style={{
                          backgroundColor:"#cfd8dc",
                          //backgroundColor:"#EEF2FB",
                          flex:1,
                          padding:16,


                      }}>
                      <About/>

                      <Work/>

                      <Education/>

                 </View>
                </View>
            </ScrollView>
        );
      }
}
