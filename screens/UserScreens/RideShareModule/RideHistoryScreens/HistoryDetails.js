import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HistoryDetails = ({title, carNo, rating, sessionId, rideAt, totalPrice, tip, imgSrc}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", borderBottomColor:"#808080", borderBottomWidth:1}}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
              <Image
              source={imgSrc}
              style={{height:80, width:80, resizeMode:"contain"}}
              />
              <View style={{marginLeft:20}}>
                  <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>{title}</Text>
                  <Text style={{fontSize:13, color:"#000000"}}>{carNo}</Text>
              </View>
          </View>
          <View style={{}}>
              <Text style={{fontSize:12, color:"#000000", marginBottom:5}}>Hatchback</Text>
              <View style={{flexDirection:"row", alignItems:"center"}}>
                  <Image
                  source={require("../../../../assets/rating.png")}
                  style={{height:15, width:15, resizeMode:"contain"}}
                  />
                  <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>{rating}</Text>
              </View>
          </View>
      </View>
      <View style={{}}>
          <View style={{marginVertical:10,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <Text style={{fontSize:12, color:"#000000"}}>Session ID</Text>
              <Text style={{fontSize:12, color:"#000000"}}>{sessionId}</Text>
          </View>
          <View style={{marginVertical:10,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <Text style={{fontSize:12, color:"#000000"}}>Ride At</Text>
              <Text style={{fontSize:12, color:"#000000"}}>{rideAt}</Text>
          </View>
          <View style={{marginVertical:10,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <Text style={{fontSize:12, color:"#000000"}}>Total Price</Text>
              <Text style={{fontSize:12, color:"#000000"}}>${totalPrice}</Text>
          </View>
          <View style={{marginVertical:10,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <Text style={{fontSize:12, color:"#000000"}}>Tip</Text>
              <Text style={{fontSize:12, color:"#000000"}}>${tip}</Text>
          </View>
          <View style={{marginVertical:10,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <Text style={{fontSize:12, color:"#000000"}}>Total Payment</Text>
              <Text style={{fontSize:12, color:"#F99026"}}>${totalPrice + tip}</Text>
          </View>
      </View>
    </View>
  )
}

export default HistoryDetails

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        padding:10,
        borderRadius:10,
        marginBottom:20
    }
})