import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import ItemContainer from './ItemContainer';
import Header from '../../../components/Header';

const {height, width} = Dimensions.get("window");

const OrderSummaryScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();

    
  return (
    <View style={styles.screen}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20, marginHorizontal:20}}>
                <View style={{flexDirection:"row" ,alignItems:"flex-start", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{}}
                        onPress={()=>navigation.goBack()}>
                            <BackArrowIcon
                            height={'30'}
                            />
                        </TouchableOpacity>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:16, color:"#000000"}}>Order Summary</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:15, marginBottom:30}}>
                    <Text style={{fontSize:18, color:"#808080"}}>Order Sub-total</Text>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Order History")}>
                        <Text style={{fontSize:16, color:"#F99026"}}>ORDER HISTORY</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginBottom:300}}>
                    <ItemContainer
                    title="T-Shirt"
                    price="5.00"
                    />
                    <ItemContainer
                    title="Shirt"
                    price="10.00"
                    />
                    <ItemContainer
                    title="Short"
                    price="15.00"
                    />
                    <ItemContainer
                    title="Jacket"
                    price="25.00"
                    />
                </View>
            </View>
        </ScrollView>
        <View style={{position:"absolute", bottom:0, backgroundColor:"#FFFFFF",width:width,zIndex:80, padding:25}}>
            <View style={{}}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:20}}>
                    <Text style={{fontSize:15, color:"#808080"}}>Sub Total</Text>
                    <Text style={{fontSize:15, color:"#000000"}}>$55.00</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                    <Text style={{fontSize:15, color:"#808080"}}>Fees</Text>
                    <Text style={{fontSize:15, color:"#000000"}}>$15.00</Text>
                </View>
                <Text style={{borderBottomColor:"#5E5E60", borderBottomWidth:1, marginBottom:20}}></Text>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:20}}>
                    <Text style={{fontSize:18, color:"#F99026"}}>Total Payment (*Approx)</Text>
                    <Text style={{fontSize:18, color:"#F99026"}}>$70.00</Text>
                </View>
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Order Payment")}
            activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:20, borderRadius:30, width:"80%", alignSelf:"center",alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Place Your Order</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default OrderSummaryScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})