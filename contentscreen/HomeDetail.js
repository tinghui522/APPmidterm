import React from "react";
import { StyleSheet, Text, View ,Image ,Button,ImageBackground,TouchableOpacity} from "react-native";

const HomeDetail = ({navigation}) => {
    return(
        <View style={{flex:1}}>
          
            <View style={styles.headerContentStyle}>
                <TouchableOpacity
                    onPress={() => navigation.push('MybookDetail')}>
                    <Image
                        style={styles.arrowStyle}
                        source={{
                            uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/arrow.png?raw=true"
                        }}
                        />
                  />
                </TouchableOpacity>
            </View>
            
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    arrowStyle:{
        width:30,
        height:30,
        marginTop:20,
        marginLeft:20,
      },
    });
  export default HomeDetail;