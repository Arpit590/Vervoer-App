import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ActivityIndicator, Alert } from 'react-native'
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

const ForgotPasswordScreen = () => {

    const navigation = useNavigation();
    const [number, setNumber] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const forgotPassHandler=async()=>{
        if(number!==""){
            setError(false);
            setLoading(true);
            const headers = {
                headers: {
                  'content-type': 'application/json',
                  Accept: 'application/json',
                },
              };
        
              const params = {
                "phoneNumber": number
                }
        
              await axios
                .post(BASE_URL + 'auth/forgot/password', params, headers)
                .then(async response => {
                    setError(false);
                    setLoading(false);
                    console.log(response.data);
                    navigation.navigate("Reset Password", {"_id": response.data.data.user._id})
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
                Alert.alert("Please Fill Your Number");
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
            <Text style={{fontSize:20, color:"#F99026", textAlign:"center"}}>Forget Password</Text>
            <Text></Text>
            </View>
            <View style={{marginTop:50}}>
                <Text style={{color:"#000000", fontSize:20, textAlign:"center"}}>Enter your Registered Number</Text>
                <Text style={{color:"#808080", fontSize:14, textAlign:"center", maxWidth:300, marginVertical:20, alignSelf:"center"}}>We will send link to Reset this on your Number</Text>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:14, color:"#808080", marginBottom:5}}>Phone Number</Text>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-50,}}>
                        <TextInput
                        placeholder='Enter Phone Number'
                        placeholderTextColor="#000000"
                        value={number}
                        onChangeText={(text)=>setNumber(text)}
                        keyboardType="number-pad"
                        style={{color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
            </View>
          </View>
      </View>
      <TouchableOpacity activeOpacity={0.8}
      onPress={forgotPassHandler}
      style={{marginVertical:30,width:"80%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:10, borderRadius:100}}>
            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Send Link</Text>
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
          <Text style={{fontSize:15, color:"red", marginLeft:10}}>Error!</Text>
      </View>
      }
    </View>
  )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})