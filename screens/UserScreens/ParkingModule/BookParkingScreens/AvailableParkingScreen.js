import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../../assets/Icon metro-menu.svg";
import WheelChairIcon from "../../../../assets/WheelChair.svg"

const {height, width} = Dimensions.get("window");

const AvailableParkingScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const [click, setClick] = useState("1st")
    const [menu, setMenu] = useState(false);
    const value1 = useState(new Animated.Value(0))[0];
    const [parking, setParking] = useState("");
    const [zone, setZone] = useState("");

    const firstFloor=()=>{
        setClick("1st");
        Animated.timing(value1,{
            toValue:0,
            duration:2000,
            useNativeDriver:false
        }).start()
    }

    const secondFloor=()=>{
        setClick("2nd");
        Animated.timing(value1,{
            toValue:width-300,
            duration:2000,
            useNativeDriver:false
        }).start()
    }

    const thirdFloor=()=>{
        setClick("3rd");
        Animated.timing(value1,{
            toValue:width-300,
            duration:2000,
            useNativeDriver:false
        }).start()
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
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <TouchableOpacity activeOpacity={0.8}
                    style={{}}
                    onPress={()=>navigation.goBack()}>
                        <BackArrowIcon
                        height={'30'}
                        />
                    </TouchableOpacity>
                    <View style={{}}>
                        <Text style={{fontSize:20, color:"#F99026", marginBottom:5}}>Available Parking Spaces</Text>
                    </View>
                    <View></View>
                </View>
                <View style={{elevation:5,marginVertical:20, flexDirection:"row", alignItems:"center", alignSelf:"center", backgroundColor:"#FFFFFF", borderRadius:30, paddingHorizontal:10, paddingVertical:5}}>
                    <TouchableOpacity activeOpacity={0.8} 
                    onPress={firstFloor}
                    style={{flexDirection:"row", alignItems:"center", backgroundColor:(click==="1st") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:20, borderRadius:30}}>
                        <Text style={{fontSize:13, color:"#000000"}}>1st Floor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={secondFloor}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center",marginLeft:10,backgroundColor:(click==="2nd") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:20, borderRadius:30}}>
                        <Text style={{fontSize:13, color:"#000000"}}>2nd Floor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={thirdFloor}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center",marginLeft:10,backgroundColor:(click==="3rd") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:20, borderRadius:30}}>
                        <Text style={{fontSize:13, color:"#000000"}}>3rd Floor</Text>
                    </TouchableOpacity>
                </View>
                <View style={{margin:20}}>
                    <View style={{backgroundColor:"#F99026", padding:10, borderRadius:10, alignSelf:"flex-start", marginBottom:20}}>
                        <Text style={{fontSize:14, color:"#FFFFFF"}}>A3</Text>
                    </View>
                    <Text style={{fontSize:15, color:"#808080", marginLeft:-12}}>Enter</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=>setParking("Parked")}
                        activeOpacity={0.8} style={{maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            <Image source={require("../../../../assets/Ride.jpg")}
                            style={{width:100, height:100, resizeMode:"contain"}}
                            />
                            <View style={{position:"absolute",right:0,backgroundColor:"#FDF1E5", padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/WheelChair.jpg")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                            setParking("A-02")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{alignItems:"center", justifyContent:"center",maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:(parking==="A-02") ? "#F99026" :"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            {(parking!=="A-02")
                            ?<Text style={{fontSize:15, color: "#000000"}}>A-02</Text>
                            :
                            <Text style={{fontSize:15, color: "#FFFFFF"}}>Selected</Text>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=>{
                            setParking("A-03")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{alignItems:"center", justifyContent:"center",maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:(parking==="A-03") ? "#F99026" :"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            {(parking!=="A-03")
                            ?<Text style={{fontSize:15, color: "#000000"}}>A-03</Text>
                            :
                            <Text style={{fontSize:15, color: "#FFFFFF"}}>Selected</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{
                            setParking("Parked")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            <Image source={require("../../../../assets/Ride.jpg")}
                            style={{width:100, height:100, resizeMode:"contain"}}
                            />
                            <View style={{position:"absolute",right:0,backgroundColor:"#FDF1E5", padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/WheelChair.jpg")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=>{
                            setParking("Parked")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            <Image source={require("../../../../assets/Ride.jpg")}
                            style={{width:100, height:100, resizeMode:"contain"}}
                            />
                            <View style={{position:"absolute",right:0,backgroundColor:"#FDF1E5", padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/WheelChair.jpg")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                            setParking("A-06")
                        }}
                        activeOpacity={0.8} style={{alignItems:"center", justifyContent:"center",maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:(parking==="A-06") ? "#F99026" :"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            {(parking!=="A-06")
                            ?<Text style={{fontSize:15, color: "#000000"}}>A-06</Text>
                            :
                            <Text style={{fontSize:15, color: "#FFFFFF"}}>Selected</Text>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity
                        onPress={()=>{
                            setParking("Parked")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            <Image source={require("../../../../assets/Ride.jpg")}
                            style={{width:100, height:100, resizeMode:"contain"}}
                            />
                            <View style={{position:"absolute",right:0,backgroundColor:"#FDF1E5", padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/WheelChair.jpg")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                            setParking("Parked")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            <Image source={require("../../../../assets/Ride.jpg")}
                            style={{width:100, height:100, resizeMode:"contain"}}
                            />
                            <View style={{position:"absolute",right:0,backgroundColor:"#FDF1E5", padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/WheelChair.jpg")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{margin:20, marginBottom:100}}>
                    <View style={{backgroundColor:"#F99026", padding:10, borderRadius:10, alignSelf:"flex-start", marginBottom:20}}>
                        <Text style={{fontSize:14, color:"#FFFFFF"}}>A3</Text>
                    </View>
                    <Text style={{fontSize:15, color:"#808080", marginLeft:-12}}>Enter</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=>setParking("Parked")}
                        activeOpacity={0.8} style={{maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            <Image source={require("../../../../assets/Ride.jpg")}
                            style={{width:100, height:100, resizeMode:"contain"}}
                            />
                            <View style={{position:"absolute",right:0,backgroundColor:"#FDF1E5", padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/WheelChair.jpg")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                            setParking("A-02")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{alignItems:"center", justifyContent:"center",maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:(parking==="A-02") ? "#F99026" :"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            {(parking!=="A-02")
                            ?<Text style={{fontSize:15, color: "#000000"}}>A-02</Text>
                            :
                            <Text style={{fontSize:15, color: "#FFFFFF"}}>Selected</Text>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=>{
                            setParking("A-03")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{alignItems:"center", justifyContent:"center",maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:(parking==="A-03") ? "#F99026" :"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            {(parking!=="A-03")
                            ?<Text style={{fontSize:15, color: "#000000"}}>A-03</Text>
                            :
                            <Text style={{fontSize:15, color: "#FFFFFF"}}>Selected</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{
                            setParking("Parked")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            <Image source={require("../../../../assets/Ride.jpg")}
                            style={{width:100, height:100, resizeMode:"contain"}}
                            />
                            <View style={{position:"absolute",right:0,backgroundColor:"#FDF1E5", padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/WheelChair.jpg")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=>{
                            setParking("Parked")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            <Image source={require("../../../../assets/Ride.jpg")}
                            style={{width:100, height:100, resizeMode:"contain"}}
                            />
                            <View style={{position:"absolute",right:0,backgroundColor:"#FDF1E5", padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/WheelChair.jpg")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                            setParking("A-06")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{alignItems:"center", justifyContent:"center",maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:(parking==="A-06") ? "#F99026" :"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            {(parking!=="A-06")
                            ?<Text style={{fontSize:15, color: "#000000"}}>A-06</Text>
                            :
                            <Text style={{fontSize:15, color: "#FFFFFF"}}>Selected</Text>
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity
                        onPress={()=>{
                            setParking("Parked")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            <Image source={require("../../../../assets/Ride.jpg")}
                            style={{width:100, height:100, resizeMode:"contain"}}
                            />
                            <View style={{position:"absolute",right:0,backgroundColor:"#FDF1E5", padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/WheelChair.jpg")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                            setParking("Parked")
                            setZone("A")
                        }}
                        activeOpacity={0.8} style={{maxHeight:150, minHeight:150,maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderWidth:1, borderColor:"#808080", padding:20}}>
                            <Image source={require("../../../../assets/Ride.jpg")}
                            style={{width:100, height:100, resizeMode:"contain"}}
                            />
                            <View style={{position:"absolute",right:0,backgroundColor:"#FDF1E5", padding:5, borderRadius:10}}>
                                <Image
                                source={require("../../../../assets/WheelChair.jpg")}
                                style={{height:20, width:20, resizeMode:"contain"}}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
        {(parking!=="Parked" && parking!=="") &&
        <View style={{position:"absolute", bottom:"2%", alignItems:"center", alignSelf:"center"}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Booking Confirmation", {"heading": route.params.heading,"parking": parking,"title": route.params.title, "timer": route.params.timer, "price":route.params.price, "rating": route.params.rating, "address": route.params.address})}
            activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:15, borderRadius:40, width:width-40, alignSelf:"center", alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Proceed With Spot</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}
            onPress={()=>navigation.goBack()}
            style={{marginTop:20,backgroundColor:"#5E5E60", padding:15, borderRadius:40, width:width-40, alignSelf:"center", alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Back</Text>
            </TouchableOpacity>
        </View>
        }
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

export default AvailableParkingScreen

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