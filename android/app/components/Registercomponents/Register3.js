import React,{Component}from 'react';
import{
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {connect} from "react-redux";

class Register3 extends React.Component {
    render(){
        return(
            <View style={{
                //backgroundColor:"rgba(0,0,0,0.5)",
                flex:1,
                alignItems:"center",
                justifyContent:"center",
            }}>
            <Text style={{
                color:"#fff",
                fontSize:16,
                marginBottom:10
            }}>Enter the One Time Password send to your mail</Text>
            <TextInput style={{
                height:40,
                width:150,
                backgroundColor:"#fff"
            }}
            underlineColorAndroid="transparent"
            autoFocus={true}
            placeholder="   OTP"
            onChangeText={(text) => {this.props.update("otp",text)}}

            ></TextInput>
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

export default connect(null,mapDispatchToProps)(Register3);
