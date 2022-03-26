import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView, Animated, Modal } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const ScannerScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();

  return (
    <View style={styles.screen}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:10}}>
            <View style={{padding:20, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <View style={{alignItems:"center",flexDirection: 'row'}}>
                    <TouchableOpacity activeOpacity={0.8}
                    style={{zIndex:100,}}
                    onPress={()=>navigation.goBack()}>
                        <BackArrowIcon
                        height={'30'}
                        />
                    </TouchableOpacity>
                    <Text style={{fontSize:18, color:"#000000", textAlign:"center", marginLeft:20}}>{route.params.heading}</Text>
                </View>
                <Text style={{fontSize:20, color:"#F99026", textAlign:"center", marginLeft:20}}>#DC58223</Text>
            </View>
            <View style={{marginTop:30}}>
                <View style={{marginTop:40}}>
                    <View> 
                        <Image
                        source={require("../../../../assets/Scanner.png")}
                        style={{height:300, width:300,resizeMode:"contain", alignSelf:"center"}}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.8}
        onPress={()=>navigation.goBack()}
        style={{position:"absolute", bottom:"5%",width:"90%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:15, borderRadius:100}}>
            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Done</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ScannerScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})