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
  //TextInput,

  TouchableOpacity,
  AsyncStorage,
  Image,
  ScrollView,
  ImageBackground,

} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import TextInput from 'react-native-material-textinput'
import { StackNavigator } from 'react-navigation';
import Checkbox from 'react-native-custom-checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
let valuelog = false;
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
       this.props.nest("Profile");
    }

  }
  render() {
    return(


    <View style={styles.blacklayer}>
      <View style={styles.form}>
             <View style={{
                    // backgroundColor:"#FFF",
                     flexDirection:"row",

                     justifyContent:"center",
                     alignItems:"center"
                 }}>
                      <View style={{
                             // backgroundColor:"#F44336",

                          }}>

                          <Icon name="account-circle" size={24} color="#fff"/>
                      </View>
                      <View style={{
                              width:210,
                              marginLeft:15
                          }}>
                            <TextInput

                                label="Username"
                                labelColor="#54AFF5"
                                labelActiveColor="#54AFF5"
                                color="#fff"
                                underlineColor="#fff"
                                underlineActiveColor="#54AFF5"
                                autoCorrect={false}
                              onChangeText={(username) => this.setState({username})}
                             />
                      </View>
            </View>
            <View style={{
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                }}>

                <Icon name="lock-outline" size={24} color="#fff"/>
                <View style={{
                        width:210,
                        marginLeft:15
                    }}>
                <TextInput
                    label="Password"
                    labelColor="#54AFF5"
                    labelActiveColor="#54AFF5"
                    underlineColor="#fff"
                    underlineActiveColor="#54AFF5"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    />
                </View>
            </View>


      <View style={styles.check}>

        <Checkbox
          style={{backgroundColor: 'rgba(168,168,168,.7)', color:'rgba(0,0,0,1)', borderRadius: 5}}
          //onChange={(name, checked) => _myFunction(name, checked)}

          />
        <Text style={{
               alignItems:"center",
               color:"#fff"

        }}>Remember me</Text>

        </View>
          <View style={{

              }}>
                          <TouchableOpacity
                          style={styles.btn}
                          onPress={this.login}>
                                  <View style={{

                                          height:36,
                                          alignItems:"center",
                                          justifyContent:"center",
                                          width:88,
                                          borderColor:"#ffff",
                                          borderRadius:100,
                                          borderWidth:2,
                                          paddingLeft:16,
                                          paddingRight:16,
                                          backgroundColor: 'rgba(168,168,168,.3)',

                                      }}>
                                   <Text style={styles.log}>LOG IN</Text>
                                   </View>
                          </TouchableOpacity>
                    </View>
      <TouchableOpacity style={styles.border} >
      <Text style={{
          color:'#fff',
          //textDecorationLine: 'underline',
          fontStyle:'italic'
      }}>Forgot Password ?</Text>
      </TouchableOpacity>
      </View >
      <View style={{

          //backgroundColor:'rgba(50,0,0,0.8)',
          flex:1,
          justifyContent:"flex-end",

      }}>
      <View style={{
           backgroundColor:'rgba(0,0,0,0.3)',
           flexDirection:"row",
           justifyContent:"center",
           alignItems:"center"


      }}>
      <TouchableOpacity  style={styles.guestcontainer}>
      <Text style={{
          color:'rgba(255,255,255,.7)',
          //fontWeight:"bold",
          fontSize:19,

         // alignItems:'center',
         // justifyContent:'center'
      }}>Guest Login</Text>
      </TouchableOpacity>
      <View style={{
              height:48,
              width:4,
              backgroundColor:"rgba(0,0,0,0.1)"
          }}>
      </View>


      <TouchableOpacity  style={styles.guestcontainer}
        onPress={this.register}  >

      <Text style={{
          color:'rgba(255,255,255,1)',
          //fontWeight:"bold",
          fontSize:20,

         // alignItems:'center',
         // justifyContent:'center'
     }}>Register</Text>

      </TouchableOpacity>
     




    </View>

    </View>
    </View>


    );
  }
 login = () => {
         this.props.nest("Profile");
      // this.props.navigation.navigate('Profile')
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
    // alert('profile not created');
   }

   register = ()=>{

       this.props.callbackFromParent(valuelog);

   }


}
const styles =StyleSheet.create({

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
      backgroundColor:'rgba(0,0,0,0.7)',
      color: '#fff',
      width:230,
      height:50,
      fontSize:18,


    },

    btn: {


      padding: 24,
      alignItems: 'center',
      justifyContent:"center",
      marginTop:20,
     // backgroundColor:"#B71C1C",

      height:48
    },
    loginuser: {

                flexDirection: 'row',
                marginTop:15,
    },
    icon:{
              height:30,

    },
    /*imagecontainer:{
           paddingBottom:10,
           paddingTop:10,
           backgroundColor:'rgba(0,0,0,0.7)',
        //  padding:10
    },*/
    check:{
        width:300,
        flexDirection: 'row',
        marginTop:5,
        //marginLeft:40,
        //backgroundColor:"#fff",

    },
    checkbox:{
        backgroundColor:"#4fc3f7",
        borderRadius:50,

    },
    log:{
          fontFamily:'Roboto-medium',
          fontSize:13,
          color:"#fff"
    },

    blacklayer:{
        //backgroundColor:'rgba(0,0,0,0.6)',
        flex:1,
        //alignItems:'center',
        //justifyContent:'center',
    },
    border:{
        marginTop:10,
        //backgroundColor:'rgba(0,0,0,1)'
    },
    guest:{
        width:50,
        height:50,
        //marginLeft:200,
        marginTop:10,
        marginRight:10

    },
    form:{
        //backgroundColor:"#fff",
        alignItems:'center',
        marginTop:200,
    },
    guestcontainer:{

        //marginTop:100,
        height:48,
        flexDirection:"row",
        // background color must be setssss
        //borderWidth: 1,
        flex:1,

        //width:160,
        justifyContent:"center",
       alignItems:"center",



    }
});
