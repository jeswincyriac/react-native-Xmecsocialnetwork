import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Picker,

} from 'react-native';

var {bp, vw, vh} = require('react-native-relative-units')(375);
import DatePicker from 'react-native-datepicker';
let valuelog = true;
export default class Register extends React.Component {
    constructor(props){
      super(props)
      this.state = {date:"",
                    batch:"",}//
    }

    login = ()=>{

        this.props.callbackFromParent(valuelog);

    }
    register= ()=>{
        this.props.nest("Profile");
    }

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
                  style={styles.textInput} placeholder='rollnumber'
                  placeholderTextColor='rgba(255,255,255,0.7)'
                  //onChangeText={(password) => this.setState({password})}
                  //fontStyle={this.state.password.length == 0 ? 'italic' : 'normal'}
                  underlineColorAndroid='black'
                 />


                <DatePicker
                 style={{width: 200}}
                 mode="date"
                 placeholder="Date Of Birth"
                 date={this.state.date}
                 format="YYYY-MM-DD"
                 minDate="2016-05-01"
                 maxDate="2016-06-01"
                 confirmBtnText="Confirm"
                 cancelBtnText="Cancel"
                 customStyles={{
                   dateIcon: {
                     position: 'absolute',
                     left: 0,
                     top: 4,
                     marginLeft: 0
                   },
                   dateInput: {
                     marginLeft: 36,
                   },
                   dateText: {
                    color: '#fff'
                    },
                   // ... You can check the source to find the other keys.
                 }}
                 onDateChange={(date) => {this.setState({date: date})}}
                />

                <DatePicker
                 style={{width: 200}}
                 mode="date"
                 placeholder="passout year couldnt find an year picker may use number picker"
                 date={this.state.date}
                 format="YYYY-MM-DD"
                 minDate="2016-05-01"
                 maxDate="2016-06-01"
                 confirmBtnText="Confirm"
                 cancelBtnText="Cancel"
                 customStyles={{
                   dateIcon: {
                     position: 'absolute',
                     left: 0,
                     top: 4,
                     marginLeft: 0,
                    backgroundColor:'rgba(0,0,0,0.7)',
                   },
                   dateInput: {
                     marginLeft: 36,
                     backgroundColor:'rgba(0,0,0,0.7)',
                   },
                   dateText: {
                    color: '#fff'
                    },
                   // ... You can check the source to find the other keys.
                 }}
                 onDateChange={(date) => {this.setState({date: date})}}
                />
                <View style={{flexDirection: 'row',
                          height:50,

                      alignItems:'center'
                       }}>


                   <Text style={{color:"#fff"}}>Branch  </Text>

                    <Picker
                          selectedValue={this.state.batch}
                          style={{ height: 20, width: 150 ,
                                    color:"#000",
                                    backgroundColor:"#fff",
                                    }}
                          onValueChange={(itemValue, itemIndex) => this.setState({batch: itemValue})}
                          mode='dropdown'>
                          <Picker.Item label="-select-" value="NULL" />
                          <Picker.Item label="CS" value="CS" />
                          <Picker.Item label="EC" value="EC" />
                          <Picker.Item label="EEE" value="EEE" />
                          <Picker.Item label="EB" value="EB" />

                     </Picker>



                </View>


            </View>

            <TouchableOpacity  style={styles.register}
                      onPress={this.register}  >
                    <Text style={{
                        fontWeight:'bold',
                        fontSize:21,
                        color:"#fff"
                              }}>Register</Text>
            </TouchableOpacity>
            <View style={{
                         //height:40,
                         width:100 * vw,
                         justifyContent:"flex-end",
                         flex:1,
                         backgroundColor:'rgba(255,255,255,0)',
                                              }}>

                    <TouchableOpacity style={{backgroundColor:"rgba(0,0,0,.5)",
                                  height:40,
                                  width:100*vw,
                                  justifyContent:"center",
                                  alignItems:"center",
                                 /// borderRadius:10,
                                  //marginBottom:2
                              }}
                         onPress= {this.login} >

                        <Text style={{
                                    color:"#fff",
                                    fontSize:20
                            }}>Already Registered? Login</Text>

                    </TouchableOpacity>

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
    //alignItems:"space-around",
     justifyContent:"space-around",

     marginTop:vh * 25,
     backgroundColor:'rgba(0,0,0,0.7)',

 },
 textInput:{
   alignSelf:'stretch',
 //  padding:5,

   color: '#fff',
   height:50,
   fontSize:18,
   marginTop:10,
   backgroundColor:'rgba(0,0,0,0.7)',

 },
 register:{
     backgroundColor:"#0099FF",
     //marginTop:100,
     height:60,
     flexDirection:"row",
     // background color must be setssss
     //borderWidth: 1,
     //borderColor: 'rgba(168,168,168,.2)',
     borderRadius:100,
     width:180,
     justifyContent:"center",
    alignItems:"center",
    marginTop:20,
 }

});
