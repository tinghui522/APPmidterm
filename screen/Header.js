import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "react-native-reanimated";

const Header = (props) => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>{props.title}</Text>
        <Image style={styles.search}
                        source={{
                            uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/search.png?raw=true"
                        }}/>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#41627D",
    justifyContent: "center",
    alignItems: "center",
    width:414,
    height: 100,
    paddingTop: 30,
    elevation: 2
  },
  textStyle: {
    fontSize: 22,
    color:"#FFFFFF"
  },
  search:{
      width:30,
      height:30
  }
});

export default Header;