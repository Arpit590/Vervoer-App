import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, Animated, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import Header from '../../../../components/Header';
import {Rating} from "react-native-ratings";

const {height, width} = Dimensions.get("window");

const SessionFininshedScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const [click, setClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    
  return (
    <View style={styles.screen}>
        <View style={{}}>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                <View style={{zIndex:10,flexDirection:"row",alignItems:"center", justifyContent:"space-between",marginTop:20, paddingHorizontal:20}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{}}
                        onPress={()=>navigation.goBack()}>
                            <BackArrowIcon
                            height={'30'}
                            />
                        </TouchableOpacity>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Session Finished</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Text style={{fontSize:15, color:"#F99026"}}>#RS58223</Text>
                    </View>
                </View>
                <View style={{margin:20}}>
                    <View style={{alignItems:"center", alignSelf:"center", paddingBottom:20, borderBottomColor:"#0000000", borderBottomWidth:1, width:"80%"}}>
                        <Image
                        source={require("../../../../assets/img_success.png")}
                        style={{height:80, width:80, resizeMode:"contain"}}
                        />
                        <Text style={{fontSize:18, color:"#F99026", marginVertical:10}}>Done</Text>
                        <Text style={{fontSize:14, color:"#000000"}}>We hope you enjoyed our Services.</Text>
                    </View>
                    <View style={{alignItems:"center", alignSelf:"center", marginVertical:15}}>
                        <Image
                        source={require("../../../../assets/SessionProfile.png")}
                        style={{height:100, width:100, resizeMode:"contain"}}
                        />
                        <Text style={{fontSize:16, color:"#000000", marginTop:10}}>Jason Anderson</Text>
                        <Text style={{fontSize:12, color:"#000000", marginTop:10}}>Give your Review & Ratings to your driver</Text>
                        <Rating
                        type="custom"
                        onFinishRating={(rating)=>console.log(rating)}
                        ratingCount={5}
                        ratingBackgroundColor="transparent"
                        style={{backgroundColor:"transparent", marginTop:20}}
                        ratingColor="#F99026"
                        />
                    </View>
                </View>
                <View style={{borderColor:"#808080", borderWidth:1, borderRadius:10, backgroundColor:"#FFFFFF", margin:20, height:200, padding:10}}>
                    <TextInput
                    placeholder='Write Your Review...'
                    placeholderTextColor="#808080"
                    multiline={true}
                    keyboardType='default'
                    style={{fontSize:15, color:"#000000"}}
                    />
                </View>
                <TouchableOpacity 
                onPress={()=>setIsOpen(true)}
                activeOpacity={0.8} style={{marginBottom:200,width:width-100, alignSelf:"center", alignItems:"center", padding:15, borderRadius:40, backgroundColor:"#F99026"}}>
                    <Text style={{fontSize:17, color:"#FFFFFF"}}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
        <Modal
        animationType={"slide"}
        onRequestClose={()=>setIsOpen(false)}
        transparent={true}
        visible={isOpen}>
            <View style={{alignItems:"center", width:"100%", flex:1, justifyContent:"center"}}>
                <View style={styles.modal}>
                    <View style={styles.container}>
                        <Image
                        source={require("../../../../assets/img_success.png")}
                        style={{height:100, width:100, resizeMode:"contain"}}
                        />
                        <Text style={{fontSize:20, fontWeight:"400",color:"#F99026", marginTop:20, marginBottom:40}}>Thank You For your Feedback</Text>
                        <Text style={{fontSize:17, color:"#808080", marginBottom:30}}>We appreciate your review.</Text>
                        <TouchableOpacity 
                        onPress={()=>{
                            navigation.navigate("Available Rides");
                            setIsOpen(false);
                        }}
                        activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:15, paddingHorizontal:30, width:width-100, borderRadius:30, alignItems:"center", alignSelf:"center", marginTop:20}}>
                            <Text style={{fontSize:15, color:"#FFFFFF"}}>Explore Other Cars</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{
                            navigation.navigate("Home");
                            setIsOpen(false)
                        }}
                        activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:15, paddingHorizontal:30, width:width-100, borderRadius:30, alignItems:"center", alignSelf:"center", marginTop:20}}>
                            <Text style={{fontSize:15, color:"#FFFFFF"}}>Go to Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default SessionFininshedScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    },
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"transparent",
        opacity: 1,
        zIndex:-1,
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:height,
        elevation:5,
        padding:20
    },
    container:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#FFFFFF",
        borderRadius:20,
        padding:20,
        height:500,
        zIndex:100,
        top: "30%",
        width:width-70, 
        alignSelf:"center"
    }
})