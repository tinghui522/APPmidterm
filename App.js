import * as React from 'react';
import { StyleSheet, TouchableOpacity, Image, View, Text, botton } from "react-native";
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

//import TopScreen from './screen/TopScreen.js';
import HomeScreen from './screen/HomeScreen.js';
import GalleryScreen from './screen/GalleryScreen.js';
import IcgmrScreen from './screen/IcgmrScreen.js';
import QandaScreen from './screen/QandaScreen.js';

const MytabNavigator = createBottomTabNavigator({
  "Home ":{
    screen:HomeScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Image 
          source={{
            uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_home.png?raw=true"
          }}
          style = {{width:45 ,height:45,marginBottom:20,marginTop:20,tintColor:tintColor}}
          />
      )
    }
  },
  "Gallery ":{
    screen:GalleryScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Image 
          source={{
            uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_gallery.png?raw=true"
          }}
          style = {{width:45 ,height:45,marginBottom:20,marginTop:20,tintColor:tintColor}}
          />
      ),
    },
    
  },
  "Icgmr ":{
    screen:IcgmrScreen,
    navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <Image 
          source={{
            uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_icgmr.png?raw=true"
          }}
          style = {{width:45 ,height:45,marginBottom:20,marginTop:20,tintColor:tintColor}}
          />
      ),
    }
  },
  "Qanda ":{
    screen:QandaScreen,
    navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <Image 
          source={{
            uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_q&a.png?raw=true"
          }}
          style = {{width:45 ,height:45,marginBottom:20,marginTop:20,tintColor:tintColor}}
          />
      ),
    }
  }
},{
  initialRouteName: 'Chilly ',
  
  tabBarOptions:{
    activeTintColor :'#00b49f',
    inactiveTintColor :'#5c5c5c',

   labelStyle: {
    fontSize: 15,
    marginBottom:5
  },
   style:{
     margin:0,
     height:70,
     borderTopWidth:0.5,
     borderTopColor:'grey'
   }
  },
});


