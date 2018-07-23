import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {ButtonRoundBlue, IconInput}  from "@controls";
import { Container, Header, Content, Card, CardItem,Right, Left,  Button ,  Body } from "native-base";
import styles  from './App.scss'
// const {width, height} = Dimensions.get('window')

export default class Home extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Home Screen",
      bodyText: 'React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.',
    ProfileData :{}
    };
  }

  componentWillMount(){
var myValue ;
var myThis = this 
var myUId = this.props.userUID;
    firebase.database().ref('/users/'+myUId).once('value').then(function(snapshot) {
    // firebase.database().ref('/users/anPcKVe4aFU5PeQoEo5KztUDTqb2').once('value').then(function(snapshot) {
                   myValue= snapshot.val()  
      myThis.setState({ProfileData : myValue})

      
    })
  }
  check= () =>{

    this.props.navigator.push({
      title: 'Login'
  })
  }
  
  
    render() {

      console.log(this.props)
     
      console.log(this.state.ProfileData)
      var objectData= this.state.ProfileData
      return (
        <Container>
       <Header>
          
          <Body>
           <Text style={styles.mainNav}>Profile</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
          
           
            
            <CardItem>
    {/* <Right/> */}
    <Body >
   <Text style={styles.contentText}> Name : {objectData.Fname}  {objectData.lName}</Text>
   <Text style={styles.contentText}> Email : {objectData.mail}  </Text>
   <Text style={styles.contentText}> Company Name : {objectData.CompName}  </Text>
   <Text style={styles.contentText}> User Type : {objectData.user}  </Text>
     </Body>
   </CardItem>
    
                      
                    

                 

               
                
                 
                

           
         </Card>
         <ButtonRoundBlue text="LogOut" onPress={() => this.check()}
/>
                </Content>
      </Container>

      );
    }
  }
  
 