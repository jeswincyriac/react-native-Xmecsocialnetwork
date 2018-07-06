import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  //TextInput,

  TouchableOpacity,
  AsyncStorage,
  Image,
  ScrollView,
  ImageBackground,
TouchableWithoutFeedback,
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import TextInput from 'react-native-material-textinput';
import { StackNavigator } from 'react-navigation';
import Checkbox from 'react-native-custom-checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icone from 'react-native-vector-icons/MaterialCommunityIcons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import DismissKeyboard from 'dismissKeyboard';
import {connect} from "react-redux";
var {bp, vw, vh} = require('react-native-relative-units')(375);
let valuelog = false;
class Login extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState =async () =>{
    var value = await AsyncStorage.getItem('user');
    if (value !== null){
       this.props.nest("Profile");
    }

  }
  render() {
    return(
        <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>
            <View style={{
                flex:1,
                justifyContent:"center",
                alignItems:"center",

            }}>

                            <View style={{                      //username
                                   // backgroundColor:"#FFF",
                                    flexDirection:"row",

                                    justifyContent:"center",
                                    alignItems:"center"
                                }}>
                                     <View style={{
                                            // backgroundColor:"#F44336",

                                         }}>

                                         <Icone name="email-outline" size={24} color="#fff"/>
                                     </View>
                                     <View style={{
                                             width:250,
                                             marginLeft:15
                                         }}>
                                           <TextInput

                                               label="Email"
                                               labelColor="#90CAF9"
                                               labelActiveColor="#90CAF9"
                                               color="#fff"
                                               underlineColor="#fff"
                                               underlineActiveColor="#90CAF9"
                                               autoCorrect={false}
                                             onChangeText={(text) => {this.props.update("Username",text)}}
                                            />
                                     </View>
                           </View>


                           <View style={{                 //password
                                   flexDirection:"row",
                                   justifyContent:"center",
                                   alignItems:"center",
                               }}>

                               <Icon name="lock-outline" size={24} color="#fff"/>
                               <View style={{
                                       width:250,
                                       marginLeft:15
                                   }}>
                               <TextInput
                                   label="Password"
                                   labelColor="#90CAF9"
                                   labelActiveColor="#90CAF9"
                                   underlineColor="#fff"
                                   underlineActiveColor="#90CAF9"
                                   color="#fff"
                                   autoCorrect={false}
                                   secureTextEntry={true}
                                   onChangeText={(text) => {this.props.update("passwordL",text)}}
                                   />
                               </View>
                           </View>

                           <TouchableOpacity
                           style={{
                               padding: 24,
                            alignItems: 'center',
                            justifyContent:"center",
                            marginTop:20,
                            }}
                           onPress={this.login}>
                                   <View style={{

                                           height:36,
                                           alignItems:"center",
                                           justifyContent:"center",
                                           width:88,
                                           borderColor:"#ffff",
                                           borderRadius:100,
                                           borderWidth:2,
                                           paddingLeft:16,
                                           paddingRight:16,
                                           backgroundColor: 'rgba(168,168,168,.3)',

                                       }}>
                                    <Text style={{
                                        fontFamily:'Roboto-medium',
                                        fontSize:13,
                                        color:"#fff"
                                    }}>LOG IN</Text>
                                    </View>
                           </TouchableOpacity>

                           <TouchableOpacity style={{
                               padding:16,
                           }} >
                           <Text style={{
                               color:'#fff',
                               //textDecorationLine: 'underline',
                               fontStyle:'italic'
                           }}>Forgot Password ?</Text>
                           </TouchableOpacity>

                           <View style={{
                               position:"absolute",
                               bottom:0,
                               width:vw *100,
                               backgroundColor:'rgba(0,0,0,0.3)',
                               flexDirection:"row",
                               justifyContent:"center",
                               alignItems:"center",
                               height:48,
                           }}>

                                       <TouchableOpacity  style={{
                                           flex:1,
                                           justifyContent:"center",
                                           alignItems:"center",

                                           height:48
                                       }}>
                                       <Text style={{
                                           color:'rgba(255,255,255,1)',
                                           //fontWeight:"bold",
                                           fontSize:19,
                                       }}>Guest Login</Text>
                                       </TouchableOpacity>

                                       <View style={{
                                               height:48,
                                               width:4,
                                               backgroundColor:"rgba(0,0,0,0.1)"
                                           }}>
                                       </View>


                                       <TouchableOpacity  style={{
                                           flex:1,
                                           justifyContent:"center",
                                           alignItems:"center",
                                           height:48
                                       }}
                                         onPress={this.register}  >

                                       <Text style={{
                                           color:'rgba(255,255,255,1)',
                                           //fontWeight:"bold",
                                           fontSize:20,

                                          // alignItems:'center',
                                          // justifyContent:'center'
                                      }}>Register</Text>

                                       </TouchableOpacity>


                           </View>

            </View>
       </TouchableWithoutFeedback>

    );
  }
 login = () => {
        // this.props.nest("Profile");
        //console.log(this.props.Logstate.Username)
      // this.props.navigation.navigate('Profile')
    // alert('test');
    //------fetch request  to be tested with a backend server running
      fetch('http://'+url+'/v1/login', {
         method: 'POST',
         body: JSON.stringify({
              "email":this.props.Logstate.Username ,
              "password": this.props.Logstate.password,
            })
      }).then((response) => response.json())
      .then ((res) =>{
            /*  if (res.success === true){
                 AsyncStorage.setItem('user',res.user);
                 this.props.navigation.navigate('Profile');
                   }
              else {
              alert(res.message);
                   } */
              console.log(res)

    });




    // alert('profile not created');
   }

   register = ()=>{

       this.props.callbackFromParent(valuelog);

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

        Logstate:state.Logstate
    }
}

export default connect(mapstatetoprops,mapDispatchToProps)(Login)
