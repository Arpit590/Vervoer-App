import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const BookNewRideScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value1 = useState(new Animated.Value(0))[0];
    const [click, setClick] = useState("Adult");

    const adultHandler=()=>{
        setClick("Adult");
        Animated.timing(value1,{
            toValue:0,
            duration:2000,
            useNativeDriver:false
        }).start()
    }

    const chlidHandler=()=>{
        setClick("Child");
        Animated.timing(value1,{
            toValue:width-300,
            duration:2000,
            useNativeDriver:false
        }).start()
    }

    
  return (
    <View style={styles.screen}>
        <ImageBackground
        source={require("../../../../assets/Map.png")}
        style={{width:width, height:height, zIndex:-1}}
        />
        <Header map={true}/>
        <View style={{position:"absolute", top:"12%", alignSelf:"center"}}>
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
            <View style={{alignSelf:"center", backgroundColor:"#FFFFFF", padding:10, borderRadius:10, marginTop:20, width:width-40}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{elevation:5,marginVertical:20, flexDirection:"row", alignItems:"center", alignSelf:"center", backgroundColor:"#FFFFFF", borderRadius:30, paddingHorizontal:10, paddingVertical:5}}>
                        <TouchableOpacity activeOpacity={0.8} 
                        onPress={adultHandler}
                        style={{backgroundColor:(click==="Adult") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:30, borderRadius:30}}>
                            <Text style={{fontSize:13, color:"#000000"}}>Adult</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={chlidHandler}
                        activeOpacity={0.8} style={{marginLeft:10,backgroundColor:(click==="Child") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:30, borderRadius:30}}>
                            <Text style={{fontSize:13, color:"#000000"}}>Child</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:20,paddingHorizontal:20}}>
                        <View style={{marginBottom:20}}>
                            <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>Pickup Location</Text>
                            <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#FFFFFF", elevation:5, padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/location.png")}
                                style={{height:30, width:30, resizeMode:"contain"}}
                                />
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
                        <View style={{marginBottom:20}}>
                            <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>Drop-ff Location</Text>
                            <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#FFFFFF", elevation:5, padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/droplocation.png")}
                                style={{height:30, width:30, resizeMode:"contain"}}
                                />
                                <TextInput
                                placeholder='Enter Location'
                                placeholderTextColor="#000000"
                                keyboardType='default'
                                style={{fontSize:13, color:"#000000", marginLeft:10}}
                                />
                            </View>
                        </View>
                        <View style={{marginBottom:20}}>
                            <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>When</Text>
                            <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#FFFFFF", elevation:5, padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/calendar.png")}
                                style={{height:30, width:30, resizeMode:"contain"}}
                                />
                                <TextInput
                                placeholder='Enter Location'
                                placeholderTextColor="#000000"
                                keyboardType='default'
                                style={{fontSize:13, color:"#000000", marginLeft:10}}
                                />
                            </View>
                        </View>
                        <View style={{marginBottom:20}}>
                            <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>No. of Persons</Text>
                            <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#FFFFFF", elevation:5, padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/person.png")}
                                style={{height:30, width:30, resizeMode:"contain"}}
                                />
                                <TextInput
                                placeholder='Enter Number of Person'
                                placeholderTextColor="#000000"
                                keyboardType='number-pad'
                                style={{fontSize:13, color:"#000000", marginLeft:10}}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Available Rides")}
                            activeOpacity={0.8} style={{ marginVertical: 10, width: "80%", alignSelf: "center", backgroundColor: "#F99026", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 100, marginBottom:100}}>
                            <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "500", textAlign: "center" }}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    </View>
  )
}

export default BookNewRideScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})