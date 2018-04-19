import React,{Component}from 'react';
import{
    StyleSheet,
    View,
    ImageBackground,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login.js';
export default class Loginm extends React.Component {
    render() {
      return(
          <ImageBackground style={styles.background} source={require('./images/dmec.png')}  >
          <View style={styles.blacklayer}>

         <Login></Login>
          </View>
          </ImageBackground>


        );
    }
}

const styles =StyleSheet.create({


    background:{
        flex: 1,

    },
    blacklayer:{
        backgroundColor:'rgba(0,0,0,0.6)',
        flex:1,
        //alignItems:'center',
        //justifyContent:'center',
    },
});
