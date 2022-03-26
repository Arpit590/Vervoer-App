import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import CheckBox from "react-native-check-box";
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const PersonalInfoScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
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
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Willing to drive kids 7 or over</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#27AE60'
                        uncheckedCheckBoxColor='#5E5E60'
                        disabled={false}
                        isChecked={check1}
                        onClick={()=>setCheck1(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Has car seat</Text>
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
    </View>
  )
}

export default PersonalInfoScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})