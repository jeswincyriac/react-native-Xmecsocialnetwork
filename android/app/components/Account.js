import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ToastAndroid
  } from 'react-native';
  var {bp, vw, vh} = require('react-native-relative-units')(375);
  import About from './Accountcomp/About.js';

  import Work from './Accountcomp/Work.js';
  import Education from './Accountcomp/Education.js';


  import Mainpart from "./Accountcomp/Mainpart.js";

  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Icone from 'react-native-vector-icons/MaterialCommunityIcons';
  import {connect} from "react-redux";
  import Display from 'react-native-display';
 class Account extends React.Component {
      static navigationOptions = {
          tabBarLabel: 'My Account',
         tabBarIcon: () => <Icon size={30} name="account-circle"  />
      }
      getstyles = () => {
          if(!this.props.userdetails.editable)
          {
          return{
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
         }
        }
         else
         {
             return{
                 height:40,
                 width:70,
                 position:"absolute",
                 right:3*vw,
                 top:5*vh,
                 zIndex:10,
                 backgroundColor:'rgba(84, 175, 245,.8)',
                 borderRadius:40,
                 justifyContent:"center",
                 alignItems:"center"
             }
         }
      }


      render() {
        return(
            <View>
            <TouchableOpacity style={this.getstyles()}
                onPress={()=>{
                    if(!this.props.userdetails.editable)
                    this.props.update("edit","hai")
                    else {
                        this.props.update("save","hai")
                        ToastAndroid.show('Saved', ToastAndroid.SHORT);

                    }
                }}
                >
                <Display enable={!this.props.userdetails.editable} style={{
                        flex:1,
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                <Icone size={28} name="account-edit" color="#fff" />
                </Display>
                <Display enable={this.props.userdetails.editable} style={{
                        flex:1,
                        justifyContent:"center",
                        alignItems:"center"
                    }}>
                <Text style={{
                        color:"#fff",

                    }}>Save</Text>
                </Display>

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
function mapstatetoprops(state){
    return{

        userdetails:state.userdetails
    }
}


 export default connect(mapstatetoprops,mapDispatchToProps)(Account)
