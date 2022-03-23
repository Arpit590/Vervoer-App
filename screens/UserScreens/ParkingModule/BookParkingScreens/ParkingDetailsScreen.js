import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const ParkingDetailsScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const [click, setClick] = useState("");

  return (
    <View style={styles.screen}>
        <Header/>
        <View style={{ top:"0%", alignSelf:"flex-start", paddingHorizontal:20}}>
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
                        <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Parking Details</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:10}}>
                    <View style={{}}>
                        <Image
                        source={route.params.imgSrc}
                        style={{height:200, width:width-40, resizeMode:"contain", borderRadius:10}}
                        />
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-end", backgroundColor:"#FFFFFF", padding:10, borderRadius:10, marginVertical:20}}>
                        <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                            <View style={{alignItems:"center", justifyContent:"center",backgroundColor:"#F99026", paddingVertical:5, paddingHorizontal:10,borderRadius:5}}>
                                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>{route.params.title}</Text>
                            </View>
                            <View style={{marginLeft:20}}>
                                <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>{route.params.heading}</Text>
                                <Text style={{fontSize:12, color:"#808080"}}>{route.params.address}</Text>
                                <View style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
                                    <View style={{flexDirection:"row", alignItems:"center", marginRight:10}}>
                                        <Image
                                        source={require("../../../../assets/timer.png")}
                                        style={{height:15, width:15, resizeMode:"contain"}}
                                        />
                                        <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>{route.params.timer}</Text>
                                    </View>
                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <Image
                                        source={require("../../../../assets/rating.png")}
                                        style={{height:15, width:15, resizeMode:"contain"}}
                                        />
                                        <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>{route.params.rating}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize:15, color:"#F99026", marginBottom:5}}>${route.params.price}/H</Text>
                        </View>
                    </View>
                    <View style={{}}>
                        <Text style={{fontSize:16, color:"#000000", marginBottom:20}}>Available Parking Spots</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <TouchableOpacity activeOpacity={0.8} 
                            onPress={()=>setClick("2")}
                            style={{backgroundColor:(click==="2") ? "#F99026" :"#5E5E60", paddingVertical:10, paddingHorizontal:20, borderRadius:10, width:100, alignItems:"center"}}>
                                <Text style={{fontSize:15, color:"#FFFFFF"}}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={()=>setClick("3")}
                            activeOpacity={0.8} style={{backgroundColor:(click==="3") ? "#F99026" :"#5E5E60", paddingVertical:10, paddingHorizontal:20, borderRadius:10, width:100, alignItems:"center"}}>
                                <Text style={{fontSize:15, color:"#FFFFFF"}}>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={()=>setClick("5")}
                            activeOpacity={0.8} style={{backgroundColor:(click==="5") ? "#F99026" :"#5E5E60", paddingVertical:10, paddingHorizontal:20, borderRadius:10, width:100, alignItems:"center"}}>
                                <Text style={{fontSize:15, color:"#FFFFFF"}}>5</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginVertical:20}}>
                        <Text style={{fontSize:15, color:"#000000", marginBottom:10}}>Parking Info</Text>
                        <View style={{backgroundColor:"#FFFFFF", padding:10, borderRadius:10}}>
                            <Text style={{fontSize:14, color:"#000000", marginBottom:10}}>About:</Text>
                            <Text style={{fontSize:14, color:"#000000", marginBottom:10}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Text>
                            <Text style={{fontSize:14, color:"#000000", marginBottom:10}}>Time Availabilty:</Text>
                            <Text style={{fontSize:14, color:"#000000"}}>24X7</Text>
                        </View>
                    </View>
                    <View style={{marginBottom:200}}>
                        <Text style={{fontSize:15, color:"#000000", marginBottom:10}}>Contact Info</Text>
                        <View style={{backgroundColor:"white", paddingHorizontal:15, paddingVertical:10,borderRadius:20,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
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
                                <Text style={{fontSize:13, color:"#FFFFFF"}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
        <View style={{padding:10,position:"absolute", bottom:0, backgroundColor:"#FFFFFF", flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width, paddingHorizontal:20, zIndex:100}}>
            <View style={{}}>
                <Text style={{fontSize:13, color:"#808080"}}>Price per Hour</Text>
                <Text style={{fontSize:15, color:"#F99026", marginTop:5}}>${route.params.price}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:10, borderRadius:20, width:"40%", alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Book Now</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ParkingDetailsScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})