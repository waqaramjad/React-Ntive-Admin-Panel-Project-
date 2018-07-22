import React, { Component } from 'react';
import { StyleSheet, View,AppRegistry, FlatList,  TouchableOpacity, Dimensions, StatusBar, Image, Text, Button, Modal } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'firebase';
import { Navigator } from 'react-native-deprecated-custom-components'
import {Actions} from "react-native-router-flux";
import {ButtonRoundBlue, IconInput}  from "@controls";
// import Card from 
import { Container, Header, Content, Card, CardItem, Body } from "native-base";

const {width, height} = Dimensions.get('window')
// var  myArray = [];
var a ;
// var myArray = [] 
export default class Admin extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      titleText: "Admin Screen",
      myArray : {} , 
      bodyText: 'React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components.'
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


      //  this.setState({myArray:dummy})
      //  console.log(this.state.myArray)
     
// myArray.map((value, index)=>{
//     console.log(value)
//     console.log(index)
  
//    })

// Object.keys(myArray).map(function(value, index) {
//   console.log(value)
//   console.log(myArray[0])
//   console.log(index)

// })

    
     }
   
   )
// var maraArray = [[34,345,345,345,234,2,234,234,544,435], 'dgd', 34 , 43534 , 'gdfgd', 'fsdfsd']
// maraArray[0].map((value, index)=>{
    // console.log(myArray)
//     console.log(index)
  
//    })
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
      
        <Content>
          <Card>
            <CardItem header style={{backgroundColor: 'black'}}>
              <Text >NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
               
                <Text>
                  {/* {this.state.myArray} */} ousfbosdfs 
                </Text>
              </Body>
            </CardItem>
            {

               
                  // console.log(a)
                  nativeObj.keys(MyObject).map(function(key, index) {
                    return(
                      <CardItem>
                       <Body>
                      <Text> hy sdofhs s;idbf sdif </Text>
                        </Body>
                      </CardItem>
                    )

                 })

                //  (function(){
                  //  console.log('cheking 1')
                  //  console.log(myArray)
                  //  console.log(myArray[0])
                  //  console.log(myThis.state.myArray)
                  // var a = myThis.state.myArray[0]
                  // console.log(a)
                  //  return( <Text>suhdhsi</Text> )
                
                 
                  //  for(var key in a) {
                  //    if(a.hasOwnProperty(key)) {
                  //      console.log(key)
                  //      console.log(a[key])
                  //      console.log('cheking 2')
                  //       // return(
                  //       //   <CardItem>
                  //       //       <Body>
                  //       //         <Text> hy sdofhs s;idbf sdif </Text>
                  //       //       </Body>
                  //       //     </CardItem>
                  //       // )
                  //   }
                  // }
                //  }())
                 
                }

            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
        
//         <View >
//         <Text >
//           <Text style={styles.titleText} >
         
//             Admin
//           </Text>
//           <Text >
//             {this.state.bodyText}
//           </Text>
//         </Text>

//         <ButtonRoundBlue text="LogOut" onPress={() => this.check()}
// />

        // </View>
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