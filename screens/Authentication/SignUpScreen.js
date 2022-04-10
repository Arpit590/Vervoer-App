import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BackArrowIcon from "../../assets/back.svg";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { BASE_URL } from '../../components/url';

const {height, width} = Dimensions.get("window");

const SignUpScreen = () => {

    const navigation = useNavigation();
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");
    const [showPassword, setShowPassowrd] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const signupHandler=async()=>{
        if(number!=="" && password!=="" && repassword!==""){
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
            "accountType": "merchant",
            "password": password
            }
    
          await axios
            .post(BASE_URL + 'auth/signup', params, headers)
            .then(async response => {
                setError(false);
                setLoading(false);
                console.log(response.data);
                navigation.navigate("Verify", {"_id": response.data.data.user._id});
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
            <View style={{marginTop:50}}>
                <Text style={{color:"#000000", fontSize:20, textAlign:"center"}}>Enter your Phone No.</Text>
                <Text style={{color:"#808080", fontSize:14, textAlign:"center", maxWidth:300, marginVertical:20, alignSelf:"center"}}>Please enter your Phone Number. We will send OTP to verify.</Text>
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
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:0}}>Create Password</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-40}}>
                        <TextInput
                        placeholder='Create Password'
                        placeholderTextColor="#000000"
                        value={password}
                        onChangeText={(text)=>setPassword(text)}
                        secureTextEntry={showPassword ? false : true}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                        <TouchableOpacity 
                        onPress={()=> setShowPassowrd(!showPassword)}
                        activeOpacity={0.8} style={{marginLeft:-50}}>
                            {(showPassword) 
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
                    <Text style={{fontSize:11, color:"#808080", marginTop:5, marginBottom:0}}>Min. 8 characters</Text>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:0}}>Re-enter Password</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Re-enter Password'
                        placeholderTextColor="#000000"
                        value={repassword}
                        onChangeText={(text)=>setRePassword(text)}
                        secureTextEntry={true}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
            </View>
          </View>
      </View>
      <TouchableOpacity activeOpacity={0.8}
      onPress={signupHandler}
      style={{marginVertical:60,width:"80%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:10, borderRadius:100}}>
            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Continue</Text>
        </TouchableOpacity>
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
          <Text style={{fontSize:15, color:"red", marginLeft:10}}>User Already Registered!</Text>
      </View>
      }
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})