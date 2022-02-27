import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../../assets/Icon metro-menu.svg";
import VideoIcon from "../../../../assets/VideoIcon.svg";

const {height, width} = Dimensions.get("window");

const RideDetails = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const [menu, setMenu] = useState(false);

    const closeHandle=()=>{
        setIsOpen(false);
    }

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
        <View style={{}}>
        <Image
        source={require("../../../../assets/Map3.png")}
        style={{width:width, height:height, zIndex:-1, resizeMode:"cover"}}
        />
        <Image
        source={require("../../../../assets/cars.png")}
        style={{height:250, width:250, resizeMode:"contain", zIndex:5, position:"absolute", top:"20%", alignSelf:"center"}}
        />
        </View>
        <View style={{position:"absolute",top:0,width:"100%"}}>
            <View style={styles.header}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={openHandler}>
                        <Image
                        source={require("../../../../assets/Avatar.png")}
                        style={{height:40, width:40, borderRadius:50}}
                        />
                        <View style={{backgroundColor:"#FFFFFF",height:20, width:20, borderRadius:50, position:"absolute", bottom:0, left:0, alignSelf:"center", alignItems:"center", justifyContent:"center"}}>
                            <MenuIcon
                            height={'30'}
                            />
                        </View>
                    </TouchableOpacity>
                    <Image
                    source={require("../../../../assets/Heading.png")}
                    style={{height:100, width:100, resizeMode:"contain", marginLeft:20}}
                    />
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} style={{}}>
                    <   Image
                        source={require("../../../../assets/ic-search.png")}
                        style={{height:28, width:28, resizeMode:"contain"}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{marginHorizontal:20}}>
                        <Image
                        source={require("../../../../assets/ic-wallet.png")}
                        style={{height:28, width:28, resizeMode:"contain"}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image
                        source={require("../../../../assets/ic-notification.png")}
                        style={{height:28, width:28, resizeMode:"contain"}}
                        />
                        <View style={{backgroundColor:"#F99026", borderRadius:50, height:15, width:15, position:"absolute", right:0, alignItems:"center", justifyContent:"center"}}>
                            <Text style={{color:"#FFFFFF", fontSize:8}}>2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{}}>
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
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Ride Details</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:10, borderRadius:80, height:30, width:30, alignItems:"center", justifyContent:"center", marginRight:10}}>
                            <VideoIcon
                            height={'40'}
                            />
                        </TouchableOpacity>
                        <Text style={{fontSize:15, color:"#F99026", fontWeight:"500"}}>#RS58223</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{backgroundColor:"whitesmoke", padding:20, position:"absolute", bottom:"7%", width:width, zIndex:100}}>
            <View style={{backgroundColor:"white", paddingHorizontal:15, paddingVertical:5,borderRadius:20, elevation:5,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../../assets/Cab-1.png")}
                    style={{height:80, width:80, resizeMode:"contain"}}
                    />
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:13, color:"#000000", marginBottom:10}}>Volkswagen Golf</Text>
                        <Text style={{fontSize:11, color:"#000000"}}>DLP-8271</Text>
                    </View>
                </View>
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>Hatchback</Text>
                    <Text style={{fontSize:11, color:"#000000"}}>OTP: <Text style={{color:"#F99026"}}>1549</Text></Text>
                </View>
            </View>
            <View style={{marginVertical:20}}>
                <Text style={{fontSize:15, color:"#000000", marginBottom:10}}>Driver Details</Text>
                <View style={{backgroundColor:"white", paddingHorizontal:15, paddingVertical:10,borderRadius:20, elevation:5,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
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
                        <Text style={{fontSize:13, color:"#FFFFFF"}}>Call Driver</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginBottom:20}}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                    <Text style={{fontSize:15, color:"#000000"}}>Driver Details</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:13, color:"#808080", marginRight:5}}>Fwd Trip</Text>
                        <Image
                        source={require("../../../../assets/Share.png")}
                        style={{height:20, width:20, resizeMode:"contain"}}
                        />
                    </View>
                </View>
                <View style={{backgroundColor:"white", paddingHorizontal:15, paddingVertical:10,borderRadius:20, elevation:5}}>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize:15, color:"#F99026"}}>Pickup Location</Text>
                        <View style={{flexDirection:"row", alignItems:"center", marginTop:10}}>
                            <View style={{ alignItems:"center", justifyContent:"center",backgroundColor:"#FDF1E5", padding:20, borderRadius:20, height:30, width:30}}>
                                <View style={{alignItems:"center", justifyContent:"center",backgroundColor:"#F99026", borderRadius:30,height:30, width:30}}>
                                <Image
                                source={require("../../../../assets/User.png")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                                </View>
                            </View>
                            <Text style={{fontSize:15, color:"#000000", marginLeft:30}}>52, Sector 125, Atlanta Georgia</Text>
                        </View>
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize:15, color:"#F99026"}}>Pickup Location</Text>
                        <View style={{flexDirection:"row", alignItems:"center", marginTop:10}}>
                            <View style={{ alignItems:"center", justifyContent:"center",backgroundColor:"#FDF1E5", padding:20, borderRadius:20, height:30, width:30}}>
                                <View style={{alignItems:"center", justifyContent:"center",backgroundColor:"#F99026", borderRadius:30,height:30, width:30}}>
                                <Image
                                source={require("../../../../assets/User.png")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                                </View>
                            </View>
                            <Text style={{fontSize:15, color:"#000000", marginLeft:30}}>52, Sector 125, Atlanta Georgia</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Cancel Booking")}
        activeOpacity={0.8} style={{zIndex:110,position:"absolute",bottom:"3%",backgroundColor:"#5E5E60", padding:20, borderRadius:30, width:width-40, alignSelf:"center", alignItems:"center"}}>
            <Text style={{fontSize:15, color:"#FFFFFF"}}>Cancel Booking</Text>
        </TouchableOpacity>
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
                        source={require("../../../../assets/Avatar.png")}
                        style={{height:80, width:80, resizeMode:"contain"}}
                        />
                        <Text style={{marginTop:10, fontSize:15, color:"#000000"}}>John Doe</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:20, marginVertical:30}}>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Home.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#F99026", fontSize:15, marginLeft:30}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Profile.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>My Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/FaceCard.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Face Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Payment.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Payment Methods</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Tips.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Tips and Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Setting.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Contact.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Contact Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Password.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Reset Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginTop:60}}>
                        <Image
                        source={require("../../../../assets/Logout.png")}
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

export default RideDetails

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
    },
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:440,
        elevation:5,
        padding:20
    },
    content:{
        width:"100%",
        marginVertical:20
    },
})