import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from '../../../components/Header';

const {height, width} = Dimensions.get("window");

const DryCleaningDetailPage = () => {
 
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
                        <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Dry Cleaners Detail Page</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:10}}>
                    <View style={{}}>
                        <Image
                        source={require("../../../assets/DryCleaning.png")}
                        style={{height:150, width:width-40, resizeMode:"contain", marginVertical:10}}
                        />
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-end", backgroundColor:"#FDF1E5", padding:10, borderRadius:10, marginVertical:20}}>
                        <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                            <View style={{alignItems:"center", justifyContent:"center",backgroundColor:"#F99026", padding:10,borderRadius:20}}>
                                <Image
                                source={require("../../../assets/service.png")}
                                style={{height:15, width:15, resizeMode:"contain"}}
                                />
                            </View>
                            <View style={{marginLeft:10, flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between", flex:1}}>
                                <View style={{}}>
                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>{route.params.heading}</Text>
                                        <View style={{flexDirection:"row", alignItems:"center"}}>
                                            <Image
                                            source={require("../../../assets/rating.png")}
                                            style={{height:15, width:15, resizeMode:"contain"}}
                                            />
                                            <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>{route.params.rating}</Text>
                                        </View>
                                    </View>
                                    <Text style={{fontSize:12, color:"#808080"}}>{route.params.address}</Text>
                                    <View style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
                                        <View style={{flexDirection:"row", alignItems:"center",marginLeft:-40}}>
                                            <Image
                                            source={require("../../../assets/droplocation.png")}
                                            style={{height:15, width:15, resizeMode:"contain"}}
                                            />
                                            <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>{route.params.location}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{alignItems:"flex-end"}}>
                                    <Image
                                    source={require("../../../assets/Scanner.png")}
                                    style={{height:40, width:40, resizeMode:"contain", marginBottom:20}}
                                    />   
                                    <View style={{flexDirection:"row", alignItems:"center", marginLeft:-20}}>
                                        <Image
                                        source={require("../../../assets/timer.png")}
                                        style={{height:15, width:15, resizeMode:"contain"}}
                                        />
                                        <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>{route.params.duration}</Text>
                                    </View>  
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginVertical:20}}>
                        <View style={{backgroundColor:"#FFFFFF", padding:10, borderRadius:10}}>
                            <Text style={{fontSize:14, color:"#000000", marginBottom:10}}>About:</Text>
                            <Text style={{fontSize:14, color:"#000000", marginBottom:10}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Text>
                        </View>
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize:15, color:"#000000", marginBottom:10}}>Contact Info</Text>
                        <View style={{backgroundColor:"white", paddingHorizontal:15, paddingVertical:10,borderRadius:20,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Image
                                source={require("../../../assets/callProfile.png")}
                                style={{height:50, width:50, resizeMode:"contain"}}
                                />
                                <View style={{marginLeft:20}}>
                                    <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Jason Anderson</Text>
                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <Image
                                        source={require("../../../assets/Calling.png")}
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
                    <View style={{marginBottom:200}}>
                        <Text style={{fontSize:15, color:"#000000", marginBottom:10}}>Availability</Text>
                        <ScrollView horizontal={true}>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick("Monday 12:00PM-8:00PM")}
                            style={{alignItems:"center",backgroundColor:"#FDF1E5", padding:10, borderRadius:10, borderWidth:1, borderColor: (click==="Monday 12:00PM-8:00PM") ? "#000000" : "transparent"}}>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>MON</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>12:00 PM</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>|</Text>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>08:00 PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick("Tuesday 12:00PM-8:00PM")}
                            style={{marginHorizontal:10,alignItems:"center",backgroundColor:"#FDF1E5", padding:10, borderRadius:10, borderWidth:1, borderColor: (click==="Tuesday 12:00PM-8:00PM") ? "#000000" : "transparent"}}>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>TUE</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>12:00 PM</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>|</Text>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>08:00 PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick("Wednesday 12:00PM-8:00PM")}
                            style={{marginHorizontal:10,alignItems:"center",backgroundColor:"#FDF1E5", padding:10, borderRadius:10, borderWidth:1, borderColor: (click==="Wednesday 12:00PM-8:00PM") ? "#000000" : "transparent"}}>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>WED</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>12:00 PM</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>|</Text>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>08:00 PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick("Thursday 12:00PM-8:00PM")}
                            style={{marginHorizontal:10,alignItems:"center",backgroundColor:"#FDF1E5", padding:10, borderRadius:10, borderWidth:1, borderColor: (click==="Thursday 12:00PM-8:00PM") ? "#000000" : "transparent"}}>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>THU</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>12:00 PM</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>|</Text>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>08:00 PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick("Friday 12:00PM-8:00PM")}
                            style={{marginHorizontal:10,alignItems:"center",backgroundColor:"#FDF1E5", padding:10, borderRadius:10, borderWidth:1, borderColor: (click==="Friday 12:00PM-8:00PM") ? "#000000" : "transparent"}}>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>FRI</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>12:00 PM</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>|</Text>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>08:00 PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick("Saturday 12:00PM-8:00PM")}
                            style={{marginHorizontal:10,alignItems:"center",backgroundColor:"#FDF1E5", padding:10, borderRadius:10, borderWidth:1, borderColor: (click==="Saturday 12:00PM-8:00PM") ? "#000000" : "transparent"}}>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>SAT</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>12:00 PM</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>|</Text>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>08:00 PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick("Sunday 12:00PM-8:00PM")}
                            style={{marginHorizontal:10,alignItems:"center",backgroundColor:"#FDF1E5", padding:10, borderRadius:10, borderWidth:1, borderColor: (click==="Sunday 12:00PM-8:00PM") ? "#000000" : "transparent"}}>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>SUN</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>12:00 PM</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>|</Text>
                                <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>08:00 PM</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>
        <View style={{padding:10,position:"absolute", bottom:0, backgroundColor:"#FFFFFF", width:width, padding:20, zIndex:80, alignItems:"center"}}>
            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:10, borderRadius:20, width:"80%", alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Continue</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default DryCleaningDetailPage

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})