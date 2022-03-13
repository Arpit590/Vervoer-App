import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import MenuIcon from "../assets/Icon metro-menu.svg";

const {height, width} = Dimensions.get("window");

const Header = ({openHandler}) => {

    const [menu, setMenu] = useState(false);

  return (
    <View style={styles.header}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <TouchableOpacity onPress={openHandler} activeOpacity={0.8} >
                <Image
                source={require("../assets/Avatar.png")}
                style={{height:40, width:40, borderRadius:50}}
                />
                <View style={{backgroundColor:"#FFFFFF",height:20, width:20, borderRadius:50, position:"absolute", bottom:0, left:0, alignSelf:"center", alignItems:"center", justifyContent:"center"}}>
                    <MenuIcon
                    height={'30'}
                    />
                </View>
            </TouchableOpacity>
            <Image
            source={require("../assets/Heading.png")}
            style={{height:100, width:100, resizeMode:"contain", marginLeft:20}}
            />
        </View>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <TouchableOpacity activeOpacity={0.8} style={{}}>
            <   Image
                source={require("../assets/ic-search.png")}
                style={{height:28, width:28, resizeMode:"contain"}}
                />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{marginHorizontal:20}}>
                <Image
                source={require("../assets/ic-wallet.png")}
                style={{height:28, width:28, resizeMode:"contain"}}
                />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
                <Image
                source={require("../assets/ic-notification.png")}
                style={{height:28, width:28, resizeMode:"contain"}}
                />
                <View style={{backgroundColor:"#F99026", borderRadius:50, height:15, width:15, position:"absolute", right:0, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{color:"#FFFFFF", fontSize:8}}>2</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#FFFFFF",
        borderBottomLeftRadius:30, 
        borderBottomRightRadius:30,
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        elevation:5
    }
})