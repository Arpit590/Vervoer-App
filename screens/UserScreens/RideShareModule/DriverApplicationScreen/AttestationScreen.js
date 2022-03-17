import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import MenuIcon from "../../../../assets/Icon metro-menu.svg";
import CheckBox from "react-native-check-box";

const {height, width} = Dimensions.get("window");

const AttestationScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const value = useState(new Animated.Value(-500))[0];
    const [menu, setMenu] = useState(false);
    const [click, setClick] = useState(false);


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
                <Text style={{fontSize:20, color:"#F99026", textAlign:"center", marginLeft:20}}>Driver's Attestation</Text>
            </View>
            <View style={{marginTop:30}}>
                <Text style={{color:"#808080", fontSize:15}}>Attest to</Text>
                
                <View style={{marginBottom:20}}>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Consent to a background check</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Complete A Safety Holdings, Inc</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Complete a Checkr, Inc application</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Not drive while under influence</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Not discriminate against users when accepting and not accepting a ride</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Be willing to have a video of the ride for security of the driver and user</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Agreeing to ongoing criminal background and driver's license checks</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Obeying all traffic laws</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Not driving aggressively</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Not creating an unsafe driving experience</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Agree to Terms of Service</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Keeping your vehicle in good working conditions</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Completing the onboarding training</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Not fighting or arguing with an user</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>To all information provide is true</Text>
                    </View>
                </View>
                <View style={{marginVertical:20}}>
                    <Text style={{color:"#000000", fontSize:15, marginBottom:10}}>Electronic signature</Text>
                    <View style={{height:200,borderWidth:1, borderColor:"#808080", padding:30, borderRadius:20, alignItems:"center", justifyContent:"center"}}>
                        <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center"}}>
                            <Image
                            source={require("../../../../assets/Camera.png")}
                            style={{height:40, width:40, resizeMode:"contain"}}
                            />
                            <Text style={{fontSize:14, color:"#808080", marginTop:10}}>Upload Signature</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop:40,paddingBottom:15,flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1}}>
                    <Image
                    source={require("../../../../assets/calendar.png")}
                    style={{width:20, height:20, resizeMode:"contain"}}
                    />
                    <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Date</Text>
                </View>
                <View style={{marginTop:30, marginBottom:100}}>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Profile Photo", {"role": route.params.role})}
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

export default AttestationScreen

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