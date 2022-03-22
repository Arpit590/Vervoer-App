import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const DriverRegisterScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [number ,setNumber] = useState("");
    
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
                        <Text style={{fontSize:16, color:"#F99026", marginBottom:5}}>Registeration</Text>
                    </View>
                </View>
                <View style={{marginVertical:50}}>
                    <Text style={{color:"#000000", fontSize:20, textAlign:"center", maxWidth:width-200, alignSelf:"center"}}>Enter your Phone No. Or Email</Text>
                    <Text style={{color:"#808080", fontSize:14, textAlign:"center", maxWidth:300, marginVertical:20, alignSelf:"center"}}>Please enter your Phone Number or Email. We will send OTP to verify.</Text>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:0}}>Phone Number</Text>
                        <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-40,}}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Text style={{fontSize:15, color:"#000000", marginRight:10}}>+1</Text>
                                <TouchableOpacity activeOpacity={0.8}>
                                    <MaterialIcons
                                    name="keyboard-arrow-down"
                                    size={20}
                                    color="#808080"
                                    />
                                </TouchableOpacity>
                            </View>
                            <TextInput
                            placeholder='Enter Phone Number'
                            placeholderTextColor="#000000"
                            value={number}
                            onChangeText={(text)=>setNumber(text)}
                            keyboardType='number-pad'
                            style={{color:"#000000", fontSize:15, marginLeft:10}}
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:"#FDF1E5", padding:10, borderRadius:50, alignSelf:"center", elevation:5}}>
                        <Text style={{fontSize:14, color:"#000000"}}>Or</Text>
                    </View>
                    <View style={{marginVertical:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:0}}>Email Address</Text>
                        <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-40}}>
                            <TextInput
                            placeholder='Enter Your Email'
                            placeholderTextColor="#000000"
                            value={email}
                            onChangeText={(text)=>setEmail(text)}
                            keyboardType='email-address'
                            style={{color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>
                    <View style={{marginTop:100}}>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>navigation.navigate("Driver OTP", {"role": route.params.role})}
                        style={{width:"90%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:15, borderRadius:100}}>
                            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Continue</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection:"row", alignItems:"center", marginTop:10, justifyContent:"center"}}>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>navigation.goBack()}
                            style={{width:"40%",alignSelf:"center", backgroundColor:"#5E5E60", paddingHorizontal:20, paddingVertical:15, borderRadius:100}}>
                                <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={()=>navigation.goBack()}
                            style={{width:"40%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, marginLeft:30,paddingVertical:15, borderRadius:100}}>
                                <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default DriverRegisterScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})