import React, { Fragment } from 'react';
import { StyleSheet, Text, View,SafeAreaView,ScrollView,Dimensions,Image } from 'react-native'
import {CardStyleInterpolators,createStackNavigator}from '@react-navigation/stack';
import {createDrawerNavigator,DrawerItems,createBottomTabNavigator} from 'react-navigation'
import {NavigationContainer, TabActions} from '@react-navigation/native';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import {creat}


import HomeScreen from './screen/HomeScreen'
import SettingsScreen from './screen/SettingsScreen'
import AboutusScreen from './screen/AboutusScreen'
import FavoritesScreen from './screen/FavoritesScreen'
import MybookScreen from './screen/MybookScreen'
import StartScreen from './screen/StartScreen'
import { render } from 'react-dom';

//const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render(){

  
  return (
    <View style={{flex:1}}>
      <AppDrawerNavigator/>
      {/* <MytabNavigator/> */}
      {/* <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={MybookScreen} />
          <Tab.Screen name="Mybook" component={HomeScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer> */}
    </View>
    
  );
}
}



//const Stack = createStackNavigator();

/*function App  () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={StartScreen} 
          options={{
            
            headerStyle: {
              height:0
            }, 
            
          }}
        />
        
        <Stack.Screen 
          name="Message" 
          component={MybookScreen}
          options={({ route }) => ({ 
            headerStyle: {
              backgroundColor: '#4F9DEB',
              height:0
            },
            
            
           })}
        />     
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/

const CustomDrawerComponent = (props) => (
  <Fragment>
  <View style={{backgroundColor:"#ebebeb",height:"100%"}}>
    <View style={{height:200,backgroundColor:"#00b49f"}}>
      <Image 
        source= {require('./assets/img_user_photo.png')}
        style = {{height:80,width:80,marginTop:45,marginLeft:20}}
      />
      <View style={styles.userinfoStyle}>
        <View>
          <Text style={styles.userinfotextStyle}>
            GamexHCl
          </Text>
          <Text style={styles.userinfotextStyle}>
            gdlab2017@gmail.com
          </Text>
        </View>
        <Image 
          source= {require('./assets/btn_down_arrow.png')}
          style = {{height:24,width:24}}
        />
      </View>
      
    </View>
    
    <ScrollView >
      <DrawerItems {...props}/>
      
    </ScrollView>
  </View>
  </Fragment>
  
)


const MytabNavigator = createBottomTabNavigator({
  "Home ":{
    screen:MybookScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Image 
          source={{
            uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_home.png?raw=true"
          }}
            style = {{width:45 ,height:45,marginBottom:10,marginTop:20,tintColor:tintColor}}
            />
      )
    }
  },
  "Gallery":{
    screen:HomeScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
          <Image 
        source={{
            uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_gallery.png?raw=true"
          }}
        style = {{width:45 ,height:45,marginBottom:10,marginTop:20,tintColor:tintColor}}
        />
      ),
    },
    
  },
  "Icgmr ":{
    screen:FavoritesScreen,
    navigationOptions:{
      tabBarIcon:({tintColor}) => (
        <Image 
        source={{
          uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_icgmr.png?raw=true"
        }}
          style = {{width:45 ,height:45,marginBottom:10,marginTop:20,tintColor:tintColor}}
          />
      ),
    },
  },
  "Q and A ":{
    screen:AboutusScreen,
    navigationOptions: {
      tabBarIcon:({tintColor}) => (
        <Image 
          source={{
            uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_q&a.png?raw=true"
          }}
            style = {{width:45 ,height:45,marginBottom:10,marginTop:20,tintColor:tintColor}}
            />
      )
    }
  },
},
{
  initialRouteName: 'Home ',
  
  tabBarOptions:{
    activeTintColor :'#13EBAB',
    inactiveTintColor :'#FFFFFF',

   labelStyle: {
    fontSize: 15,
    marginBottom:5,
    fontWeight:"bold"
  },
   style:{
     margin:0,
     height:100,
     backgroundColor:"#41627D",
   }
  },
});


const AppDrawerNavigator = createDrawerNavigator({
  Home:MybookScreen,
  "My Book":{
    screen:MytabNavigator,
    navigationOptions: {
      drawerIcon : ({tintColor}) => (
        <Image 
        source={require('./assets/icon_drawer_mybook_pressed.png')}
        style = {{width:24 ,height:24,marginBottom:20,marginTop:20,tintColor:tintColor}}
        />
      )
    }
    
  },
  Favorites:FavoritesScreen,
  Settings:SettingsScreen,
  Aboutus:AboutusScreen
},{
  initialRouteName: 'My Book',
  contentComponent:CustomDrawerComponent,
  drawerWidth:335,
  contentOptions:{
    activeTintColor :'#ffffff',
    inactiveTintColor :'#5c5c5c',

   activeBackgroundColor :'#00b49f',
   inactiveBackgroundColor :'#ebebeb',
   
  },
  index:2

})



const styles = StyleSheet.create({
  
  userinfoStyle:{
    flexDirection:"row",
    marginLeft:20,
    marginTop:20
  },
  userinfotextStyle:{
    color:"white",
    marginRight:120
  }
});
