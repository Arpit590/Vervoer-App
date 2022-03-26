import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Header from '../../../components/Header';

const {height, width} = Dimensions.get("window");

const BookDryCleanersScreen = () => {
 
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
                        <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Book Dry Cleaners</Text>
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
        <View style={{position:"absolute", bottom:"0%",alignSelf:"center", backgroundColor:"#FFFFFF", padding:10, borderRadius:10, marginTop:20, width:width, height:400}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{paddingHorizontal:20}}>
                    <View style={{marginVertical:20}}>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                            <Text style={{fontSize:16, color:"#F99026"}}>Pickup and Delivery Address</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:10, paddingHorizontal:20, borderRadius:10, alignItems:"center"}}>
                            <Text style={{fontSize:14, color:"#FFFFFF"}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between",}}>
                            <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                                <View style={{backgroundColor:"whitesmoke", borderRadius:50, borderWidth:1, borderColor:"green", padding:5}}>
                                    <View style={{backgroundColor:"green", padding:5, borderRadius:50}}></View>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Pickup - Order Has Been Picked Up</Text>
                                    <Text style={{fontSize:12, color:"#808080"}}>123, Lincon Street, New York</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:20,flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between",}}>
                            <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                                <View style={{backgroundColor:"whitesmoke", borderRadius:50, borderWidth:1, borderColor:"red", padding:5}}>
                                    <View style={{backgroundColor:"red", padding:5, borderRadius:50}}></View>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Drop Off - Drop Off in Progress</Text>
                                    <Text style={{fontSize:12, color:"#808080"}}>30 Lincon St, New Rochelle, New York</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:10}}>
                            <Text style={{fontSize:16, color:"#F99026", marginBottom:5, marginTop:15}}>Change Delivery Address</Text>
                            <Text style={{fontSize:10, color:"#808080", marginBottom:15}}>Pay additional charge for delay</Text>
                            <View style={{marginVertical:20}}>
                                <Text style={{fontSize:12, color:"#808080", marginLeft:5}}>Address</Text>
                                <View style={{borderBottomColor:"#808080", borderBottomWidth:1, width:width-60}}>
                                    <TextInput
                                    placeholder='Enter Your Address'
                                    placeholderTextColor="#000000"
                                    keyboardType='default'
                                    style={{fontSize:13, color:"#000000"}}
                                    />
                                </View>
                            </View>
                            <View style={{marginBottom:20}}>
                                <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>City</Text>
                                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                                    <Text
                                    style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                    >Pleasanton</Text>
                                    <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                                        <MaterialIcons
                                        name="keyboard-arrow-down"
                                        size={20}
                                        color="#808080"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{marginBottom:20}}>
                                <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>State</Text>
                                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                                    <Text
                                    style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                    >California</Text>
                                    <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                                        <MaterialIcons
                                        name="keyboard-arrow-down"
                                        size={20}
                                        color="#808080"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{marginBottom:10}}>
                                <Text style={{fontSize:12, color:"#808080", marginLeft:5}}>ZIP Code</Text>
                                <View style={{borderBottomColor:"#808080", borderBottomWidth:1, width:width-60}}>
                                    <TextInput
                                    placeholder='0730'
                                    placeholderTextColor="#000000"
                                    keyboardType='number-pad'
                                    style={{fontSize:13, color:"#000000"}}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.8} style={{ marginVertical: 10, width: "50%", alignSelf: "center", backgroundColor: "#F99026", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 100 }}>
                        <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "500", textAlign: "center" }}>Done</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </View>
  )
}

export default BookDryCleanersScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})