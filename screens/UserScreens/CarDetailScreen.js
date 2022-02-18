import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import ImageSlider from '../../components/ImageSlider'
import BackArrowIcon from "../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import RoleContainer from '../../components/RoleContainer'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../assets/Icon metro-menu.svg";

const {height, width} = Dimensions.get("window");

const CarDetailScreen = () => {
 
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
                        <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Car Details</Text>
                    </View>
                </View>
            </View>
            <View style={{paddingHorizontal:20, marginVertical:20}}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", backgroundColor:"#FFFFFF", padding:20, borderRadius:10}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:17, color:"#000000"}}>{route.params.heading}</Text>
                        <Text style={{fontSize:14, color:"#000000", marginLeft:20}}>{route.params.carName}</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Image
                        source={require("../../assets/rating.png")}
                        style={{height:20, width:20, resizeMode:"contain"}}
                        />
                        <Text style={{fontSize:13, color:"#000000", marginLeft:8}}>{route.params.rating}</Text>
                    </View>
                </View>
                <View style={{backgroundColor:"#FFFFFF", padding:20, borderRadius:10, marginVertical:20}}>
                    <Image
                    source={require("../../assets/Free.png")}
                    style={{height:50, width:50, resizeMode:"contain", alignSelf:"flex-end"}}
                    />
                    <Image
                    source={route.params.imgSrc}
                    style={{height:200, width:200, resizeMode:"contain", alignSelf:"center", marginVertical:-50}}
                    />
                    <View style={{}}></View>
                </View>
                <View style={{}}>
                    <Text style={{fontSize:16, color:"#000000"}}>General Information</Text>
                    <View style={{marginTop:15, marginBottom:10, flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
                        <View style={{maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderRadius:10, padding:10, paddingHorizontal:20}}>
                            <Text style={{fontSize:12, color:"#808080", marginBottom:5}}>Walking Distance</Text>
                            <Text style={{fontSize:14, color:"#000000"}}>{route.params.timeLeft}</Text>
                        </View>
                        <View style={{maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderRadius:10, padding:10, paddingHorizontal:20}}>
                            <Text style={{fontSize:12, color:"#808080", marginBottom:5}}>Seats</Text>
                            <Text style={{fontSize:14, color:"#000000"}}>{route.params.noOfPersons}</Text>
                        </View>
                    </View>
                    <View style={{marginTop:15, marginBottom:10, flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
                        <View style={{maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderRadius:10, padding:10, paddingHorizontal:20}}>
                            <Text style={{fontSize:12, color:"#808080", marginBottom:5}}>Kilometers</Text>
                            <Text style={{fontSize:14, color:"#000000"}}>12,350 Km</Text>
                        </View>
                        <View style={{maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderRadius:10, padding:10, paddingHorizontal:20}}>
                            <Text style={{fontSize:12, color:"#808080", marginBottom:5}}>Fuel</Text>
                            <Text style={{fontSize:14, color:"#000000"}}>Petrol</Text>
                        </View>
                    </View>
                    <View style={{marginTop:15, marginBottom:10, flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
                        <View style={{maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderRadius:10, padding:10, paddingHorizontal:20}}>
                            <Text style={{fontSize:12, color:"#808080", marginBottom:5}}>Gearbox</Text>
                            <Text style={{fontSize:14, color:"#000000"}}>Automatic</Text>
                        </View>
                        <View style={{maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderRadius:10, padding:10, paddingHorizontal:20}}>
                            <Text style={{fontSize:12, color:"#808080", marginBottom:5}}>Avg. Mileage</Text>
                            <Text style={{fontSize:14, color:"#000000"}}>22 Km/L</Text>
                        </View>
                    </View>
                    <View style={{marginTop:15, marginBottom:10, flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
                        <View style={{maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderRadius:10, padding:10, paddingHorizontal:20}}>
                            <Text style={{fontSize:12, color:"#808080", marginBottom:5}}>Purchased Year</Text>
                            <Text style={{fontSize:14, color:"#000000"}}>2011</Text>
                        </View>
                        <View style={{maxWidth:150, minWidth:150,backgroundColor:"#FFFFFF", borderRadius:10, padding:10, paddingHorizontal:20}}>
                            <Text style={{fontSize:12, color:"#808080", marginBottom:5}}>Car Number Plate</Text>
                            <Text style={{fontSize:14, color:"#000000"}}>DLP-8271</Text>
                        </View>
                    </View>
                    <View style={{marginVertical:20}}>
                        <Text style={{fontSize:16, color:"#000000", marginBottom:10}}>Description</Text>
                        <View style={{backgroundColor:"#FFFFFF", padding:20, borderRadius:10}}>
                            <Text style={{fontSize:12, color:"#808080"}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is</Text>
                        </View>
                    </View>
                    <View style={{marginBottom:100}}>
                        <Text style={{fontSize:16, color:"#000000", marginBottom:10}}>Car Owner Information</Text>
                        <View style={{backgroundColor:"#FFFFFF", padding:20, borderRadius:10, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Image
                                source={require("../../assets/callProfile.png")}
                                style={{height:40, width:40, resizeMode:"contain"}}
                                />
                                <View style={{marginLeft:10}}>
                                    <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Jason Anderson</Text>
                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <Image
                                        source={require("../../assets/Call.png")}
                                        style={{height:15, width:15, resizeMode:"contain"}}
                                        />
                                        <Text style={{fontSize:13, color:"#000000", marginLeft:5}}>+1 1048285215</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#5E5E60", borderRadius:10, padding:15, paddingHorizontal:30}}>
                                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style={{position:"absolute", bottom:0, backgroundColor:"#FFFFFF", padding:20, width:"100%", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <View style={{}}>
                <Text style={{fontSize:14, color:"#808080", marginBottom:10}}>Price per Hour</Text>
                <Text style={{fontSize:17, color:"#F99026"}}>${route.params.price}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:15, paddingHorizontal:30, borderRadius:30}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>Book Now</Text>
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

export default CarDetailScreen

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