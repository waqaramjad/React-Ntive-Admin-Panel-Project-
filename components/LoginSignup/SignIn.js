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

	 signinAction = () => {
    // return dispatch => {
      // var userEmail = 'ww@prtxdf.com'
      // var userPassword = '000000'
			const {userEmail,userPassword} = this.state;
      var myNavigator = 	this.props.prop.navigator

			// console.log(myNavigator)
			console.log('done')
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
            .then((signedinUser) => {
          
              firebase.database().ref('users/'+signedinUser.user.uid+'/' ).once('value').then(function(snapshot) {
               var checkForUser = snapshot.val()
               console.log(checkForUser.user)
               var checking = checkForUser.user
              //  var checking = 'admin'
               console.log(checking)
               console.log('checking')
               console.log('navigator ')
               

              
               if(checking=='admin'||checking=='master')
               {
                console.log('inside')
                alert('Login Success')
                myNavigator.push({
                  title: 'Admin', 
                  userUID : signedinUser.user.uid
              })
               
               }
               else if(checking=='normal'){
                console.log('else')
                alert('Login Success')
                myNavigator.push({
                  title: 'home' , 
                  userUID : signedinUser.user.uid
              })


               }
               else{
                 alert('Login Failed ')
               }
                // console.log(snapshot.val())
             
             
              });
              console.log('check'+signedinUser.user.uid)

						// 	alert('Login Success')
						// 	this.props.prop.navigator.push({
						// 		title: 'Admin'
						// })
							console.log('done 2')

            }).catch((err)=>{
              console.log(err)
							alert(err.message)
						})

    // }

}



 

	
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: -15}}>
          <IconInput 	onChangeText={userEmail => this.setState({userEmail})}
 placeholder="Username" image={require("@images/icon-user.png")}/>

          <IconInput   secureTextEntry={true}	onChangeText={userPassword => this.setState({userPassword})}
 placeholder="Password" image={require("@images/icon-password.png")}/>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginTop: 10, marginBottom: 10}}>
          <Text style={{color: '#aaa', marginRight: 5, fontSize: 12}}>
            Forgot Password?
          </Text>
        </View>

        <ButtonRoundBlue text="Login" onPress={() => this.signinAction()}
/>
{/* <Text style={{ color:'black'}}> Hello iuwef lodfind dlfg  siufb ei fril w fwyvf  */}
 {/* <Text style={myStyles.myClass}> Hello iuwef lodfind dlfg  siufb ei fril w fwyvf 
 </Text> */}
      </View>
    );
  }
}