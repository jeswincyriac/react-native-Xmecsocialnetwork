import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  var {bp, vw, vh} = require('react-native-relative-units')(375);
  import {connect} from "react-redux";
  class About extends React.Component {

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
                    <View
                        style={{
                             alignSelf:"stretch"
                        }}>
                    <TextInput style={{
                            marginTop:24,
                           color:"rgba(0,0,0,0.87)"
                        }}
                     multiline={true}
                     underlineColorAndroid="transparent"
                     spellCheck={false}
                     value={this.props.userdetails.aboutstatement}
                     editable={this.props.userdetails.editable}
                    ></TextInput>
                    </View>

                    <View style={{
                            flex:1,
                            borderWidth:1,
                            alignSelf:"stretch",
                            borderColor:"#cfd8dc",
                            marginTop:24,
                            padding:7,
                            flexDirection:"row"
                        }}
                               >

                                  <Text style={{
                                            color:"rgba(0,0,0,.87)",
                                            fontWeight:"bold"
                                      }}
                                      >Passout Year:</Text>
                                  <TextInput style={{
                                        // backgroundColor:"rgba(0,0,1,.5)",
                                         color:"rgba(0,0,0,0.87)",
                                         height:20,
                                         padding:0
                                      }}

                                   underlineColorAndroid="transparent"
                                   spellCheck={false}
                                   value={this.props.userdetails.passoutyear}
                                   editable={this.props.userdetails.editable}
                                  ></TextInput>

                   </View>

                    <View style={{
                            flex:1,
                            borderWidth:1,
                            alignSelf:"stretch",
                            borderColor:"#cfd8dc",
                            marginTop:12,
                            padding:7,
                            flexDirection:"row"
                        }}>

                                  <Text style={{
                                            color:"rgba(0,0,0,.87)",
                                            fontWeight:"bold"
                                      }}
                                      >Course:</Text>
                                  <TextInput style={{
                                        // backgroundColor:"rgba(0,0,1,.5)",
                                         color:"rgba(0,0,0,0.87)",
                                         height:20,
                                         padding:0
                                      }}

                                   underlineColorAndroid="transparent"
                                   spellCheck={false}
                                   value={this.props.userdetails.course}
                                   editable={this.props.userdetails.editable}
                                  ></TextInput>

                    </View>
                    <View style={{
                            flex:1,
                            borderWidth:1,
                            alignSelf:"stretch",
                            borderColor:"#cfd8dc",
                            marginTop:12,
                            padding:7,
                            flexDirection:"row"
                        }}>

                                  <Text style={{
                                            color:"rgba(0,0,0,.87)",
                                            fontWeight:"bold"
                                      }}
                                      >Branch:</Text>
                                  <TextInput style={{
                                        // backgroundColor:"rgba(0,0,1,.5)",
                                         color:"rgba(0,0,0,0.87)",
                                         height:20,
                                         padding:0
                                      }}

                                   underlineColorAndroid="transparent"
                                   spellCheck={false}
                                   value={this.props.userdetails.branch}
                                   editable={this.props.userdetails.editable}
                                  ></TextInput>

                    </View>
                    <View style={{
                            flex:1,
                            borderWidth:1,
                            alignSelf:"stretch",
                            borderColor:"#cfd8dc",
                            marginTop:12,
                            padding:7,
                            flexDirection:"row"
                        }}>

                                  <Text style={{
                                            color:"rgba(0,0,0,.87)",
                                            fontWeight:"bold"
                                      }}
                                      >DOB:</Text>


                    </View>
                    <View style={{
                            flex:1,
                            borderWidth:1,
                            alignSelf:"stretch",
                            borderColor:"#cfd8dc",
                            marginTop:12,
                            padding:7,
                            flexDirection:"row"
                        }}>

                                  <Text style={{
                                            color:"rgba(0,0,0,.87)",
                                            fontWeight:"bold"
                                      }}
                                      >Current Address:</Text>
                                  <TextInput style={{
                                        // backgroundColor:"rgba(0,0,1,.5)",
                                         color:"rgba(0,0,0,0.87)",
                                         height:20,
                                         padding:0
                                      }}
                                   multiline={true}
                                   underlineColorAndroid="transparent"
                                   spellCheck={false}
                                   value={this.props.userdetails.CurrentAddress}
                                   editable={this.props.userdetails.editable}
                                  ></TextInput>

                    </View>
                    <View style={{
                            flex:1,
                            borderWidth:1,
                            alignSelf:"stretch",
                            borderColor:"#cfd8dc",
                            marginTop:12,
                            padding:7,
                            flexDirection:"row"
                        }}>

                                  <Text style={{
                                            color:"rgba(0,0,0,.87)",
                                            fontWeight:"bold"
                                      }}
                                      >Permanent Address:</Text>
                                  <TextInput style={{
                                         backgroundColor:"rgba(0,0,1,.5)",
                                         color:"rgba(0,0,0,0.87)",
                                         height:20,
                                         padding:0,
                                         alignSelf:"stretch"
                                      }}
                                   multiline={true}
                                   underlineColorAndroid="transparent"
                                   spellCheck={false}
                                   value={this.props.userdetails.PermanentAddress}
                                   editable={this.props.userdetails.editable}
                                  ></TextInput>

                    </View>
                    <View style={{
                            flex:1,
                            borderWidth:1,
                            alignSelf:"stretch",
                            borderColor:"#cfd8dc",
                            marginTop:12,
                            padding:7,

                        }}>

                                  <Text style={{
                                            color:"rgba(0,0,0,.87)",
                                            fontWeight:"bold"
                                      }}
                                      >Contact Info</Text>
                                  <Text style={{
                                            color:"rgba(0,0,0,.53)",
                                            fontWeight:"bold"
                                      }}
                                      >Phone no:</Text>
                                  <Text style={{
                                            color:"rgba(0,0,0,.53)",
                                            fontWeight:"bold"
                                      }}
                                      >Telegram id:</Text>
                                  <Text style={{
                                            color:"rgba(0,0,0,.53)",
                                            fontWeight:"bold"
                                      }}
                                      >Email:</Text>


                    </View>





            </View>


        );
      }


    }

    function mapstatetoprops(state){
        return{

            userdetails:state.userdetails
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

export default connect(mapstatetoprops,mapDispatchToProps)(About)
