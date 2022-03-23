import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../../assets/Icon metro-menu.svg";
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const BookParkingScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    
  return (
    <View style={styles.screen}>
        <ImageBackground
        source={require("../../../../assets/Map4.png")}
        style={{width:width, height:height, zIndex:-1}}
        />
        <Image
        source={require("../../../../assets/Circle.png")}
        style={{height:300, width:300, resizeMode:"contain", zIndex:5, position:"absolute", top:"20%", alignSelf:"center"}}
        />
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
                        <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>{route.params.heading}</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={{alignItems:"center", alignSelf:"flex-end", position:"absolute", right:"3%", top:"35%"}}>
            <TouchableOpacity style={{backgroundColor:"#F99026", padding:10, borderRadius:30, alignItems:"center", justifyContent:"center"}}>
                <Image
                source={require("../../../../assets/currentlocation.png")}
                style={{height:20, width:20, resizeMode:"contain"}}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{elevation:5,marginTop:10,backgroundColor:"#FFFFFF", padding:10, borderRadius:30, alignItems:"center", justifyContent:"center"}}>
                <Image
                source={require("../../../../assets/Code.png")}
                style={{height:15, width:15, resizeMode:"contain"}}
                />
            </TouchableOpacity>
        </View>
        <View style={{position:"absolute", bottom:"3%",alignSelf:"center", backgroundColor:"#FFFFFF", padding:10, borderRadius:10, marginTop:20, width:width-40}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginTop:20,paddingHorizontal:20}}>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:12, color:"#000000", marginBottom:10}}>Location</Text>
                        <View style={{flexDirection:"row", alignItems:"center", backgroundColor:"#FFFFFF", borderBottomColor:"#808080", borderBottomWidth:1, padding:5, borderRadius:10}}>
                            <View style={{backgroundColor:"#FDF1E5", padding:5, borderRadius:30, alignItems:"center"}}>
                                <Image
                                source={require("../../../../assets/location.png")}
                                style={{height:30, width:30, resizeMode:"contain"}}
                                />
                            </View>
                            <TextInput
                            placeholder='Change Location'
                            placeholderTextColor="#808080"
                            keyboardType='default'
                            style={{fontSize:13, color:"#000000", marginLeft:10}}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Pick Parking")}
                        activeOpacity={0.8} style={{ marginVertical: 10, width: "90%", alignSelf: "center", backgroundColor: "#F99026", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 100 }}>
                        <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "500", textAlign: "center" }}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </View>
  )
}

export default BookParkingScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})