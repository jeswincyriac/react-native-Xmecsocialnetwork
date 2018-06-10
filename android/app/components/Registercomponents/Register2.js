import React,{Component}from 'react';
import{
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {connect} from "react-redux";
class Register2 extends React.Component {
    render(){
        return(
            <View style={{
                //backgroundColor:"rgba(0,0,0,0.5)",
                flex:1,
                //alignItems:"center",
                justifyContent:"center",
            }}>
            <View style={{
                flexDirection:"row",
                 alignItems:"center"
            }}>
            <Text style={{
                color:"#fff",
                fontSize:16,
                marginBottom:10
            }}>New Password         :  </Text>
            <TextInput style={{
                height:40,
                width:150,
                backgroundColor:"#fff"
            }}
            underlineColorAndroid="transparent"
            autoFocus={true}
            secureTextEntry={true}
            onChangeText={(text) => {this.props.update("password",text)}}
            ></TextInput>
            </View>
            <View style={{
                flexDirection:"row",
                marginTop:10,
                justifyContent:"center",
                alignItems:"center"
            }}>
            <Text style={{
                color:"#fff",
                fontSize:16,
                marginBottom:10
            }}>Confirm Password  :  </Text>
            <TextInput style={{
                height:40,
                width:150,
                backgroundColor:"#fff"
            }}
            underlineColorAndroid="transparent"
            autoFocus={true}
            secureTextEntry={true}
            onChangeText={(text) => {this.props.update("password2",text)}}
            ></TextInput>
            </View>
            <KeyboardSpacer />
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

export default connect (null,mapDispatchToProps)(Register2);
