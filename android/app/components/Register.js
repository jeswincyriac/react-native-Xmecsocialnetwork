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
import PageStatus from './Registercomponents/pagestatus.js';
let valuelog = true;
export default class Register extends React.Component {
    constructor(props){
      super(props)
      //this.state = {reg1:false}//
    }

    login = ()=>{

        this.props.callbackFromParent(valuelog);

    }




  render() {
    return(

        <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>
        <View style={{
            flex:1
        }}>
         <View style = {{
            //backgroundColor:"rgba(255,255,255,0.5)",
             justifyContent:"flex-end",
             alignItems:"center",
             flex:1,

         }}  behavior="height">


         <Register1></Register1>
         <PageStatus/>
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
