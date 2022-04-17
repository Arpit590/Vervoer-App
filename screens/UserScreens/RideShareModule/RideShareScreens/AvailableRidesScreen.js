import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated,Dimensions, ImageBackground, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"
import AvailableCar from '../../../../components/AvailableCar';
import VideoIcon from "../../../../assets/VideoIcon.svg";
import CheckBox from "react-native-check-box";
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const AvailableRidesScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value1 = useState(new Animated.Value(0))[0];
    const [click, setClick] = useState("Adult");
    const [isOpen, setIsOpen] = useState(false);
    const [filtered, setFiltered] = useState(false);

    const closeHandle=()=>{
        setIsOpen(false);
    }

    const companyHandler=()=>{
        setClick("Adult");
        Animated.timing(value1,{
            toValue:0,
            duration:2000,
            useNativeDriver:false
        }).start()
    }

    const free2MoveHandler=()=>{
        setClick("Child");
        Animated.timing(value1,{
            toValue:width-300,
            duration:2000,
            useNativeDriver:false
        }).start()
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
                            <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Book New Ride</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=>navigation.navigate("Video Call")}
                        activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:10, borderRadius:80, height:30, width:30, alignItems:"center", justifyContent:"center", marginRight:20}}>
                            <VideoIcon
                            height={'40'}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>setIsOpen(true)}
                        activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:10, borderRadius:10, flexDirection:"row", alignItems:"center"}}>
                            <Image
                            source={require("../../../../assets/filter.png")}
                            style={{height:15, width:15, resizeMode:"contain"}}
                            />
                            <Text style={{fontSize:12, color:"#FFFFFF", fontWeight:"bold", marginLeft:10}}>FILTERS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
        {(!isOpen) &&
        <View style={{position:"absolute", bottom:0}}>
            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026",padding:10, marginRight:5,borderRadius:30, alignSelf:"flex-end"}}>
                <Image
                source={require("../../../../assets/currentlocation.png")}
                style={{height:20, width:20, resizeMode:"contain"}}
                />
            </TouchableOpacity>
            <View style={{maxHeight:400,zIndex:20,alignSelf:"center",backgroundColor:"#FFFFFF", padding:10, borderRadius:20, marginTop:20, width:width}}>
                <View style={{elevation:5,marginVertical:20, flexDirection:"row", alignItems:"center", alignSelf:"center", backgroundColor:"#FFFFFF", borderRadius:30, paddingHorizontal:10, paddingVertical:5}}>
                    <TouchableOpacity activeOpacity={0.8} 
                    onPress={companyHandler}
                    style={{backgroundColor:(click==="Adult") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:30, borderRadius:30}}>
                        <Text style={{fontSize:13, color:"#000000"}}>Adult</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={free2MoveHandler}
                    activeOpacity={0.8} style={{marginLeft:10,backgroundColor:(click==="Child") ? "#FDF1E5" : "transparent", paddingVertical:8, paddingHorizontal:30, borderRadius:30}}>
                        <Text style={{fontSize:13, color:"#000000"}}>Child</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:20}}>
                    <AvailableCar
                    heading="Economy"
                    carName="Sedan"
                    imgSrc={require("../../../../assets/Cab-1.png")}
                    price="150.00"
                    description="Hatchbacks, Affordable"
                    noOfPersons="2"
                    time="19:30"
                    />
                    <AvailableCar
                    heading="Premier"
                    carName="Sedan"
                    imgSrc={require("../../../../assets/Cab-1.png")}
                    price="200.00"
                    description="Sedans, Top-rated drivers"
                    noOfPersons="2"
                    time="19:35"
                    />
                    <AvailableCar
                    heading="Economy"
                    carName="Sedan"
                    imgSrc={require("../../../../assets/Cab-1.png")}
                    price="150.00"
                    description="Hatchbacks, Affordable"
                    noOfPersons="2"
                    time="19:30"
                    />
                    <AvailableCar
                    heading="Economy"
                    carName="Sedan"
                    imgSrc={require("../../../../assets/Cab-1.png")}
                    price="150.00"
                    description="Hatchbacks, Affordable"
                    noOfPersons="2"
                    time="19:30"
                    />
                </ScrollView>
            </View>
        </View>
        }
        <Modal
        animationType={"slide"}
        onRequestClose={closeHandle}
        transparent={true}
        visible={isOpen}>
            <View style={{alignItems:"center", width:"100%", flex:1, justifyContent:"center"}}>
                <View style={styles.modal}>
                    <View style={{}}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>setIsOpen(false)}>
                            <AntDesign
                            name='close'
                            size={28}
                            color="#000000"
                            />
                        </TouchableOpacity>
                        <View style={{marginTop:20}}>
                            <View style={{borderBottomColor:"#808080", borderBottomWidth:1}}>
                                <Text style={{fontSize:18, color:"#000000", fontWeight:"bold", marginBottom:10}}>FILTERS</Text>
                            </View>
                            <View style={{marginVertical:20}}>
                                <Text style={{fontSize:17, color:"#000000"}}>Ride Type</Text>
                                <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:10}}>
                                    <CheckBox
                                    checkedCheckBoxColor='#27AE60'
                                    uncheckedCheckBoxColor='#5E5E60'
                                    disabled={false}
                                    isChecked={filtered}
                                    onClick={()=>setFiltered(prevCheck => !prevCheck)}
                                    />
                                    <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Lorem Ipsum Dolor sit</Text>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center",borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:10}}>
                                    <CheckBox
                                    checkedCheckBoxColor='#27AE60'
                                    uncheckedCheckBoxColor='#5E5E60'
                                    disabled={false}
                                    isChecked={filtered}
                                    onClick={()=>setFiltered(prevCheck => !prevCheck)}
                                    />
                                    <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Lorem Ipsum Dolor sit</Text>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:10}}>
                                    <CheckBox
                                    checkedCheckBoxColor='#27AE60'
                                    uncheckedCheckBoxColor='#5E5E60'
                                    disabled={false}
                                    isChecked={filtered}
                                    onClick={()=>setFiltered(prevCheck => !prevCheck)}
                                    />
                                    <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Lorem Ipsum Dolor sit</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:20}}>
                            <Text style={{fontSize:17, color:"#000000"}}>Ride Type</Text>
                            <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:10}}>
                                <CheckBox
                                checkedCheckBoxColor='#27AE60'
                                uncheckedCheckBoxColor='#5E5E60'
                                disabled={false}
                                isChecked={filtered}
                                onClick={()=>setFiltered(prevCheck => !prevCheck)}
                                />
                                <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Lorem Ipsum Dolor sit</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center",borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:10}}>
                                <CheckBox
                                checkedCheckBoxColor='#27AE60'
                                uncheckedCheckBoxColor='#5E5E60'
                                disabled={false}
                                isChecked={filtered}
                                onClick={()=>setFiltered(prevCheck => !prevCheck)}
                                />
                                <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Lorem Ipsum Dolor sit</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:10}}>
                                <CheckBox
                                checkedCheckBoxColor='#27AE60'
                                uncheckedCheckBoxColor='#5E5E60'
                                disabled={false}
                                isChecked={filtered}
                                onClick={()=>setFiltered(prevCheck => !prevCheck)}
                                />
                                <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Lorem Ipsum Dolor sit</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default AvailableRidesScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    },
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:height,
        elevation:5,
        padding:20
    },
    content:{
        width:"100%",
        marginVertical:20
    },
})