import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../components/Header';
import AntDesign from "react-native-vector-icons/AntDesign"

const {height, width} = Dimensions.get("window");

const OrderPaymentScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const [click, setClick] = useState("");

    
  return (
    <View style={styles.screen}>
        <Header/>
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
                        <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Payment</Text>
                    </View>
                </View>
                <View style={{marginTop:30}}>
                    <View style={{backgroundColor:"#FFFFFF", padding:10, borderRadius:20, elevation:5}}>
                        <View style={{marginBottom:20,paddingBottom:20,flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderBottomColor:"#808080", borderBottomWidth:1}}>
                            <Text style={{fontSize:18, color:"#F99026"}}>PAY FOR</Text>   
                            <Text style={{fontSize:18, color:"#F99026"}}>#DC58223</Text> 
                        </View>
                        <View style={{marginBottom:20,paddingBottom:20,flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderBottomColor:"#808080", borderBottomWidth:1}}>
                            <Text style={{fontSize:18, color:"#000000"}}>Sub Total</Text>   
                            <Text style={{fontSize:18, color:"#000000"}}>$55.00</Text> 
                        </View>
                        <View style={{marginBottom:20,paddingBottom:20,flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderBottomColor:"#808080", borderBottomWidth:1}}>
                            <Text style={{fontSize:15, color:"#000000"}}>Fees</Text>   
                            <Text style={{fontSize:15, color:"#000000"}}>$15.00</Text> 
                        </View>
                        <View style={{marginBottom:20,paddingBottom:20,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <Text style={{fontSize:18, color:"#F99026"}}>Total Payment (*Approx)</Text>   
                            <Text style={{fontSize:18, color:"#F99026"}}>$70.00</Text> 
                        </View>
                    </View>
                    <Text style={{fontSize:20, color:"#808080", marginVertical:30}}>Payment Method</Text>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#FDF1E5", padding:10, borderRadius:10, paddingHorizontal:20}}>
                            <AntDesign
                            name="plus"
                            size={24}
                            color="#000000"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center", justifyContent:"center",backgroundColor:"#000000", padding:0, paddingHorizontal:20, borderRadius:10,marginHorizontal:10}}>
                            <Image
                            source={require("../../../assets/apple-pay.png")}
                            style={{height:40, width:40, resizeMode:"contain"}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{marginHorizontal:10}}>
                            <Image
                            source={require("../../../assets/mastercard.png")}
                            style={{height:60, width:60, resizeMode:"contain"}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{marginHorizontal:10}}>
                            <Image
                            source={require("../../../assets/visa.png")}
                            style={{height:60, width:60, resizeMode:"contain"}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center",justifyContent:"center",backgroundColor:"#000000", padding:0, paddingHorizontal:20, borderRadius:10,marginHorizontal:10}}>
                            <Image
                            source={require("../../../assets/google.png")}
                            style={{height:30, width:30, resizeMode:"contain"}}
                            />
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={{ marginBottom:100,marginTop:30,backgroundColor:"#FFFFFF", padding:20, borderRadius:20, elevation:5}}>
                        <View style={{flexDirection:"row", alignItems:"center", marginBottom:20}}>
                            <TouchableOpacity
                            onPress={()=>setClick("Debit Card")}
                            activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginRight:20}}>
                                <View style={{borderRadius:50, padding:5, borderColor:(click==="Debit Card") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                                    <View style={{backgroundColor:(click==="Debit Card") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                                </View>
                                <Text style={{fontSize:15, color:"#000000", marginLeft:10}}>Debit Card</Text>
                            </TouchableOpacity>   
                            <TouchableOpacity
                            onPress={()=>setClick("Credit Card")}
                            activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center"}}>
                                <View style={{borderRadius:50, padding:5, borderColor:(click==="Credit Card") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                                    <View style={{backgroundColor:(click==="Credit Card") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                                </View>
                                <Text style={{fontSize:15, color:"#000000", marginLeft:10}}>Credit Card</Text>
                            </TouchableOpacity>     
                        </View>
                        <View style={{}}>
                            <TextInput
                            placeholder='Card Holder Name'
                            placeholderTextColor="#808080"
                            style={{padding:10, borderBottomColor:"#808080", borderBottomWidth:1, marginBottom:20}}
                            />   
                            <TextInput
                            placeholder='Card Number'
                            placeholderTextColor="#808080"
                            keyboardType='number-pad'
                            style={{padding:10, borderBottomColor:"#808080", borderBottomWidth:1, marginBottom:20}}
                            />  
                            <TextInput
                            placeholder='Expires MM/YY'
                            keyboardType='number-pad'
                            placeholderTextColor="#808080"
                            style={{padding:10, borderBottomColor:"#808080", borderBottomWidth:1, marginBottom:20}}
                            />  
                            <TextInput
                            placeholder='CVV'
                            keyboardType='number-pad'
                            maxLength={3}
                            placeholderTextColor="#808080"
                            style={{padding:10, borderBottomColor:"#808080", borderBottomWidth:1, marginBottom:20}}
                            />   
                        </View>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate("Order Confirmed")}
                        activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:15, paddingHorizontal:30, width:width-100, borderRadius:30, alignItems:"center", alignSelf:"center", marginTop:20}}>
                            <Text style={{fontSize:15, color:"#FFFFFF"}}>Pay Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default OrderPaymentScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})