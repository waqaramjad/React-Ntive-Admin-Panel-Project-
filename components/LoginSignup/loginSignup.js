'use strict';
import React, {Component} from "react";
import {View, Image, TouchableOpacity, Dimensions,} from "react-native";
import {Actions} from "react-native-router-flux";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import css from "@styles/style";
import firebase from 'firebase';



var config = {
  apiKey: "AIzaSyDcyZcVQP8nuHcMJsKd5wHxoaerUW6apZQ",
  authDomain: "waqarchatapp.firebaseapp.com",
  databaseURL: "https://waqarchatapp.firebaseio.com",
  projectId: "waqarchatapp",
  storageBucket: "waqarchatapp.appspot.com",
  messagingSenderId: "676235345078"
};
firebase.initializeApp(config);





export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      visibleHeight: Dimensions.get('window').height,
      scroll: false
    };
  }

  render() {
    // console.log(this.props)

    const toolbar = (
      <View style={[css.toolbarMenu]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={Actions.product}>
            <Image source={require('@images/icon-back.png')}
                   style={[css.imageIconLarge, {marginLeft: 8, width: 14}]}/>
          </TouchableOpacity>
        </View>

        <View style={css.rowCenter}>
          <Image style={css.logo} source={require('@images/key.png')}/>
        </View>

      </View>
    )
    return (

      <View style={css.layout}>
        {toolbar}
        <ScrollableTabView
          initialPage={0}
          locked={false}
          tabBarUnderlineStyle={ {height: 2, backgroundColor: "#1CAADE"}  }

          tabBarActiveTextColor={"#393838"}
          tabBarInactiveTextColor={"#B8B8B8"}
          tabBarTextStyle={{fontWeight: 'normal', fontSize: 14}}
          style={{backgroundColor: '#ffff'}}
          contentProps={{backgroundColor: '#ffff', marginTop: 0}}
          renderTabBar={() => <ScrollableTabBar
            underlineHeight={3}
            style={{borderBottomColor: '#eee'}}
            tabsContainerStyle={{paddingLeft: 30, paddingRight: 30}}
            tabStyle={{paddingBottom: 0, borderBottomWidth: 0, paddingTop: 0, paddingLeft: 50, paddingRight: 50}}
          />}
        >
          <SignIn  tabLabel="Login"
          prop={this.props}
          />
          <SignUp tabLabel="Sign Up"/>
        </ScrollableTabView>
      </View>
    );
  }
}
