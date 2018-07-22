import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {ButtonRoundBlue, IconInput}  from "@controls";
import { Container, Header, Content, Card, CardItem,Right, Left,  Button ,  Body } from "native-base";

// const {width, height} = Dimensions.get('window')

export default class Home extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Home Screen",
      bodyText: 'React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.'
    };
  }
  check= () =>{

    this.props.navigator.push({
      title: 'Login'
  })
  }
  
  
    render() {

      console.log(this.props)
      var myUId = this.props.userUID;
      return (
        <Container>
       
        <Content>
          <Card>
            <CardItem header>
              <Text >Profile</Text>
            </CardItem>
           
            {

               
                  // console.log(a)
                  // nativeObj.keys(MyObject).map(function(key, index) {

                    // console.log(key)
                    // console.log(index)
                    //   console.log(MyObject[key])
                    //   var objectData =  MyObject[key]; 
                    //   if(objectData.user==='admin'){

                    firebase.database().ref('/users/'+myUId).once('value').then(function(snapshot) {
                     
                      console.log( snapshot.val())
                      
                    })

    //                     return(
    //                       <CardItem>
    
    //                        <Body>
    //                       <Text> Name : {objectData.Fname}  {objectData.lName}</Text>
    //                       <Text> Email : {objectData.mail}  </Text>
    //                       <Text> Company Name : {objectData.CompName}  </Text>
    //                         </Body>
    //                         <Left >
  
    // <Button primary onPress={() =>{firebase.database().ref('/users/'+key+'/').update({user:'normal'})}}><Text>normal</Text></Button>
    // <Button danger   onPress={() =>{firebase.database().ref('/users/'+key).remove()}}><Text>Delete</Text></Button>
    
    // </Left>
    //                       </CardItem>
    //                     )


                      
                    

                 

               
                
                 
                }

           
         </Card>
                </Content>
      </Container>

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