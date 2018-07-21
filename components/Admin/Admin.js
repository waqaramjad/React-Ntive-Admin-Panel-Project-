import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Button, Modal } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {ButtonRoundBlue, IconInput}  from "@controls";

// const {width, height} = Dimensions.get('window')

export default class Admin extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Admin Screen",
      bodyText: 'React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.'
    };
  }
  check= () =>{

    this.props.navigator.push({
      title: 'Login'
  })
  }
  
  
    render() {
      return (
         
        <View >
        <Text >
          <Text style={styles.titleText} >
         
            Admin
          </Text>
          <Text >
            {this.state.bodyText}
          </Text>
        </Text>

        <ButtonRoundBlue text="LogOut" onPress={() => this.check()}
/>

        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  });