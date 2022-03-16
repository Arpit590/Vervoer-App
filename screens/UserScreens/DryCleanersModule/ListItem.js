import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListItem = ({title, qty, price, description}) => {
  return (
    <View style={styles.container}>
      <View style={{}}>
          <Text style={{fontSize:15, color:"#000000", marginBottom:10}}>{title}</Text>
          <Text style={{fontSize:13, color:"#808080", marginBottom:10}}>{description}</Text>
          <Text style={{fontSize:15, color:"#F99026"}}>${price}</Text>
      </View>
      <Text style={{fontSize:15, color:"#000000"}}>{qty}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:"#FFFFFF",
        marginBottom:10,
        borderRadius:10,
        padding:10,
        paddingHorizontal:20
    }
})