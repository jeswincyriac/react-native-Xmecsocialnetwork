import React,{Component}from 'react';
import{
    StyleSheet,
    View,
    TextInput,
    Text
} from 'react-native';

class Register2 extends React.Component {
    render(){
        return(
            <View style={{
                //backgroundColor:"rgba(0,0,0,0.5)",
                flex:1,
            }}>
            <TextInput style={{
                height:100,
                width:100,
                backgroundColor:"#fff"
            }}></TextInput>
            </View>
        );
    }
}
export default Register2;
