import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import ListItem from './ListItem';
import Header from '../../../components/Header';

const {height, width} = Dimensions.get("window");

const ActiveOrderScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    
  return (
    <View style={styles.screen}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20, marginHorizontal:20}}>
                <View style={{flexDirection:"row" ,alignItems:"center", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{}}
                        onPress={()=>navigation.goBack()}>
                            <BackArrowIcon
                            height={'30'}
                            />
                        </TouchableOpacity>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Active Order Details</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:30}}>
                    <View style={{marginTop:10, paddingBottom:10, borderBottomColor:"#5E5E60", borderBottomWidth:1}}>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <Text style={{fontSize:20, color:"#808080"}}>Order Details</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:10 , borderRadius:10, flexDirection:"row", alignItems:"center"}}>
                                <Image
                                source={require("../../../assets/currentlocation.png")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                                <Text style={{fontSize:13, color:"#FFFFFF", marginLeft:10}}>TRACK ACTIVE ORDER</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontSize:20, color:"#000000", fontWeight:"bold", marginVertical:10, marginBottom:20}}>Order Number  #DC58223</Text>
                        <Text style={{fontSize:16, color:"#F99026", fontWeight:"bold", marginBottom:20}}>Order Confirmed</Text>
                    </View>
                    <View style={{marginTop:20, paddingBottom:10, borderBottomColor:"#5E5E60", borderBottomWidth:1}}>
                        <View style={{}}>
                            <Text style={{fontSize:17, color:"#F99026", marginBottom:10}}>Pickup Date & Time</Text>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                                <Text style={{fontSize:15, color:"#808080"}}>November 02-2021</Text>
                                <Text style={{fontSize:15, color:"#808080"}}>12:00 PM</Text>
                            </View>
                        </View>
                        <View style={{marginVertical:20}}>
                            <Text style={{fontSize:17, color:"#F99026", marginBottom:10}}>Delivery Date & Time</Text>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                                <Text style={{fontSize:15, color:"#808080"}}>November 05-2021</Text>
                                <Text style={{fontSize:15, color:"#808080"}}>02:00 PM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginVertical:20}}>
                        <Text style={{fontSize:16, color:"#F99026", marginBottom:10}}>Pickup and Delivery Address</Text>
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
                            <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", backgroundColor:"#FDF1E5", padding:10, borderRadius:10}}>
                                <MaterialIcons
                                name="edit"
                                size={18}
                                color="#000000"
                                />
                                <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>CHANGE</Text>
                            </TouchableOpacity>
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
                            <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", backgroundColor:"#FDF1E5", padding:10, borderRadius:10}}>
                                <MaterialIcons
                                name="edit"
                                size={18}
                                color="#000000"
                                />
                                <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>CHANGE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:50, marginTop:30}}>
                        <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                            <View style={{backgroundColor:"#F99026", padding:10, borderRadius:50, alignItems:"center", justifyContent:"center", marginRight:10}}>
                                <Image
                                source={require("../../../assets/service.png")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                /> 
                            </View>
                            <View style={{marginLeft:10}}>
                                <View style={{flexDirection:"row", alignItems:"center", marginBottom:5}}>
                                    <Text style={{fontSize:15, color:"#000000"}}>Mico Cleaners</Text>
                                    <View style={{flexDirection:"row", alignItems:"center", marginLeft:20}}>
                                        <Image
                                        source={require("../../../assets/rating.png")}
                                        style={{height:15, width:15, resizeMode:"contain"}}
                                        />
                                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>4.2</Text>
                                    </View>
                                </View>
                                <Text style={{fontSize:13, color:"#808080"}}>123, Lincon Street, New York</Text>
                            </View>
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={{paddingHorizontal:20,padding:10, borderRadius:10, backgroundColor:"#5E5E60"}}>
                            <Text style={{fontSize:15, color:"#FFFFFF"}}>Call</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginBottom:200}}>
                        <Text style={{fontSize:16, color:"#000000", marginBottom:10}}>List Of Items</Text>
                        <ListItem
                        title="T-Shirt"
                        description="Wash Only"
                        price="10.00"
                        qty={2}
                        />
                        <ListItem
                        title="Shirt"
                        description="Wash & Fold"
                        price="30.00"
                        qty={3}
                        />
                        <ListItem
                        title="Jacket"
                        description="Wash Only"
                        price="25.00"
                        qty={1}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style={{position:"absolute", bottom:0, width:width, backgroundColor:"#FFFFFF", padding:20, alignItems:"center"}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Scanner")}
            activeOpacity={0.8} style={{alignItems:"center"}}>
                <Text style={{fontSize:14, color:"#000000", marginBottom:10}}>My QR Code</Text>
                <Image
                source={require("../../../assets/scan.png")}
                style={{height:40, width:40, resizeMode:"contain"}}
                />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ActiveOrderScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})