import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from '../../../components/Header';

const {height, width} = Dimensions.get("window");

const DropLocationScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const [click, setClick] = useState("");
    
  return (
    <View style={styles.screen}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20, marginHorizontal:20}}>
                <View style={{flexDirection:"row" ,alignItems:"flex-start", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{}}
                        onPress={()=>navigation.goBack()}>
                            <BackArrowIcon
                            height={'30'}
                            />
                        </TouchableOpacity>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:16, color:"#000000"}}>Drop Location</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:15, marginBottom:30}}>
                    <Text style={{fontSize:16, color:"#000000"}}>Select Drop Location</Text>
                    {/* <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Order History")}>
                        <Text style={{fontSize:16, color:"#F99026"}}>ORDER HISTORY</Text>
                    </TouchableOpacity> */}
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:10}}>
                    <TouchableOpacity
                    onPress={()=>setClick("Home")}
                    activeOpacity={0.8} style={{marginVertical:10,paddingHorizontal:40,alignItems:"center", backgroundColor:(click==="Home") ? "#FDF1E5" :"#FFFFFF", borderRadius:20, padding:20, elevation:5, marginLeft:20}}>
                        <Image
                        source={require("../../../assets/Home1.png")}
                        style={{height:30, width:30, resizeMode:"contain"}}
                        />
                        <Text style={{fontSize:12, color:"#000000", marginTop:5}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>setClick("Office")}
                    activeOpacity={0.8} style={{marginVertical:10,paddingHorizontal:40,alignItems:"center", backgroundColor:(click==="Office") ? "#FDF1E5" :"#FFFFFF", borderRadius:20, padding:20, elevation:5, marginHorizontal:20}}>
                        <Image
                        source={require("../../../assets/Merchant.png")}
                        style={{height:30, width:30, resizeMode:"contain"}}
                        />
                        <Text style={{fontSize:12, color:"#000000", marginTop:5}}>Office</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>setClick("New Address")}
                    activeOpacity={0.8} style={{marginVertical:10,paddingHorizontal:40,alignItems:"center", backgroundColor:(click==="New Address") ? "#FDF1E5" :"#FFFFFF", borderRadius:20, padding:20, elevation:5, marginRight:20}}>
                        <Image
                        source={require("../../../assets/Merchant.png")}
                        style={{height:30, width:30, resizeMode:"contain"}}
                        />
                        <Text style={{fontSize:12, color:"#000000", marginTop:5}}>Enter New Address</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{marginTop:10}}>
                    <Text style={{fontSize:20, color:"#808080"}}>Enter Address Details</Text>
                    <View style={{marginVertical:20}}>
                        <Text style={{fontSize:12, color:"#808080", marginLeft:5}}>Address</Text>
                        <View style={{borderBottomColor:"#808080", borderBottomWidth:1, width:width-60}}>
                            <TextInput
                            placeholder='123, Lincon Street, New York'
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
                    <View style={{marginBottom:20}}>
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
        </ScrollView>
        <View style={{position:"absolute", bottom:0, backgroundColor:"transparent", flexDirection:"row", justifyContent:"center",alignSelf:"center",alignItems:"center",width:width,zIndex:80, padding:20}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Schedule")}
            activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:20, borderRadius:30, width:"45%", alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Schedule")}
            activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:20, borderRadius:30, width:"45%",marginLeft:15, alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Skip This Step</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default DropLocationScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"white",
        flex:1
    }
})