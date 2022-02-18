import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BackArrowIcon from "../../assets/back.svg";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from '@react-navigation/native';

const {height, width} = Dimensions.get("window");

const VerificationScreen = () => {

    const navigation = useNavigation();
    const [otp1, setOtp1] =useState("");
    const [otp2, setOtp2] =useState("");
    const [otp3, setOtp3] =useState("");
    const [otp4, setOtp4] =useState("");
    const [otp, setOtp] = useState("");
    const route = useRoute();
    const value1 = useRef(null);
    const value2 = useRef(null);
    const value3 = useRef(null);
    const value4 = useRef(null);

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
                <Text style={{fontSize:20, color:"#000000", textAlign:"center", marginVertical:20}}>Verify OTP</Text>
                <Text style={{fontSize:15, color:"#000000", textAlign:"center", marginBottom:20}}>Enter the Verification Code sent to your Phone Number</Text>
                <View style={{flexDirection:"row", marginTop:20, alignSelf:"center"}}>
                    <TextInput
                    keyboardType="number-pad"
                    value={otp1}
                    ref={value1}
                    maxLength={1}
                    autoFocus={true}
                    onChangeText={(text)=>{
                        setOtp1(text);
                        if(otp1===""){
                            value2.current.focus()
                        }else{
                            value1.current.focus()
                        }
                        }
                    }
                    style={{textAlign:"center",color:"black", fontSize:14,marginRight:20,borderRadius:50, borderWidth:1, borderColor:"black",height: 50, width: 50}}
                    />
                    <TextInput
                    keyboardType="number-pad"
                    value={otp2}
                    ref={value2}
                    maxLength={1}
                    onChangeText={(text)=>{
                        setOtp2(text);
                        if(otp2===""){
                            value3.current.focus()
                        }else{
                            value2.current.focus()
                        }
                    }}
                    style={{textAlign:"center",color:"black", fontSize:14,marginRight:20,borderRadius:50, borderWidth:1, borderColor:"black",height: 50, width: 50}}
                    />
                    <TextInput
                    keyboardType="number-pad"
                    value={otp3}
                    maxLength={1}
                    ref={value3}
                    onChangeText={(text)=>{
                        setOtp3(text);
                        if(otp3===""){
                            value4.current.focus()
                        }else{
                            value3.current.focus()
                        }
                    }}
                    style={{textAlign:"center",color:"black", fontSize:14,marginRight:20,borderRadius:50, borderWidth:1, borderColor:"black",height: 50, width: 50}}
                    />
                    <TextInput
                    keyboardType="number-pad"
                    value={otp4}
                    ref={value4}
                    maxLength={1}
                    onChangeText={(text)=>{
                        setOtp4(text);
                    }}
                    style={{textAlign:"center",color:"black", fontSize:14,marginRight:20,borderRadius:50, borderWidth:1, borderColor:"black",height: 50, width: 50}}
                    />
                </View>
                <View style={{}}>
                    <Text style={{fontSize:14, color:"#808080", textAlign:"center", marginVertical:20}}>Didn't received OTP?</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                    <Text style={{fontSize:14, color:"#F99026", textAlign:"center", marginBottom:20}}>Resend OTP</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
          </View>
      </View>
      <TouchableOpacity activeOpacity={0.8} 
      onPress={()=>navigation.navigate("Verified OTP")}
      style={{marginVertical:30,width:"80%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:10, borderRadius:100}}>
            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Verify OTP</Text>
        </TouchableOpacity>
    </View>
  )
}

export default VerificationScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})