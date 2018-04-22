import React,{Component}from 'react';
import{
    StyleSheet,
    View,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './Login.js';
import Register from './Register.js';
import Display from 'react-native-display';
export default class Loginm extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        loginenable:true
      }
    }
    myCallback = (dataFromChild) => {
        this.setState({ loginenable: dataFromChild });
   }
    render() {


      return(
          <ImageBackground style={styles.background} source={require('./images/dmec.png')}  >
             <Display enable={this.state.loginenable} style={{flex:1}}>
                  <Login callbackFromParent={this.myCallback}
                          nest={this.props.navigation.navigate}/>
             </Display>
             <Display enable={!this.state.loginenable} style={{flex:1}}>
                  <Register  callbackFromParent={this.myCallback}
                  nest={this.props.navigation.navigate}/>
             </Display>


          </ImageBackground>


        );
    }
}

const styles =StyleSheet.create({


    background:{
        flex: 1,

    },


});
