import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../assets/Icon metro-menu.svg";
import CheckBox from "react-native-check-box";

const {height, width} = Dimensions.get("window");

const WithdrawScreen = () => {
 
    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const [menu, setMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [bank, setBank] = useState(false);
    const [bank1, setBank1] = useState(false)

    const closeHandle=()=>{
        setIsOpen(false);
    }

    const applyHandler=()=>{
        setIsOpen(false);
    }

    const addAccountHandler =()=>{
        setIsOpen(false);
        navigation.navigate("Add Details", {"withdrew": true})
    }

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
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
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
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{zIndex:10,flexDirection:"column",marginTop:20, marginHorizontal:20}}>
                <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        style={{}}
                        onPress={()=>navigation.goBack()}>
                            <BackArrowIcon
                            height={'30'}
                            />
                        </TouchableOpacity>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:18, color:"#000000", marginBottom:5}}>Withdraw</Text>
                        </View>
                    </View>
                    <View style={{alignItems:"flex-end"}}>
                        <Text style={{fontSize:11, color:"#000000", marginBottom:5}}>Wallet</Text>
                        <Text style={{fontSize:13, color:"#000000"}}>$2500.00</Text>
                    </View>
                </View>
                <View style={{marginVertical:20}}>
                    <View style={{backgroundColor:"#FFFFFF", padding:30, paddingVertical:50,borderRadius:10, alignItems:"center", justifyContent:"center"}}>
                        <Text style={{fontSize:25, color:"#000000"}}>$500.00</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style={{position:"absolute", bottom:"0%", width:"100%", backgroundColor:"#FFFFFF", paddingVertical:10}}>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>setIsOpen(true)}
            style={{borderBottomColor:"#000000", borderBottomWidth:1, paddingBottom:10, flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingHorizontal:20}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../assets/Bank.png")}
                    style={{height:30, width:30, resizeMode:"contain", marginRight:15}}
                    />
                    <Text style={{fontSize:15, color:"#000000"}}>Bank of America Corp</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontSize:15, color:"#000000"}}>XXXX 4395</Text>
                    <Text style={{fontSize:20, color:"#F99026", marginLeft:10}}>></Text>
                </View>
            </TouchableOpacity>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <TouchableOpacity activeOpacity={0.8} style={{borderWidth:1, width:"33.3%",borderColor:"#808080", padding:20,paddingHorizontal:30, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"#000000"}}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{borderWidth:1, width:"33.3%",borderColor:"#808080", padding:20,paddingHorizontal:30, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"#000000"}}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{borderWidth:1, width:"33.3%",borderColor:"#808080", padding:20,paddingHorizontal:30, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"#000000"}}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <TouchableOpacity activeOpacity={0.8} style={{borderWidth:1, width:"33.3%",borderColor:"#808080", padding:20,paddingHorizontal:30, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"#000000"}}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{borderWidth:1, width:"33.3%",borderColor:"#808080", padding:20,paddingHorizontal:30, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"#000000"}}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{borderWidth:1, width:"33.3%",borderColor:"#808080", padding:20,paddingHorizontal:30, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"#000000"}}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <TouchableOpacity activeOpacity={0.8} style={{borderWidth:1, width:"33.3%",borderColor:"#808080", padding:20,paddingHorizontal:30, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"#000000"}}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{borderWidth:1, width:"33.3%",borderColor:"#808080", padding:20,paddingHorizontal:30, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"#000000"}}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{borderWidth:1, width:"33.3%",borderColor:"#808080", padding:20,paddingHorizontal:30, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"#000000"}}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                <TouchableOpacity activeOpacity={0.8} style={{borderWidth:1, width:"33.3%",borderColor:"#808080", padding:20,paddingHorizontal:30, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"#000000"}}>•</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{borderWidth:1, width:"33.3%",borderColor:"#808080", padding:20,paddingHorizontal:30, alignItems:"center", justifyContent:"center"}}>
                    <Text style={{fontSize:18, color:"#000000"}}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={{borderWidth:1, width:"33.3%",borderColor:"#808080", padding:20,paddingHorizontal:30, alignItems:"center", justifyContent:"center"}}>
                <Image
                    source={require("../../../assets/back-arrow.png")}
                    style={{height:28, width:28, resizeMode:"contain"}}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Money Summary", {"withdraw": true,"accountNumber": route.params.accountNumber, "bankName": route.params.bankName, "name": route.params.name, "IFSC": route.params.IFSC})}
            activeOpacity={0.8} style={{backgroundColor:"#F99026", marginVertical:10, alignSelf:"center",padding:20, borderRadius:30, width:"85%",alignItems:"center"}}>
                <Text style={{fontSize:15, color:"#FFFFFF"}}>Withdraw Money</Text>
            </TouchableOpacity>
        </View>
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
        <Modal
        animationType={"slide"}
        onRequestClose={closeHandle}
        transparent={true}
        visible={isOpen}>
            <View style={{alignItems:"center", width:"100%", flex:1, justifyContent:"flex-end"}}>
                <View style={styles.modal}>
                    <View style={{}}>
                        <View style={{marginTop:20}}>
                            <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15,justifyContent:"space-between",borderBottomColor:"lightgray", borderBottomWidth:1,paddingVertical:10, width:width, alignSelf:"center", paddingBottom:15, marginBottom:15}}>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/Bank.png")}
                                    style={{height:30, width:30, resizeMode:"contain", marginRight:15}}
                                    />
                                    <Text style={{fontSize:15, color:"#000000"}}>Bank of America Corp</Text>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <Text style={{fontSize:15, color:"#000000", marginRight:15}}>XXXX 4395</Text>
                                    <CheckBox
                                    checkedCheckBoxColor='#27AE60'
                                    uncheckedCheckBoxColor='#5E5E60'
                                    disabled={false}
                                    isChecked={bank}
                                    onClick={()=>{
                                        setBank1(false);
                                        setBank(true)
                                    }}
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:15,justifyContent:"space-between",borderBottomColor:"lightgray", borderBottomWidth:1,paddingVertical:10, width:width, alignSelf:"center", paddingBottom:15, marginBottom:15}}>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/Bank.png")}
                                    style={{height:30, width:30, resizeMode:"contain", marginRight:15}}
                                    />
                                    <Text style={{fontSize:15, color:"#000000"}}>JPMorgan Chase & Co</Text>
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <Text style={{fontSize:15, color:"#000000", marginRight:15}}>XXXX 4395</Text>
                                    <CheckBox
                                    checkedCheckBoxColor='#27AE60'
                                    uncheckedCheckBoxColor='#5E5E60'
                                    disabled={false}
                                    isChecked={bank1}
                                    onClick={()=>{
                                        setBank1(true);
                                        setBank(false)
                                    }}
                                    />
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity 
                        onPress={addAccountHandler}
                        activeOpacity={0.8} style={{marginBottom:15,borderColor:"#F99026", borderWidth:1, padding:15, borderRadius:15, width:"100%", alignItems:"center"}}>
                            <Text style={{fontSize:15, color:"#F99026"}}>Add Bank Account</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                            <TouchableOpacity
                            onPress={()=>setIsOpen(false)}
                            activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:20, borderRadius:30, width:"50%",alignItems:"center"}}>
                                <Text style={{fontSize:15, color:"#FFFFFF"}}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            onPress={applyHandler}
                            style={{backgroundColor:"#F99026", marginLeft:10,padding:20, borderRadius:30, width:"50%",alignItems:"center"}}>
                                <Text style={{fontSize:15, color:"#FFFFFF"}}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
  )
}

export default WithdrawScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"whitesmoke",
        flex:1
    },
    header:{
        backgroundColor:"#FFFFFF",
        borderBottomLeftRadius:30, 
        borderBottomRightRadius:30,
        paddingHorizontal:20,
        elevation:5
    },
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:330,
        elevation:5,
        padding:20
    },
    content:{
        width:"100%",
        marginVertical:20
    }
})