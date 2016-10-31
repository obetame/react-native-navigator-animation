/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Nav from "./example/Nav";
import AnimationInit from "react-native-navigator-animation";
let buildStyleInterpolator = require('buildStyleInterpolator');
let NavAnimate = AnimationInit(buildStyleInterpolator);
const Routes = {
  Nav:{
    name:"Nav",component:Nav,index:0,animationType:NavAnimate.AnimationScaleInRight
  },
}

class example extends Component {
  render(){
    return(
      <Navigator 
        initialRoute={Routes.Nav}
        configureScene={(route)=>{
          return route.animationType;
        }}
        renderScene={(route,navigator)=>{
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}/>
    )
  }
}

AppRegistry.registerComponent('example', () => example);
