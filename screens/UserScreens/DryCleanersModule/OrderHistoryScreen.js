import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from "../../../components/Header";
// import StarRating from 'react-native-star-rating';

const {height, width} = Dimensions.get("window");

const OrderHistoryScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
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
    
  return (
    <View style={styles.screen}>
        <Header/>
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