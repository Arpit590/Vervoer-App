import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get("window");

const AvailableParking = ({title, timer, price, heading, address, rating, imgSrc}) => {

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
      <>
        <TouchableOpacity 
        onPress={()=>setClick(!click)}
        activeOpacity={0.8} style={{flexDirection:"row", alignItems:"flex-end", elevation:5,backgroundColor:"#FFFFFF", padding:10, borderRadius:10, marginVertical:20, width:width-40, alignSelf:"center"}}>
            <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                <View style={{alignItems:"center", justifyContent:"center",backgroundColor:"#F99026", paddingVertical:5, paddingHorizontal:10,borderRadius:5}}>
                    <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>{title}</Text>
                </View>
                <View style={{marginLeft:20}}>
                    <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>{heading}</Text>
                    <Text style={{fontSize:12, color:"#808080"}}>{address}</Text>
                    <View style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
                        <View style={{flexDirection:"row", alignItems:"center", marginRight:10}}>
                            <Image
                            source={require("../assets/timer.png")}
                            style={{height:15, width:15, resizeMode:"contain"}}
                            />
                            <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>{timer}</Text>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Image
                            source={require("../assets/rating.png")}
                            style={{height:15, width:15, resizeMode:"contain"}}
                            />
                            <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>{rating}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{}}>
                <Text style={{fontSize:15, color:"#F99026", marginBottom:5}}>${price}/H</Text>
            </View>
        </TouchableOpacity>
        {(click) &&
        <Animated.View style={{opacity:value,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Parking Details", {"imgSrc": imgSrc, "heading": heading, "title": title, "timer": timer, "rating": rating, "price": price, "address": address})}
            activeOpacity={0.8} style={{width:"50%",alignSelf:"center",marginTop:10,backgroundColor:"#5E5E60", padding:15, borderRadius:30, paddingHorizontal:30}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>View Details</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("")}
            activeOpacity={0.8} style={{marginLeft:10,width:"50%",alignSelf:"center",marginTop:10,backgroundColor:"#F99026", padding:15, borderRadius:30, paddingHorizontal:30}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>Find Parking</Text>
            </TouchableOpacity>
        </Animated.View>
        }
        </>
  )
}

export default AvailableParking

const styles = StyleSheet.create({})