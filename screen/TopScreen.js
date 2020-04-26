import React from "react";
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const TopScreen = ({navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                
                <TouchableOpacity
                    onPress={() => navigation.push('HomeScreen')}>
                    <Image style={styles.startbtn}
                        source={{
                            uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/bottom1.png?raw=true"
                        }}/>
                </TouchableOpacity>
            </View>
            
        </View>
    );
};
const styles = StyleSheet.create({
    startimg: {
        width:414,
        height:null,
        paddingTop:896,
      },
      buttonStyle:{
        padding:130,
        justifyContent:"center",
        alignContent:"center"
      },
      startbtn:{
        width:150,
        height:50,
        marginTop:500,
        justifyContent:"center",
        alignContent:"center"
        
      }
});
export default TopScreen;