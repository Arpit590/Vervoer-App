import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated,Dimensions, ImageBackground, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const VideoCallScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value1 = useState(new Animated.Value(0))[0];
    const [isOpen, setIsOpen] = useState(false);

    const closeHandle=()=>{
        setIsOpen(false);
    }
    
  return (
    <View style={styles.screen}>
        <View style={{}}>
        <Image
        source={require("../../../../assets/Map3.png")}
        style={{width:width, height:height, zIndex:-1, resizeMode:"cover"}}
        />
        <Image
        source={require("../../../../assets/cars.png")}
        style={{height:250, width:250, resizeMode:"contain", zIndex:5, position:"absolute", top:"20%", alignSelf:"center"}}
        />
        </View>
        <View style={{position:"absolute",top:0,width:"100%"}}>
            <Header map={true}/>
            <View style={{marginTop:100}}>
                <View style={{zIndex:10,flexDirection:"row",alignItems:"flex-start", justifyContent:"space-between",marginTop:20, paddingHorizontal:20}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{}}
                        onPress={()=>navigation.goBack()}>
                            <BackArrowIcon
                            height={'30'}
                            />
                        </TouchableOpacity>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:16, color:"#000000"}}>Video Share</Text>
                        </View>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Text style={{fontSize:16, color:"#F99026", marginRight:10}}>Starting Recording...</Text>
                            <TouchableOpacity 
                            onPress={()=>setIsOpen(true)}
                            activeOpacity={0.8} style={{backgroundColor:"#FFFFFF", borderColor:"#000000", borderWidth:1,padding:8, borderRadius:100, alignItems:"center"}}>
                                <View style={{padding:8, borderRadius:50, backgroundColor:"red"}}></View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>setIsOpen(true)}
                        style={{marginTop:10, alignSelf:"flex-end"}}
                        > 
                            <Image
                            source={require("../../../../assets/Video2.png")}
                            style={{height:170, width:170, resizeMode:"contain"}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={{backgroundColor:"#5E5E60", padding:5, borderRadius:50, marginTop:10, alignSelf:"flex-end"}}
                        activeOpacity={0.8}>
                            <AntDesign
                            name="close"
                            size={24}
                            color="#FFFFFF"
                            />
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
        </View>
        <View style={{position:"absolute", bottom:0}}>
            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026",padding:10, marginRight:5,borderRadius:30, alignSelf:"flex-end"}}>
                <Image
                source={require("../../../../assets/currentlocation.png")}
                style={{height:20, width:20, resizeMode:"contain"}}
                />
            </TouchableOpacity>
            <View
            style={{marginTop:20,padding:20, backgroundColor:"#FFFFFF", borderRadius:10, width:width, height:height-550}}>
            <View style={{padding:10}}>
                <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between",}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <View style={{backgroundColor:"whitesmoke", borderRadius:50, borderWidth:1, borderColor:"green", padding:5}}>
                            <View style={{backgroundColor:"green", padding:5, borderRadius:50}}></View>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Pickup</Text>
                            <Text style={{fontSize:12, color:"#808080"}}>123, Lincoln Street, New York</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:20,flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between",}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <View style={{backgroundColor:"whitesmoke", borderRadius:50, borderWidth:1, borderColor:"red", padding:5}}>
                            <View style={{backgroundColor:"red", padding:5, borderRadius:50}}></View>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Drop Off</Text>
                            <Text style={{fontSize:12, color:"#808080"}}>30 Lincoln St. New Rochelle, new York</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../../assets/droplocation.png")}
                    style={{height:15, width:15, resizeMode:"contain"}}
                    />
                    <Text style={{marginLeft:8, fontSize:12, color:"#808080"}}>30 miles</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../../assets/timer.png")}
                    style={{height:15, width:15, resizeMode:"contain"}}
                    />
                    <Text style={{marginLeft:8, fontSize:12, color:"#808080"}}>50 min</Text>
                </View>
                <Text style={{fontSize:14, color:"#F99026"}}>$ 22.30</Text>
            </View>
        </View>
        </View>
        <Modal
        animationType={"slide"}
        onRequestClose={closeHandle}
        transparent={true}
        visible={isOpen}>
            <View style={{alignItems:"center", width:"100%", flex:1, justifyContent:"center"}}>
                <View style={styles.modal}>
                    <View style={{alignItems:"center", marginVertical:100}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{alignSelf:"flex-end", backgroundColor:"#5E5E60", padding:5, borderRadius:50}}
                        onPress={()=>setIsOpen(false)}>
                            <AntDesign
                            name='close'
                            size={28}
                            color="#FFFFFF"
                            />
                        </TouchableOpacity>
                        <Image
                        source={require("../../../../assets/Video1.png")}
                        style={{height:500, width:500, resizeMode:"contain", marginTop:15}}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default VideoCallScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    },
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"whitesmoke",
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:height,
        elevation:5,
        padding:20
    }
})