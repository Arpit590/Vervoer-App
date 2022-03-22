import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../assets/Icon metro-menu.svg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const {height, width} = Dimensions.get("window");

const AddDetailsScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const [menu, setMenu] = useState(false);
    const [accountNumber, setAccountNumber] = useState("");
    const [IFSC, setIFSC]= useState("");
    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, setCVV] = useState("");
    const [expiryDate, setExpiryDate] = useState("");

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

    const saveHandler=()=>{
        navigation.goBack()
    }

    const saveHandler1=()=>{
        if(route.params.debit){
            navigation.goBack();
            console.log("Debit")
        }else{
            navigation.goBack();
            console.log("Credit")
        }
    }
    
  return (
    <View style={styles.screen}>
        <View style={styles.header}>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
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
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20, marginHorizontal:20}}>
                <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{}}
                        onPress={()=>navigation.goBack()}>
                            <BackArrowIcon
                            height={'30'}
                            />
                        </TouchableOpacity>
                        <View style={{marginLeft:10}}>
                            {route.params.withdrew
                            ?
                            <Text style={{fontSize:18, color:"#000000", marginBottom:5}}>Add Bank Account</Text>
                            :
                            (route.params.debit)
                            ?
                            <Text style={{fontSize:18, color:"#000000", marginBottom:5}}>Add Debit Card</Text>
                            :
                            <Text style={{fontSize:18, color:"#000000", marginBottom:5}}>Add Credit Card</Text>
                            }
                        </View>
                    </View>
                </View>
                {route.params.withdrew
                ?
                <View style={{marginVertical:20}}>
                    <View style={{backgroundColor:"#FFFFFF", padding:15,borderRadius:10}}>
                        <Text style={{fontSize:16, color:"#000000"}}>Bank Account Information</Text>
                        <View style={{marginVertical: 20}}>
                            <View style={{marginBottom:20,flexDirection:"row", alignItems:"center", paddingBottom:15,justifyContent:"space-between", width:width-70,borderBottomColor:"lightgray", borderBottomWidth:1}}>
                                <Text
                                style={{color:"#808080", fontSize:15}}
                                >Routing Number</Text>
                                <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-40}}>
                                    <MaterialIcons
                                    name="keyboard-arrow-down"
                                    size={20}
                                    color="lightgray"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginBottom:20}}>
                                <TextInput
                                placeholder='Bank Account Number'
                                placeholderTextColor="#808080"
                                value={accountNumber}
                                keyboardType="default"
                                onChangeText={()=>setAccountNumber(text)}
                                style={{borderBottomColor:"lightgray", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                />
                            </View>
                            <View style={{marginBottom:20}}>
                                <TextInput
                                placeholder='IFSC Number'
                                placeholderTextColor="#808080"
                                value={IFSC}
                                keyboardType="default"
                                onChangeText={()=>setIFSC(text)}
                                style={{borderBottomColor:"lightgray", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                />
                            </View>
                            <View style={{}}>
                                <TextInput
                                placeholder='Account Holder Name'
                                placeholderTextColor="#808080"
                                value={name}
                                keyboardType="default"
                                onChangeText={()=>setName(text)}
                                style={{borderBottomColor:"lightgray", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                :
                (route.params.debit)
                ?
                <View style={{marginVertical:20}}>
                    <View style={{backgroundColor:"#FFFFFF", padding:15,borderRadius:10}}>
                        <Text style={{fontSize:16, color:"#000000"}}>Debit Card Information</Text>
                        <View style={{marginVertical: 20}}>
                            <View style={{marginBottom:20}}>
                                <TextInput
                                placeholder='Card Holder Name'
                                placeholderTextColor="#808080"
                                value={name}
                                keyboardType="default"
                                onChangeText={()=>setName(text)}
                                style={{borderBottomColor:"lightgray", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                />
                            </View>
                            <View style={{marginBottom:20}}>
                                <TextInput
                                placeholder='Card Number'
                                placeholderTextColor="#808080"
                                value={cardNumber}
                                keyboardType="number-pad"
                                onChangeText={()=>setCardNumber(text)}
                                style={{borderBottomColor:"lightgray", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                />
                            </View>
                            <View style={{marginBottom:20}}>
                                <TextInput
                                placeholder='Expires MM/YY'
                                placeholderTextColor="#808080"
                                value={expiryDate}
                                keyboardType="number-pad"
                                onChangeText={()=>setExpiryDate(text)}
                                style={{borderBottomColor:"lightgray", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                />
                            </View>
                            <View style={{}}>
                                <TextInput
                                placeholder='CVV'
                                placeholderTextColor="#808080"
                                value={cvv}
                                keyboardType="number-pad"
                                maxLength={3}
                                onChangeText={()=>setCVV(text)}
                                style={{borderBottomColor:"lightgray", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                :
                <View style={{marginVertical:20}}>
                    <View style={{backgroundColor:"#FFFFFF", padding:15,borderRadius:10}}>
                        <Text style={{fontSize:16, color:"#000000"}}>Credit Card Information</Text>
                        <View style={{marginVertical: 20}}>
                            <View style={{marginBottom:20}}>
                                <TextInput
                                placeholder='Card Holder Name'
                                placeholderTextColor="#808080"
                                value={name}
                                keyboardType="default"
                                onChangeText={()=>setName(text)}
                                style={{borderBottomColor:"lightgray", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                />
                            </View>
                            <View style={{marginBottom:20}}>
                                <TextInput
                                placeholder='Credit Card Number'
                                placeholderTextColor="#808080"
                                value={cardNumber}
                                keyboardType="number-pad"
                                onChangeText={()=>setCardNumber(text)}
                                style={{borderBottomColor:"lightgray", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                />
                            </View>
                            <View style={{marginBottom:20}}>
                                <TextInput
                                placeholder='Expires MM/YY'
                                placeholderTextColor="#808080"
                                value={expiryDate}
                                keyboardType="number-pad"
                                onChangeText={()=>setExpiryDate(text)}
                                style={{borderBottomColor:"lightgray", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                />
                            </View>
                            <View style={{}}>
                                <TextInput
                                placeholder='CVV'
                                placeholderTextColor="#808080"
                                value={cvv}
                                keyboardType="number-pad"
                                maxLength={3}
                                onChangeText={()=>setCVV(text)}
                                style={{borderBottomColor:"lightgray", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                }
            </View>
        </ScrollView>
        <View style={{position:"absolute", bottom:"0%", width:"100%", paddingVertical:10}}>
            <TouchableOpacity 
            onPress={route.params.withdrew ? saveHandler : saveHandler1}
            activeOpacity={0.8} style={{backgroundColor:"#F99026", marginVertical:10, alignSelf:"center",padding:20, borderRadius:30, width:"85%",alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Save</Text>
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

export default AddDetailsScreen

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
        elevation:5
    },
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:330,
        elevation:5,
        padding:20
    },
    content:{
        width:"100%",
        marginVertical:20
    }
})