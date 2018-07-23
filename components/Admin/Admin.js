import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Modal } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {ButtonRoundBlue, IconInput}  from "@controls";
// import Card from 
import styles  from './admin.scss'

import { Container, Header, Content,Title,  Card, CardItem,Right, Left,  Button ,  Body } from "native-base";

const {width, height} = Dimensions.get('window')
// var  myArray = [];
var a ;
// var myArray = [] 
export default class Admin extends Component { 

  constructor(props) {
    super(props);
    this.state = {
     
      myArray : {} 
    
    };

    // this.go = this.go.bind(this)
  }

  componentWillMount(){
  var myState = this.state
  var myThis = this 
  var a
      firebase.database().ref('/users/').on('value', function(snapshot) {
        // myArray.push(snapshot.val())
        // console.log(myArray)
        console.log(snapshot.val())
         a = snapshot.val()
      //  var dummy = myThis.state.myArray
      //  console.log(myState.myArray)
       console.log(this)
      //  dummy.push(a)
        myThis.setState({myArray:a})

        console.log(myThis.state.myArray)
        console.log(a)


      

    
     }
   
   )

  console.log('check')
  // console.log(myArray)
     

  }

  
  check= () =>{

    
    this.props.navigator.push({
      title: 'Login'
  })
  }
  
  checking= () =>{

   console.log('my checking')
  }
  
  
    render() {
      // console.log(myArray)
      var myThis = this ;
      // console.log(myArray[0])
      // this.go();
       
      this.checking();

     var maraArray = [[34,345,345,345,234,2,234,234,544,435], 'dgd', 34 , 43534 , 'gdfgd', 'fsdfsd']
     var maraArray = [[34,345,345,345,234,2,234,234,544,435]]
     maraArray[0].map((value, index)=>{
    console.log('oidfi'+value)
    console.log(index)
  
   })
   
   var MyObject = myThis.state.myArray
   var nativeObj = Object
      return (
      
        
        <Container>
        {/* <Header > <Text style={{color:'black'}}>Admin Panel </Text> </Header> */}
        {/* <Header > iugiugigi  </Header> */}
        <Header>
          
          <Body>
           <Text style={styles.mainNav}>Admin Panel</Text>
          </Body>
          <Right />
        </Header>
        <Content>

          <Card>
            
            <CardItem header style={styles.header}>
              <Text style={styles.headerText}>Admin users</Text>
            </CardItem>
         
            {

               
                  // console.log(a)
                  nativeObj.keys(MyObject).map(function(key, index) {

                    console.log(key)
                    console.log(index)
                      console.log(MyObject[key])
                      var objectData =  MyObject[key]; 
                      if(objectData.user==='Admin'){

                        return(
                          <CardItem>
    
                           <Body>
                          <Text> Name : {objectData.Fname}  {objectData.lName}</Text>
                          <Text> Email : {objectData.mail}  </Text>
                          <Text> Company Name : {objectData.CompName}  </Text>
                            </Body>
                            <Left >
  
    <Button primary onPress={() =>{firebase.database().ref('/users/'+key+'/').update({user:'normal'})}}><Text>normal</Text></Button>
    <Button danger   onPress={() =>{firebase.database().ref('/users/'+key).remove()}}><Text>Delete</Text></Button>
    
    </Left>
                          </CardItem>
                        )


                      }
                    

                 })

               
                
                 
                }

           
         </Card>
         <Card>
<CardItem header style={styles.header}>
<Text style={styles.headerText}>Normal users</Text>

</CardItem>
{

               
  // console.log(a)
  nativeObj.keys(MyObject).map(function(key, index) {

    console.log(key)
    console.log(index)
      console.log(MyObject[key])
      var objectData =  MyObject[key]; 
      if(objectData.user==='normal'){

        return(
          <CardItem>

           <Body>
          <Text> Name : {objectData.Fname}  {objectData.lName}</Text>
          <Text> email : {objectData.mail}  </Text>
          <Text> company Name : {objectData.CompName}  </Text>
            </Body>
            <Left >
<Button primary onPress={() =>{firebase.database().ref('/users/'+key+'/').update({user:'Admin'})}}><Text>Admin</Text></Button>
<Button  danger  onPress={() =>{firebase.database().ref('/users/'+key).remove()}}><Text>Delete</Text></Button>

</Left>
          </CardItem>
        )


      }
    

 })



 
}


         </Card>
        </Content>
      </Container>
        

      );
    }
  }
  
 