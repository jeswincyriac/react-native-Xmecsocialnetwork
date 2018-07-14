import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
   Picker
  } from 'react-native';
  import TextInput from 'react-native-material-textinput';
  import {connect} from "react-redux";
  class Filter extends React.Component {
      render() {
        return(
            <View >
            <View style={{
                backgroundColor:"#cfd8dc",
               //flex:1,
                alignSelf:"stretch",
                padding:10
            }}>
               <View style={{
                   backgroundColor:"#fff",
                   padding:10,
                   elevation:6
               }}>
                    <TextInput
                        label="Passout Year(eg:2006)"
                        labelColor="rgba(0,0,0,.56)"
                        labelActiveColor="#90CAF9"
                        //underlineColor="#fff"
                        underlineActiveColor="#90CAF9"
                        keyboardType="numeric"
                        autoCorrect={false}
                        onChangeText={(text) => {this.props.update("passoutyear",text)}}
                        />

                        <Picker
                              selectedValue={this.props.Searchstate.branch}
                              style={{ height: 20, width: 130 ,
                                        color:"rgba(0,0,0,.56)",
                                       // backgroundColor:"rgba(255,255,255,.1)"
                                        }}
                              onValueChange={(itemValue, itemIndex) =>{

                                  this.props.update("branch",itemValue)
                              }
                              }
                              mode='dropdown'>
                              <Picker.Item label="Branch" value="NULL" />
                              <Picker.Item label="CS" value="CS" />
                              <Picker.Item label="EC" value="EC" />
                              <Picker.Item label="EEE" value="EEE" />
                              <Picker.Item label="EB" value="EB" />

                         </Picker>
                         <View style={{
                             justifyContent:"center",
                             alignItems:"flex-end"
                         }}>
                         <TouchableOpacity style={{
                             marginTop:10,
                             backgroundColor:"#54AFF5",
                             height:38,
                             width:80,
                             borderRadius:30,
                             right:10,
                             justifyContent:"center",
                             alignItems:"center"

                         }}
                         onPress={this.props.searchclick(this.props.Searchstate.value)}>
                         <Text style={{
                             color:"#fff"
                         }}>Search</Text>
                         </TouchableOpacity>
                         </View>
                 </View>
            </View>
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
           Searchstate:state.searchdetails
      }
  }

export default connect(mapstatetoprops,mapDispatchToProps)(Filter)
