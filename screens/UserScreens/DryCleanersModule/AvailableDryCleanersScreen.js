import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../assets/Icon metro-menu.svg";
import Header from '../../../components/Header';
// import StarRating from 'react-native-star-rating';

const {height, width} = Dimensions.get("window");

const AvailableDryCleanersScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    
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
                            <Text style={{fontSize:16, color:"#000000"}}>List of Dry Cleaners</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Order History")}>
                        <Text style={{fontSize:16, color:"#F99026"}}>ORDER HISTORY</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:30}}>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                        <Text style={{fontSize:16, color:"#000000"}}>Popular Cleaners Nearby</Text>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Text style={{fontSize:16, color:"#F99026"}}>SEE ALL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{}}>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>navigation.navigate("Dry Cleaning Details", {"heading": "Micro Cleaners", "address": "123, Lincon Street, New York", "duration": "12:00 PM - 08:00 PM", "rating": "4.2", "location": "1.24274 miles"})}
                        style={{flexDirection:"row", alignItems:"flex-end", backgroundColor:"whitesmoke", padding:10, borderRadius:10, marginVertical:20}}>
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
                                            <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Mico Cleaners</Text>
                                        </View>
                                        <Text style={{fontSize:12, color:"#808080"}}>123, Lincon Street, New York</Text>
                                        <View style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
                                            <View style={{flexDirection:"row", alignItems:"center",marginLeft:-40}}>
                                                <Image
                                                source={require("../../../assets/droplocation.png")}
                                                style={{height:15, width:15, resizeMode:"contain"}}
                                                />
                                                <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>1,24274 miles</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{alignItems:"flex-end"}}> 
                                        <View style={{flexDirection:"row", alignItems:"center"}}>
                                            <Image
                                            source={require("../../../assets/rating.png")}
                                            style={{height:15, width:15, resizeMode:"contain"}}
                                            />
                                            <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>4.2</Text>
                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center", marginLeft:-20, marginTop:37}}>
                                            <Image
                                            source={require("../../../assets/timer.png")}
                                            style={{height:15, width:15, resizeMode:"contain"}}
                                            />
                                            <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>12:00 PM - 08:00 PM</Text>
                                        </View>  
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>navigation.navigate("Dry Cleaning Details", {"heading": "Micro Cleaners", "address": "123, Lincon Street, New York", "duration": "12:00 PM - 08:00 PM", "rating": "4.2", "location": "1.24274 miles"})}
                        style={{flexDirection:"row", alignItems:"flex-end", backgroundColor:"whitesmoke", padding:10, borderRadius:10, marginVertical:20}}>
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
                                            <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Mico Cleaners</Text>
                                        </View>
                                        <Text style={{fontSize:12, color:"#808080"}}>123, Lincon Street, New York</Text>
                                        <View style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
                                            <View style={{flexDirection:"row", alignItems:"center",marginLeft:-40}}>
                                                <Image
                                                source={require("../../../assets/droplocation.png")}
                                                style={{height:15, width:15, resizeMode:"contain"}}
                                                />
                                                <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>1,24274 miles</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{alignItems:"flex-end"}}> 
                                        <View style={{flexDirection:"row", alignItems:"center"}}>
                                            <Image
                                            source={require("../../../assets/rating.png")}
                                            style={{height:15, width:15, resizeMode:"contain"}}
                                            />
                                            <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>4.2</Text>
                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center", marginLeft:-20, marginTop:37}}>
                                            <Image
                                            source={require("../../../assets/timer.png")}
                                            style={{height:15, width:15, resizeMode:"contain"}}
                                            />
                                            <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>12:00 PM - 08:00 PM</Text>
                                        </View>  
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>navigation.navigate("Dry Cleaning Details", {"heading": "Micro Cleaners", "address": "123, Lincon Street, New York", "duration": "12:00 PM - 08:00 PM", "rating": "4.2", "location": "1.24274 miles"})}
                        style={{flexDirection:"row", alignItems:"flex-end", backgroundColor:"whitesmoke", padding:10, borderRadius:10, marginVertical:20}}>
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
                                            <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Mico Cleaners</Text>
                                        </View>
                                        <Text style={{fontSize:12, color:"#808080"}}>123, Lincon Street, New York</Text>
                                        <View style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
                                            <View style={{flexDirection:"row", alignItems:"center",marginLeft:-40}}>
                                                <Image
                                                source={require("../../../assets/droplocation.png")}
                                                style={{height:15, width:15, resizeMode:"contain"}}
                                                />
                                                <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>1,24274 miles</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{alignItems:"flex-end"}}> 
                                        <View style={{flexDirection:"row", alignItems:"center"}}>
                                            <Image
                                            source={require("../../../assets/rating.png")}
                                            style={{height:15, width:15, resizeMode:"contain"}}
                                            />
                                            <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>4.2</Text>
                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center", marginLeft:-20, marginTop:37}}>
                                            <Image
                                            source={require("../../../assets/timer.png")}
                                            style={{height:15, width:15, resizeMode:"contain"}}
                                            />
                                            <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>12:00 PM - 08:00 PM</Text>
                                        </View>  
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>navigation.navigate("Dry Cleaning Details", {"heading": "Micro Cleaners", "address": "123, Lincon Street, New York", "duration": "12:00 PM - 08:00 PM", "rating": "4.2", "location": "1.24274 miles"})}
                        style={{flexDirection:"row", alignItems:"flex-end", backgroundColor:"whitesmoke", padding:10, borderRadius:10, marginVertical:20}}>
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
                                            <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Mico Cleaners</Text>
                                        </View>
                                        <Text style={{fontSize:12, color:"#808080"}}>123, Lincon Street, New York</Text>
                                        <View style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
                                            <View style={{flexDirection:"row", alignItems:"center",marginLeft:-40}}>
                                                <Image
                                                source={require("../../../assets/droplocation.png")}
                                                style={{height:15, width:15, resizeMode:"contain"}}
                                                />
                                                <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>1,24274 miles</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{alignItems:"flex-end"}}> 
                                        <View style={{flexDirection:"row", alignItems:"center"}}>
                                            <Image
                                            source={require("../../../assets/rating.png")}
                                            style={{height:15, width:15, resizeMode:"contain"}}
                                            />
                                            <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>4.2</Text>
                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center", marginLeft:-20, marginTop:37}}>
                                            <Image
                                            source={require("../../../assets/timer.png")}
                                            style={{height:15, width:15, resizeMode:"contain"}}
                                            />
                                            <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>12:00 PM - 08:00 PM</Text>
                                        </View>  
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>navigation.navigate("Dry Cleaning Details", {"heading": "Micro Cleaners", "address": "123, Lincon Street, New York", "duration": "12:00 PM - 08:00 PM", "rating": "4.2", "location": "1.24274 miles"})}
                        style={{flexDirection:"row", alignItems:"flex-end", backgroundColor:"whitesmoke", padding:10, borderRadius:10, marginVertical:20}}>
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
                                            <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Mico Cleaners</Text>
                                        </View>
                                        <Text style={{fontSize:12, color:"#808080"}}>123, Lincon Street, New York</Text>
                                        <View style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
                                            <View style={{flexDirection:"row", alignItems:"center",marginLeft:-40}}>
                                                <Image
                                                source={require("../../../assets/droplocation.png")}
                                                style={{height:15, width:15, resizeMode:"contain"}}
                                                />
                                                <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>1,24274 miles</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{alignItems:"flex-end"}}> 
                                        <View style={{flexDirection:"row", alignItems:"center"}}>
                                            <Image
                                            source={require("../../../assets/rating.png")}
                                            style={{height:15, width:15, resizeMode:"contain"}}
                                            />
                                            <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>4.2</Text>
                                        </View>
                                        <View style={{flexDirection:"row", alignItems:"center", marginLeft:-20, marginTop:37}}>
                                            <Image
                                            source={require("../../../assets/timer.png")}
                                            style={{height:15, width:15, resizeMode:"contain"}}
                                            />
                                            <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>12:00 PM - 08:00 PM</Text>
                                        </View>  
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style={{padding:10,position:"absolute", bottom:0, backgroundColor:"transparent", width:width, padding:20, zIndex:80, alignItems:"center"}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Select Items")}
            activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:10, borderRadius:20, width:"80%", alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Select Dry Cleaner</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default AvailableDryCleanersScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"white",
        flex:1
    },
    modal:{
        flex:1,
        width:"90%",
        backgroundColor:"white",
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:height-500,
        elevation:5,
        padding:20
    },
    content:{
        width:"100%",
        marginVertical:20
    },
})