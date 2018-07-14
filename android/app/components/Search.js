import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView
  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Iconmc from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchBar from 'react-native-material-design-searchbar'
import Suggestorprofile from "./searchcomponents/Suggestorprofile.js"
import Filter from "./searchcomponents/filterbox.js"
import DismissKeyboard from 'dismissKeyboard';
import {connect} from "react-redux";
import Display from 'react-native-display';
import url from "./url.js"

class Search extends React.Component {
      static navigationOptions = {
          tabBarLabel: 'Search',
         tabBarIcon: () => <Icon size={30} name="search"  />
      }

      search = (text) => {
                    //console.log()
                this.props.update("searchchange",text)
                 fetch('http://'+url+'/v1/search', {
                     method: 'POST',
                     body: JSON.stringify({
                        "string":text,
                        "branch":this.props.Searchstate.branch,
                        "year":this.props.Searchstate.year,
                        })
                  }).then((response) => response.json())
                  .then ((res) =>{
                       console.log(res)

                      });

      }


      render() {
        return(
            <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>
            <View style={{
                    backgroundColor:"#ffff",
                    flex:1
                }}>

                     <View style={{
                             backgroundColor:"#54AFF5",
                             elevation:4,
                             flexDirection:"row",
                             justifyContent:"center",
                             alignItems:"center",
                         }}>
                      <View style={{flex:1,
                                  backgroundColor:"#54AFF5"}} >
                      <SearchBar
                        onSearchChange={(text)=>{

                            this.search(text)
                        }}

                        height={40}
                        onFocus={() => console.log('On Focus')}
                        onBlur={() => console.log('On Blur')}
                        placeholder={'Search...'}
                        autoCorrect={false}
                        padding={5}
                        returnKeyType={'search'}
                        inputProps={{autoFocus: true}}
                        inputStyle={{
                            backgroundColor:"#fff",
                            borderRadius:60,
                            //alignItems:"stretch"


                        }}
                        />
                    </View>
                    <View style={{
                            backgroundColor:"rgba(0,0,0,.23)",
                            width:1,
                            height:40,
                            borderRadius:100
                        }}></View>
                    <View style={{
                              backgroundColor:"#fff"
                    }}>
                    <TouchableOpacity style={{
                            height:50,
                            width:40,
                            justifyContent:"center",
                            alignItems:"center",
                             backgroundColor:"#54AFF5"
                            //backgroundColor:"#fff",
                        }}
                        onPress={()=>{
                            console.log("i am pressed")
                            this.props.update("fliteroptionchange","true")}}>
                       <Iconmc name="filter" size={24} color="white"/>
                    </TouchableOpacity>
                    </View>
                      </View>
                      <View style={{
                              height:30,
                              backgroundColor:"#fff",
                              justifyContent:"center",
                             padding:5
                          }}>
                           <Display enable={!this.props.Searchstate.filter} style={{flex:1}}>
                          <Text>Suggestions</Text>
                          </Display>
                          <Display enable={this.props.Searchstate.filter} style={{flex:1}}>
                         <Text>Search Filter</Text>
                         </Display>
                      </View>
                      <Display enable={this.props.Searchstate.filter} >
                      <View>
                      <Filter searchclick={this.search}></Filter>
                      </View>
                      </Display>
                    <ScrollView>
                      <Suggestorprofile
                          name="Jacob thomas"></Suggestorprofile>
                      <Suggestorprofile
                          name="Alwin"></Suggestorprofile>
                       </ScrollView>

            </View>
        </TouchableWithoutFeedback>

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
function mapstatetoprops(state){
  return{

      Searchstate:state.searchdetails
  }
}
export default connect(mapstatetoprops,mapDispatchToProps)(Search)
