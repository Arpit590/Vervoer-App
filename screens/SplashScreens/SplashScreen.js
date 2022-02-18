import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react';

const {height, width} = Dimensions.get("window");

const SplashScreen = () => {
  return (
    <View style={styles.screen}>
        <ImageBackground
        source={require("../../assets/Background.png")}
        style={{height:height, width:width, zIndex:-1}}
        />
        <Image
        source={require("../../assets/Heading.png")}
        style={{height:60, width:240, resizeMode:"contain", zIndex:100, position:"absolute", top: height/2, alignSelf:"center"}}
        />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF"
    }
})