import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const RideShareSummaryScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const [click, setClick] = useState("");

    
  return (
    <View style={styles.screen}>
        <View style={{}}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false} style={{}}>
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
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Your Session Summary</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:15, color:"#F99026"}}>#RS58223</Text>
                    </View>
                </View>
                <View style={{marginTop:20, paddingHorizontal:30}}>
                    <View style={{alignItems:"center", marginTop:10, paddingBottom:20, borderBottomColor:"#5E5E60", borderBottomWidth:1}}>
                        <Text style={{fontSize:13, color:"#000000", marginBottom:10}}>Your bill is</Text>
                        <Text style={{fontSize:45, color:"#F99026", marginBottom:10}}>$ 150.00</Text>
                        <Text style={{fontSize:15, color:"#000000"}}>28 MAY 2021, 2:00 PM</Text>
                    </View>
                </View>
                <View style={[styles.container, {backgroundColor:"white", margin:20}]}>
                    <Image
                    source={require("../../../../assets/Cab-1.png")}
                    style={{height:100, width:100, resizeMode:"contain", marginRight:20}}
                    />
                    <View style={{flexDirection:"row", alignItems:"flex-start", flex:1, justifyContent:"space-between"}}>
                        <View style={{}}>
                            <View style={{flexDirection:"row", alignItems:"center", marginBottom:10}}>
                                <Text style={{fontSize:15, color:"#000000", fontWeight:"bold"}}>Volkswagen Golf</Text>
                            </View>
                            <View style={{marginBottom:10}}>
                                <Text style={{fontSize:10, color:"#000000"}}>DLP-8271</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"column", alignItems:"center"}}>
                            <Text style={{fontSize:11, color:"#000000", marginBottom:10}}>Hatchback</Text>
                            <Text style={{fontSize:12, color:"#000000"}}>OTP: <Text style={{color:"#F99026"}}>1549</Text></Text>
                        </View>
                    </View>
                </View>
                <Text style={{fontSize:12, color:"#000000", marginBottom:15, textAlign:"center"}}>Great driver? Consider giving a tip.</Text>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingHorizontal:20}}>
                    <TouchableOpacity activeOpacity={0.8} 
                    onPress={()=>setClick("10")}
                    style={{backgroundColor:(click==="10") ? "#F99026" :"#5E5E60", paddingVertical:10, paddingHorizontal:20, borderRadius:10, width:100, alignItems:"center"}}>
                        <Text style={{fontSize:15, color:"#FFFFFF"}}>$10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("15")}
                    activeOpacity={0.8} style={{backgroundColor:(click==="15") ? "#F99026" :"#5E5E60", paddingVertical:10, paddingHorizontal:20, borderRadius:10, width:100, alignItems:"center"}}>
                        <Text style={{fontSize:15, color:"#FFFFFF"}}>$15</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("20")}
                    activeOpacity={0.8} style={{backgroundColor:(click==="20") ? "#F99026" :"#5E5E60", paddingVertical:10, paddingHorizontal:20, borderRadius:10, width:100, alignItems:"center"}}>
                        <Text style={{fontSize:15, color:"#FFFFFF"}}>$20</Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingHorizontal:20, marginVertical:20, marginBottom:50}}>
                    <Text style={{fontSize:15, color:"#000000", marginBottom:10, marginTop:20}}>Payment Summary</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:14, color:"#5E5E60"}}>Total Price</Text>
                        <Text style={{fontSize:14, color:"#5E5E60"}}>$150.00</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:14, color:"#5E5E60"}}>Tip</Text>
                        <Text style={{fontSize:14, color:"#5E5E60"}}>$10.00</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:16, color:"#F99026"}}>Total Payment</Text>
                        <Text style={{fontSize:16, color:"#F99026"}}>$160.00</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        <View style={{position:"absolute", bottom:0,flex:1, backgroundColor:"#FFFFFF", width:"100%", padding:20}}>
            <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../../assets/ic-wallet.png")}
                    style={{height:20, width:20, resizeMode:"contain"}}
                    />
                    <View style={{flexDirection:"row", alignItems:"center", marginLeft:10}}>
                        <Text style={{fontSize:15, color:"#000000", marginRight:5}}>Wallet</Text>
                        <Text style={{fontSize:14, color:"#F99026"}}>(Balance - $2500.00)</Text>
                    </View>
                </View>
                <Image
                source={require("../../../../assets/ArrowForward.png")}
                style={{height:15, width:15, resizeMode:"contain"}}
                />
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Session Finished")}
            activeOpacity={0.8} style={{width:"90%",alignSelf:"center",marginTop:10,backgroundColor:"#F99026", padding:15, borderRadius:30, paddingHorizontal:30}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>Pay Now</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default RideShareSummaryScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:15,
        borderRadius:20,
        marginBottom:10,
        flex:1
    }
})