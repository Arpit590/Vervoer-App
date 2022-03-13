import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../assets/Icon metro-menu.svg";
// import StarRating from 'react-native-star-rating';

const {height, width} = Dimensions.get("window");

const AvailableDryCleanersScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const [menu, setMenu] = useState(false);

    const openHandler=()=>{
        setMenu(true);
        Animated.timing(value,{
            toValue:0,
            duration:1000,
            useNativeDriver:false
        }).start()
    }

    const closeHandler=()=>{
        setMenu(false);
        Animated.timing(value,{
            toValue:-500,
            duration:1000,
            useNativeDriver:false
        }).start()
    }
    
  return (
    <View style={styles.screen}>
        <View style={styles.header}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity activeOpacity={0.8} onPress={openHandler}>
                    <Image
                    source={require("../../../assets/Avatar.png")}
                    style={{height:40, width:40, borderRadius:50}}
                    />
                    <View style={{backgroundColor:"#FFFFFF",height:20, width:20, borderRadius:50, position:"absolute", bottom:0, left:0, alignSelf:"center", alignItems:"center", justifyContent:"center"}}>
                        <MenuIcon
                        height={'30'}
                        />
                    </View>
                </TouchableOpacity>
                <Image
                source={require("../../../assets/Heading.png")}
                style={{height:100, width:100, resizeMode:"contain", marginLeft:20}}
                />
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity activeOpacity={0.8} style={{}}>
                <   Image
                    source={require("../../../assets/ic-search.png")}
                    style={{height:28, width:28, resizeMode:"contain"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{marginHorizontal:20}}>
                    <Image
                    source={require("../../../assets/ic-wallet.png")}
                    style={{height:28, width:28, resizeMode:"contain"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                    <Image
                    source={require("../../../assets/ic-notification.png")}
                    style={{height:28, width:28, resizeMode:"contain"}}
                    />
                    <View style={{backgroundColor:"#F99026", borderRadius:50, height:15, width:15, position:"absolute", right:0, alignItems:"center", justifyContent:"center"}}>
                        <Text style={{color:"#FFFFFF", fontSize:8}}>2</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
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
        <View style={{padding:10,position:"absolute", bottom:0, backgroundColor:"transparent", width:width, padding:20, zIndex:100, alignItems:"center"}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Select Items")}
            activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:10, borderRadius:20, width:"80%", alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Select Dry Cleaner</Text>
            </TouchableOpacity>
        </View>
        <Animated.View style={{backgroundColor:"#FFFFFF",position:"absolute",top:0,left:value, height:height, width: width-80, zIndex:100, padding:20, paddingHorizontal:0}}>
            <View style={{paddingHorizontal:20, display: menu ? "flex" : "none"}}>
                <TouchableOpacity 
                activeOpacity={0.8} onPress={closeHandler}>
                    <AntDesign
                    name="close"
                    color="#F99026"
                    size={24}
                    />
                </TouchableOpacity>
                <View style={{marginVertical:20}}>
                    <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center"}}>
                        <Image
                        source={require("../../../assets/Avatar.png")}
                        style={{height:80, width:80, resizeMode:"contain"}}
                        />
                        <Text style={{marginTop:10, fontSize:15, color:"#000000"}}>John Doe</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:20, marginVertical:30}}>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Home.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#F99026", fontSize:15, marginLeft:30}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Profile.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>My Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/FaceCard.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Face Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Payment.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Payment Methods</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Tips.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Tips and Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Setting.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Contact.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Contact Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Password.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Reset Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginTop:60}}>
                        <Image
                        source={require("../../../assets/Logout.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Logout</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Animated.View>
    </View>
  )
}

export default AvailableDryCleanersScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"white",
        flex:1
    },
    header:{
        backgroundColor:"#FFFFFF",
        borderBottomLeftRadius:30, 
        borderBottomRightRadius:30,
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        elevation:5
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