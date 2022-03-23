import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import ItemContainer from './ItemContainer';
import Header from '../../../components/Header';

const {height, width} = Dimensions.get("window");

const SelectItemsScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const [click, setClick] = useState("");
    
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
                            <Text style={{fontSize:16, color:"#000000"}}>Number of Items</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:20}}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity 
                        onPress={()=>setClick("Blanket")}
                        activeOpacity={0.8} style={{backgroundColor:(click==="Blanket") ? "#F99026" :"#5E5E60", paddingHorizontal:15, paddingVertical:10, borderRadius:10}}>
                            <Text style={{fontSize:12, color:"#FFFFFF"}}>Blanket</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>setClick("Blouse/Tops")}
                        activeOpacity={0.8} style={{backgroundColor:(click==="Blouse/Tops") ? "#F99026" :"#5E5E60", marginHorizontal:10,paddingHorizontal:15, paddingVertical:10, borderRadius:10}}>
                            <Text style={{fontSize:12, color:"#FFFFFF"}}>Blouse/Tops</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>setClick("Coat")}
                        activeOpacity={0.8} style={{backgroundColor:(click==="Coat") ? "#F99026" :"#5E5E60", marginHorizontal:10,paddingHorizontal:15, paddingVertical:10, borderRadius:10}}>
                            <Text style={{fontSize:12, color:"#FFFFFF"}}>Coat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>setClick("Comforter")}
                        activeOpacity={0.8} style={{backgroundColor:(click==="Comforter") ? "#F99026" :"#5E5E60", marginHorizontal:10,paddingHorizontal:15, paddingVertical:10, borderRadius:10}}>
                            <Text style={{fontSize:12, color:"#FFFFFF"}}>Comforter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>setClick("Duvet Cover")}
                        activeOpacity={0.8} style={{backgroundColor:(click==="Duvet Cover") ? "#F99026" :"#5E5E60", marginHorizontal:10,paddingHorizontal:15, paddingVertical:10, borderRadius:10}}>
                            <Text style={{fontSize:12, color:"#FFFFFF"}}>Duvet Cover</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={{marginVertical:20, marginBottom:200}}>
                        <ItemContainer
                        title="T-Shirt"
                        price="5.00"
                        />
                        <ItemContainer
                        title="Shirt"
                        price="10.00"
                        />
                        <ItemContainer
                        title="Jeans"
                        price="15.00"
                        />
                        <ItemContainer
                        title="Short"
                        price="5.00"
                        />
                        <ItemContainer
                        title="Jacket"
                        price="25.00"
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style={{padding:10,position:"absolute", bottom:0, backgroundColor:"transparent", width:width, padding:20, zIndex:80, alignItems:"center"}}>
            <TouchableOpacity
            onPress={()=>navigation.navigate("Pickup Location")}
            activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:10, borderRadius:20, width:"80%", alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Continue</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SelectItemsScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    },
    modal:{
        flex:1,
        width:"90%",
        backgroundColor:"white",
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:height-500,
        elevation:5,
        padding:20
    },
    content:{
        width:"100%",
        marginVertical:20
    },
})