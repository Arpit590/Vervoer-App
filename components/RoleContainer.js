import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const RoleContainer = ({imageUrl, text, tabHandler, tab, role}) => {
  console.log('asdasd', text);

  const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={text ==="Ride Share" || text ==="Book New Ride" || text ==="Live Session" || text ==="History" || text ==="Driver Application" || text ==="Find Parking" || text ==="My QBR code" || text ==="Live Session" || text ==="Parking" || text ==="Food Delivery" || text ==="NewOrder" || text ==="Place New Order" || text ==="My Cart" || text ==="Track Order" || text==="Dry Cleaners" || text==="Locate Rider" || text==="Dry Cleaning" || text==="Driver Registration" || text==="Dry Cleaner Merchant" ? ()=>navigation.navigate(tabHandler, {"heading": tab, "role": role}) : ()=>navigation.goBack()}
    // onPress={()=>navigation.navigate(tabHandler, {"heading": tab})}
    activeOpacity={0.8} style={styles.container}>
      <Image
      source={imageUrl}
      style={{maxHeight:40, maxWidth: 40 ,minHeight:40 , minWidth:40 ,resizeMode:"contain"}}
      />
      <Text style={{fontSize:11, color:"#000000", marginTop:10, textAlign:"center"}}>{text}</Text>
    </TouchableOpacity>
  )
}

export default RoleContainer

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        elevation:5,
        borderRadius:20,
        padding:20,
        marginBottom:20,
        alignItems:"center",
        maxWidth:110,
        maxHeight:110,
        minWidth:110,
        minHeight:110
    }
})