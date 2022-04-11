import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, Alert, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BackArrowIcon from "../../assets/back.svg";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../components/url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {height, width} = Dimensions.get("window");

const NewPasswordScreen = () => {

    const navigation = useNavigation();
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");


    const newPasswordHandler=async()=>{
        const token = await AsyncStorage.getItem('token');
        console.log(token.toString());
        if(password!=="" && otp!==""){
            setError(false);
            setLoading(true);
            const headers = {
                headers: {
                  'content-type': 'application/json',
                  'x-access-token': token,
                },
              };
        
              const params = {
                    "otp": otp,
                    "new_password": password
                }
        
              await axios
                .post(BASE_URL + 'auth/reset/password', params, headers)
                .then(async response => {
                    setError(false);
                    setLoading(false);
                    console.log(response.data);
                    navigation.navigate("Reset Password");
                })
                .catch(err => {
                    console.log(`Error: ${err}`);
                    setError(true);
                    setLoading(false);
                    setTimeout(()=>{
                        setError(false)
                    },2000)
                });
            }else{
                Alert.alert("Please Fill All the Details");
            }
    }

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
            <Text style={{fontSize:20, color:"#F99026", textAlign:"center"}}>Reset Password</Text>
            <Text></Text>
            </View>
                <View style={{marginTop:30}}>
                    <Text style={{color:"#000000", fontSize:20, textAlign:"center"}}>Please Enter All the Details</Text>
                    <Text style={{color:"#808080", fontSize:14, textAlign:"center", maxWidth:400, marginVertical:20, alignSelf:"center"}}>Please enter the below details. We will send OTP to Email to verify.</Text>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>New Password</Text>
                        <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-40,}}>
                            <TextInput
                            placeholder='Enter Your Password'
                            placeholderTextColor="#000000"
                            value={password}
                            maxLength={4}
                            onChangeText={(text)=>setPassword(text)}
                            secureTextEntry={true}
                            style={{color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>OTP</Text>
                        <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-40,}}>
                            <TextInput
                            placeholder='Enter Your OTP'
                            maxLength={4}
                            placeholderTextColor="#000000"
                            value={otp}
                            onChangeText={(text)=>setOtp(text)}
                            keyboardType='number-pad'
                            style={{color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
        {/* <>
        {loading && 
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
            <ActivityIndicator
            size="small"
            color="#000000"
            />
            <Text style={{fontSize:15, color:"#000000", marginLeft:10}}>Please Wait!</Text>
        </View>
        }
        {error && 
        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:15, color:"red", marginLeft:10}}>User Not Registered!</Text>
        </View>
        }
        </> */}
        <TouchableOpacity activeOpacity={0.8}
        onPress={newPasswordHandler}
        style={{marginVertical:30,width:"80%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:10, borderRadius:100}}>
            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Continue</Text>
        </TouchableOpacity>
    </ScrollView>
  )
}

export default NewPasswordScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})