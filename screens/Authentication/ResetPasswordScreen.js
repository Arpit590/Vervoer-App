import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BackArrowIcon from "../../assets/back.svg";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../components/url';

const {height, width} = Dimensions.get("window");

const ResetPasswordScreen = () => {

    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

  //   const resetHandler=async()=>{
  //     if(number!==""){
  //         setError(false);
  //         setLoading(true);
  //         const headers = {
  //             headers: {
  //               'content-type': 'application/json',
  //               Accept: 'application/json',
  //             },
  //           };
      
  //           const params = {
  //             "phoneNumber": number
  //             }
      
  //           await axios
  //             .post(BASE_URL + 'auth/forgot/password', params, headers)
  //             .then(async response => {
  //                 setError(false);
  //                 setLoading(false);
  //                 console.log(response.data);
  //                 navigation.replace("Login")
  //             })
  //             .catch(err => {
  //                 console.log(`Error: ${err}`);
  //                 setError(true);
  //                 setLoading(false);
  //                 setTimeout(()=>{
  //                     setError(false)
  //                 },2000)
  //             });
  //         }else{
  //             Alert.alert("Please Fill Your Number");
  //         }
  // }

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
            <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:50}}>
                <Image
                source={require("../../assets/OTP.png")}
                style={{height:160, width:160, resizeMode:"contain", alignSelf:"center"}}
                />
                <Text style={{fontSize:20, color:"#000000", textAlign:"center", marginVertical:20}}>Sent</Text>
                <Text style={{fontSize:15, color:"#808080", textAlign:"center", marginBottom:20, maxWidth:300, alignSelf:"center"}}>Reset Password Link is sent to your Email ID.</Text>
            </ScrollView>
          </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} 
      onPress={resetHandler}
      style={{marginVertical:10,width:"80%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:10, borderRadius:100}}>
            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Back to Login</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})