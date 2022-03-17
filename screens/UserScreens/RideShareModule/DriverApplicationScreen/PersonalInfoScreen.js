import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import MenuIcon from "../../../../assets/Icon metro-menu.svg";
import CheckBox from "react-native-check-box";

const {height, width} = Dimensions.get("window");

const PersonalInfoScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const value = useState(new Animated.Value(-500))[0];
    const [menu, setMenu] = useState(false);
    const [driverLicenceNo, setDriverLicenceNo] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]=useState("");
    const [middleName, setMiddleName] = useState("");
    const [socialSecurityNo, setSocialSecurityNo] = useState("");
    const [click, setClick] = useState(false);
    const [check, setCheck] = useState(false);
    const [check1, setCheck1] = useState(false);


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
                    source={require("../../../../assets/Avatar.png")}
                    style={{height:40, width:40, borderRadius:50}}
                    />
                    <View style={{backgroundColor:"#FFFFFF",height:20, width:20, borderRadius:50, position:"absolute", bottom:0, left:0, alignSelf:"center", alignItems:"center", justifyContent:"center"}}>
                        <MenuIcon
                        height={'30'}
                        />
                    </View>
                </TouchableOpacity>
                <Image
                source={require("../../../../assets/Heading.png")}
                style={{height:100, width:100, resizeMode:"contain", marginLeft:20}}
                />
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity activeOpacity={0.8} style={{}}>
                <   Image
                    source={require("../../../../assets/ic-search.png")}
                    style={{height:28, width:28, resizeMode:"contain"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{marginHorizontal:20}}>
                    <Image
                    source={require("../../../../assets/ic-wallet.png")}
                    style={{height:28, width:28, resizeMode:"contain"}}
                    />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                    <Image
                    source={require("../../../../assets/ic-notification.png")}
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
                <Text style={{color:"#000000", fontSize:20, textAlign:"center"}}>Enter your Personal Info</Text>
                <Text style={{color:"#808080", fontSize:14, textAlign:"center", maxWidth:400, marginVertical:20, alignSelf:"center"}}>Please enter your name exactly as it appears on your driver's License</Text>
                <View style={{marginVertical:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>First Name</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Enter Your First Name'
                        placeholderTextColor="#000000"
                        value={firstName}
                        onChangeText={()=>setFirstName(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginVertical:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Middle Name</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Enter Your Middle Name'
                        placeholderTextColor="#000000"
                        value={middleName}
                        onChangeText={()=>setMiddleName(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginVertical:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Last Name</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Enter Your Last Name'
                        placeholderTextColor="#000000"
                        value={lastName}
                        onChangeText={()=>setLastName(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <View style={{}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Date of Birth</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-330}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >7
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
                        <Text></Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-330}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >11</Text>
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
                        <Text></Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-330}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >1988</Text>
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
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Social Security Number</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='88673900'
                        placeholderTextColor="#000000"
                        value={socialSecurityNo}
                        keyboardType="number-pad"
                        onChangeText={()=>setSocialSecurityNo(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginVertical:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Driver's License Card Number</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='T583253'
                        placeholderTextColor="#000000"
                        value={driverLicenceNo}
                        onChangeText={()=>setDriverLicenceNo(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Upload Driver's License</Text>
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
                                source={require("../../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{marginVertical:20}}>
                    <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Driver's Availability</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <TouchableOpacity
                        onPress={()=>setClick("Day")}
                        activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", padding:10}}>
                            <View style={{borderRadius:50, padding:5, borderColor:(click==="Day") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                                <View style={{backgroundColor:(click==="Day") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                            </View>
                            <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Day</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>setClick("Weekday")}
                        activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", padding:10}}>
                            <View style={{borderRadius:50, padding:5, borderColor:(click==="Weekday") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                                <View style={{backgroundColor:(click==="Weekday") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                            </View>
                            <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Weekday</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>setClick("Weekends")}
                        activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", padding:10}}>
                            <View style={{borderRadius:50, padding:5, borderColor:(click==="Weekends") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                                <View style={{backgroundColor:(click==="Weekends") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                            </View>
                            <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Weekends</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", marginTop:10}}>
                        <TouchableOpacity
                        onPress={()=>setClick("Evenings")}
                        activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", padding:10}}>
                            <View style={{borderRadius:50, padding:5, borderColor:(click==="Evenings") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                                <View style={{backgroundColor:(click==="Evenings") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                            </View>
                            <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Evenings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>setClick("Nights")}
                        activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", padding:10}}>
                            <View style={{borderRadius:50, padding:5, borderColor:(click==="Nights") ? "#F99026" : "#808080", borderWidth:1,backgroundColor:"#FFFFFF"}}>
                                <View style={{backgroundColor:(click==="Nights") ? "#F99026" : "transparent", padding:6, borderRadius:30}}></View>
                            </View>
                            <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Nights</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#27AE60'
                        uncheckedCheckBoxColor='#5E5E60'
                        disabled={false}
                        isChecked={check}
                        onClick={()=>setCheck(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Driver's willing to drive kids 7 or over</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#27AE60'
                        uncheckedCheckBoxColor='#5E5E60'
                        disabled={false}
                        isChecked={check1}
                        onClick={()=>setCheck1(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Having a car seat</Text>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:16, color:"#000000", marginBottom:5}}>Background Check</Text>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#27AE60'
                        uncheckedCheckBoxColor='#5E5E60'
                        disabled={false}
                        isChecked={check}
                        onClick={()=>setCheck(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Checkr</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#27AE60'
                        uncheckedCheckBoxColor='#5E5E60'
                        disabled={false}
                        isChecked={check1}
                        onClick={()=>setCheck1(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Safety Holdings</Text>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:20, color:"#000000", fontWeight:"500", marginBottom:10}}>Residental Info</Text>
                    <View style={{marginVertical:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Address 1</Text>
                        <View style={{width:width-40}}>
                            <TextInput
                            placeholder='Enter Your Address'
                            placeholderTextColor="#000000"
                            value={address1}
                            onChangeText={()=>setAddress1(text)}
                            style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Address 2</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Enter Your Address'
                        placeholderTextColor="#000000"
                        value={address2}
                        onChangeText={()=>setAddress2(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>City</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >Plesanton</Text>
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
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>State</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >California</Text>
                        <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                            <MaterialIcons
                            name="keyboard-arrow-down"
                            size={20}
                            color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginVertical:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>ZIP Code</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='07030'
                        placeholderTextColor="#000000"
                        value={zipCode}
                        onChangeText={()=>setZipCode(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginBottom:20,flexDirection:"row", alignItems:"center", paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#5E5E60'
                        disabled={false}
                        isChecked={check1}
                        onClick={()=>setCheck1(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>I've driven with another rideshare company</Text>
                    </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Company</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >Uber</Text>
                        <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                            <MaterialIcons
                            name="keyboard-arrow-down"
                            size={20}
                            color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop:30, marginBottom:100}}>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Account Info", {"role": route.params.role})}
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
                        source={require("../../../../assets/Avatar.png")}
                        style={{height:80, width:80, resizeMode:"contain"}}
                        />
                        <Text style={{marginTop:10, fontSize:15, color:"#000000"}}>John Doe</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:20, marginVertical:30}}>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Home.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#F99026", fontSize:15, marginLeft:30}}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Profile.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>My Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/FaceCard.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Face Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Payment.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Payment Methods</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Tips.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Tips and Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Setting.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Contact.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Contact Us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:30}}>
                        <Image
                        source={require("../../../../assets/Password.png")}
                        style={{height:25, width:25, resizeMode:"contain"}}
                        />
                        <Text style={{color:"#000000", fontSize:15, marginLeft:30}}>Reset Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginTop:60}}>
                        <Image
                        source={require("../../../../assets/Logout.png")}
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

export default PersonalInfoScreen

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