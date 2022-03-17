import { StyleSheet, Text, View, Image, Modal, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import {useNavigation, useRoute} from "@react-navigation/native";

const {width, height} = Dimensions.get("window");

const DriverRegisteredScreen = () => {
  
  const navigation = useNavigation();
  const [open, setOpen] = useState(true);
  const route = useRoute();
  
  return (
    <View style={styles.screen}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={open}
        onRequestClose={()=>setOpen(false)}
        >
            <View style={styles.modal}>
                <View style={{padding:20,alignItems:"center"}}>
                    <Image
                    source={require("../../../../assets/img_success.png")}
                    style={{height:80, width:80, resizeMode:"contain"}}
                    />
                    <Text style={{fontSize:20, color:"#000000", marginVertical:20, textAlign:"center", maxWidth:200}}>Submited Successfully</Text>
                    <Text style={{fontSize:15, color:"#808080", marginBottom:20, textAlign:"center"}}>Your Registration Is Completed.</Text>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>{
                      if(route.params.role==="Users"){
                        navigation.navigate("Ride Share", {"heading": "Ride Share"})
                      }else{
                        navigation.navigate("Role Home", {"role": route.params.role})
                      }
                    }}
                    style={{width:"60%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:15, borderRadius:100}}>
                        <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default DriverRegisteredScreen

const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:"#000000",
    opacity:0.6,
    zIndex:-1
  },
  modal:{
    position:"absolute",
    maxHeight:400,
    width:width-100,
    alignSelf:"center",
    justifyContent:"center",
    top:"30%",
    backgroundColor:"white",
    borderRadius:20,
    elevation:5
}
})