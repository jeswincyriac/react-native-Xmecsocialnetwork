import React,{Component}from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  ImageBackground,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import Triangle from 'react-native-triangle';

  export default class Account extends React.Component {
      static navigationOptions = {
          tabBarLabel: 'Account',
         tabBarIcon: () => <Icon size={30} name="account-circle"  />
      }
      render() {
        return(

            <View>
            <View style={styles.headerContainer}>
                <ImageBackground
                  style={styles.headerBackgroundImage}
                  blurRadius={10}
                  source={
                    require('./images/backgroundpic.jpg')
                  }
                >
                    <View style={styles.headerColumn}>
                        <Image
                          style={styles.userImage}
                          source={
                        require('./images/profilepic.jpeg')
                          }
                        />
                    <Text style={styles.userNameText}>My Name</Text>
                        <View style={styles.userAddressRow}>
                            <View>
                                <Icon
                                  name="place"
                                  underlayColor="transparent"
                                  iconStyle={styles.placeIcon}
                                  onPress={this.onPressPlace}
                                />
                            </View>
                            <View style={styles.userCityRow}>
                                <Text style={styles.userCityText}>
                                  my city,my country
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <Triangle
                      width={90}
                      height={100}
                      color={'#D80016'}
                      direction={'up-left'}
                      direction={"down-right"}
                    />
            </View>
            </View>


        );
      }
}

const styles = StyleSheet.create({
    headerContainer: {},
    headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 35,
    },
    headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
             ios: {
                   alignItems: 'center',
                   elevation: 1,
                   marginTop: -1,
                  },
             android: {
                   alignItems: 'center',
                  },
            }),
    },
    userImage: {
    //borderColor: "#01C89E",
    borderRadius: 85,
    //borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
    },
    userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
    },
    userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
    },
    placeIcon: {
    color: 'white',
    fontSize: 26,
    },
    userCityRow: {
    backgroundColor: 'transparent',
    },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
   },

})
