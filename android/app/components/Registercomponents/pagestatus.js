import React,{Component}from 'react';
import {View,Text} from "react-native";
import {bindActionCreaters} from "redux";
import {connect} from "react-redux";
var {bp, vw, vh} = require('react-native-relative-units')(375);
class PageStatus extends React.Component {
    render() {
      return(
          <View style={{
                 // backgroundColor:"#fff",
                 marginBottom:48,
                 height:vh*15,
                 alignSelf:"stretch",
                 justifyContent:"center",
                 alignItems:"center",
                 flexDirection:"row"
              }}>
                     <View style={{
                             height:15,
                             width:15,
                             borderRadius:160,
                             borderWidth:1,
                             borderColor:"#fff",
                             margin:5,
                             backgroundColor:this.props.states.reg1 ? 'green' : 'red',
                         }}>
                     </View>
                     <View style={{
                             height:15,
                             width:15,
                             borderRadius:160,
                             borderWidth:1,
                             borderColor:"#fff",
                             margin:5,
                         }}>
                     </View>
                     <View style={{
                             height:15,
                             width:15,
                             borderRadius:160,
                             borderWidth:1,
                             borderColor:"#fff",
                             margin:5
                         }}>
                     </View>

          </View>

      );
  }
}

function mapstatetoprops(state){
    return{
        states : state.states
    }
}
export default connect(mapstatetoprops)(PageStatus);
