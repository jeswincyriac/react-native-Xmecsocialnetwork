import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Picker,

} from 'react-native';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Profile extends React.Component {
    render() {
      return(
                <View style={{
                        flex:1,
                        backgroundColor:"#fff"
                    }}>



                            <BottomNavigation

                                    rippleColor="blue"
                                    style={{
                                      height:56,
                                      borderColor:"black",
                                      borderWidth: 0.5,
                                      position:"absolute",
                                      right:0,
                                      left:0,
                                      bottom:0,
                                      elevation:10//apply shadows for both ios and android




                                    }}

                                  >
                                    <Tab
                                      icon={<Icon size={24} name="search" />}
                                      activeIcon={<Icon size={24} color="#54AFF5" name="search" />}
                                    />
                                    <Tab
                                       isBadgeVisible="true"
                                       badgeSize={10}
                                      icon={<Icon size={24}  name="account-circle" />}
                                      activeIcon={<Icon size={24} color="#54AFF5" name="account-circle" />}
                                    />
                                    <Tab

                                      icon={<Icon size={24}  name="notifications" />}
                                      activeIcon={<Icon size={24} color="#54AFF5" name="notifications" />}
                                    />

                            </BottomNavigation>

                </View>

            );
          }

}
//badge size and position and a
