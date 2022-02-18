import { Dimensions, StyleSheet, Text, View, Animated, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";

const {height, width} = Dimensions.get("window");

const Drawer = ({menu ,setMenu}) => {

    const value = useState(new Animated.Value(0))[0];

    const menuHandler=()=>{
        Animated.timing(value,{
            toValue: 400,
            duration:2000,
            useNativeDriver:true
        }).start()
    }

    const closeHandler=()=>{
        setMenu(false);
        Animated.timing(value,{
            toValue:-100,
            duration:2000,
            useNativeDriver:true
        }).start()
    }

  return (
    <View style={{backgroundColor:"#FFFFFF",position:"absolute",top:0,left:0, height:height, width:width-80, zIndex:100, padding:20}}>
      <TouchableOpacity 
      activeOpacity={0.8} onPress={closeHandler}>
          <AntDesign
          name="close"
          color="#F99026"
          size={24}
          />
      </TouchableOpacity>
    </View>
  )
}

export default Drawer

const styles = StyleSheet.create({
})