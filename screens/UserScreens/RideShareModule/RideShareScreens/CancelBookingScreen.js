import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const CancelBookingScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const [click, setClick] = useState(false);

    
  return (
    <View style={styles.screen}>
        <View style={{}}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false} style={{}}>
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
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Cancel Booking</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:15, color:"#F99026"}}>#RS58223</Text>
                    </View>
                </View>
                <View style={{backgroundColor:"white", marginTop:20}}>
                    <TouchableOpacity activeOpacity={0.8} 
                    onPress={()=>setClick("Not Same")}
                    style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Not Same") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Not Same") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Car isn't same as shown in photos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("Wrong Address")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Wrong Address") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Wrong Address") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Wrong address shown</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("Changed My Mind")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Changed My Mind") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Changed My Mind") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Changed My Mind</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("Better Car")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Better Car") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Better Car") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Found Better Car</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("Cancelled Plan")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Cancelled Plan") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Cancelled Plan") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Cancelled Plan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setClick("Other Reason")}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderBottomColor:"whitesmoke", padding:20, borderBottomWidth:1}}>
                        <View style={{borderRadius:50, padding:5, borderColor:(click==="Other Reason") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                            <View style={{backgroundColor:(click==="Other Reason") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                        </View>
                        <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Other Reason</Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderColor:"#808080", borderWidth:1, borderRadius:10, backgroundColor:"#FFFFFF", margin:20, height:200, padding:10}}>
                    <TextInput
                    placeholder='Write Your Reason...'
                    placeholderTextColor="#808080"
                    multiline={true}
                    keyboardType='default'
                    style={{fontSize:15, color:"#000000"}}
                    />
                </View>
                <TouchableOpacity 
                onPress={()=>navigation.navigate("Cancelled Booking")}
                activeOpacity={0.8} style={{marginBottom:200,width:width-100, alignSelf:"center", alignItems:"center", padding:15, borderRadius:40, backgroundColor:"#F99026"}}>
                    <Text style={{fontSize:17, color:"#FFFFFF"}}>Cancel Now</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
  )
}

export default CancelBookingScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})