import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../assets/Icon metro-menu.svg";

const {height, width} = Dimensions.get("window");

const ReceiptScreen = () => {
 
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

export default ReceiptScreen

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
        elevation:5
    }
})