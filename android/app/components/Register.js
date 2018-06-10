import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Picker,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import DateTimePicker from 'react-native-modal-datetime-picker';
import TextInput from 'react-native-material-textinput';
 import Icon from 'react-native-vector-icons/FontAwesome';
var {bp, vw, vh} = require('react-native-relative-units')(375);
import DismissKeyboard from 'dismissKeyboard';
import DatePicker from 'react-native-datepicker';
import Register1 from './Registercomponents/Register1.js';
import Register2 from './Registercomponents/Register2.js';
import Register3 from './Registercomponents/Register3.js';
import PageStatus from './Registercomponents/pagestatus.js';
import Display from 'react-native-display';
import {connect} from "react-redux";
let valuelog = true;
class Register extends React.Component {
    constructor(props){
      super(props)
      //this.state = {reg1:false}//
    }

    login = ()=>{
        this.props.update("Loginclicked")
        this.props.callbackFromParent(valuelog);

    }




  render() {
    return(

        <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>
        <View style={{
            flex:1
        }}>
         <View style = {{
            // backgroundColor:"rgba(255,255,255,0.5)",
             justifyContent:"center",
             alignItems:"center",
             flex:1,

         }}  behavior="height">

         <Display enable={(this.props.regdetails.reg == "reg1")} style={{
                 flex:1,
                 justifyContent:"center",
                 alignItems:"center",
                // backgroundColor:"rgba(0,0,0,0.5)"
             }}>
         <Register1></Register1>
          </Display>

          <Display enable={(this.props.regdetails.reg == "reg2")} style={{
                  flex:1,
                  justifyContent:"center",
                  alignItems:"center",
                 // backgroundColor:"rgba(0,0,0,0.5)"
              }}>
          <Register2></Register2>
           </Display>

           <Display enable={(this.props.regdetails.reg == "reg3")} style={{
                   flex:1,
                   justifyContent:"center",
                   alignItems:"center",
                  // backgroundColor:"rgba(0,0,0,0.5)"
               }}>
           <Register3></Register3>
            </Display>

         <PageStatus nest2={this.props.nest}/>
          <TouchableOpacity style={{
               backgroundColor:'rgba(0,0,0,0.3)',
               flexDirection:"row",
               justifyContent:"center",
               alignItems:"center",
               height:48,
               width:vw*100,
               //alignSelf:"stretch",
               position:"absolute",
               bottom:0


          }} onPress= {this.login}>

          <Text style={{
                                    color:"#fff",
                                    fontSize:18,
                                    fontFamily:"sanserif-medium"
                            }}>Already Registered?   LOG IN</Text>

          </TouchableOpacity>
         </View>

         </View>
         </TouchableWithoutFeedback>

    );
    }
}
function mapstatetoprops(state){
    return{
        states : state.states,
        regdetails:state.regdetails
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
export default  connect(mapstatetoprops,mapDispatchToProps)(Register);
