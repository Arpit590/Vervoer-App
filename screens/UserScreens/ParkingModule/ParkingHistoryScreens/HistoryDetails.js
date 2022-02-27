import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HistoryDetails = ({heading,title, address, rating, sessionId, rideAt, price, endAt, duration,timer, totalPrice}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row", alignItems:"flex-end", justifyContent:"space-between", borderBottomColor:"#808080", borderBottomWidth:1, paddingBottom:10}}>
          <View style={{flexDirection:"row", alignItems:"flex-start"}}>
              <View style={{alignItems:"center", justifyContent:"center",backgroundColor:"#F99026", paddingVertical:5, paddingHorizontal:10,borderRadius:5}}>
                  <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold"}}>{title}</Text>
              </View>
              <View style={{marginLeft:20}}>
                <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>{heading}</Text>
                <Text style={{fontSize:12, color:"#808080"}}>{address}</Text>
                <View style={{flexDirection:"row", alignItems:"center", marginVertical:10}}>
                    <View style={{flexDirection:"row", alignItems:"center", marginRight:10}}>
                        <Image
                        source={require("../../../../assets/timer.png")}
                        style={{height:15, width:15, resizeMode:"contain"}}
                        />
                        <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>{timer}</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Image
                        source={require("../../../../assets/rating.png")}
                        style={{height:15, width:15, resizeMode:"contain"}}
                        />
                        <Text style={{fontSize:12, color:"#000000", marginLeft:10}}>{rating}</Text>
                    </View>
                </View>
              </View>
          </View>
          <View style={{}}>
              <Text style={{fontSize:15, color:"#F99026", marginBottom:5}}>${totalPrice}</Text>
          </View>
      </View>
      <View style={{}}>
          <View style={{marginVertical:10,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <Text style={{fontSize:12, color:"#000000"}}>Session ID</Text>
              <Text style={{fontSize:12, color:"#000000"}}>{sessionId}</Text>
          </View>
          <View style={{marginVertical:10,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <Text style={{fontSize:12, color:"#000000"}}>Started At</Text>
              <Text style={{fontSize:12, color:"#000000"}}>{rideAt}</Text>
          </View>
          <View style={{marginVertical:10,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <Text style={{fontSize:12, color:"#000000"}}>End At</Text>
              <Text style={{fontSize:12, color:"#000000"}}>{endAt}</Text>
          </View>
          <View style={{marginVertical:10,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <Text style={{fontSize:12, color:"#000000"}}>Time Used</Text>
              <Text style={{fontSize:12, color:"#000000"}}>{duration}</Text>
          </View>
          <View style={{marginVertical:10,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
              <Text style={{fontSize:12, color:"#000000"}}>Price Per Hour</Text>
              <Text style={{fontSize:12, color:"#000000"}}>${price}/H</Text>
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