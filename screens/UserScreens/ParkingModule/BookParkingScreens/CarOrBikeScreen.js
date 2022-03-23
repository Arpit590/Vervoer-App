import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import AvailableParking from '../../../../components/AvailableParking';
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const CarOrBikeScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value1 = useState(new Animated.Value(0))[0];
    const [click, setClick] = useState("For Car");

    const carHandler=()=>{
        setClick("For Car");
        Animated.timing(value1,{
            toValue:0,
            duration:2000,
            useNativeDriver:false
        }).start()
    }

    const bikeHandler=()=>{
        setClick("For Bike");
        Animated.timing(value1,{
            toValue:width-300,
            duration:2000,
            useNativeDriver:false
        }).start()
    }
    
  return (
    <View style={styles.screen}>
        <ImageBackground
        source={require("../../../../assets/Map4.png")}
        style={{width:width, height:height, zIndex:-1}}
        />
        <View style={{position:"absolute", top:"20%", alignSelf:"center"}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Parking Details", {"title": "R", "heading": "Residence Parking (Driveway)", "address": "123, Lincon Street, New York", "price": "5.00", "timer": "5min", "rating": "4.2", "imgSrc": require("../../../../assets/Parking1.png")})}
            activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:5, paddingHorizontal:10,borderRadius:3, alignItems:"center", justifyContent:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>R</Text>
            </TouchableOpacity>
        </View>
        <View style={{position:"absolute", top:"35%", alignSelf:"flex-start", left:"14%"}}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Parking Details", {"title": "G", "heading": "Central Shopping Centre (Garage)", "address": "123, Lincon Street, New York", "price": "5.00", "timer": "5min", "rating": "4.2", "imgSrc": require("../../../../assets/Parking2.png")})}
            activeOpacity={0.8} style={{alignSelf:"flex-start",marginVertical:10,backgroundColor:"#F99026", padding:5, paddingHorizontal:10,borderRadius:3, alignItems:"center", justifyContent:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>G</Text>
            </TouchableOpacity>
        </View>
        <View style={{position:"absolute", top:"30%", alignSelf:"flex-end", right:"20%"}}>
            <TouchableOpacity activeOpacity={0.8} 
            onPress={()=>navigation.navigate("Parking Details", {"title": "L", "heading": "Central Shopping Centre (Lot)", "address": "123, Lincon Street, New York", "price": "5.00", "timer": "5min", "rating": "4.2", "imgSrc": require("../../../../assets/Parking3.png")})}
            style={{backgroundColor:"#F99026", padding:5, paddingHorizontal:10,borderRadius:3, alignItems:"center", justifyContent:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>L</Text>
            </TouchableOpacity>
        </View>
        <View style={{position:"absolute", top:"27%", alignSelf:"center"}}>
            <TouchableOpacity activeOpacity={0.8}
            onPress={()=>navigation.navigate("Parking Details", {"title": "R", "heading": "Residence Parking (Driveway)", "address": "123, Lincon Street, New York", "price": "5.00", "timer": "5min", "rating": "4.2", "imgSrc": require("../../../../assets/Parking1.png")})}
            style={{marginTop:10,backgroundColor:"#F99026", padding:5, paddingHorizontal:10,borderRadius:3, alignItems:"center", justifyContent:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>R</Text>
            </TouchableOpacity>
        </View>
        <Header map={true}/>
        <View style={{position:"absolute", top:"12%", alignSelf:"flex-start", paddingHorizontal:20}}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20}}>
                <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                    <TouchableOpacity activeOpacity={0.8}
                    style={{}}
                    onPress={()=>navigation.goBack()}>
                        <BackArrowIcon
                        height={'30'}
                        />
                    </TouchableOpacity>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Book Parking</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{position:"absolute", bottom:"0%",maxHeight:500,alignSelf:"center", backgroundColor:"#FFFFFF", padding:10, borderRadius:10, marginTop:20, width:width}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{elevation:5,marginVertical:20, flexDirection:"row", alignItems:"center", alignSelf:"center", backgroundColor:"#FFFFFF", borderRadius:30, paddingHorizontal:10, paddingVertical:5}}>
                    <TouchableOpacity activeOpacity={0.8} 
                    onPress={carHandler}
                    style={{flexDirection:"row", alignItems:"center", backgroundColor:(click==="For Car") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:30, borderRadius:30}}>
                        <Image
                        source={require("../../../../assets/Car2.png")}
                        style={{height:30, width: 30, resizeMode:"contain", marginRight:10}}
                        />
                        <Text style={{fontSize:13, color:"#000000"}}>For Car</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={bikeHandler}
                    activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center",marginLeft:10,backgroundColor:(click==="For Bike") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:30, borderRadius:30}}>
                        <Image
                        source={require("../../../../assets/Bike.png")}
                        style={{height:30, width: 30, resizeMode:"contain", marginRight:10}}
                        />
                        <Text style={{fontSize:13, color:"#000000"}}>For Bike</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:20,paddingHorizontal:20}}>
                    <AvailableParking
                    title="G"
                    heading="Central Shopping Centre (Garage)"
                    imgSrc={require("../../../../assets/Parking2.png")}
                    rating="4.2"
                    timer="5 min"
                    price="5.00"
                    address="123, Lincon Street, New York"
                    />
                    <AvailableParking
                    title="L"
                    heading="Central Shopping Centre (Lot)"
                    imgSrc={require("../../../../assets/Parking3.png")}
                    rating="4.2"
                    timer="5 min"
                    price="5.00"
                    address="123, Lincon Street, New York"
                    />
                    <AvailableParking
                    title="R"
                    heading="Residence Parking (Driveway)"
                    imgSrc={require("../../../../assets/Parking1.png")}
                    rating="4.2"
                    timer="5 min"
                    price="5.00"
                    address="123, Lincon Street, New York"
                    />
                </View>
            </ScrollView>
        </View>
    </View>
  )
}

export default CarOrBikeScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})