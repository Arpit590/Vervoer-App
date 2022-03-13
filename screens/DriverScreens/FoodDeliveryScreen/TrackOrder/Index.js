import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Map from "../../../../assets/foodDeliverySvg/map.svg";
import Drawer from '../../../../components/Drawer';
import Header from '../../../../components/Header';


const { height, width } = Dimensions.get("window");

const TrackOrder = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const value1 = useState(new Animated.Value(0))[0];
    const [click, setClick] = useState("Adult");
    const [menu, setMenu] = useState(false);

    const openHandler = () => {
        setMenu(true);
        Animated.timing(value, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    const closeHandler = () => {
        setMenu(false);
        Animated.timing(value, {
            toValue: -500,
            duration: 1000,
            useNativeDriver: false
        }).start()
    }

    return (
        <View style={styles.screen}>
            <Header openHandler={openHandler} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{  }}>
                    <View style={{ zIndex: 10, flexDirection: "column", marginTop: 20, marginHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <TouchableOpacity activeOpacity={0.8}
                                    style={{}}
                                    onPress={() => navigation.goBack()}>
                                    <BackArrowIcon
                                        height={'30'}
                                    />
                                </TouchableOpacity>
                                <View style={{ marginLeft: 20 }}>
                                    <Text style={{ fontSize: 16, color: "#000000", marginBottom: 5 }}>{route.params.heading}</Text>
                                </View>
                            </View>
                            <Text style={styles.cartText}>#FOOD58223</Text>
                        </View>
                    </View>

                    <Map width="100%" />

                    <View style={{marginVertical: 10, marginHorizontal: 20}}>
                        <Text style={{fontSize:15, color:"#000000", marginBottom:10}}>Delivery Boy Information</Text>
                        <View style={{backgroundColor:"white", paddingHorizontal:15, paddingVertical:10,borderRadius:20,flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row", alignItems:"center"}}>
                                <Image
                                source={require("../../../../assets/callProfile.png")}
                                style={{height:50, width:50, resizeMode:"contain"}}
                                />
                                <View style={{marginLeft:20}}>
                                    <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Jason Anderson</Text>
                                    <View style={{flexDirection:"row", alignItems:"center"}}>
                                        <Image
                                        source={require("../../../../assets/Calling.png")}
                                        style={{height:20, width:20, resizeMode:"contain", marginRight:5}}

                                        />
                                        <Text style={{fontSize:11, color:"#000000"}}>+1 1048285215</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#5E5E60", padding:10, paddingHorizontal:30,borderRadius:10}}>
                                <Text style={{fontSize:13, color:"#FFFFFF"}}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginHorizontal: 20}}>
                        <Text style={{ fontSize: 16, color: '#000' }}>
                            Payment Summary
                        </Text>

                        <View style={{ backgroundColor: "#fff", paddingVertical: 20, marginVertical: 10 }}>
                            <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    Mulberry Spcial Pizza x2
                                </Text>
                                <Text style={{ fontWeight: '600', color: '#000' }}>
                                    $200
                                </Text>
                            </View>
                            <View style={{ borderColor: '#C4C4C4', borderWidth: 0.4, marginVertical: 10, marginHorizontal: 10 }} />

                            <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    Mulberry Spcial Pizza x2
                                </Text>
                                <Text style={{ fontWeight: '600', color: '#000' }}>
                                    $200
                                </Text>
                            </View>
                            <View style={{ borderColor: '#C4C4C4', borderWidth: 0.4, marginVertical: 10, marginHorizontal: 10 }} />

                            <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>
                                    Mulberry Spcial Pizza x2
                                </Text>
                                <Text style={{ fontWeight: '600', color: '#000' }}>
                                    $200
                                </Text>
                            </View>
                            <View style={{ borderColor: '#C4C4C4', borderWidth: 0.4, marginVertical: 10, marginHorizontal: 10 }} />

                            <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: '600', color: '#F99026', fontSize: 16 }}>
                                    Total Payment
                                </Text>
                                <Text style={{ fontWeight: '600', color: '#F99026', fontSize: 16 }}>
                                    $600
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <TouchableOpacity style={{ marginVertical: 10, marginHorizontal: 20, backgroundColor: '#F99026', height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: '#fff', fontWeight: '500' }}>
                    Order Received
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginVertical: 10, marginHorizontal: 20, backgroundColor: '#5E5E60', height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 16, color: '#fff', fontWeight: '500' }}>
                    Order Cancelled
                </Text>
            </TouchableOpacity>
            <Animated.View style={{ backgroundColor: "#FFFFFF", position: "absolute", top: 0, left: value, height: height, width: width - 80, zIndex: 100, padding: 20, paddingHorizontal: 0 }}>
                <Drawer menu={menu} setMenu={setMenu} closeHandler={closeHandler} />
            </Animated.View>
        </View>
    )
}

export default TrackOrder;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "whitesmoke",
        flex: 1,
    },
    header: {
        backgroundColor: "#FFFFFF",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 5
    },
    cart: {
        backgroundColor: '#707070',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 8
    },
    cartText: {
        color: "#F59523",
        fontWeight: '700',
        fontSize: 14
    },
    searchBar: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 8,
        flexDirection: 'row',
        paddingHorizontal: 5
    },
    headingText: {
        fontSize: 15, color: '#000', fontWeight: '600'
    }
})