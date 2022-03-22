import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import RoleContainer from '../../../../components/RoleContainer'
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const RideShareScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value1 = useState(new Animated.Value(0))[0];
    const [click, setClick] = useState("Adult");

    const adultHandler=()=>{
        setClick("Adult");
        Animated.timing(value1,{
            toValue:0,
            duration:2000,
            useNativeDriver:false
        }).start()
    }

    const chlidHandler=()=>{
        setClick("Child");
        Animated.timing(value1,{
            toValue:width-300,
            duration:2000,
            useNativeDriver:false
        }).start()
    }
    
  return (
    <View style={styles.screen}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20, marginHorizontal:20}}>
                <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <TouchableOpacity activeOpacity={0.8}
                    style={{}}
                    onPress={()=>navigation.goBack()}>
                        <BackArrowIcon
                        height={'30'}
                        />
                    </TouchableOpacity>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>{route.params.heading}</Text>
                        <Text style={{fontSize:14, color:"#808080"}}>Find Nearby Cars For Your Ride</Text>
                    </View>
                </View>
            </View>
            <View style={{marginVertical:20, flexDirection:"row", alignItems:"center", alignSelf:"center", backgroundColor:"#FFFFFF", borderRadius:30, paddingHorizontal:10, paddingVertical:5}}>
                <TouchableOpacity activeOpacity={0.8} 
                onPress={adultHandler}
                style={{backgroundColor:(click==="Adult") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:30, borderRadius:30}}>
                    <Text style={{fontSize:13, color:"#000000"}}>Adult</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={chlidHandler}
                activeOpacity={0.8} style={{marginLeft:10,backgroundColor:(click==="Child") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:30, borderRadius:30}}>
                    <Text style={{fontSize:13, color:"#000000"}}>Child</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:20,paddingHorizontal:20, alignItems:"center", flexDirection:"row", justifyContent:"space-evenly"}}>
                <RoleContainer
                text="Book New Ride"
                tabHandler="Book New Ride"
                tab="Book New Ride"
                imageUrl={require("../../../../assets/Ride.png")}
                />
                <RoleContainer
                text="Live Session"
                tab="Ride Details"
                tabHandler="Live"
                imageUrl={require("../../../../assets/live.png")}
                />
            </View>
            <View style={{marginTop:20,paddingHorizontal:20, alignItems:"center", flexDirection:"row", justifyContent:"space-evenly"}}>
                <RoleContainer
                text="History"
                tabHandler="Ride History"
                tab="Ride History"
                imageUrl={require("../../../../assets/history.png")}
                />
                <RoleContainer
                text="Driver Application"
                tabHandler="Driver Register"
                tab="Driver Register"
                imageUrl={require("../../../../assets/Driver.png")}
                role="Users"
                />
            </View>
        </ScrollView>
    </View>
  )
}

export default RideShareScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})