import { ScrollView, StyleSheet, Text, TouchableOpacity, Switch, View, Image, Animated, Dimensions, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../components/Header';

const { height, width } = Dimensions.get("window");

const PaymentMethodScreen = () => {

    const navigation = useNavigation();
    const [isOpen1, setIsOpen1] = useState(false);

    const closeHandle1=()=>{
        setIsOpen1(false)
    }

    const paymentHandler=()=>{
        setIsOpen1(true)
    }

    const bankAccountHandler=()=>{
        navigation.navigate("Add Details", {"withdrew": true})
    }

    return (
        <View style={styles.screen}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{marginHorizontal: 20}}>
                    <View style={{ zIndex: 10, flexDirection: "column", marginTop: 20, }}>
                        <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" }}>
                            <View style={{ flexDirection: "row", alignItems: "flex-start", zIndex: -1 }}>
                                <TouchableOpacity activeOpacity={0.8}
                                    style={{}}
                                    onPress={() => navigation.goBack()}>
                                    <BackArrowIcon
                                        height={'30'}
                                    />
                                </TouchableOpacity>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontSize: 18, color: "#000000", marginBottom: 5 }}>Payment Methods For Deposit</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginVertical:15,backgroundColor:"#FFFFFF", padding:20, borderRadius:10}}>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10, borderBottomColor:"lightgray", borderBottomWidth:1, paddingBottom:10}}>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/VISA (2).png")}
                                    style={{width:50, height:50, resizeMode:"contain"}}
                                    />
                                    <Text style={{fontSize:15, color:"#000000", marginLeft:15}}>Debit Card</Text>
                                </View>
                                <Text style={{fontSize:15, color:"#000000"}}>NBK XXXX 8752</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10, borderBottomColor:"lightgray", borderBottomWidth:1, paddingBottom:10}}>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/VISA (2).png")}
                                    style={{width:50, height:50, resizeMode:"contain"}}
                                    />
                                    <Text style={{fontSize:15, color:"#000000", marginLeft:15}}>Credit Card</Text>
                                </View>
                                <Text style={{fontSize:15, color:"#000000"}}>NBK XXXX 8752</Text>
                            </View>
                            <TouchableOpacity 
                            onPress={paymentHandler}
                            activeOpacity={0.8} style={{marginBottom:15,borderColor:"#F99026", borderWidth:1, padding:15, borderRadius:15, width:"100%", alignItems:"center"}}>
                                <Text style={{fontSize:15, color:"#F99026"}}>Add Payment Method</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginVertical:15,backgroundColor:"#FFFFFF", padding:20, borderRadius:10}}>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10, borderBottomColor:"lightgray", borderBottomWidth:1, paddingBottom:10}}>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/Bank.png")}
                                    style={{width:30, height:30, resizeMode:"contain"}}
                                    />
                                    <Text style={{fontSize:15, color:"#000000", marginLeft:15}}>Bank of America Corp</Text>
                                </View>
                                <Text style={{fontSize:15, color:"#000000"}}>XXXX 4395</Text>
                            </View>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10, borderBottomColor:"lightgray", borderBottomWidth:1, paddingBottom:10}}>
                                <View style={{flexDirection:"row", alignItems:"center"}}>
                                    <Image
                                    source={require("../../../assets/Bank.png")}
                                    style={{width:30, height:30, resizeMode:"contain"}}
                                    />
                                    <Text style={{fontSize:15, color:"#000000", marginLeft:15}}>JPMorgan Chase & Co</Text>
                                </View>
                                <Text style={{fontSize:15, color:"#000000"}}>XXXX 4395</Text>
                            </View>
                            <TouchableOpacity 
                            onPress={bankAccountHandler}
                            activeOpacity={0.8} style={{marginBottom:15,borderColor:"#F99026", borderWidth:1, padding:15, borderRadius:15, width:"100%", alignItems:"center"}}>
                                <Text style={{fontSize:15, color:"#F99026"}}>Add Bank Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Modal
            animationType={"slide"}
            onRequestClose={closeHandle1}
            transparent={true}
            visible={isOpen1}>
                <View style={{alignItems:"center", width:"100%", flex:1, justifyContent:"flex-end"}}>
                    <View style={styles.modal1}>
                        <View style={{marginVertical:20}}>
                            <Text style={{fontSize:16, color:"#000000", marginBottom:20}}>Select Method</Text>
                            <TouchableOpacity 
                            onPress={()=>{
                                navigation.navigate("Add Details", {"withdrew": false, "debit": true});
                                setIsOpen1(false);
                            }}
                            activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:20}}>
                                <Image
                                source={require("../../../assets/Card.png")}
                                style={{height:30, width:30, resizeMode:"contain"}}
                                />
                                <Text style={{fontSize:16, color:"#000000", marginLeft:20}}>Debit Card</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate("Add Details", {"withdrew": false, "debit": false});
                                setIsOpen1(false);
                            }}
                            activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", marginBottom:20}}>
                                <Image
                                source={require("../../../assets/Card.png")}
                                style={{height:30, width:30, resizeMode:"contain"}}
                                />
                                <Text style={{fontSize:16, color:"#000000", marginLeft:20}}>Credit Card</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default PaymentMethodScreen;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "whitesmoke",
        flex: 1
    },
    modal1:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:200,
        elevation:5,
        padding:20
    }
})