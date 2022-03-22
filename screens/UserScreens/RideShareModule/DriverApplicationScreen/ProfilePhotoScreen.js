import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView, Animated, Modal } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const ProfilePhotoScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [isOpen, setIsOpen] = useState(false);
    const [image, setImage]=  useState("");

    const photoHandler=()=>{
        ImagePicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
          }).then(image => {
            setImage(image.path)
          });
          setIsOpen(false)
    }

    const cameraHandler=()=>{
        ImagePicker.openCamera({
            width: 400,
            height: 400,
            cropping: true,
          }).then(image => {
            setImage(image.path)
          });
          setIsOpen(false);
    }

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
                    <Text style={{fontSize:20, color:"#F99026", textAlign:"center", marginLeft:20}}>Profile's Photo</Text>
                </View>
            </View>
            <View style={{marginTop:30}}>
                <Text style={{color:"#808080", fontSize:17, alignSelf:"center", textAlign:"center", maxWidth:300}}>We use residential address to send you your car emblem and driver-related supplies and goodies</Text>
                <View style={{marginTop:40}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>setIsOpen(true)}>
                        {(!image) ? 
                        <Image
                        source={require("../../../../assets/ProfilePhoto.png")}
                        style={{height:250, width:250, resizeMode:"contain", alignSelf:"center"}}
                        />
                        :
                        <Image
                        source={{uri:image}}
                        style={{height:250, width:250, borderRadius:200,resizeMode:"contain", alignSelf:"center"}}
                        />
                        }
                    </TouchableOpacity>
                </View>
                {(!isOpen) &&
                <View style={{marginBottom:20, marginTop:50}}>
                    <View style={{marginTop:30, marginBottom:100}}>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>navigation.navigate("Driver Registered", {"role": route.params.role})}
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
                }
            </View>
        </ScrollView>
        <Modal
        animationType='slide'
        transparent={true}
        visible={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        >
            <View style={styles.modal}>
                <View style={{padding:20,alignItems:"center"}}>
                    <TouchableOpacity 
                    onPress={cameraHandler}
                    activeOpacity={0.8} style={{marginVertical:20}}>
                        <Text style={{fontSize:15, color:"#F99026"}}>Take Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={photoHandler}
                    activeOpacity={0.8} style={{marginVertical:20}}>
                        <Text style={{fontSize:15, color:"#F99026"}}>Choose Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{marginVertical:20}}
                    onPress={()=>setIsOpen(false)}
                    >
                        <Text style={{fontSize:15, color:"#F99026"}}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default ProfilePhotoScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    },
    modal:{
        maxHeight:200,
        position:"absolute",
        bottom:0,
        width:width,
        backgroundColor:"white",
        height:height,
        borderTopLeftRadius:20, 
        borderTopRightRadius:20,
        elevation:5
    }
})