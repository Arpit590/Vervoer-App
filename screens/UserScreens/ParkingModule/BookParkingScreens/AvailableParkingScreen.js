import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const AvailableParkingScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const [click, setClick] = useState("1st")
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
    
    
  return (
    <View style={styles.screen}>
        <Header/>
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
    </View>
  )
}

export default AvailableParkingScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})