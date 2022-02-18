import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const AvailableCar = ({heading, carName, price, rating, imgSrc, timeLeft, noOfPersons}) => {

    const [click, setClick] = useState(false);
    const value = useState(new Animated.Value(0))[0];
    const navigation = useNavigation();

    useEffect(()=>{
        if(click){
            Animated.timing(value,{
                toValue:1,
                duration:1000,
                useNativeDriver:false
            }).start()
        }
        else{
            Animated.timing(value,{
                toValue:0,
                duration:1000,
                useNativeDriver:false
            }).start()
        }
    }, [click])

  return (
    <View style={{}}>
        <TouchableOpacity 
        onPress={()=>setClick(!click)}
        activeOpacity={0.8} style={styles.container}>
            <View style={{}}>
                <View style={{flexDirection:"row", alignItems:"center", marginBottom:10}}>
                    <Text style={{fontSize:15, color:"#000000", fontWeight:"bold"}}>{heading}</Text>
                    <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>{carName}</Text>
                </View>
                <View style={{marginBottom:10, flexDirection:"row", alignItems:"center"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../assets/person1.png")}
                    style={{height:15, width:15, resizeMode:"contain"}}
                    />
                    <Text style={{fontSize:10, color:"#000000", marginLeft:5}}>{noOfPersons}</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", marginLeft:15}}>
                    <Image
                    source={require("../assets/timer.png")}
                    style={{height:15, width:15, resizeMode:"contain"}}
                    />
                    <Text style={{fontSize:10, color:"#000000", marginLeft:5}}>{timeLeft} walk</Text>
                </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:14, color:"#F99026"}}>$</Text>
                        <Text style={{fontSize:11, color:"#F99026"}}>{price}/H</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", marginLeft:15}}>
                        <Image
                        source={require("../assets/rating.png")}
                        style={{height:15, width:15, resizeMode:"contain"}}
                        />
                        <Text style={{fontSize:10, color:"#000000", marginLeft:5}}>{rating}</Text>
                    </View>
                </View>
            </View>
            <Image
            source={imgSrc}
            style={{height:130, width:130, resizeMode:"contain"}}
            />
        </TouchableOpacity>
        <Animated.View style={{display:(click)? "flex": "none",opacity:value,flexDirection:"row", alignItems:"center", marginBottom:20, justifyContent:"space-between"}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Car Details", {"imgSrc":imgSrc, "carName": carName, "heading": heading, "price": price, "rating": rating, "noOfPersons": noOfPersons, "timeLeft": timeLeft})}
            activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:15, borderRadius:30, paddingHorizontal:30}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>Car Details</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:15, borderRadius:30, paddingHorizontal:30}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>Book Now</Text>
            </TouchableOpacity>
        </Animated.View>
    </View>
  )
}

export default AvailableCar

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"whitesmoke",
        paddingHorizontal:15,
        borderRadius:20,
        marginBottom:10
    }
})