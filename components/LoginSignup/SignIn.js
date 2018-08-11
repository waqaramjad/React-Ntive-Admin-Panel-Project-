'use strict';
import React, {Component} from "react";
// import {Text, View, Dimensions} from "react-native";
import { StyleSheet, View, TouchableOpacity, Dimensions, StatusBar, Image, Text, Button, Modal } from 'react-native';
// import myStyles from './App.scss'

import {Actions} from "react-native-router-flux";
import styles from "./styles";
import {ButtonRoundBlue, IconInput}  from "@controls";
import { Navigator } from 'react-native-deprecated-custom-components'
import firebase, { database } from 'firebase';
import { StackNavigator } from 'react-navigation';


export default class SignIn extends Component {
 
  constructor(props){
		super(props)
		this.state={
			userEmail:'',
			userPassword:''
		}
	}

	



 

	
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: -15}}>
          <IconInput 	
 placeholder="Receiver email address" image={require("@images/icon-email.png")}/>

          {/* <IconInput   secureTextEntry={true}	onChangeText={userPassword => this.setState({userPassword})}
 placeholder="From" image={require("@images/icon-password.png")}/> */}
          <IconInput   
 placeholder="From" image={require("@images/icon-user.png")}/>
          <IconInput   
 placeholder="Add a comment here " image={require("@images/icon-password.png")}/>
          <IconInput   
 placeholder="Vault content" image={require("@images/icon-password.png")}/>
        </View>

     

        <ButtonRoundBlue text="Build a vault and send an email"
/>

      </View>
    );
  }
}