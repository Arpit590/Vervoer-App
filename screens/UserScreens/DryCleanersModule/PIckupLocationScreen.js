import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../assets/Icon metro-menu.svg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const {height, width} = Dimensions.get("window");

const PickupLocationScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const [menu, setMenu] = useState(false);
    const [click, setClick] = useState("");

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
                            <Text style={{fontSize:16, color:"#000000"}}>Pickup Location</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:15, marginBottom:30}}>
                    <Text style={{fontSize:16, color:"#000000"}}>Select Pickup Location</Text>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Order History")}>
                        <Text style={{fontSize:16, color:"#F99026"}}>ORDER HISTORY</Text>
                    </TouchableOpacity>
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
                        <Text style={{fontSize:12, color:"#000000", marginTop:5}}>New Address</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{marginTop:10}}>
                    <Text style={{fontSize:20, color:"#808080"}}>Enter New Address</Text>
                    <View style={{marginVertical:20}}>
                        <Text style={{fontSize:12, color:"#808080", marginLeft:5}}>Address</Text>
                        <View style={{borderBottomColor:"#808080", borderBottomWidth:1, width:width-60}}>
                            <TextInput
                            placeholder='Enter Your Address'
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
        <View style={{position:"absolute", bottom:0, backgroundColor:"transparent", flexDirection:"row", justifyContent:"center",alignSelf:"center",alignItems:"center",width:width,zIndex:100, padding:20}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Drop Location")}
            activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:20, borderRadius:30, width:"45%", alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Drop Location")}
            activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:20, borderRadius:30, width:"45%",marginLeft:15, alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Skip This Step</Text>
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

export default PickupLocationScreen

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
    }
})