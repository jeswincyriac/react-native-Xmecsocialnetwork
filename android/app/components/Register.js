import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,


} from 'react-native';
import {bp, vw, vh} from 'react-native-relative-units'
import DatePicker from 'react-native-datepicker'
export default class Register extends React.Component {

  render() {
    return(

    <View  style = {styles.wrapper}>
    <View  style={styles.form}>

         <TextInput
          style={styles.textInput} placeholder='Name(As in college records)'
          placeholderTextColor='rgba(255,255,255,0.7)'
          //onChangeText={(password) => this.setState({password})}
          //fontStyle={this.state.password.length == 0 ? 'italic' : 'normal'}
          underlineColorAndroid='black'
         />
         <TextInput
          style={styles.textInput} placeholder='Email '
          placeholderTextColor='rgba(255,255,255,0.7)'
          //onChangeText={(password) => this.setState({password})}
          //fontStyle={this.state.password.length == 0 ? 'italic' : 'normal'}
          underlineColorAndroid='black'
         />
         <TextInput
          style={styles.textInput} placeholder=''
          placeholderTextColor='rgba(255,255,255,0.7)'
          //onChangeText={(password) => this.setState({password})}
          //fontStyle={this.state.password.length == 0 ? 'italic' : 'normal'}
          underlineColorAndroid='black'
         />


    </View>
    </View>


    );
  }




}
const styles =StyleSheet.create({

  wrapper:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
     //backgroundColor:'#607D8B',


 },
 form:{
     //height:100,
     width:250,
     alignItems:'center',
     justifyContent:'center',
     //marginTop
      backgroundColor:'rgba(0,0,0,0.7)',
 },
 textInput:{
   alignSelf:'stretch',
 //  padding:5,

   color: '#fff',
   height:50,
   fontSize:18,
   marginTop:10

 },

});
