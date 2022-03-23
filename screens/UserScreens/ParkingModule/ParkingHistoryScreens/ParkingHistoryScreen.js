import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from '../../../../components/Header';
import HistoryDetails from './HistoryDetails';

const {height, width} = Dimensions.get("window");

const ParkingHistoryScreen = () => {
 
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
                    title="G"
                    heading="Central Shopping Centre (Garage)"
                    address="123, Lincon Street, New York"
                    rating="4.2"
                    price={5.00}
                    totalPrice={140.00}
                    rideAt="26 May 2021, 10:00 AM"
                    endAt="28 May 2021, 2:00 PM"
                    sessionId="#CR58223"
                    duration="1D 4H 0M"
                    timer="5"
                    />
                    <HistoryDetails
                    title="L"
                    heading="Central Shopping Centre (Lot)"
                    address="123, Lincon Street, New York"
                    rating="4.2"
                    price={5.00}
                    totalPrice={140.00}
                    rideAt="26 May 2021, 10:00 AM"
                    endAt="28 May 2021, 2:00 PM"
                    sessionId="#CR58223"
                    duration="1D 4H 0M"
                    timer="5"
                    />
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default ParkingHistoryScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})