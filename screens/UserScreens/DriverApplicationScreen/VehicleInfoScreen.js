import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import MenuIcon from "../../../assets/Icon metro-menu.svg";

const {height, width} = Dimensions.get("window");

const VehicleInfoScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const value = useState(new Animated.Value(-500))[0];
    const [menu, setMenu] = useState(false);
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [insuranceNumber, setInsuranceNumber] = useState("");
    const [companyName, setCompanyName] = useState("");

    const openHandler=()=>{
        setMenu(true);
        Animated.timing(value,{
            toValue:0,
            duration:1000,
            useNativeDriver:false
        }).start()
    }

    const closeHandler=()=>{
        setMenu(false);
        Animated.timing(value,{
            toValue:-500,
            duration:1000,
            useNativeDriver:false
        }).start()
    }

  return (
    <View style={styles.screen}>
        <View style={styles.header}>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity activeOpacity={0.8} onPress={openHandler}>
                    <Image
                    source={require("../../../assets/Avatar.png")}
                    style={{height:40, width:40, borderRadius:50}}
                    />
                    <View style={{backgroundColor:"#FFFFFF",height:20, width:20, borderRadius:50, position:"absolute", bottom:0, left:0, alignSelf:"center", alignItems:"center", justifyContent:"center"}}>
                        <MenuIcon
                        height={'30'}
                        />
                    </View>
                </TouchableOpacity>
                <Image
                source={require("../../../assets/Heading.png")}
                style={{height:100, width:100, resizeMode:"contain", marginLeft:20}}
                />
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity activeOpacity={0.8} style={{}}>
                <   Image
                    source={require("../../../assets/ic-search.png")}
                    style={{height:28, width:28, resizeMode:"contain"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{marginHorizontal:20}}>
                    <Image
                    source={require("../../../assets/ic-wallet.png")}
                    style={{height:28, width:28, resizeMode:"contain"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                    <Image
                    source={require("../../../assets/ic-notification.png")}
                    style={{height:28, width:28, resizeMode:"contain"}}
                    />
                    <View style={{backgroundColor:"#F99026", borderRadius:50, height:15, width:15, position:"absolute", right:0, alignItems:"center", justifyContent:"center"}}>
                        <Text style={{color:"#FFFFFF", fontSize:8}}>2</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
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
                <Text style={{color:"#000000", fontSize:20, textAlign:"center"}}>Enter your Vehicle Info</Text>
                <Text style={{color:"#808080", fontSize:14, textAlign:"center", maxWidth:400, marginVertical:20, alignSelf:"center"}}>Drive with your personal vehicle</Text>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Year</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >2021</Text>
                        <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                            <MaterialIcons
                            name="keyboard-arrow-down"
                            size={20}
                            color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Car Brand</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >BMW</Text>
                        <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                            <MaterialIcons
                            name="keyboard-arrow-down"
                            size={20}
                            color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Moder</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >X6</Text>
                        <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                            <MaterialIcons
                            name="keyboard-arrow-down"
                            size={20}
                            color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Doors</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >4 Doors</Text>
                        <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                            <MaterialIcons
                            name="keyboard-arrow-down"
                            size={20}
                            color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Color</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >Red</Text>
                        <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                            <MaterialIcons
                            name="keyboard-arrow-down"
                            size={20}
                            color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Seats</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >Leather/Synthetic</Text>
                        <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                            <MaterialIcons
                            name="keyboard-arrow-down"
                            size={20}
                            color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <View style={{}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Number Of Seats</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-250}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >6
                            </Text>
                            <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                                <MaterialIcons
                                name="keyboard-arrow-down"
                                size={20}
                                color="#808080"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Number Of Boosters</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-250}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >2</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                                <MaterialIcons
                                name="keyboard-arrow-down"
                                size={20}
                                color="#808080"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{marginVertical:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Vehicle's Vin Number</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Vin Number'
                        placeholderTextColor="#000000"
                        value={vehicleNumber}
                        onChangeText={()=>setVehicleNumber(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Registration</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Registration Number'
                        placeholderTextColor="#000000"
                        value={registrationNumber}
                        onChangeText={()=>setRegistrationNumber(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Upload Vehicle's Inspection</Text>
                    <View style={{width:width-40}}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center",justifyContent:"center",backgroundColor:"whitesmoke", borderRadius:20, height:130, width:80}}>
                                <AntDesign
                                name="plus"
                                size={24}
                                color="#F99026"
                                />
                            </TouchableOpacity>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Upload Driver's Insurance</Text>
                    <View style={{width:width-40}}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center",justifyContent:"center",backgroundColor:"whitesmoke", borderRadius:20, height:130, width:80}}>
                                <AntDesign
                                name="plus"
                                size={24}
                                color="#F99026"
                                />
                            </TouchableOpacity>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Local Certification</Text>
                    <View style={{width:width-40}}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center",justifyContent:"center",backgroundColor:"whitesmoke", borderRadius:20, height:130, width:80}}>
                                <AntDesign
                                name="plus"
                                size={24}
                                color="#F99026"
                                />
                            </TouchableOpacity>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Insurance Provider</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Company Name'
                        placeholderTextColor="#000000"
                        value={companyName}
                        onChangeText={()=>setCompanyName(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Insurance Number</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='#165465646'
                        placeholderTextColor="#000000"
                        value={insuranceNumber}
                        onChangeText={()=>setInsuranceNumber(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginTop:30, marginBottom:100}}>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Personal Info")}
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
        <Animated.View style={{backgroundColor:"#FFFFFF",position:"absolute",top:0,left:value, height:height, width: width-80, zIndex:100, padding:20, paddingHorizontal:0}}>
            <View style={{paddingHorizontal:20, display: menu ? "flex" : "none"}}>
                <TouchableOpacity 
                activeOpacity={0.8} onPress={closeHandler}>
                    <AntDesign
                    name="close"
                    color="#F99026"
                    size={24}
                    />
                </TouchableOpacity>
                <View style={{marginVertical:20}}>
                    <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center"}}>
                        <Image
                        source={require("../../../assets/Avatar.png")}
                        style={{height:80, width:80, resizeMode:"contain"}}
                        />
                        <Text style={{marginTop:10, fontSize:15, color:"#000000"}}>John Doe</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:20, marginVertical:30}}>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Home.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#F99026", fontSize:15, marginLeft:30}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Profile.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>My Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/FaceCard.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Face Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Payment.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Payment Methods</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Tips.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Tips and Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Setting.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Contact.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Contact Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../assets/Password.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Reset Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginTop:60}}>
                        <Image
                        source={require("../../../assets/Logout.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Logout</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Animated.View>
    </View>
  )
}

export default VehicleInfoScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    },
    header:{
        backgroundColor:"#FFFFFF",
        borderBottomLeftRadius:30, 
        borderBottomRightRadius:30,
        paddingHorizontal:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        elevation:5
    }
})