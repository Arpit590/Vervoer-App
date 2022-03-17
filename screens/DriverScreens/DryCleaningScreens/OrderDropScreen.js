import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../assets/Icon metro-menu.svg";
import DryCleanerContainer from './DryCleanerContainer';

const {height, width} = Dimensions.get("window");

const OrderDropScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const [isOpen, setIsOpen] = useState(false);
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
        <ImageBackground
        source={require("../../../assets/Map.png")}
        style={{width:width, height:height, zIndex:-1}}
        />
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
        <View style={{position:"absolute", top:"12%", paddingHorizontal:20}}>
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
                        <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Order Drop Off</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{alignSelf:"center", marginTop:20, width:width, position:"absolute", bottom:0}}>
            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026",padding:10,borderRadius:30, alignSelf:"flex-end", marginHorizontal:30}}>
                <Image
                source={require("../../../assets/currentlocation.png")}
                style={{height:20, width:20, resizeMode:"contain"}}
                />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#FFFFFF",padding:10,borderRadius:30, alignSelf:"flex-end", marginHorizontal:30, marginVertical:20}}>
                <Image
                source={require("../../../assets/Code.png")}
                style={{height:20, width:20, resizeMode:"contain"}}
                />
            </TouchableOpacity>
            <View style={{backgroundColor:"#FFFFFF", padding:10, borderRadius:20, height:400}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>setIsOpen(true)}
                    style={{marginTop:20,padding:20, backgroundColor:"#FDF1E5", borderRadius:10}}>
                        <View style={{flexDirection:"row", alignItems:"center", marginBottom:10}}>
                            <View style={{backgroundColor:"#F99026", padding:10, borderRadius:50}}>
                                <Image
                                source={require("../../../assets/User.png")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                            </View>
                            <Text style={{fontSize:15, color:"#000000", marginLeft:10, fontWeight:"700"}}>{route.params.name}</Text>
                        </View>
                        <View style={{padding:10}}>
                            <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between",}}>
                                <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                                    <View style={{backgroundColor:"whitesmoke", borderRadius:50, borderWidth:1, borderColor:"green", padding:5}}>
                                        <View style={{backgroundColor:"green", padding:5, borderRadius:50}}></View>
                                    </View>
                                    <View style={{marginLeft:10}}>
                                        <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Pickup</Text>
                                        <Text style={{fontSize:12, color:"#808080"}}>{route.params.pickupLocation}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{marginTop:20,flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between",}}>
                                <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                                    <View style={{backgroundColor:"whitesmoke", borderRadius:50, borderWidth:1, borderColor:"red", padding:5}}>
                                        <View style={{backgroundColor:"red", padding:5, borderRadius:50}}></View>
                                    </View>
                                    <View style={{marginLeft:10}}>
                                        <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Drop Off</Text>
                                        <Text style={{fontSize:12, color:"#808080"}}>{route.params.dropLocation}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Image
                                source={require("../../../assets/droplocation.png")}
                                style={{height:15, width:15, resizeMode:"contain"}}
                                />
                                <Text style={{marginLeft:8, fontSize:12, color:"#808080"}}>{route.params.miles} miles</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Image
                                source={require("../../../assets/timer.png")}
                                style={{height:15, width:15, resizeMode:"contain"}}
                                />
                                <Text style={{marginLeft:8, fontSize:12, color:"#808080"}}>{route.params.duration}</Text>
                            </View>
                            <Text style={{fontSize:14, color:"#F99026"}}>${route.params.price}</Text>
                        </View>
                        <View style={{marginVertical:20}}>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{fontSize:12, color:"#000000"}}>Rider Payment</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>${route.params.price}</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{fontSize:12, color:"#000000"}}>Tip</Text>
                                <Text style={{fontSize:12, color:"#000000"}}>${route.params.tip}</Text>
                            </View>
                            <View style={{flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                <TouchableOpacity 
                                onPress={()=>navigation.navigate("Drop Off",{"name": route.params.name, "price": route.params.price, "pickupLocation": route.params.pickupLocation, "dropLocation": route.params.dropLocation, "miles": route.params.miles, "tip": route.params.tip, "duration": route.params.duration} )}
                                activeOpacity={0.8} style={{width:"90%",alignSelf:"center",marginTop:10,backgroundColor:"#F99026", padding:15, borderRadius:30, paddingHorizontal:30}}>
                                    <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>Complete Drop Off</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={()=>navigation.navigate("Cancel Trip", {"cancelledTrip": true, "purpose": "DryCleaning"})}
                                activeOpacity={0.8} style={{width:"90%",alignSelf:"center",marginTop:10,backgroundColor:"#5E5E60", padding:15, borderRadius:30, paddingHorizontal:30}}>
                                    <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>Cancel Drop Off</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
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
        <Modal
        animationType={"slide"}
        onRequestClose={closeHandle}
        transparent={true}
        visible={isOpen}>
            <View style={{alignItems:"center", width:"90%", flex:1, justifyContent:"center", alignSelf:"center"}}>
                <View style={styles.modal}>
                    <Text style={{fontSize:20, color:"#F99026", textAlign:"center", marginBottom:15, fontWeight:"500"}}>Waiting to Drop Off Order</Text>
                    <Text style={{fontSize:14, color:"#808080", marginBottom:15, textAlign:"center", maxWidth:300, alignSelf:"center"}}>
                        If the dry cleaning order is not ready for drop off in 5 minutes, the order will be cancelled.
                    </Text>
                    <View style={{alignSelf:"center", borderWidth:5, borderColor:"#F99026", padding:30, borderRadius:200, height:180, width:180, alignItems:"center", justifyContent:"center"}}>
                        <View style={{marginBottom:5}}>
                            <Text style={{fontSize:25, color:"#F99026"}}>03:45</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                    onPress={()=>{
                        navigation.navigate("Cancel Trip", {"cancelledTrip": true, "purpose": "DryCleaning"});
                        setIsOpen(false)
                        }}
                    activeOpacity={0.8} style={{width:"85%",alignSelf:"center",marginTop:20,backgroundColor:"#5E5E60", padding:15, borderRadius:30, paddingHorizontal:30}}>
                        <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>Cancel Drop Off</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default OrderDropScreen

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
    },
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:400,
        elevation:5,
        padding:20
    },
    content:{
        width:"100%",
        marginVertical:20
    },
})