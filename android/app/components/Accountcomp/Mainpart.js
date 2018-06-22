import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity,
  } from 'react-native';

  import Icon from 'react-native-vector-icons/MaterialIcons';
  import IconE from 'react-native-vector-icons/EvilIcons';
  import Triangle from 'react-native-triangle';
  var {bp, vw, vh} = require('react-native-relative-units')(375);
  import {connect} from "react-redux";

class Mainpart extends React.Component {

    render() {
      return(
          <View>
              <View style={{
                      height:vh*10,
                      width:vw*100,
                      backgroundColor:"#EEF2FB"
                  }}>
              </View>
              <Triangle
                width={vw*100}
                height={vh*25}
                color={'#EEF2FB'}
                direction={'up-left'}
              />
              <Triangle style={{
                  position:"absolute",
                  top:vh*10,

                    }}
                width={vw*100}
                height={vh*25}
                color={'#fff'}
                direction={'down-right'}
              />

              <View style={{
                      height:vh*15,
                      width:vw*100,
                      backgroundColor:"#fff",
                      flexDirection:"row"
                  }}>

                      <TouchableOpacity style={{
                             backgroundColor: "transparent",
                             width: 40*vw,
                             height: 5*vh,
                             borderColor: "#54AFF5",
                             borderWidth: 2,
                             borderRadius: 20,
                             marginTop:vh*8,
                             elevation:2,
                             justifyContent:"center",
                             alignItems:"center",
                             position:"absolute",
                             left:15

                         }}>
                            <Text style={{
                                    color:"rgba(0,0,0,0.87)",
                                   fontSize:16
                                }}>Connect</Text>
                        </TouchableOpacity>


                       <TouchableOpacity style={{

                              width: 40*vw,
                              height: 5*vh,
                              borderColor: "#54AFF5",
                              borderWidth: 2,
                              borderRadius: 20,
                              marginTop:vh*8,
                              elevation:2,
                              justifyContent:"center",
                              alignItems:"center",
                              position:"absolute",
                              right:15,
                              flexDirection:"row",

                          }}>
                          <IconE name="sc-linkedin" size={40} color="#0077B5"/>
                             <Text style={{
                                     color:"rgba(0,0,0,.87)"
                                 }}>View Linkedin</Text>


                         </TouchableOpacity>


              </View>
              <View
                  style={{
                      position:"absolute",
                      top:vh*32,
                      //backgroundColor:"#311b92",
                      height:60,
                      width:vw*100,
                      alignItems:"center",
                      justifyContent:"center"
                  }}>
                      <Text
                          style={{
                              fontSize:20,
                              fontFamily:"sans-serif-medium",
                              color:"rgba(0,0,0,.87)"
                          }}>{this.props.userdetails.name}</Text>
                      <View style={{
                              flexDirection:"row",
                              justifyContent:"center",
                              alignItems:"center",

                          }}>
                          <Text
                              style={{
                                  fontSize:15,
                              }}>{this.props.userdetails.occupation}</Text>
                          <View style={{
                                  //backgroundColor:"#9E9E9E",
                                  backgroundColor:"#54AFF5",
                                  height:15,
                                  width:2,
                                  borderRadius:20
                              }}>
                          </View>
                          <Text
                              style={{
                                  fontSize:15,
                              }}>{this.props.userdetails.company}</Text>

                      </View>
              </View>
              <Image
                  style={{
                      height:vw*30,
                      width:vw*30,
                      borderRadius:130,
                      position:"absolute",
                      top:vh*12,
                      left:vw*35
                  }}
                  source={this.props.userdetails.imageurl}>

              </Image>
              <View
                  style={{
                      position:"absolute",
                      top:vh*32,
                      backgroundColor:"rgba(0,0,0,0)",
                  }}
                  >
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

export default connect(mapstatetoprops,mapDispatchToProps)(Mainpart)
