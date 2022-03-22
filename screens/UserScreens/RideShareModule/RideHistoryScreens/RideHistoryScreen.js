import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import HistoryDetails from './HistoryDetails';
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const RideHistoryScreen = () => {
 
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
                    </View>
                </View>
                <View style={{marginTop:30}}>
                    <HistoryDetails
                    imgSrc={require("../../../../assets/Cab-1.png")}
                    title="Volkswagen Golf"
                    carNo="DLP-8271"
                    rating="4.2"
                    tip={10.00}
                    totalPrice={150.00}
                    rideAt="26 May 2021, 10:00 AM"
                    sessionId="#RS58223"
                    />
                    <HistoryDetails
                    imgSrc={require("../../../../assets/Cab-1.png")}
                    title="Volkswagen Golf"
                    carNo="DLP-8271"
                    rating="4.2"
                    tip={10.00}
                    totalPrice={150.00}
                    rideAt="26 May 2021, 10:00 AM"
                    sessionId="#RS58223"
                    />
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default RideHistoryScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})