import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const BookingConfirmationScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    
  return (
    <View style={styles.screen}>
        <ImageBackground
        source={require("../../../../assets/Map4.png")}
        style={{width:width, height:height, zIndex:-1}}
        />
        <View style={{position:"absolute", top:"20%", alignSelf:"center"}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Parking Details", {"title": "R", "heading": "Residence Parking (Driveway)", "address": "123, Lincon Street, New York", "price": "5.00", "timer": "5min", "rating": "4.2", "imgSrc": require("../../../../assets/Parking1.png")})}
            activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:5, paddingHorizontal:10,borderRadius:3, alignItems:"center", justifyContent:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>R</Text>
            </TouchableOpacity>
        </View>
        <View style={{position:"absolute", top:"35%", alignSelf:"flex-start", left:"14%"}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Parking Details", {"title": "G", "heading": "Central Shopping Centre (Garage)", "address": "123, Lincon Street, New York", "price": "5.00", "timer": "5min", "rating": "4.2", "imgSrc": require("../../../../assets/Parking2.png")})}
            activeOpacity={0.8} style={{alignSelf:"flex-start",marginVertical:10,backgroundColor:"#F99026", padding:5, paddingHorizontal:10,borderRadius:3, alignItems:"center", justifyContent:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>G</Text>
            </TouchableOpacity>
        </View>
        <View style={{position:"absolute", top:"30%", alignSelf:"flex-end", right:"20%"}}>
            <TouchableOpacity activeOpacity={0.8} 
            onPress={()=>navigation.navigate("Parking Details", {"title": "L", "heading": "Central Shopping Centre (Lot)", "address": "123, Lincon Street, New York", "price": "5.00", "timer": "5min", "rating": "4.2", "imgSrc": require("../../../../assets/Parking3.png")})}
            style={{backgroundColor:"#F99026", padding:5, paddingHorizontal:10,borderRadius:3, alignItems:"center", justifyContent:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>L</Text>
            </TouchableOpacity>
        </View>
        <View style={{position:"absolute", top:"27%", alignSelf:"center"}}>
            <TouchableOpacity activeOpacity={0.8}
            onPress={()=>navigation.navigate("Parking Details", {"title": "R", "heading": "Residence Parking (Driveway)", "address": "123, Lincon Street, New York", "price": "5.00", "timer": "5min", "rating": "4.2", "imgSrc": require("../../../../assets/Parking1.png")})}
            style={{marginTop:10,backgroundColor:"#F99026", padding:5, paddingHorizontal:10,borderRadius:3, alignItems:"center", justifyContent:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>R</Text>
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
                        <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Booking Confirmation</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{position:"absolute", bottom:"0%",maxHeight:500,alignSelf:"center", backgroundColor:"whitesmoke", padding:10, borderRadius:10, marginTop:20, width:width}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flexDirection:"row", alignItems:"flex-end",backgroundColor:"#FFFFFF", padding:10, borderRadius:10, marginVertical:20, width:width-40, alignSelf:"center"}}>
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
                <View style={{paddingHorizontal:10}}>
                    <Text style={{fontSize:16, color:"#000000", marginBottom:10}}>Session Details</Text>
                    <View style={{backgroundColor:"#FFFFFF", padding:10, borderRadius:10}}>
                        <View style={{flexDirection:"row", alignItems:"center", marginBottom:10}}>
                            <View style={{marginRight:30}}>
                                <Text style={{fontSize:15, color:"#F99026", marginBottom:10}}>Zone</Text>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/Car3.png")}
                                    style={{height:40, width:40, resizeMode:"contain"}}
                                    />
                                    <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>A</Text>
                                </View>
                            </View>
                            <View style={{}}>
                                <Text style={{fontSize:15, color:"#F99026", marginBottom:10}}>Parking Number</Text>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/P.png")}
                                    style={{height:40, width:40, resizeMode:"contain"}}
                                    />
                                    <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>21</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:10}}>
                            <Text style={{fontSize:15, color:"#F99026", marginBottom:10}}>Starting From</Text>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <View style={{marginRight:10,backgroundColor:"#FDF1E5", padding:10, borderRadius:10}}>
                                    <Image
                                    source={require("../../../../assets/calendar.png")}
                                    style={{height:20, width:20, resizeMode:"contain"}}
                                    />
                                </View>
                                <TextInput
                                placeholder='26 May 2021, 10:00 AM'
                                placeholderTextColor="#000000"
                                style={{fontSize:15, color:"#000000"}}
                                />
                            </View>
                        </View>
                        <View style={{marginTop:20}}>
                            <Text style={{fontSize:15, color:"#F99026", marginBottom:10}}>Duration</Text>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <View style={{marginRight:10,backgroundColor:"#FDF1E5", padding:10, borderRadius:10}}>
                                    <Image
                                    source={require("../../../../assets/calendar.png")}
                                    style={{height:20, width:20, resizeMode:"contain"}}
                                    />
                                </View>
                                <View style={{flex:1,marginLeft:10,flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>
                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <TextInput
                                        placeholder='0'
                                        placeholderTextColor="#000000"
                                        keyboardType='number-pad'
                                        maxLength={1}
                                        style={{fontSize:15, color:"#000000", fontWeight:"bold"}}
                                        />
                                        <Text style={{fontSize:13, color:"#808080"}}>Days</Text>
                                    </View>
                                    <View style={{flexDirection:"row", alignItems:"center", marginHorizontal:20}}>
                                        <TextInput
                                        placeholder='0'
                                        placeholderTextColor="#000000"
                                        keyboardType='number-pad'
                                        maxLength={2}
                                        style={{fontSize:15, color:"#000000", fontWeight:"bold"}}
                                        />
                                        <Text style={{fontSize:13, color:"#808080"}}>Hours</Text>
                                    </View>
                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <TextInput
                                        placeholder='0'
                                        placeholderTextColor="#000000"
                                        keyboardType='number-pad'
                                        maxLength={2}
                                        style={{fontSize:15, color:"#000000", fontWeight:"bold"}}
                                        />
                                        <Text style={{fontSize:13, color:"#808080"}}>Minutes</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom:200, marginTop:30}}>
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
                            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:10, paddingHorizontal:30,borderRadius:10}}>
                                <Text style={{fontSize:13, color:"#FFFFFF"}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
        <View style={{position:"absolute", bottom:0, width:width, backgroundColor:"#FFFFFF", padding:20}}>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../../assets/ic-wallet.png")}
                    style={{height:30, width:30, resizeMode:"contain"}}
                    />
                    <View style={{flexDirection:"row", alignItems:"center", marginLeft:20}}>
                        <Text style={{fontSize:16, color:"#000000", marginRight:5}}>Wallet</Text>
                        <Text style={{fontSize:14, color:"#F99026"}}>(Balance: $2500.00)</Text>
                    </View>
                </View> 
                <Image
                source={require("../../../../assets/ArrowForward.png")}
                style={{height:20, width:20, resizeMode:"contain"}}
                />  
            </View> 
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:10}}>
                <View style={{}}>
                    <Text style={{fontSize:13, color:"#808080"}}>Total Fare (*approx)</Text>
                    <Text style={{fontSize:18, color:"#F99026", marginTop:5}}>$140.00</Text>
                </View>
                <TouchableOpacity 
                onPress={()=>navigation.navigate("Payment")}
                activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:20, borderRadius:50, paddingHorizontal:30}}>
                    <Text style={{fontSize:16, color:"#FFFFFF"}}>Confirm Booking</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default BookingConfirmationScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})