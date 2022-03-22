import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ImageSlider from '../components/ImageSlider'
import BackArrowIcon from "../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import RoleContainer from '../components/RoleContainer'
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from '../components/Header';

const {height, width} = Dimensions.get("window");

const RoleHomeScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    
  return (
    <View style={styles.screen}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{zIndex:10,flexDirection:"row", alignItems:"center", justifyContent:"space-between",marginTop:20, marginHorizontal:20}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8}
                    style={{}}
                    onPress={()=>navigation.goBack()}>
                        <BackArrowIcon
                        height={'30'}
                        />
                    </TouchableOpacity>
                    <Text style={{fontSize:16, color:"#000000", marginLeft:20}}>{route.params.role} - Home</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center"}}>
                    <Image
                    source={require("../assets/scan.png")}
                    style={{height: 30,width:30, resizeMode:"contain"}}
                    />
                    <Text style={{fontSize:10, color:"#000000", marginTop:5}}>Scan QBR</Text>
                </TouchableOpacity>
            </View>
            <ImageSlider/>
            {(route.params.role==="Users") 
            && 
            <View style={{marginTop:20,paddingHorizontal:20, alignItems:"center"}}>
                <RoleContainer
                text="Ride Share"
                imageUrl={require("../assets/Ride.png")}
                tabHandler="Ride Share"
                tab="Ride Share"
                />
                <RoleContainer
                text="Parking"
                imageUrl={require("../assets/Parking.png")}
                tabHandler="Parking"
                tab="Parking"
                />
                <RoleContainer
                text="Dry Cleaners"
                imageUrl={require("../assets/DryCleaner.png")}
                tabHandler="Locate"
                tab="Locate Dry Cleaners"
                />
            </View>
            }
            {(route.params.role==="Merchants") 
            && 
            <View style={{marginTop:20,paddingHorizontal:20}}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
                    <RoleContainer
                    text="Parking Lot"
                    imageUrl={require("../assets/Locate.png")}
                    tabHandler="Parking Lot"
                    tab="Parking Lot"
                    />
                    <RoleContainer
                    text="Parking Garage"
                    imageUrl={require("../assets/Parking.png")}
                    tabHandler="Parking Garage"
                    tab="Parking Garage"
                    />
                    <RoleContainer
                    text="Residence Parking"
                    imageUrl={require("../assets/Parking.png")}
                    tabHandler="Residence Parking"
                    tab="Residence Parking"
                    />
                </View>
                <View style={{paddingHorizontal:10}}>
                    <RoleContainer
                    text="Dry Cleaner Merchant"
                    imageUrl={require("../assets/DryCleaner.png")}
                    tabHandler="Dry Cleaning Service"
                    tab="Dry Cleaning Service"
                    />
                </View>
            </View>
            }
            {(route.params.role==="Driver") 
            && 
            <View style={{marginTop:20,paddingHorizontal:20}}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
                    <RoleContainer
                    text="Locate Rider"
                    imageUrl={require("../assets/Locate.png")}
                    tabHandler="Locate Rider"
                    tab="Locate Handler"
                    />
                    <RoleContainer
                    text="Dry Cleaning"
                    imageUrl={require("../assets/DryCleaner.png")}
                    tabHandler="Locate Dry Cleaning"
                    tab="Locate Dry Cleaning"
                    />
                    <RoleContainer
                    text="Food Delivery"
                    imageUrl={require("../assets/FoodDelivery.png")}
                    tabHandler="Food Delivery"
                    tab="Food Delivery"
                    />
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
                    <RoleContainer
                    text="Driver Registration"
                    imageUrl={require("../assets/Driver.png")}
                    tabHandler="Driver Register"
                    tab="Driver Register"
                    role="Driver"
                    />
                    <RoleContainer
                    text="Scan QBR"
                    imageUrl={require("../assets/scan.png")}
                    tabHandler=""
                    />
                    <RoleContainer
                    text="Micro Mobility"
                    imageUrl={require("../assets/scooty.png")}
                    tabHandler="Micro Mobility"
                    tab="Micro Mobility"
                    />
                </View>
            </View>
            }
        </ScrollView>
    </View>
  )
}

export default RoleHomeScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})