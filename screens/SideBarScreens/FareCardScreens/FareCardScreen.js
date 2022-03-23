import { ScrollView, StyleSheet, Text, TouchableOpacity, Switch, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../components/Header';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"

const { height, width } = Dimensions.get("window");

const FareCardScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginHorizontal: 20}}>
                    <View style={{ zIndex: 10, flexDirection: "column", marginTop: 20, }}>
                        <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", alignItems: "flex-start", zIndex: -1 }}>
                                <TouchableOpacity activeOpacity={0.8}
                                    style={{}}
                                    onPress={() => navigation.goBack()}>
                                    <BackArrowIcon
                                        height={'30'}
                                    />
                                </TouchableOpacity>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 18, color: "#000000", marginBottom: 5 }}>Fare Card</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginVertical:15,backgroundColor:"#FFFFFF", padding:20, borderRadius:10}}>
                            <Text style={{fontSize:17, color:"#000000", marginBottom:10}}>Fare Card Information</Text>
                            <View style={{marginBottom:10}}>
                                <Text style={{fontSize:12, color:"#808080", marginBottom:5}}>Card Holder Name</Text>
                                <Text style={{fontSize:15, color:"#000000"}}>John Doe</Text>
                            </View>
                            <View style={{marginBottom:10}}>
                                <Text style={{fontSize:12, color:"#808080", marginBottom:5}}>Card Number</Text>
                                <Text style={{fontSize:15, color:"#000000"}}>6565 6565 6565 8487</Text>
                            </View>
                            <View style={{}}>
                                <Text style={{fontSize:12, color:"#808080", marginBottom:5}}>Expires MM/YY</Text>
                                <Text style={{fontSize:15, color:"#000000"}}>MAY 2025</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", alignSelf:"center"}}>
                            <Image
                            source={require("../../../assets/FareCard1.png")}
                            style={{height:200, width:200, resizeMode:"contain"}}
                            />
                            <Image
                            source={require("../../../assets/FareCard2.png")}
                            style={{height:200, width:200, resizeMode:"contain"}}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", alignSelf:"center", position:"absolute", bottom:"3%"}}>
                <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:17, borderRadius:30, width:"45%", alignItems:"center"}}>
                    <Text style={{fontSize:15, color:"#FFFFFF"}}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:17, borderRadius:30, width:"45%", alignItems:"center"}}>
                    <Text style={{fontSize:17, color:"#FFFFFF"}}>Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FareCardScreen;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "whitesmoke",
        flex: 1
    }
})