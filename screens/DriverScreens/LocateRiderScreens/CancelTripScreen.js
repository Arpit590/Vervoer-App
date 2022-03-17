import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../assets/Icon metro-menu.svg";

const {height, width} = Dimensions.get("window");

const CancelTripScreen = () => {
 
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
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Cancel Trip</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                    </View>
                </View>
                <View style={{backgroundColor:"whitesmoke", marginTop:20}}>
                    <TouchableOpacity activeOpacity={0.8} 
                    onPress={()=>setClick("Too far")}
                    style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Too far") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Too far") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Too far</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("Cost")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Cost") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Cost") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Cost</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("Neighborhood")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Neighborhood") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Neighborhood") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Neighborhood</Text>
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
                onPress={()=>{
                    if(route.params.cancelledTrip){
                        if(route.params.purpose==="Rider"){
                            navigation.navigate("Locate Rider")
                        }else{
                            navigation.navigate("Locate Dry Cleaning")
                        }
                    }else{
                        navigation.goBack()
                    }
                    }}
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

export default CancelTripScreen

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