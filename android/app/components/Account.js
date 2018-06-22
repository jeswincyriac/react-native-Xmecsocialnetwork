import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity
  } from 'react-native';
  var {bp, vw, vh} = require('react-native-relative-units')(375);
  import About from './Accountcomp/About.js';

  import Work from './Accountcomp/Work.js';
  import Education from './Accountcomp/Education.js';


  import Mainpart from "./Accountcomp/Mainpart.js";

  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Icone from 'react-native-vector-icons/MaterialCommunityIcons';
  import {connect} from "react-redux";
 class Account extends React.Component {
      static navigationOptions = {
          tabBarLabel: 'My Account',
         tabBarIcon: () => <Icon size={30} name="account-circle"  />
      }
      render() {
        return(
            <View>
            <TouchableOpacity style={{
                    height:56,
                    width:56,
                    position:"absolute",
                    right:3*vw,
                    top:5*vh,
                    zIndex:10,
                    backgroundColor:'rgba(84, 175, 245,.8)',
                    borderRadius:150,
                    justifyContent:"center",
                    alignItems:"center"

                }}
                onPress={()=>{this.props.update("edit","hai")}}
                >
                <Icone size={28} name="account-edit" color="#fff" />
            </TouchableOpacity>
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
            </View>
        );
      }
}

function mapDispatchToProps(dispatch){

    return {
      update: (dispatchType,dispatchPayload) => {


           action = { payload: dispatchPayload,type: dispatchType}

        dispatch(action);
      }
    };
}


 export default connect(null,mapDispatchToProps)(Account)
