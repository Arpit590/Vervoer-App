import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../assets/Icon metro-menu.svg";
// import StarRating from 'react-native-star-rating';

const {height, width} = Dimensions.get("window");

const OrderHistoryScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const [menu, setMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [review, setReview] = useState("");
    const [review1, setReview1] = useState("");

    const closeHandle=()=>{
        setShowModal(false);
    }

    const closeHandle1=()=>{
        setShowModal1(false);
    }

    const submitHandler=()=>{
        setShowModal(false);
    }

    const submitHandler1=()=>{
        setShowModal1(false);
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
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20, marginHorizontal:20}}>
                <View style={{flexDirection:"row" ,alignItems:"center", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{}}
                        onPress={()=>navigation.goBack()}>
                            <BackArrowIcon
                            height={'30'}
                            />
                        </TouchableOpacity>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Book Dry Cleaners</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:30}}>
                    <View style={{}}>
                        <Text style={{fontSize:20, color:"#808080", marginBottom:20}}>Active Orders</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:20}}>
                            <View style={{}}>
                                <Text style={{fontSize:17, color:"#000000", marginBottom:5}}>Order Number</Text>
                                <Text style={{fontSize:13, color:"#F99026"}}>Order Completed</Text>
                            </View>
                            <View style={{alignItems:"flex-end"}}>
                                <Text style={{fontSize:17, color:"#000000", marginBottom:5}}>#Drclr58223</Text>
                                <TouchableOpacity
                                onPress={()=>navigation.navigate("Detailed Screen")}
                                activeOpacity={0.8} style={{}}>
                                    <Text style={{fontSize:13, color:"#000000"}}>Details</Text>   
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginVertical:10}}>
                        <View style={{flexDirection:"row", alignItems:"flex-end", justifyContent:"space-between", marginBottom:10}}>
                            <View style={{}}>
                                <Text style={{fontSize:13, color:"#808080"}}>Driver Rating & Review</Text>    
                                {/* Rating */}
                            </View>    
                            <TouchableOpacity
                            onPress={()=>setShowModal(true)}
                            activeOpacity={0.8}>
                                <Text style={{fontSize:13, color:"#808080"}}>Edit Review</Text>    
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:"#FFFFFF", borderRadius:10, borderWidth:1, borderColor:"#808080", padding:10, height:100}}>
                            <Text style={{fontSize:11, color:"#808080"}}>This Driver Was On Time And Dropped My Items Off. The Only Issue I have Is, He Was Wearing My Shirt When It Arrived At My House.</Text>
                        </View>
                    </View>
                    <View style={{marginVertical:10}}>
                        <View style={{flexDirection:"row", alignItems:"flex-end", justifyContent:"space-between", marginBottom:10}}>
                            <View style={{}}>
                                <Text style={{fontSize:13, color:"#808080"}}>Dry Cleaner Rating & Review</Text>    
                                {/* Rating */}
                            </View>    
                            <TouchableOpacity
                            onPress={()=>setShowModal1(true)}
                            activeOpacity={0.8}>
                                <Text style={{fontSize:13, color:"#808080"}}>Edit Review</Text>    
                            </TouchableOpacity>
                        </View>
                        <View style={{backgroundColor:"#FFFFFF", borderRadius:10, borderWidth:1, borderColor:"#808080", padding:10, height:100}}>
                            <Text style={{fontSize:11, color:"#808080"}}>This Driver Was On Time And Dropped My Items Off. The Only Issue I have Is, He Was Wearing My Shirt When It Arrived At My House.</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginVertical:20}}>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:20}}>
                        <View style={{}}>
                            <Text style={{fontSize:17, color:"#000000", marginBottom:5}}>Order Number</Text>
                            <Text style={{fontSize:13, color:"#F99026"}}>Order Completed</Text>
                            <TouchableOpacity 
                            onPress={()=>setShowModal(true)}
                            activeOpacity={0.8} style={{marginTop:20}}>
                                <Text style={{fontSize:13, color:"#000000"}}>Review & Rate Driver</Text>                           
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:"flex-end"}}>
                            <Text style={{fontSize:17, color:"#000000", marginBottom:5}}>#Drclr58223</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{}}>
                                <Text style={{fontSize:13, color:"#000000"}}>Details</Text>   
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={()=>setShowModal1(true)}
                            activeOpacity={0.8} style={{marginTop:20}}>
                                <Text style={{fontSize:13, color:"#000000"}}>Review & Rate Dry Cleaner</Text>                           
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop:20,flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:20}}>
                        <View style={{}}>
                            <Text style={{fontSize:17, color:"#000000", marginBottom:5}}>Order Number</Text>
                            <Text style={{fontSize:13, color:"#F99026"}}>Order Completed</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{marginTop:20}}>
                                <Text style={{fontSize:13, color:"#000000"}}>Review & Rate Driver</Text>                           
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:"flex-end"}}>
                            <Text style={{fontSize:17, color:"#000000", marginBottom:5}}>#Drclr58223</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{}}>
                                <Text style={{fontSize:13, color:"#000000"}}>Details</Text>   
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} style={{marginTop:20}}>
                                <Text style={{fontSize:13, color:"#000000"}}>Review & Rate Dry Cleaner</Text>                           
                            </TouchableOpacity>
                        </View>
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
        visible={showModal}>
            <View style={{alignItems:"center", width:"100%", flex:1, justifyContent:"flex-end"}}>
                <View style={{}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={closeHandle} style={{backgroundColor:"#808080", borderRadius:20, padding:5, marginBottom:20}}>
                        <AntDesign
                        name='close'
                        size={24}
                        color="#FFFFFF"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.modal}>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:20}}>
                        <View style={{}}>
                            <Text style={{fontSize:17, color:"#000000", marginBottom:5}}>Order Number</Text>
                            <Text style={{fontSize:13, color:"#F99026"}}>Order Completed</Text>
                        </View>
                        <View style={{alignItems:"flex-end"}}>
                            <Text style={{fontSize:17, color:"#000000", marginBottom:5}}>#Drclr58223</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{}}>
                                <Text style={{fontSize:13, color:"#000000"}}>Details</Text>   
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:10}}>
                        <Text style={{fontSize:13, color:"#808080"}}>Driver Rating & Review</Text>
                        {/* Star Rating */}
                    </View>
                    <TextInput
                    placeholder='Write Your Review....'
                    placeholderTextColor="#808080"
                    keyboardType='default'
                    value={review}
                    onChangeText={(text)=>setReview(text)}
                    maxLength={100}
                    multiline={true}
                    style={{fontSize:12, color:"#000000", padding:10, borderWidth:1,borderColor:"#808080", borderRadius:10, paddingBottom:60}}
                    />
                    <TouchableOpacity
                        onPress={submitHandler}
                        activeOpacity={0.8} style={{ marginVertical: 10, width: "90%", alignSelf: "center", backgroundColor: "#F99026", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 100 }}>
                        <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "500", textAlign: "center" }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        <Modal
        animationType={"slide"}
        onRequestClose={closeHandle1}
        transparent={true}
        visible={showModal1}>
            <View style={{alignItems:"center", width:"100%", flex:1, justifyContent:"flex-end"}}>
                <View style={{}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={closeHandle1} style={{backgroundColor:"#808080", borderRadius:20, padding:5, marginBottom:20}}>
                        <AntDesign
                        name='close'
                        size={24}
                        color="#FFFFFF"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.modal}>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:20}}>
                        <View style={{}}>
                            <Text style={{fontSize:17, color:"#000000", marginBottom:5}}>Order Number</Text>
                            <Text style={{fontSize:13, color:"#F99026"}}>Order Completed</Text>
                        </View>
                        <View style={{alignItems:"flex-end"}}>
                            <Text style={{fontSize:17, color:"#000000", marginBottom:5}}>#Drclr58223</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{}}>
                                <Text style={{fontSize:13, color:"#000000"}}>Details</Text>   
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:10}}>
                        <Text style={{fontSize:13, color:"#808080"}}>Dry Cleaner Rating & Review</Text>
                        {/* Star Rating */}
                    </View>
                    <TextInput
                    placeholder='Write Your Review....'
                    placeholderTextColor="#808080"
                    keyboardType='default'
                    value={review1}
                    onChangeText={(text)=>setReview1(text)}
                    maxLength={100}
                    multiline={true}
                    style={{fontSize:12, color:"#000000", padding:10, borderWidth:1,borderColor:"#808080", borderRadius:10, paddingBottom:60}}
                    />
                    <TouchableOpacity
                        onPress={submitHandler1}
                        activeOpacity={0.8} style={{ marginVertical: 10, width: "90%", alignSelf: "center", backgroundColor: "#F99026", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 100 }}>
                        <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "500", textAlign: "center" }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default OrderHistoryScreen

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
    },
    modal:{
        flex:1,
        width:"90%",
        backgroundColor:"white",
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:height-500,
        elevation:5,
        padding:20
    },
    content:{
        width:"100%",
        marginVertical:20
    },
})