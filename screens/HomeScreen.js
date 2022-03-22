import { Animated, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/ImageSlider'
import RoleScreen from '../components/RoleScreen'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const {height, width} = Dimensions.get("window");

const HomeScreen = () => {

  return (
    <View style={styles.screen}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <ImageSlider/>
            <View style={{marginVertical:20, paddingHorizontal:20, alignItems:"center"}}>
                <RoleScreen
                text="User"
                imageUrl={require("../assets/User.png")}
                role="Users"
                />
                <RoleScreen
                text="Driver"
                imageUrl={require("../assets/Driver.png")}
                role="Driver"
                />
                <RoleScreen
                text="Merchant"
                imageUrl={require("../assets/Merchant.png")}
                role="Merchants"
                />
            </View>
        </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})