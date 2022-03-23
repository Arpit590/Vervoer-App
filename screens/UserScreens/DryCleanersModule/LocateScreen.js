import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from '../../../components/Header';

const {height, width} = Dimensions.get("window");

const LocateScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    
  return (
    <View style={styles.screen}>
        <ImageBackground
        source={require("../../../assets/Map4.png")}
        style={{width:width, height:height, zIndex:-1}}
        />
        <View style={{position:"absolute", top:"20%", alignSelf:"center"}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Dry Cleaning Details", {"heading": "Micro Cleaners", "address": "123, Lincon Street, New York", "duration": "12:00 PM - 08:00 PM", "rating": "4.2", "location": "1.24274 miles"})}
            activeOpacity={0.8} style={{}}>
                <Image
                source={require("../../../assets/service1.png")}
                style={{height:30, width:30, resizeMode:"contain"}}
                />
            </TouchableOpacity>
        </View>
        <View style={{position:"absolute", top:"35%", alignSelf:"flex-start", left:"14%"}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Dry Cleaning Details", {"heading": "Micro Cleaners", "address": "123, Lincon Street, New York", "duration": "12:00 PM - 08:00 PM", "rating": "4.2", "location": "1.24274 miles"})}
            >
                <Image
                source={require("../../../assets/service1.png")}
                style={{height:30, width:30, resizeMode:"contain"}}
                />
            </TouchableOpacity>
        </View>
        <View style={{position:"absolute", top:"30%", alignSelf:"flex-end", right:"20%"}}>
            <TouchableOpacity activeOpacity={0.8} 
            onPress={()=>navigation.navigate("Dry Cleaning Details", {"heading": "Micro Cleaners", "address": "123, Lincon Street, New York", "duration": "12:00 PM - 08:00 PM", "rating": "4.2", "location": "1.24274 miles"})}
            >
                <Image
                source={require("../../../assets/service1.png")}
                style={{height:30, width:30, resizeMode:"contain"}}
                />
            </TouchableOpacity>
        </View>
        <View style={{position:"absolute", top:"27%", alignSelf:"center"}}>
            <TouchableOpacity activeOpacity={0.8}
            onPress={()=>navigation.navigate("Dry Cleaning Details", {"heading": "Micro Cleaners", "address": "123, Lincon Street, New York", "duration": "12:00 PM - 08:00 PM", "rating": "4.2", "location": "1.24274 miles"})}
            >
                <Image
                source={require("../../../assets/service1.png")}
                style={{height:30, width:30, resizeMode:"contain"}}
                />
            </TouchableOpacity>
        </View>
        <Header map={true}/>
        <View style={{position:"absolute", top:"12%", alignSelf:"flex-start", paddingHorizontal:20}}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20}}>
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
            </View>
        </View>
        <View style={{alignItems:"center", alignSelf:"flex-end", position:"absolute", right:"3%", top:"45%"}}>
            <TouchableOpacity style={{backgroundColor:"#F99026", padding:10, borderRadius:30, alignItems:"center", justifyContent:"center"}}>
                <Image
                source={require("../../../assets/currentlocation.png")}
                style={{height:20, width:20, resizeMode:"contain"}}
                />
            </TouchableOpacity>
        </View>
        <View style={{position:"absolute", bottom:"0%",alignSelf:"center", backgroundColor:"#FFFFFF", padding:10, borderRadius:10, marginTop:20, width:width}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginTop:20,paddingHorizontal:20}}>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:13, color:"#000000", marginBottom:10}}>Location</Text>
                        <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#FFFFFF", borderBottomColor:"#808080", borderBottomWidth:1, padding:5, borderRadius:10}}>
                            <View style={{backgroundColor:"#FDF1E5", padding:5, borderRadius:30, alignItems:"center"}}>
                                <Image
                                source={require("../../../assets/location.png")}
                                style={{height:30, width:30, resizeMode:"contain"}}
                                />
                            </View>
                            <TextInput
                            placeholder='Enter Location'
                            placeholderTextColor="#000000"
                            keyboardType='default'
                            style={{fontSize:13, color:"#000000", marginLeft:10}}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={{marginTop:8}}>
                            <Text style={{fontSize:12, color:"#F99026"}}>Use Current Location</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:12, color:"#808080", marginBottom:20}}>Disclaimer that poor connection and other for seen events may delay your purchase or confirmation of the dry cleaners.</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Available Dry Cleaners")}
                        activeOpacity={0.8} style={{ marginVertical: 10, width: "90%", alignSelf: "center", backgroundColor: "#F99026", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 100 }}>
                        <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "500", textAlign: "center" }}>Continue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Order History")}
                        activeOpacity={0.8} style={{ marginVertical: 10, width: "90%", alignSelf: "center", backgroundColor: "#FFFFFF", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 100 }}>
                        <Text style={{ color: "#F99026", fontSize: 15, fontWeight: "500", textAlign: "center" }}>ORDER HISTORY</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </View>
  )
}

export default LocateScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})