import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const AccountInfoScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [routingNo, setRoutingNo] = useState("");
    const [accountNo, setAccountNo] = useState("");
    const [accountHolder, setAccountHolder] = useState("");

  return (
    <View style={styles.screen}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:10}}>
            <View style={{padding:20}}>
            <View style={{alignItems:"center",flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={0.8}
                style={{zIndex:100,}}
                onPress={()=>navigation.goBack()}>
                    <BackArrowIcon
                    height={'30'}
                    />
                </TouchableOpacity>
                <Text style={{fontSize:20, color:"#F99026", textAlign:"center", marginLeft:20}}>Registration</Text>
            </View>
            <View style={{marginTop:30}}>
                <Text style={{color:"#000000", fontSize:20, textAlign:"center", marginBottom:10}}>Upload Driver's Credit Card</Text>
                <View style={{height:200,borderWidth:1, borderColor:"#808080", padding:30, borderRadius:20, alignItems:"center", justifyContent:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center"}}>
                        <Image
                        source={require("../../../../assets/Camera.png")}
                        style={{height:50, width:50, resizeMode:"contain"}}
                        />
                        <Text style={{fontSize:14, color:"#808080", marginTop:10}}>Upload Credit Card</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:30}}>
                    <Text style={{fontSize:17, color:"#000000", marginBottom:20}}>Account Information</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#808080", fontSize:15}}
                        >Select Bank</Text>
                        <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                            <MaterialIcons
                            name="keyboard-arrow-down"
                            size={20}
                            color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Routing Number'
                        placeholderTextColor="#808080"
                        value={routingNo}
                        onChangeText={()=>setRoutingNo(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Account Number'
                        placeholderTextColor="#808080"
                        value={accountNo}
                        onChangeText={()=>setAccountNo(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Account Holder Name'
                        placeholderTextColor="#808080"
                        value={accountHolder}
                        onChangeText={()=>setAccountHolder(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginTop:30, marginBottom:100}}>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Attestation", {"role": route.params.role})}
                    style={{width:"90%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:15, borderRadius:100}}>
                        <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Continue</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row", alignItems:"center", marginTop:10, justifyContent:"center"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>navigation.goBack()}
                        style={{width:"40%",alignSelf:"center", backgroundColor:"#5E5E60", paddingHorizontal:20, paddingVertical:15, borderRadius:100}}>
                            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>navigation.goBack()}
                        style={{width:"40%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, marginLeft:30,paddingVertical:15, borderRadius:100}}>
                            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          </View>
      </ScrollView>
    </View>
  )
}

export default AccountInfoScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})