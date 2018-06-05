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
 import DropIcon from 'react-native-vector-icons/MaterialIcons';
var {bp, vw, vh} = require('react-native-relative-units')(375);
import DismissKeyboard from 'dismissKeyboard';
import DatePicker from 'react-native-datepicker';


export default class Register1 extends React.Component {
    constructor(props){
      super(props)
      this.state = {dob1:new Date(0),
                    batch:"",
                    isDateTimePickerVisible: false,}//
    }
    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDobPicked = (date) => {
       this.setState({dob1:date})

      this._hideDateTimePicker();
    };

    render() {
      return(



    <View style={{
        //backgroundColor:"rgba(255,255,255,0.5)"

    }}>
       <View style={{
           width:vw*80
       }}>
            <TextInput
             style={{
                   width:vw*80
             }}
             label="Name as in college records"
             labelColor="rgba(255,255,255,0.8)"
             labelActiveColor="#90CAF9"
             color="#fff"
             underlineColor="#fff"
             underlineActiveColor="#90CAF9"
             autoCorrect={false}
            />
       </View>

       <View style={{
           width:vw*80
       }}>

       <TextInput
        style={{

        }}
        label="Email"
        autoCorrect={false}
        labelColor="rgba(255,255,255,0.8)"
        labelActiveColor="#90CAF9"
        color="#fff"
        underlineColor="#fff"
        underlineActiveColor="#90CAF9"

       />

       </View>
       <View style={{
           width:vw*80
       }}>

       <TextInput
        style={{

        }}
        label="College Rollnumber"
        autoCorrect={false}
        labelColor="rgba(255,255,255,0.8)"
        labelActiveColor="#90CAF9"
        color="#fff"
        underlineColor="#fff"
        underlineActiveColor="#90CAF9"

       />

       </View>


       <View style={{
           flexDirection:"row"
       }}>
               <TouchableOpacity onPress={this._showDateTimePicker}
               style={{
                   flexDirection:"row",
                   //marginTop:10,
                   justifyContent:"center",
                   alignItems:"flex-end",
               }}>

               <Text style={{
                   color:"rgba(255,255,255,0.8)",
               }}>Date of birth:</Text>

               <DateTimePicker
               isVisible={this.state.isDateTimePickerVisible}
                 onConfirm={this._handleDobPicked}
                 onCancel={this._hideDateTimePicker}/>
                 <Text style={{
                  textDecorationLine: 'underline',
                  color:"#ffff",

              }}>  {this.state.dob1.getDate()}-{this.state.dob1.getMonth()+1}-{this.state.dob1.getYear()+1900} </Text>

               <Icon name="calendar" color="#fff" size={24} style={{marginLeft:10}}/>
                 </TouchableOpacity>
       </View>
       <View style={{flexDirection: 'row',
                 height:50,

             alignItems:'center'
              }}>




           <Picker
                 selectedValue={this.state.batch}
                 style={{ height: 20, width: 130 ,
                           color:"#fff",
                          // backgroundColor:"rgba(255,255,255,.1)"
                           }}
                 onValueChange={(itemValue, itemIndex) => this.setState({batch: itemValue})}
                 mode='dropdown'>
                 <Picker.Item label="Branch" value="NULL" />
                 <Picker.Item label="CS" value="CS" />
                 <Picker.Item label="EC" value="EC" />
                 <Picker.Item label="EEE" value="EEE" />
                 <Picker.Item label="EB" value="EB" />

            </Picker>
            <DropIcon name="arrow-drop-down" color="#fff" size={24} style={{
                //backgroundColor:"#fff"
            }}></DropIcon>
       </View>
       <KeyboardSpacer />
       <View style={{
           alignItems:"flex-end",
           justifyContent:"center",
           marginTop:20
       }}>
               <TouchableOpacity  style={{
                   height:48,
                   //backgroundColor:"rgba(255,255,255,0.8)",
                   alignItems:"center",
                   justifyContent:"center",
                   padding:16

               }}
                         onPress={this.register}  >
                               <View  style={{
                                   height:36,
                                   alignItems:"center",
                                   justifyContent:"center",
                                   borderRadius:100,
                                   backgroundColor:"rgba(168,168,168,.3)",
                                   padding:16,
                                   borderColor:"#fff",
                                   borderWidth:2

                               }}>
                               <Text style={{
                                   fontFamily:"sanserif-medium",
                                   fontSize:21,
                                   color:"#fff"
                               }}>Next</Text>
                               </View>
               </TouchableOpacity>
       </View>

     </View>

 );
 }
}
