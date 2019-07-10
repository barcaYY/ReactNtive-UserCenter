/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LoginComponent from './app/components/login'
import MainComponent from './app/components/main'
import ProductComponent from './app/components/productList'
import DetailComponent from './app/components/detail';

var myNavigator=createStackNavigator({
  main:{
    screen:MainComponent,
    navigationOptions:()=>{
      return {
        headerTitle:'用户管理中心',
        headerTitleStyle:{color:'brown',marginLeft:170,fontSize:26}
      }
    }
  },
  product:{
    screen:ProductComponent,
    navigationOptions:()=>{
      return {
        headerTitle:'商品列表',
        headerTitleStyle:{color:'brown',marginLeft:140,fontSize:26}
      }
    }
  },
  detail:{
    screen:DetailComponent,
    navigationOptions:()=>{
      return {
        headerTitle:'商品详情',
        headerTitleStyle:{color:'brown',marginLeft:140,fontSize:26}
      }
    }
  },
  login:{
    screen:LoginComponent,
    navigationOptions:()=>{
      return {
        headerTitle:'用户登录',
        headerTitleStyle:{color:'brown',marginLeft:140,fontSize:26}
      }
    }}
})

export default class myapp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myapp', () => myNavigator);
