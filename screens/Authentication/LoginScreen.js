import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BackArrowIcon from "../../assets/back.svg";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../components/url';

const {height, width} = Dimensions.get("window");

const LoginScreen = () => {

    const navigation = useNavigation();
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const loginHandler=async()=>{
        if(number!=="" && password!==""){
            setError(false);
            setLoading(true);
            const headers = {
                headers: {
                  'content-type': 'application/json',
                  Accept: 'application/json',
                },
              };
        
              const params = {
                "phoneNumber": number,
                "password": password
                }
        
              await axios
                .post(BASE_URL + 'auth/login', params, headers)
                .then(async response => {
                    setError(false);
                    setLoading(false);
                    console.log(response.data);
                    navigation.navigate("Home", {"_id": response.data.data.user._id});
                    console.log(response.data.data.user._id);
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
    <View style={styles.screen}>
      <View style={{paddingHorizontal:10, paddingTop:20}}>
          <ImageBackground
          source={require("../../assets/Background.png")}
          style={{width:width, height:height}}
          />
          <View style={{position:"absolute", padding:20}}>
            <TouchableOpacity activeOpacity={0.8}
            style={{zIndex:100,}}
            onPress={()=>navigation.goBack()}>
                <BackArrowIcon
                height={'30'}
                />
            </TouchableOpacity>
            <Image
            source={require("../../assets/Heading.png")}
            style={{height:48, width:192, resizeMode:"contain", alignSelf:"center", marginVertical:50}}
            />
            <View style={{marginTop:50}}>
                <View style={{marginBottom:20, zIndex:100}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Phone Number</Text>
                    <TextInput
                    placeholder='Enter Number'
                    placeholderTextColor="#000000"
                    value={number}
                    onChangeText={(text)=>setNumber(text)}
                    keyboardType='number-pad'
                    style={{borderBottomColor:"#808080", borderBottomWidth:1, width:width-40, color:"#000000", fontSize:15}}
                    />
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Password</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-40}}>
                        <TextInput
                        placeholder='Enter Password'
                        placeholderTextColor="#000000"
                        value={password}
                        onChangeText={(text)=>setPassword(text)}
                        secureTextEntry={showPassword ? false : true}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                        <TouchableOpacity 
                        onPress={()=>setShowPassword(!showPassword)}
                        activeOpacity={0.8} style={{marginLeft:-50}}>
                            {(!showPassword) 
                            ?
                            <Feather
                            name="eye"
                            size={20}
                            color="#808080"
                            />
                            :
                            <Feather
                            name="eye-off"
                            size={20}
                            color="#808080"
                            />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={0.8}
                onPress={()=>navigation.navigate("Forgot Password")}
                >
                    <Text style={{color:"#F99026", fontSize:14, fontWeight:"bold"}}>Forgot Password ?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={loginHandler} activeOpacity={0.8} style={{marginVertical:30,width:"80%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:10, borderRadius:100, zIndex: 1}}>
                    <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Login</Text>
                </TouchableOpacity>
                <Text style={{color:"#808080", fontSize:11, textAlign:"center"}}>Or Login with</Text>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginVertical:20}}>
                    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"white", borderRadius:100, padding:10, elevation:5}}>
                        <AntDesign
                        name='google'
                        size={24}
                        color="#808080"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"white", borderRadius:100, padding:10, paddingHorizontal:15,elevation:5, marginHorizontal:20}}>
                        <FontAwesome
                        name='facebook'
                        size={24}
                        color="#808080"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"white", borderRadius:100, padding:10, elevation:5}}>
                        <AntDesign
                        name='apple1'
                        size={24}
                        color="#808080"
                        />
                    </TouchableOpacity>
                </View>
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
            </View>
          </View>
      </View>
      <View style={{position:"absolute", bottom:0, right:0}}>
        <Image
        source={require("../../assets/Curve.png")}
        style={{height:240, width:370, resizeMode:"contain"}}
        />
        <TouchableOpacity activeOpacity={0.8}
        onPress={()=>navigation.navigate("SignUp")}
        style={{flexDirection:"row", alignItems:"center", position:"absolute", zIndex:100, bottom:20,right:20}}>
          <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", marginRight:5}}>Sign Up</Text>
          <MaterialIcons
          name='arrow-forward-ios'
          size={14}
          color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})