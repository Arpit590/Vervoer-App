import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';


const AvailableCar = ({heading, carName, price, description, imgSrc, time, noOfPersons}) => {

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
        activeOpacity={0.8} style={[styles.container, {backgroundColor: click ? "#FDF1E5" : "whitesmoke"}]}>
            <Image
            source={imgSrc}
            style={{height:100, width:100, resizeMode:"contain", marginRight:20}}
            />
            <View style={{flexDirection:"row", alignItems:"flex-start", flex:1, justifyContent:"space-between"}}>
                <View style={{}}>
                    <View style={{flexDirection:"row", alignItems:"center", marginBottom:10}}>
                        <Text style={{fontSize:15, color:"#000000", fontWeight:"bold"}}>{heading}</Text>
                        <View style={{flexDirection:"row", alignItems:"center", marginLeft:15}}>
                            <Image
                            source={require("../assets/person1.png")}
                            style={{height:22, width:22, resizeMode:"contain"}}
                            />
                            <Text style={{fontSize:10, color:"#000000", marginLeft:5}}>{noOfPersons}</Text>
                        </View>
                    </View>
                    <View style={{marginBottom:10}}>
                        <Text style={{fontSize:10, color:"#000000"}}>{time} drop-off</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{fontSize:10, color:"#000000"}}>{description}</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontSize:16, color:"#F99026"}}>$</Text>
                    <Text style={{fontSize:16, color:"#F99026"}}>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
        <Animated.View style={{display:(click)? "flex": "none",opacity:value, marginBottom:20}}>
            <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../assets/ic-wallet.png")}
                    style={{height:20, width:20, resizeMode:"contain"}}
                    />
                    <View style={{flexDirection:"row", alignItems:"center", marginLeft:10}}>
                        <Text style={{fontSize:15, color:"#000000", marginRight:5}}>Wallet</Text>
                        <Text style={{fontSize:14, color:"#F99026"}}>(Balance - $2500.00)</Text>
                    </View>
                </View>
                <Image
                source={require("../assets/ArrowForward.png")}
                style={{height:15, width:15, resizeMode:"contain"}}
                />
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Ride Details")}
            activeOpacity={0.8} style={{width:"90%",alignSelf:"center",marginTop:10,backgroundColor:"#F99026", padding:15, borderRadius:30, paddingHorizontal:30}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>Send Request</Text>
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
        paddingHorizontal:15,
        borderRadius:20,
        marginBottom:10,
        flex:1
    }
})