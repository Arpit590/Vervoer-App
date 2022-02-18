import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get("window");

const RoleScreen = ({imageUrl, text, role}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.8}
    onPress={()=>navigation.navigate("Role Home", {"role": role})}
    style={styles.container}>
        <View style={{backgroundColor:(text==="User") ? "#F99026" : "transparent", padding:(text==="User") ? 15 : 0, borderRadius:50, alignItems:"center"}}>
            <Image
            source={imageUrl}
            style={{height:(text==="User") ? 30 : 40, width:(text==="User") ? 30 : 40, resizeMode:"contain"}}
            />
        </View>
        <Text style={{fontSize:16, color:"#000000", marginTop:10}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default RoleScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        paddingVertical:30,
        paddingHorizontal:40, 
        width:width-40,
        borderRadius:20,
        elevation:5,
        alignItems:"center",
        marginBottom:20
    }
})