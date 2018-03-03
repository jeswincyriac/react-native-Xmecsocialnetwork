/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Image,
  CheckBox,
  ImageBackground,

} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
    }
  }
  componentDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState =async () =>{
    var value = await AsyncStorage.getItem('user');
    if (value !== null){
       this.props.navigation.navigate('Profile');
    }

  }
  render() {
    return(

    <KeyboardAvoidingView behavior='padding' style = {styles.wrapper}>

    <ImageBackground style={styles.background} source={require('./images/mec.png')}  >
    <View style={styles.blacklayer}>
      <View style={styles.form}>

          <View style={styles.loginuser}>
            <View style={styles.imagecontainer}>
              <Image style={styles.icon} source={require('./images/user-shape.png')}
                resizeMode="contain"/>
            </View>
                <TextInput
                  style={styles.textInput} placeholder='Username'
                  placeholderTextColor= 'rgba(255,255,255,0.7)'
                  onChangeText={(username) => this.setState({username})}
                  fontStyle={this.state.username.length == 0 ? 'italic' : 'normal'}
                  underlineColorAndroid='transparent'
                />
          </View>

            <View style={styles.loginuser}>
              <View style={styles.imagecontainer}>
                <Image style={styles.icon} source={require('./images/padlock.png')}
                  resizeMode ="contain"/>
              </View>
                <TextInput
                  style={styles.textInput} placeholder='Password'
                  placeholderTextColor='rgba(255,255,255,0.7)'
                  onChangeText={(password) => this.setState({password})}
                  fontStyle={this.state.password.length == 0 ? 'italic' : 'normal'}
                  underlineColorAndroid='transparent'
                />
            </View>
      </View>

      <View style={styles.check}>
                <View style={styles.checkbox}>
                  <CheckBox  />
                </View>
                <Text style={{color:"#fff"}}>    Remember me</Text>

        </View>

      <TouchableOpacity
      style={styles.btn}
      onPress={this.login}>
      <Text style={styles.log}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.border} >
      <Text style={{
          color:'#fff',
          textDecorationLine: 'underline',
          fontStyle:'italic'
      }}>Forgot Password ?</Text>
      </TouchableOpacity>

    </View>
     </ImageBackground>

    </KeyboardAvoidingView>


    );
  }
 login = () => {
    // alert('test');
    /*------fetch request  to be tested with a backend server running
      fetch('http://ip;port/path', {
         method: 'POST',
         headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
            },
         body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,

            })
      })

      .then((response) => response.json())
      .then ((res) =>{
              if (res.success === true){
                 AsyncStorage.setItem('user',res.user);
                 this.props.navigation.navigate('Profile');
                   }
              else {
              alert(res.message);
            }
    })
    .done();


     */
     alert('profile not created');
   }


}
const styles =StyleSheet.create({
    wrapper:{
      flex: 1,
    },
/*    container:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      //backgroundColor:'rgba(0,0,0,0.8)',
      paddingLeft:40,
      paddingRight: 40,
  },*/
    header:{
      fontSize:24,
      marginBottom:60,
      color:'#fff',
      fontWeight:'bold',
    },
    textInput:{
      alignSelf:'stretch',
    //  padding:5,
      backgroundColor:'rgba(0,0,0,0.5)',
      color: '#fff',
      width:230,
      height:50,
      fontSize:18,


    },

    btn: {
      width:225,
      backgroundColor:'#0099FF',
      padding: 20,
      alignItems: 'center',
      marginTop:20,
      borderRadius:30,
    },
    loginuser: {

                flexDirection: 'row',
                marginTop:15,
    },
    icon:{
              height:30,

    },
    imagecontainer:{
           paddingBottom:10,
           paddingTop:10,
           backgroundColor:'rgba(0,0,0,0.5)',
        //  padding:10
    },
    check:{
        width:300,
        flexDirection: 'row',
        marginTop:5,
        marginLeft:40,
        //backgroundColor:"#fff",

    },
    checkbox:{
        backgroundColor:"#4fc3f7",
        borderRadius:50,

    },
    log:{
          fontWeight:'bold',
          fontSize:18,
          color:"#fff"
    },
    background:{
        flex: 1,

    },
    blacklayer:{
        backgroundColor:'rgba(0,0,0,0.5)',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    border:{
        marginTop:10,
        //backgroundColor:'rgba(0,0,0,1)'
    }
});
