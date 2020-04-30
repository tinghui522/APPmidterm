import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

const MybookDetail = ({navigation}) => {
    return(
        
 <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={styles.headerContentStyle}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('HomeDetail')}>
                    <Image
                            style={styles.pagebotton2Style}
                            source={{
                            uri:
                                "https://github.com/tinghui522/APPmidterm/blob/master/img/penguin.png?raw=true"
                            }}
                        />
              </TouchableOpacity>      
            </View>
            
        </View>
        
       
    );
};
const styles = StyleSheet.create({
    pagebotton2Style:{
        width:140,
        height:90,
        marginLeft:40,
        marginTop:-90
      },
    });
  export default MybookDetail;