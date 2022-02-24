import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated,Dimensions, ImageBackground, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import MenuIcon from "../../../assets/Icon metro-menu.svg";
import AntDesign from "react-native-vector-icons/AntDesign"
import AvailableCar from '../../../components/AvailableCar';
import VideoIcon from "../../../assets/VideoIcon.svg";
import CheckBox from "react-native-check-box";

const {height, width} = Dimensions.get("window");

const AvailableRidesScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const value1 = useState(new Animated.Value(0))[0];
    const [click, setClick] = useState("Adult");
    const [menu, setMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [filtered, setFiltered] = useState(false);

    const closeHandle=()=>{
        setIsOpen(false);
    }

    const companyHandler=()=>{
        setClick("Adult");
        Animated.timing(value1,{
            toValue:0,
            duration:2000,
            useNativeDriver:false
        }).start()
    }

    const free2MoveHandler=()=>{
        setClick("Child");
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
        source={require("../../../assets/Map3.png")}
        style={{width:width, height:height, zIndex:-1, resizeMode:"cover"}}
        />
        <Image
        source={require("../../../assets/cars.png")}
        style={{height:250, width:250, resizeMode:"contain", zIndex:5, position:"absolute", top:"20%", alignSelf:"center"}}
        />
        </View>
        <View style={{position:"absolute",top:0,width:"100%"}}>
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
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Book New Ride</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:10, borderRadius:80, height:30, width:30, alignItems:"center", justifyContent:"center", marginRight:20}}>
                            <VideoIcon
                            height={'40'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>setIsOpen(true)}
                        activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:10, borderRadius:10, flexDirection:"row", alignItems:"center"}}>
                            <Image
                            source={require("../../../assets/filter.png")}
                            style={{height:15, width:15, resizeMode:"contain"}}
                            />
                            <Text style={{fontSize:12, color:"#FFFFFF", fontWeight:"bold", marginLeft:10}}>FILTERS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        {(!isOpen) &&
        <View style={{position:"absolute", bottom:0}}>
            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026",padding:10, marginRight:5,borderRadius:30, alignSelf:"flex-end"}}>
                <Image
                source={require("../../../assets/currentlocation.png")}
                style={{height:20, width:20, resizeMode:"contain"}}
                />
            </TouchableOpacity>
            <View style={{maxHeight:400,zIndex:20,alignSelf:"center",backgroundColor:"#FFFFFF", padding:10, borderRadius:20, marginTop:20, width:width}}>
                <View style={{elevation:5,marginVertical:20, flexDirection:"row", alignItems:"center", alignSelf:"center", backgroundColor:"#FFFFFF", borderRadius:30, paddingHorizontal:10, paddingVertical:5}}>
                    <TouchableOpacity activeOpacity={0.8} 
                    onPress={companyHandler}
                    style={{backgroundColor:(click==="Adult") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:30, borderRadius:30}}>
                        <Text style={{fontSize:13, color:"#000000"}}>Adult</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={free2MoveHandler}
                    activeOpacity={0.8} style={{marginLeft:10,backgroundColor:(click==="Child") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:30, borderRadius:30}}>
                        <Text style={{fontSize:13, color:"#000000"}}>Child</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:20}}>
                    <AvailableCar
                    heading="Economy"
                    carName="Sedan"
                    imgSrc={require("../../../assets/Cab-1.png")}
                    price="150.00"
                    description="Hatchbacks, Affordable"
                    noOfPersons="2"
                    time="19:30"
                    />
                    <AvailableCar
                    heading="Premier"
                    carName="Sedan"
                    imgSrc={require("../../../assets/Cab-1.png")}
                    price="200.00"
                    description="Sedans, Top-rated drivers"
                    noOfPersons="2"
                    time="19:35"
                    />
                    <AvailableCar
                    heading="Economy"
                    carName="Sedan"
                    imgSrc={require("../../../assets/Cab-1.png")}
                    price="150.00"
                    description="Hatchbacks, Affordable"
                    noOfPersons="2"
                    time="19:30"
                    />
                    <AvailableCar
                    heading="Economy"
                    carName="Sedan"
                    imgSrc={require("../../../assets/Cab-1.png")}
                    price="150.00"
                    description="Hatchbacks, Affordable"
                    noOfPersons="2"
                    time="19:30"
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
            <View style={{alignItems:"center", width:"100%", flex:1, justifyContent:"center"}}>
                <View style={styles.modal}>
                    <View style={{}}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>setIsOpen(false)}>
                            <AntDesign
                            name='close'
                            size={28}
                            color="#000000"
                            />
                        </TouchableOpacity>
                        <View style={{marginTop:20}}>
                            <View style={{borderBottomColor:"#808080", borderBottomWidth:1}}>
                                <Text style={{fontSize:18, color:"#000000", fontWeight:"bold", marginBottom:10}}>FILTERS</Text>
                            </View>
                            <View style={{marginVertical:20}}>
                                <Text style={{fontSize:17, color:"#000000"}}>Ride Type</Text>
                                <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:10}}>
                                    <CheckBox
                                    checkedCheckBoxColor='#27AE60'
                                    uncheckedCheckBoxColor='#5E5E60'
                                    disabled={false}
                                    isChecked={filtered}
                                    onClick={()=>setFiltered(prevCheck => !prevCheck)}
                                    />
                                    <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Lorem Ipsum Dolor sit</Text>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center",borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:10}}>
                                    <CheckBox
                                    checkedCheckBoxColor='#27AE60'
                                    uncheckedCheckBoxColor='#5E5E60'
                                    disabled={false}
                                    isChecked={filtered}
                                    onClick={()=>setFiltered(prevCheck => !prevCheck)}
                                    />
                                    <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Lorem Ipsum Dolor sit</Text>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:10}}>
                                    <CheckBox
                                    checkedCheckBoxColor='#27AE60'
                                    uncheckedCheckBoxColor='#5E5E60'
                                    disabled={false}
                                    isChecked={filtered}
                                    onClick={()=>setFiltered(prevCheck => !prevCheck)}
                                    />
                                    <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Lorem Ipsum Dolor sit</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:20}}>
                                <Text style={{fontSize:17, color:"#000000"}}>Ride Type</Text>
                                <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:10}}>
                                    <CheckBox
                                    checkedCheckBoxColor='#27AE60'
                                    uncheckedCheckBoxColor='#5E5E60'
                                    disabled={false}
                                    isChecked={filtered}
                                    onClick={()=>setFiltered(prevCheck => !prevCheck)}
                                    />
                                    <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Lorem Ipsum Dolor sit</Text>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center",borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:10}}>
                                    <CheckBox
                                    checkedCheckBoxColor='#27AE60'
                                    uncheckedCheckBoxColor='#5E5E60'
                                    disabled={false}
                                    isChecked={filtered}
                                    onClick={()=>setFiltered(prevCheck => !prevCheck)}
                                    />
                                    <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Lorem Ipsum Dolor sit</Text>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:10}}>
                                    <CheckBox
                                    checkedCheckBoxColor='#27AE60'
                                    uncheckedCheckBoxColor='#5E5E60'
                                    disabled={false}
                                    isChecked={filtered}
                                    onClick={()=>setFiltered(prevCheck => !prevCheck)}
                                    />
                                    <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Lorem Ipsum Dolor sit</Text>
                                </View>
                            </View>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default AvailableRidesScreen

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
        maxHeight:height,
        elevation:5,
        padding:20
    },
    content:{
        width:"100%",
        marginVertical:20
    },
})