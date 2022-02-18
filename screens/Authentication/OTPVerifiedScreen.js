import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView } from 'react-native'
import React, { } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BackArrowIcon from "../../assets/back.svg";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from '@react-navigation/native';

const {height, width} = Dimensions.get("window");

const OTPVerifiedScreen = () => {

    const navigation = useNavigation();

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
                <Text style={{fontSize:20, color:"#000000", textAlign:"center", marginVertical:20}}>Success</Text>
                <Text style={{fontSize:15, color:"#000000", textAlign:"center", marginBottom:20}}>Your Phone Number is verified successfully.</Text>
            </ScrollView>
          </View>
      </View>
      <TouchableOpacity 
      onPress={()=>navigation.navigate("Registration")}
      activeOpacity={0.8} style={{marginVertical:10,width:"80%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:10, borderRadius:100}}>
            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Continue</Text>
        </TouchableOpacity>
    </View>
  )
}

export default OTPVerifiedScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})