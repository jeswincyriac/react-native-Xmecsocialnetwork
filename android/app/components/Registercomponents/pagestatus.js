import React,{Component}from 'react';
import {View,Text} from "react-native";
import {bindActionCreaters} from "redux";
import {connect} from "react-redux";
import {changestatusstate} from "./../Actions/index.js";
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
                             backgroundColor: '#fff',
                         }}>
                     </View>
                     <View style={{
                             height:15,
                             width:15,
                             borderRadius:160,
                             borderWidth:1,
                             borderColor:"#fff",
                             margin:5,
                             backgroundColor:(this.props.states.reg == "reg2" || this.props.states.reg == "reg3")  ? '#fff' : 'transparent',
                         }}>
                     </View>
                     <View style={{
                             height:15,
                             width:15,
                             borderRadius:160,
                             borderWidth:1,
                             borderColor:"#fff",
                             margin:5,
                             backgroundColor:this.props.states.reg == "reg3" ? '#fff' : 'transparent',
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
function mapDispatchToProps(dispatch){
    return bindActionCreaters({changestatusstate:changestatusstate},dispatch)

}
export default connect(mapstatetoprops, mapDispatchToProps)(PageStatus);
