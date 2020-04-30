import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

//library imports
//import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports 

class Favorites2Screen extends Component {
  
    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
          <Image 
          source={require('../assets/icon_drawer_favorites.png')}
          style = {{width:24 ,height:24,marginBottom:20,marginTop:20,tintColor:tintColor}}
          />
        )
      }

  render() {
    return (
    <View style={{ backgroundColor: '#00b49f' }}>   
      <View style={styles.container3}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                  <Image style={{ width: 50, height: 50,marginLeft:16,backgroundColor:"#00b49f"}}
                    source={require('../assets/btn_navbar_mobile.png')}
                  />
        </TouchableOpacity>
      
      </View>
      <Text style={{color:"black",backgroundColor: '#ffffff'}}>Favorites2Screen</Text>
    </View>
      

    )
  }

}

export default Favorites2Screen;

const styles = StyleSheet.create({
  container3: {
    backgroundColor: '#00b49f',
  },
});