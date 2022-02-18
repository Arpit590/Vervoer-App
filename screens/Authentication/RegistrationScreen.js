import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BackArrowIcon from "../../assets/back.svg";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get("window");

const RegistrationScreen = () => {

    const navigation = useNavigation();
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
        <View style={{paddingTop:20}}>
            <View style={{padding:20}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <TouchableOpacity activeOpacity={0.8}
            style={{zIndex:100,}}
            onPress={()=>navigation.goBack()}>
                <BackArrowIcon
                height={'30'}
                />
            </TouchableOpacity>
            <Text style={{fontSize:20, color:"#F99026", textAlign:"center"}}>Registration</Text>
            <Text></Text>
            </View>
                <View style={{marginTop:30}}>
                    <Text style={{color:"#000000", fontSize:20, textAlign:"center"}}>Enter your Personal Info</Text>
                    <Text style={{color:"#808080", fontSize:14, textAlign:"center", maxWidth:400, marginVertical:20, alignSelf:"center"}}>Please enter the below details. We will send OTP to Email to verify.</Text>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>First Name</Text>
                        <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-40,}}>
                            <TextInput
                            placeholder='Enter Your First Name'
                            placeholderTextColor="#000000"
                            value={fName}
                            onChangeText={(text)=>setFName(text)}
                            keyboardType='default'
                            style={{color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Last Name</Text>
                        <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-40,}}>
                            <TextInput
                            placeholder='Enter Your Last Name'
                            placeholderTextColor="#000000"
                            value={lName}
                            onChangeText={(text)=>setLName(text)}
                            keyboardType='default'
                            style={{color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Email ID</Text>
                        <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-40,}}>
                            <TextInput
                            placeholder='Enter Your Email ID'
                            placeholderTextColor="#000000"
                            value={email}
                            onChangeText={(text)=>setEmail(text)}
                            keyboardType='email-address'
                            style={{color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Country</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-40}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >United States of America</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                                <MaterialIcons
                                name="keyboard-arrow-down"
                                size={20}
                                color="#808080"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>State</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-40}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >New York</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                                <MaterialIcons
                                name="keyboard-arrow-down"
                                size={20}
                                color="#808080"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>ZIP Code</Text>
                        <View style={{width:width-40}}>
                            <TextInput
                            placeholder='Enter ZipCode'
                            placeholderTextColor="#000000"
                            value={zipCode}
                            onChangeText={()=>setZipCode(text)}
                            style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
        <TouchableOpacity activeOpacity={0.8}
        onPress={()=>navigation.navigate("Email Verification")}
        style={{marginVertical:30,width:"80%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:10, borderRadius:100}}>
            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Continue</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})