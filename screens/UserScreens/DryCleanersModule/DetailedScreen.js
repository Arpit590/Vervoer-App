import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MenuIcon from "../../../assets/Icon metro-menu.svg";

const {height, width} = Dimensions.get("window");

const DetailedScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const value1 = useState(new Animated.Value(0))[0];
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
        <View style={{position:"absolute", bottom:"0%",height:400,alignSelf:"center", backgroundColor:"#FFFFFF", padding:10, borderRadius:10, marginTop:20, width:width}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginTop:20,paddingHorizontal:20}}>
                    <View style={{}}>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <Text style={{fontSize:15, color:"#F99026"}}>Pickup and Delivery Address</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{paddingHorizontal:20,backgroundColor:"#5E5E60", padding:10, borderRadius:10}}>
                                <Text style={{fontSize:15, color:"#FFFFFF"}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{}}>
                            <View style={{flexDirection:"row", alignItems:"flex-start",paddingVertical:10}}>
                                <View style={{borderRadius:50, padding:5, borderColor: "green", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                                    <View style={{backgroundColor: "green", padding:6, borderRadius:30}}></View>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <Text style={{fontSize:15, color:"#000000"}}>Pickup</Text>
                                    <Text style={{fontSize:14, color:"#808080", marginTop:5}}>123, Lincon Street, New York</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"flex-start",paddingVertical:10}}>
                                <View style={{borderRadius:50, padding:5, borderColor: "#F99026", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                                    <View style={{backgroundColor: "#F99026", padding:6, borderRadius:30}}></View>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <Text style={{fontSize:15, color:"#000000"}}>Drop Off</Text>
                                    <Text style={{fontSize:14, color:"#808080", marginTop:5}}>30 Lincoln St, New Rochelle, New York</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{}}>
                            <Text style={{fontSize:17, color:"#F99026", marginBottom:5, marginTop:20}}>Change Delivery Address</Text>
                            <Text style={{fontSize:11, color:"#808080", marginBottom:20}}>Pay additional change for delay</Text>
                            <View style={{marginBottom:20}}>
                                <Text style={{fontSize:10, color:"#808080", marginBottom:0}}>Address</Text>
                                <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-60,}}>
                                    <TextInput
                                    placeholder='Enter Your Email'
                                    placeholderTextColor="#000000"
                                    // value={number}
                                    // onChangeText={(text)=>setNumber(text)}
                                    keyboardType='email-address'
                                    style={{color:"#000000", fontSize:15}}
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
                                <Text style={{fontSize:10, color:"#808080", marginBottom:0}}>ZIP Code</Text>
                                <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-60,}}>
                                    <TextInput
                                    placeholder='07030'
                                    placeholderTextColor="#000000"
                                    // value={number}
                                    // onChangeText={(text)=>setNumber(text)}
                                    keyboardType='number-pad'
                                    style={{color:"#000000", fontSize:15}}
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
        <Animated.View style={{backgroundColor:"#FFFFFF",position:"absolute",top:0,left:value, height:height, width: width-80, zIndex:1000, padding:20, paddingHorizontal:0}}>
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

export default DetailedScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
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
        elevation:5,
        position:"absolute",
        top:0,
        width:width
    }
})