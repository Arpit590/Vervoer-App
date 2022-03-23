import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../components/Header';

const {height, width} = Dimensions.get("window");

const ReceiptScreen = () => {
 
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
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Receipt Of Purchase</Text>
                        </View>
                    </View>
                    <Text style={{fontSize:15, color:"#F99026"}}>#DC58223</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"flex-end"}}>
                    <Text style={{fontSize:15, color:"#808080"}}>TRACKING ID: </Text>
                    <Text style={{fontSize:15, color:"#F99026"}}>1549</Text>
                </View>
                <View style={{marginTop:30}}>
                    <View style={{alignItems:"center", marginTop:10, paddingBottom:10}}>
                        <Text style={{fontSize:13, color:"#000000", marginBottom:10}}>Total Payment</Text>
                        <Text style={{fontSize:45, color:"#F99026", marginBottom:10}}>$ 70.00</Text>
                        <Text style={{fontSize:15, color:"#000000", textAlign:"center"}}>We wish to inform you that $70 has been debited from your Debit Card no. ending with 1234 on 11-31-2021 20:44:58</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{fontSize:18, color:"#808080", marginBottom:10, marginTop:10}}>Order Details</Text>
                        <View style={{}}>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{fontSize:15, color:"#000000"}}>QTY</Text>
                                <Text style={{fontSize:15, color:"#000000", marginLeft:-50}}>Price</Text>
                                <Text style={{fontSize:15, color:"#000000"}}>Items</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"#808080", borderBottomWidth:1, paddingBottom:10,justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{fontSize:15, color:"#000000"}}>2</Text>
                                <Text style={{fontSize:15, color:"#F99026"}}>$10.00</Text>
                                <View style={{alignItems:"flex-end"}}>
                                    <Text style={{fontSize:15, color:"#000000", marginBottom:10}}>T-Shirt</Text>
                                    <Text style={{fontSize:13, color:"#808080"}}>Wash Only</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"#808080", borderBottomWidth:1, paddingBottom:10,justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{fontSize:15, color:"#000000"}}>3</Text>
                                <Text style={{fontSize:15, color:"#F99026"}}>$30.00</Text>
                                <View style={{alignItems:"flex-end"}}>
                                    <Text style={{fontSize:15, color:"#000000", marginBottom:10}}>Shirt</Text>
                                    <Text style={{fontSize:13, color:"#808080"}}>Wash & Fold</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"#808080", borderBottomWidth:1, paddingBottom:10,justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{fontSize:15, color:"#000000"}}>1</Text>
                                <Text style={{fontSize:15, color:"#F99026"}}>$25.00</Text>
                                <View style={{alignItems:"flex-end"}}>
                                    <Text style={{fontSize:15, color:"#000000", marginBottom:10}}>Jacket</Text>
                                    <Text style={{fontSize:13, color:"#808080"}}>Wash Only</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{backgroundColor:"#FFFFFF", padding:20, borderRadius:10, marginVertical:20}}>
                        <Text style={{fontSize:16, color:"#000000", marginBottom:10}}>Address Of The Dry Cleaner</Text>
                        <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                            <View style={{backgroundColor:"#F99026", padding:10, borderRadius:50, alignItems:"center", justifyContent:"center", marginRight:10}}>
                                <Image
                                source={require("../../../assets/service.png")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                            </View>
                            <View style={{}}>
                                <Text style={{fontSize:15, color:"#000000", marginBottom:10}}>Mico Cleaners</Text>
                                <Text style={{fontSize:13, color:"#808080"}}>123, Lincon Street, New York</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom:200}}>
                        <Text style={{fontSize:15, color:"#000000", marginBottom:15}}>For Unclaimed Items</Text>
                        <View style={{backgroundColor:"#FFFFFF", borderRadius:10, elevation:5, padding:15}}>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderBottomColor:"#808080", borderBottomWidth:1, paddingBottom:10}}>
                                <Text style={{fontSize:13, color:"#F99026"}}>Cost for waiting 60 minutes or more</Text>
                                <Text style={{fontSize:13, color:"#F99026"}}>$15.00</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center", marginVertical:10,justifyContent:"space-between", borderBottomColor:"#808080", borderBottomWidth:1, paddingBottom:10}}>
                                <Text style={{fontSize:13, color:"#F99026"}}>Cost for overnight storage</Text>
                                <Text style={{fontSize:13, color:"#F99026"}}>$20.00/Night</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingBottom:10}}>
                                <Text style={{fontSize:13, color:"#F99026"}}>Cost for redelivery</Text>
                                <Text style={{fontSize:13, color:"#F99026"}}>$10.00</Text>
                            </View>
                        </View>
                        <Text style={{fontSize:12, color:"#808080", textAlign:"center", marginTop:10}}>Learn More</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style={{position:"absolute", bottom:0, width:width, padding:20, alignItems:"center"}}>
            <TouchableOpacity activeOpacity={0.8} 
            onPress={()=>navigation.navigate("Active Order")}
            style={{backgroundColor:"#F99026", padding:20, borderRadius:30, width:"90%", alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Done</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ReceiptScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})