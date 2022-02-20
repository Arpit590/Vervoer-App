import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../assets/Icon metro-menu.svg";

const {height, width} = Dimensions.get("window");

const CancelBookingScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const [menu, setMenu] = useState(false);
    const [click, setClick] = useState(false);

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
            <View style={styles.header}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={openHandler}>
                        <Image
                        source={require("../../assets/Avatar.png")}
                        style={{height:40, width:40, borderRadius:50}}
                        />
                        <View style={{backgroundColor:"#FFFFFF",height:20, width:20, borderRadius:50, position:"absolute", bottom:0, left:0, alignSelf:"center", alignItems:"center", justifyContent:"center"}}>
                            <MenuIcon
                            height={'30'}
                            />
                        </View>
                    </TouchableOpacity>
                    <Image
                    source={require("../../assets/Heading.png")}
                    style={{height:100, width:100, resizeMode:"contain", marginLeft:20}}
                    />
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} style={{}}>
                    <   Image
                        source={require("../../assets/ic-search.png")}
                        style={{height:28, width:28, resizeMode:"contain"}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{marginHorizontal:20}}>
                        <Image
                        source={require("../../assets/ic-wallet.png")}
                        style={{height:28, width:28, resizeMode:"contain"}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image
                        source={require("../../assets/ic-notification.png")}
                        style={{height:28, width:28, resizeMode:"contain"}}
                        />
                        <View style={{backgroundColor:"#F99026", borderRadius:50, height:15, width:15, position:"absolute", right:0, alignItems:"center", justifyContent:"center"}}>
                            <Text style={{color:"#FFFFFF", fontSize:8}}>2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{}}>
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
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Cancel Booking</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:15, color:"#F99026"}}>#RS58223</Text>
                    </View>
                </View>
                <View style={{backgroundColor:"white", marginTop:20}}>
                    <TouchableOpacity activeOpacity={0.8} 
                    onPress={()=>setClick("Not Same")}
                    style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Not Same") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Not Same") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Car isn't same as shown in photos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("Wrong Address")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Wrong Address") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Wrong Address") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Wrong address shown</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("Changed My Mind")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Changed My Mind") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Changed My Mind") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Changed My Mind</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("Better Car")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Better Car") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Better Car") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Found Better Car</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("Cancelled Plan")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Cancelled Plan") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Cancelled Plan") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Cancelled Plan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("Other Reason")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Other Reason") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Other Reason") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Other Reason</Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderColor:"#808080", borderWidth:1, borderRadius:10, backgroundColor:"#FFFFFF", margin:20, height:200, padding:10}}>
                    <TextInput
                    placeholder='Write Your Reason...'
                    placeholderTextColor="#808080"
                    multiline={true}
                    keyboardType='default'
                    style={{fontSize:15, color:"#000000"}}
                    />
                </View>
                <TouchableOpacity 
                onPress={()=>navigation.navigate("Cancelled Booking")}
                activeOpacity={0.8} style={{marginBottom:200,width:width-100, alignSelf:"center", alignItems:"center", padding:15, borderRadius:40, backgroundColor:"#F99026"}}>
                    <Text style={{fontSize:17, color:"#FFFFFF"}}>Cancel Now</Text>
                </TouchableOpacity>
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
                        source={require("../../assets/Avatar.png")}
                        style={{height:80, width:80, resizeMode:"contain"}}
                        />
                        <Text style={{marginTop:10, fontSize:15, color:"#000000"}}>John Doe</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:20, marginVertical:30}}>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../assets/Home.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#F99026", fontSize:15, marginLeft:30}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../assets/Profile.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>My Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../assets/FaceCard.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Face Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../assets/Payment.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Payment Methods</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../assets/Tips.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Tips and Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../assets/Setting.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../assets/Contact.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Contact Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../assets/Password.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Reset Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginTop:60}}>
                        <Image
                        source={require("../../assets/Logout.png")}
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

export default CancelBookingScreen

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
    }
})