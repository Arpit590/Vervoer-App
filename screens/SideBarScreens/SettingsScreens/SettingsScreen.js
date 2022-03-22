import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../components/Header';

const {height, width} = Dimensions.get("window");

const SettingsScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    
  return (
    <View style={styles.screen}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20, marginHorizontal:20}}>
                <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start", zIndex:-1}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{}}
                        onPress={()=>navigation.goBack()}>
                            <BackArrowIcon
                            height={'30'}
                            />
                        </TouchableOpacity>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:18, color:"#000000", marginBottom:5}}>Settings</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    }
})