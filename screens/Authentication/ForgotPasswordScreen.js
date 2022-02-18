import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BackArrowIcon from "../../assets/back.svg";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get("window");

const ForgotPasswordScreen = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState("");

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
                <Text style={{color:"#000000", fontSize:20, textAlign:"center"}}>Enter your Registered Email</Text>
                <Text style={{color:"#808080", fontSize:14, textAlign:"center", maxWidth:300, marginVertical:20, alignSelf:"center"}}>We will send link to Reset this on your Email address</Text>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:14, color:"#808080", marginBottom:5}}>Email</Text>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-50,}}>
                        <TextInput
                        placeholder='Enter Email ID'
                        placeholderTextColor="#000000"
                        value={email}
                        onChangeText={(text)=>setEmail(text)}
                        keyboardType="email-address"
                        style={{color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
            </View>
          </View>
      </View>
      <TouchableOpacity activeOpacity={0.8}
      onPress={()=>navigation.navigate("Reset Password")}
      style={{marginVertical:30,width:"80%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:10, borderRadius:100}}>
            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Send Link</Text>
        </TouchableOpacity>
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