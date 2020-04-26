import React from "react";
import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import { DrawerActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const GalleryScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.top}></View>
      <View style={styles.headerStyle}>
          
          <Text style={styles.headertitleStyle}>Chilly</Text>
            <TouchableOpacity onPress={() => {}}>
                <Image 
                    style={styles.searchStyle} 
                    source={{ uri:"https://github.com/tinghui522/APPmidterm/blob/master/img/search.png?raw=true"}} 
                    /> 
            </TouchableOpacity>
          
      </View>

      <FlatList
        data={albumData.albumList}
        renderItem={({ item }) =>
          <AlbumDetail
            album={item}
            navigation={navigation}
          />}
        keyExtractor={item => item.title}
      />
      <View style={styles.bar}>
        <TouchableOpacity onPress={() => { }} style={styles.barbox}>
          <Image
            style={styles.menuicon}
            source={{
              uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_home.png?raw=true"
            }}
          />
          <Text style={styles.notselecttext}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.barbox}>
          <Image
            style={styles.menuicon}
            source={{
              uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_gallery.png?raw=true"
            }}
          />
          <Text style={styles.notselecttext}>Gallery</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => { }} style={styles.barbox}>
          <Image
            style={styles.menuicon}
            source={{
              uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_icgmr.png?raw=true"
            }}
          />
          <Text style={styles.notselecttext}>ICGMR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }} style={styles.barbox}>
          <Image
            style={styles.menuicon}
            source={{
              uri: "https://github.com/tinghui522/APPmidterm/blob/master/img/btn_q&a.png?raw=true"
            }}
          />
          <Text style={styles.notselecttext}>Q and A</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top:{
    width:414,
    height:35,
    backgroundColor:"#41627D"
  },
  viewStyle: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  headerStyle:{
    width:414,
    height:56,
    backgroundColor:"#41627D",
    justifyContent:"space-between",
    flexDirection:"row"
  },
  searchStyle: {
    width: 30,
    height: 30,
    marginRight: 8,
    marginTop:10
  },
  headertitleStyle: {
    fontWeight: '400',
    fontSize: 22,
    color: "#fff",
    width:240,
    height:25,
    marginTop:20,
    textAlign:"center"
  },
  bar: {
    borderTopColor: "#41627D",
    borderTopWidth: 1,
    flexDirection: "row"
  },
  barbox: {
    width: 140,
    height: 70,
    backgroundColor: "#41627D",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  menuicon: {
    width: 45,
    height: 45
  },
  notselecttext: {
    width: 96,
    height: 18,
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "800",
    textAlign: "center",
    marginBottom:5
  },
  selecttext: {
    width: 96,
    height: 18,
    fontSize: 14,
    color: "#00b49f",
    fontWeight: "800",
    textAlign: "center",
    marginBottom:10
  }
});

export default GalleryScreen;