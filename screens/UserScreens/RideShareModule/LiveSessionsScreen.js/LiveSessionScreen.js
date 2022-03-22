import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import VideoIcon from "../../../../assets/VideoIcon.svg";
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const LiveSessionScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    
  return (
    <View style={styles.screen}>
        <View style={{}}>
        <Image
        source={require("../../../../assets/Map3.png")}
        style={{width:width, height:height, zIndex:-1, resizeMode:"cover"}}
        />
        <Image
        source={require("../../../../assets/cars.png")}
        style={{height:250, width:250, resizeMode:"contain", zIndex:5, position:"absolute", top:"20%", alignSelf:"center"}}
        />
        </View>
        <View style={{position:"absolute",top:0,width:"100%"}}>
            <Header/>
            <View style={{}}>
                <View style={{zIndex:10,flexDirection:"row",alignItems:"center", justifyContent:"space-between",marginTop:20, paddingHorizontal:20}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{}}
                        onPress={()=>navigation.goBack()}>
                            <BackArrowIcon
                            height={'30'}
                            />
                        </TouchableOpacity>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Ride Details</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:10, borderRadius:80, height:30, width:30, alignItems:"center", justifyContent:"center", marginRight:10}}>
                            <VideoIcon
                            height={'40'}
                            />
                        </TouchableOpacity>
                        <Text style={{fontSize:15, color:"#F99026", fontWeight:"500"}}>#RS58223</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{backgroundColor:"whitesmoke", padding:20, position:"absolute", bottom:"7%", width:width, zIndex:80}}>
            <View style={{backgroundColor:"white", paddingHorizontal:15, paddingVertical:5,borderRadius:20, elevation:5,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../../assets/Cab-1.png")}
                    style={{height:80, width:80, resizeMode:"contain"}}
                    />
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:13, color:"#000000", marginBottom:10}}>Volkswagen Golf</Text>
                        <Text style={{fontSize:11, color:"#000000"}}>DLP-8271</Text>
                    </View>
                </View>
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>Hatchback</Text>
                    <Text style={{fontSize:11, color:"#000000"}}>OTP: <Text style={{color:"#F99026"}}>1549</Text></Text>
                </View>
            </View>
            <View style={{marginVertical:20}}>
                <Text style={{fontSize:15, color:"#000000", marginBottom:10}}>Driver Details</Text>
                <View style={{backgroundColor:"white", paddingHorizontal:15, paddingVertical:10,borderRadius:20, elevation:5,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Image
                        source={require("../../../../assets/callProfile.png")}
                        style={{height:50, width:50, resizeMode:"contain"}}
                        />
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Jason Anderson</Text>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Image
                                source={require("../../../../assets/Calling.png")}
                                style={{height:20, width:20, resizeMode:"contain", marginRight:5}}

                                />
                                <Text style={{fontSize:11, color:"#000000"}}>+1 1048285215</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:10, borderRadius:10}}>
                        <Text style={{fontSize:13, color:"#FFFFFF"}}>Call Driver</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginBottom:20}}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                    <Text style={{fontSize:15, color:"#000000"}}>Driver Details</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:13, color:"#808080", marginRight:5}}>Fwd Trip</Text>
                        <Image
                        source={require("../../../../assets/Share.png")}
                        style={{height:20, width:20, resizeMode:"contain"}}
                        />
                    </View>
                </View>
                <View style={{backgroundColor:"white", paddingHorizontal:15, paddingVertical:10,borderRadius:20, elevation:5}}>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize:15, color:"#F99026"}}>Pickup Location</Text>
                        <View style={{flexDirection:"row", alignItems:"center", marginTop:10}}>
                            <View style={{ alignItems:"center", justifyContent:"center",backgroundColor:"#FDF1E5", padding:20, borderRadius:20, height:30, width:30}}>
                                <View style={{alignItems:"center", justifyContent:"center",backgroundColor:"#F99026", borderRadius:30,height:30, width:30}}>
                                <Image
                                source={require("../../../../assets/User.png")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                                </View>
                            </View>
                            <Text style={{fontSize:15, color:"#000000", marginLeft:30}}>52, Sector 125, Atlanta Georgia</Text>
                        </View>
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize:15, color:"#F99026"}}>Pickup Location</Text>
                        <View style={{flexDirection:"row", alignItems:"center", marginTop:10}}>
                            <View style={{ alignItems:"center", justifyContent:"center",backgroundColor:"#FDF1E5", padding:20, borderRadius:20, height:30, width:30}}>
                                <View style={{alignItems:"center", justifyContent:"center",backgroundColor:"#F99026", borderRadius:30,height:30, width:30}}>
                                <Image
                                source={require("../../../../assets/User.png")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                                </View>
                            </View>
                            <Text style={{fontSize:15, color:"#000000", marginLeft:30}}>52, Sector 125, Atlanta Georgia</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Cancel Booking")}
        activeOpacity={0.8} style={{zIndex:80,position:"absolute",bottom:"3%",backgroundColor:"#5E5E60", padding:20, borderRadius:30, width:width-40, alignSelf:"center", alignItems:"center"}}>
            <Text style={{fontSize:15, color:"#FFFFFF"}}>Cancel Booking</Text>
        </TouchableOpacity>
    </View>
  )
}

export default LiveSessionScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})