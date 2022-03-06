import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../../assets/Icon metro-menu.svg";

const {height, width} = Dimensions.get("window");

const PaymentScreen = () => {
 
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
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20, marginHorizontal:20}}>
                <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <TouchableOpacity activeOpacity={0.8}
                    style={{}}
                    onPress={()=>navigation.goBack()}>
                        <BackArrowIcon
                        height={'30'}
                        />
                    </TouchableOpacity>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Payment</Text>
                    </View>
                </View>
                <View style={{marginTop:30}}>
                    <View style={{backgroundColor:"#FFFFFF", padding:10, borderRadius:20, elevation:5}}>
                        <View style={{marginBottom:20,paddingBottom:20,flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderBottomColor:"#808080", borderBottomWidth:1}}>
                            <Text style={{fontSize:18, color:"#F99026"}}>TICKET NUMBER</Text>   
                            <Text style={{fontSize:18, color:"#F99026"}}>#DC58223</Text> 
                        </View>
                        <View style={{marginBottom:20,paddingBottom:20,flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderBottomColor:"#808080", borderBottomWidth:1}}>
                            <Text style={{fontSize:18, color:"#000000"}}>Sub Total</Text>   
                            <Text style={{fontSize:18, color:"#000000"}}>$125.00</Text> 
                        </View>
                        <View style={{marginBottom:20,paddingBottom:20,flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderBottomColor:"#808080", borderBottomWidth:1}}>
                            <Text style={{fontSize:15, color:"#000000"}}>Fees</Text>   
                            <Text style={{fontSize:15, color:"#000000"}}>$15.00</Text> 
                        </View>
                        <View style={{marginBottom:20,paddingBottom:20,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <Text style={{fontSize:18, color:"#F99026"}}>Total Payment (*Approx)</Text>   
                            <Text style={{fontSize:18, color:"#F99026"}}>$140.00</Text> 
                        </View>
                    </View>
                    <Text style={{fontSize:20, color:"#808080", marginVertical:30}}>Payment Method</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#FDF1E5", padding:10, borderRadius:10, paddingHorizontal:20}}>
                            <AntDesign
                            name="plus"
                            size={24}
                            color="#000000"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center", justifyContent:"center",backgroundColor:"#000000", padding:0, paddingHorizontal:20, borderRadius:10,marginHorizontal:10}}>
                            <Image
                            source={require("../../../../assets/apple-pay.png")}
                            style={{height:40, width:40, resizeMode:"contain"}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{marginHorizontal:10}}>
                            <Image
                            source={require("../../../../assets/mastercard.png")}
                            style={{height:60, width:60, resizeMode:"contain"}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{marginHorizontal:10}}>
                            <Image
                            source={require("../../../../assets/visa.png")}
                            style={{height:60, width:60, resizeMode:"contain"}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center",justifyContent:"center",backgroundColor:"#000000", padding:0, paddingHorizontal:20, borderRadius:10,marginHorizontal:10}}>
                            <Image
                            source={require("../../../../assets/google.png")}
                            style={{height:30, width:30, resizeMode:"contain"}}
                            />
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={{ marginBottom:100,marginTop:30,backgroundColor:"#FFFFFF", padding:20, borderRadius:20, elevation:5}}>
                        <View style={{flexDirection:"row", alignItems:"center", marginBottom:20}}>
                            <TouchableOpacity
                            onPress={()=>setClick("Debit Card")}
                            activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginRight:20}}>
                                <View style={{borderRadius:50, padding:5, borderColor:(click==="Debit Card") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                                    <View style={{backgroundColor:(click==="Debit Card") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                                </View>
                                <Text style={{fontSize:15, color:"#000000", marginLeft:10}}>Debit Card</Text>
                            </TouchableOpacity>   
                            <TouchableOpacity
                            onPress={()=>setClick("Credit Card")}
                            activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center"}}>
                                <View style={{borderRadius:50, padding:5, borderColor:(click==="Credit Card") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                                    <View style={{backgroundColor:(click==="Credit Card") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                                </View>
                                <Text style={{fontSize:15, color:"#000000", marginLeft:10}}>Credit Card</Text>
                            </TouchableOpacity>     
                        </View>
                        <View style={{}}>
                            <TextInput
                            placeholder='Card Holder Name'
                            placeholderTextColor="#808080"
                            style={{padding:10, borderBottomColor:"#808080", borderBottomWidth:1, marginBottom:20}}
                            />   
                            <TextInput
                            placeholder='Card Number'
                            placeholderTextColor="#808080"
                            keyboardType='number-pad'
                            style={{padding:10, borderBottomColor:"#808080", borderBottomWidth:1, marginBottom:20}}
                            />  
                            <TextInput
                            placeholder='Expires MM/YY'
                            keyboardType='number-pad'
                            placeholderTextColor="#808080"
                            style={{padding:10, borderBottomColor:"#808080", borderBottomWidth:1, marginBottom:20}}
                            />  
                            <TextInput
                            placeholder='CVV'
                            keyboardType='number-pad'
                            maxLength={3}
                            placeholderTextColor="#808080"
                            style={{padding:10, borderBottomColor:"#808080", borderBottomWidth:1, marginBottom:20}}
                            />   
                        </View>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate("Booking Confirmed")}
                        activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:15, paddingHorizontal:30, width:width-100, borderRadius:30, alignItems:"center", alignSelf:"center", marginTop:20}}>
                            <Text style={{fontSize:15, color:"#FFFFFF"}}>Pay Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
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

export default PaymentScreen

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