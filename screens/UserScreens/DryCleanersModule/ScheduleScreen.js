import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from '../../../components/Header';

const {height, width} = Dimensions.get("window");

const ScheduleScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const [click, setClick] = useState("");
    const [click1, setClick1] = useState("");
    
  return (
    <View style={styles.screen}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20, marginHorizontal:20}}>
                <View style={{flexDirection:"row" ,alignItems:"flex-start", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{}}
                        onPress={()=>navigation.goBack()}>
                            <BackArrowIcon
                            height={'30'}
                            />
                        </TouchableOpacity>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:16, color:"#000000"}}>Schedule Pickup and Delivery</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:20}}>
                    <Text style={{fontSize:16, color:"#000000"}}>Select Pickup Date & Time</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between", marginTop:20, marginBottom:10}}>
                    <Text style={{fontSize:15, color:"#000000"}}>Pickup Date</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"40%", paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1,}}>
                        <Text
                        style={{color:"#000000", fontSize:13}}
                        >November 2021</Text>
                        <TouchableOpacity activeOpacity={0.8} style={{}}>
                            <MaterialIcons
                            name="keyboard-arrow-down"
                            size={20}
                            color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:10}}>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("01")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="01") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginLeft:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>01</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("02")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="02") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>02</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("03")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="03") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>03</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("04")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="04") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>04</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("05")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="05") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>05</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("06")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="06") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>06</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("07")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="07") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>07</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("08")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="08") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>08</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("09")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="09") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>09</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("10")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="10") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>10</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("11")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="11") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>11</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("12")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="12") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("13")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="13") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>13</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("14")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="14") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>14</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("15")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="15") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>15</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("16")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="16") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>16</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("17")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="17") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>17</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("18")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="18") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>18</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("19")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="19") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>19</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("20")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="20") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("21")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="21") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>21</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("22")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="22") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>22</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("23")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="23") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>23</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("24")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="24") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>24</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("25")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="25") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>25</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("26")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="26") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>26</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("27")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="27") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>27</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("28")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="28") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>28</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("29")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="29") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>29</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("30")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="30") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>30</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>setClick("31")}
                    style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="31") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                        <Text style={{fontSize:13, color:"#000000"}}>31</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{marginTop:20, marginBottom:10}}>
                    <Text style={{fontSize:15, color:"#000000"}}>Pickup Time</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:20}}>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("08:00AM")}
                        style={{backgroundColor:(click1==="08:00AM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginLeft:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>08:00AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("09:00AM")}
                        style={{backgroundColor:(click1==="09:00AM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>09:00AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("10:00AM")}
                        style={{backgroundColor:(click1==="10:00AM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>10:00AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("11:00AM")}
                        style={{backgroundColor:(click1==="11:00AM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>11:00AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("12:00PM")}
                        style={{backgroundColor:(click1==="12:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>12:00PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("01:00PM")}
                        style={{backgroundColor:(click1==="01:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>01:00PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("02:00PM")}
                        style={{backgroundColor:(click1==="02:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>02:00PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("03:00PM")}
                        style={{backgroundColor:(click1==="03:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>03:00PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("04:00PM")}
                        style={{backgroundColor:(click1==="04:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>04:00PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("05:00PM")}
                        style={{backgroundColor:(click1==="05:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>05:00PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("06:00PM")}
                        style={{backgroundColor:(click1==="06:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>06:00PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("07:00PM")}
                        style={{backgroundColor:(click1==="07:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>07:00PM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick1("08:00PM")}
                        style={{backgroundColor:(click1==="08:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                            <Text style={{color:"#FFFFFF", fontSize:13}}>08:00PM</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={{}}>
                    <Text style={{color:"#808080", fontSize:20}}>Select Delivery Date & Time</Text>
                    <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between", marginTop:20, marginBottom:10}}>
                        <Text style={{fontSize:15, color:"#000000"}}>Delivery Date</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"40%", paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1,}}>
                            <Text
                            style={{color:"#000000", fontSize:13}}
                            >November 2021</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{}}>
                                <MaterialIcons
                                name="keyboard-arrow-down"
                                size={20}
                                color="#808080"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:10}}>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("01")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="01") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginLeft:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>01</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("02")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="02") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>02</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("03")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="03") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>03</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("04")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="04") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>04</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("05")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="05") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>05</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("06")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="06") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>06</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("07")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="07") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>07</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("08")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="08") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>08</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("09")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="09") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>09</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("10")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="10") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>10</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("11")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="11") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("12")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="12") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>12</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("13")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="13") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>13</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("14")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="14") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>14</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("15")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="15") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>15</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("16")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="16") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>16</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("17")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="17") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>17</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("18")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="18") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>18</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("19")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="19") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>19</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("20")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="20") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>20</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("21")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="21") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>21</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("22")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="22") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>22</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("23")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="23") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>23</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("24")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="24") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>24</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("25")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="25") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>25</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("26")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="26") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>26</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("27")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="27") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>27</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("28")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="28") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>28</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("29")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="29") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>29</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("30")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="30") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>30</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>setClick("31")}
                        style={{backgroundColor:"#FDF1E5", padding:15, borderWidth:1, borderColor:(click==="31") ? "#000000" : "transparent",borderRadius:10, alignItems:"center", justifyContent:"center", marginHorizontal:10}}>
                            <Text style={{fontSize:13, color:"#000000"}}>31</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={{marginTop:20, marginBottom:10}}>
                        <Text style={{fontSize:15, color:"#000000"}}>Delivery Time</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical:20}}>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("08:00AM")}
                            style={{backgroundColor:(click1==="08:00AM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginLeft:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>08:00AM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("09:00AM")}
                            style={{backgroundColor:(click1==="09:00AM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>09:00AM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("10:00AM")}
                            style={{backgroundColor:(click1==="10:00AM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>10:00AM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("11:00AM")}
                            style={{backgroundColor:(click1==="11:00AM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>11:00AM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("12:00PM")}
                            style={{backgroundColor:(click1==="12:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>12:00PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("01:00PM")}
                            style={{backgroundColor:(click1==="01:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>01:00PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("02:00PM")}
                            style={{backgroundColor:(click1==="02:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>02:00PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("03:00PM")}
                            style={{backgroundColor:(click1==="03:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>03:00PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("04:00PM")}
                            style={{backgroundColor:(click1==="04:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>04:00PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("05:00PM")}
                            style={{backgroundColor:(click1==="05:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>05:00PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("06:00PM")}
                            style={{backgroundColor:(click1==="06:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>06:00PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("07:00PM")}
                            style={{backgroundColor:(click1==="07:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>07:00PM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>setClick1("08:00PM")}
                            style={{backgroundColor:(click1==="08:00PM") ? "#F99026" : "#5E5E60", padding:10, borderRadius:10, marginHorizontal:10}}>
                                <Text style={{color:"#FFFFFF", fontSize:13}}>08:00PM</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style={{position:"absolute", bottom:0, backgroundColor:"transparent", flexDirection:"row", justifyContent:"center",alignSelf:"center",alignItems:"center",width:width,zIndex:80, padding:20}}>
            <TouchableOpacity activeOpacity={0.8} 
            onPress={()=>navigation.navigate("Order Summary")}
            style={{backgroundColor:"#F99026", padding:20, borderRadius:30, width:"85%", alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Continue</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ScheduleScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"white",
        flex:1
    }
})