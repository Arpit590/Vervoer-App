import { StyleSheet, Text, View,Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const {height, width} = Dimensions.get("window");

const OrderConfirmedScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();

  return (
    <View style={styles.screen}>
        <View style={styles.container}>
            <Image
            source={require("../../../assets/img_success.png")}
            style={{height:100, width:100, resizeMode:"contain"}}
            />
            <Text style={{fontSize:20, fontWeight:"bold",color:"#000000", marginTop:20, marginBottom:40}}>Submitted Successfully</Text>
            <Text style={{fontSize:15, color:"#808080", marginBottom:30}}>Your Order Is Completed</Text>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Receipt")}
            activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:15, paddingHorizontal:30, width:width-200, borderRadius:30, alignItems:"center", alignSelf:"center", marginTop:20}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Ok</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default OrderConfirmedScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:"#000000"
    },
    container:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FFFFFF",
        borderRadius:20,
        padding:20,
        top: "30%",
        width:width-40, 
        alignSelf:"center"
    }
})