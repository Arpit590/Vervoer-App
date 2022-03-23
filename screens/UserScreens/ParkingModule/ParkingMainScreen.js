import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import RoleContainer from '../../../components/RoleContainer'
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from '../../../components/Header';

const {height, width} = Dimensions.get("window");

const ParkingMainScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    
  return (
    <View style={styles.screen}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20, marginHorizontal:20}}>
                <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <TouchableOpacity activeOpacity={0.8}
                    style={{}}
                    onPress={()=>navigation.goBack()}>
                        <BackArrowIcon
                        height={'30'}
                        />
                    </TouchableOpacity>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>{route.params.heading}</Text>
                        <Text style={{fontSize:14, color:"#808080"}}>Find And Book Parking Near You</Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:20,paddingHorizontal:20, alignItems:"center", flexDirection:"row", justifyContent:"space-evenly"}}>
                <RoleContainer
                text="Find Parking"
                tabHandler="Book Parking"
                tab="Book Parking"
                imageUrl={require("../../../assets/Parking.png")}
                />
                <RoleContainer
                text="My QBR code"
                tab="Parking QR"
                tabHandler="Scanner"
                imageUrl={require("../../../assets/scan.png")}
                />
            </View>
            <View style={{marginTop:20,paddingHorizontal:20, alignItems:"center", flexDirection:"row", justifyContent:"space-evenly"}}>
                <RoleContainer
                text="Live Session"
                tabHandler="Ride History"
                tab="Ride History"
                imageUrl={require("../../../assets/live.png")}
                />
                <RoleContainer
                text="History"
                tabHandler="Parking History"
                tab="History"
                imageUrl={require("../../../assets/history.png")}
                />
            </View>
        </ScrollView>
    </View>
  )
}

export default ParkingMainScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})