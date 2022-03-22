import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const CancelledBookingScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value1 = useState(new Animated.Value(0))[0];

    useEffect(()=>{
        Animated.timing(value1, {
            toValue:1,
            duration:2000,
            useNativeDriver:false
        }).start()
    }, [])
    
  return (
    <View style={styles.screen}>
        <View style={{}}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                <View style={{zIndex:10,flexDirection:"row",alignItems:"center", justifyContent:"space-between",marginTop:20, paddingHorizontal:20}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{}}
                        onPress={()=>navigation.goBack()}>
                            <BackArrowIcon
                            height={'30'}
                            />
                        </TouchableOpacity>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Cancel Booking</Text>
                        </View>
                    </View>
                </View>
                <View style={{alignItems:"center", marginTop:100}}>
                    <Animated.View style={{opacity: value1}}>
                        <Image
                        source={require("../../../../assets/Cancelled.png")}
                        style={{height:150, width:150, resizeMode:"contain"}}
                        />
                    </Animated.View>
                    <View style={{marginTop:50, maxWidth:width-200, alignSelf:"center"}}>
                        <Text style={{fontSize:20, color:"#F99026", textAlign:"center"}}>Ride Cancelled Successfully</Text>
                        <Text style={{fontSize:14, color:"#808080", textAlign:"center", marginTop:20}}>BOOKING ID: <Text style={{color:"#F99026"}}>#RS58223</Text></Text>
                    </View>
                </View>
                <View style={{marginVertical:120}}>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Book New Ride", {"heading": "Book New Ride"})}
                    activeOpacity={0.8} style={{width:width-100, alignSelf:"center", alignItems:"center", padding:15, borderRadius:40, backgroundColor:"#F99026"}}>
                        <Text style={{fontSize:17, color:"#FFFFFF"}}>Find New Ride</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Home")}
                    activeOpacity={0.8} style={{marginTop:20,width:width-100, alignSelf:"center", alignItems:"center", padding:15, borderRadius:40, backgroundColor:"#5E5E60"}}>
                        <Text style={{fontSize:17, color:"#FFFFFF"}}>Go to Home</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </View>
  )
}

export default CancelledBookingScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})