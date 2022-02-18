import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import ImageSlider from '../../components/ImageSlider'
import BackArrowIcon from "../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import RoleContainer from '../../components/RoleContainer'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../assets/Icon metro-menu.svg";
import AvailableCar from '../../components/AvailableCar';

const {height, width} = Dimensions.get("window");

const CarShareScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const value1 = useState(new Animated.Value(0))[0];
    const [click, setClick] = useState("COMPANY");
    const [menu, setMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const closeHandle=()=>{
        setIsOpen(false);
    }

    const companyHandler=()=>{
        setClick("COMPANY");
        Animated.timing(value1,{
            toValue:0,
            duration:2000,
            useNativeDriver:false
        }).start()
    }

    const free2MoveHandler=()=>{
        setClick("FREE2MOVE");
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
        <View style={{}}>
        <Image
        source={require("../../assets/Map2.png")}
        style={{width:width, height:height, zIndex:-1, resizeMode:"cover"}}
        />
        <Image
        source={require("../../assets/cars.png")}
        style={{height:250, width:250, resizeMode:"contain", zIndex:5, position:"absolute", top:"20%", alignSelf:"center"}}
        />
        </View>
        <View style={{position:"absolute",top:0,width:"100%"}}>
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
            <View style={{}}>
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
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Book New Car</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                    onPress={()=>setIsOpen(true)}
                    activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:10, borderRadius:10, flexDirection:"row", alignItems:"center"}}>
                        <Image
                        source={require("../../assets/filter.png")}
                        style={{height:15, width:15, resizeMode:"contain"}}
                        />
                        <Text style={{fontSize:12, color:"#FFFFFF", fontWeight:"bold", marginLeft:10}}>FILTERS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        {(!isOpen) &&
        <View style={{position:"absolute", bottom:0}}>
            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026",padding:10, marginRight:5,borderRadius:30, alignSelf:"flex-end"}}>
                <Image
                source={require("../../assets/currentlocation.png")}
                style={{height:20, width:20, resizeMode:"contain"}}
                />
            </TouchableOpacity>
            <View style={{maxHeight:400,zIndex:20,alignSelf:"center",backgroundColor:"#FFFFFF", padding:10, borderRadius:20, marginTop:20, width:width}}>
                <View style={{elevation:5,marginVertical:20, flexDirection:"row", alignItems:"center", alignSelf:"center", backgroundColor:"#FFFFFF", borderRadius:30, paddingHorizontal:10, paddingVertical:5}}>
                    <TouchableOpacity activeOpacity={0.8} 
                    onPress={companyHandler}
                    style={{backgroundColor:(click==="COMPANY") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:30, borderRadius:30}}>
                        <Text style={{fontSize:13, color:"#000000"}}>COMPANY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={free2MoveHandler}
                    activeOpacity={0.8} style={{marginLeft:10,backgroundColor:(click==="FREE2MOVE") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:30, borderRadius:30}}>
                        <Image
                        source={require("../../assets/Free.png")}
                        style={{height:50, width:50, resizeMode:"contain"}}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:20}}>
                    <AvailableCar
                    heading="BMW X6"
                    carName="Sedan"
                    imgSrc={require("../../assets/Cab.png")}
                    price="20.00"
                    rating="4.3"
                    noOfPersons="1-5"
                    timeLeft="2 min"
                    />
                    <AvailableCar
                    heading="BMW X6"
                    carName="Sedan"
                    imgSrc={require("../../assets/Cab.png")}
                    price="20.00"
                    rating="4.3"
                    noOfPersons="1-5"
                    timeLeft="2 min"
                    />
                    <AvailableCar
                    heading="BMW X6"
                    carName="Sedan"
                    imgSrc={require("../../assets/Cab.png")}
                    price="20.00"
                    rating="4.3"
                    noOfPersons="1-5"
                    timeLeft="2 min"
                    />
                    <AvailableCar
                    heading="BMW X6"
                    carName="Sedan"
                    imgSrc={require("../../assets/Cab.png")}
                    price="20.00"
                    rating="4.3"
                    noOfPersons="1-5"
                    timeLeft="2 min"
                    />
                </ScrollView>
            </View>
        </View>
        }
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
        <Modal
        animationType={"fade"}
        onRequestClose={closeHandle}
        transparent={true}
        visible={isOpen}>
            <View style={{alignItems:"center", marginHorizontal:20, width:"90%", flex:1, justifyContent:"flex-end", marginBottom:20}}>
                <View style={styles.modal}>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>Location</Text>
                        <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#FFFFFF", elevation:5, padding:5, borderRadius:10}}>
                            <Image
                            source={require("../../assets/location.png")}
                            style={{height:30, width:30, resizeMode:"contain"}}
                            />
                            <TextInput
                            placeholder='Enter Location'
                            placeholderTextColor="#000000"
                            keyboardType='default'
                            style={{fontSize:13, color:"#000000", marginLeft:10}}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={{marginTop:8}}>
                            <Text style={{fontSize:12, color:"#F99026"}}>Use Current Location</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>When</Text>
                        <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#FFFFFF", elevation:5, padding:5, borderRadius:10}}>
                            <Image
                            source={require("../../assets/calendar.png")}
                            style={{height:30, width:30, resizeMode:"contain"}}
                            />
                            <TextInput
                            placeholder='Enter Date & Time'
                            placeholderTextColor="#000000"
                            keyboardType='default'
                            style={{fontSize:13, color:"#000000", marginLeft:10}}
                            />
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>When</Text>
                        <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#FFFFFF", elevation:5, padding:5, borderRadius:10}}>
                            <Image
                            source={require("../../assets/calendar.png")}
                            style={{height:30, width:30, resizeMode:"contain"}}
                            />
                            <View style={{marginLeft:10,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <TextInput
                                    placeholder='0'
                                    placeholderTextColor="#000000"
                                    maxLength={1}
                                    keyboardType='number-pad'
                                    style={{fontSize:13, color:"#000000", fontWeight:"bold"}}
                                    />
                                    <Text style={{fontSize:13, color:"#808080", marginLeft:-10}}>Days</Text>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center", marginHorizontal:10}}>
                                    <TextInput
                                    placeholder='0'
                                    maxLength={2}
                                    placeholderTextColor="#000000"
                                    keyboardType='number-pad'
                                    style={{fontSize:13, color:"#000000", fontWeight:"bold"}}
                                    />
                                    <Text style={{fontSize:13, color:"#808080", marginLeft:-10}}>Hours</Text>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center", marginHorizontal:10}}>
                                    <TextInput
                                    placeholder='0'
                                    maxLength={2}
                                    placeholderTextColor="#000000"
                                    keyboardType='number-pad'
                                    style={{fontSize:13, color:"#000000", fontWeight:"bold"}}
                                    />
                                    <Text style={{fontSize:13, color:"#808080", marginLeft:-10}}>Minutes</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() =>setIsOpen(false)}
                        activeOpacity={0.8} style={{ marginVertical: 10, width: "90%", alignSelf: "center", backgroundColor: "#F99026", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 100 }}>
                        <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "500", textAlign: "center" }}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default CarShareScreen

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
    },
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:440,
        elevation:5,
        padding:20
    },
    content:{
        width:"100%",
        marginVertical:20
    },
})