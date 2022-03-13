import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import Checkbox from "../../../../assets/foodDeliverySvg/checkbox.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import Drawer from '../../../../components/Drawer';
import Header from '../../../../components/Header';

const { height, width } = Dimensions.get("window");

const CheckoutBill = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const value1 = useState(new Animated.Value(0))[0];
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
                <View style={{ marginHorizontal: 20 }}>
                    <View style={{ zIndex: 10, flexDirection: "column", marginTop: 20 }}>
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
                        </View>
                    </View>

                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 14, color: '#000'}}>
                        Your bill is
                        </Text>
                        <Text style={{fontSize: 50, color: '#F99026', fontWeight: '600'}}>
                        $600.00
                        </Text>
                        <Text style={{fontSize: 14, color: '#000'}}>
                        28 May 2021, 2:00 PM
                        </Text>
                    </View>

                    <View style={{borderColor: '#C4C4C4', borderWidth: 0.4, marginVertical: 10}} />

                    <View>
                        <Text style={{fontSize: 16, color: '#000'}}>
                            Payment Summary
                        </Text>

                        <View style={{backgroundColor: "#fff", paddingVertical: 20, marginVertical: 10}}>
                            <View style={{paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>
                            Mulberry Spcial Pizza x2
                            </Text>
                            <Text style={{fontWeight: '600', color: '#000'}}>
                                $200
                            </Text>
                            </View>
                            <View style={{borderColor: '#C4C4C4', borderWidth: 0.4, marginVertical: 10, marginHorizontal: 10}} />

                            <View style={{paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>
                            Mulberry Spcial Pizza x2
                            </Text>
                            <Text style={{fontWeight: '600', color: '#000'}}>
                                $200
                            </Text>
                            </View>
                            <View style={{borderColor: '#C4C4C4', borderWidth: 0.4, marginVertical: 10, marginHorizontal: 10}} />

                            <View style={{paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>
                            Mulberry Spcial Pizza x2
                            </Text>
                            <Text style={{fontWeight: '600', color: '#000'}}>
                                $200
                            </Text>
                            </View>
                            <View style={{borderColor: '#C4C4C4', borderWidth: 0.4, marginVertical: 10, marginHorizontal: 10}} />

                            <View style={{paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontWeight: '600', color: '#F99026', fontSize: 16}}>
                            Total Payment
                            </Text>
                            <Text style={{fontWeight: '600', color: '#F99026', fontSize: 16}}>
                                $600
                            </Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <View style={{backgroundColor: '#fff'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                <Image
                    source={require("../../../../assets/ic-wallet.png")}
                    style={{height:28, width:28, resizeMode:"contain", marginHorizontal: 10}}
                />
                <Text style={{fontSize: 16, color: '#000'}}>
                    Wallet
                </Text>
                <Text style={{color: '#F99026',  marginHorizontal: 10}}>
                    (Balance : $2500.00)
                </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('OrderPlaced', {heading: 'Order Placed'})} style={{ marginVertical: 10, marginHorizontal: 20, backgroundColor: '#F99026', height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: '500' }}>
                        Pay Now
                    </Text>
                </TouchableOpacity>
            </View>
            <Animated.View style={{ backgroundColor: "#FFFFFF", position: "absolute", top: 0, left: value, height: height, width: width - 80, zIndex: 100, padding: 20, paddingHorizontal: 0 }}>
                <Drawer menu={menu} setMenu={setMenu} closeHandler={closeHandler} />
            </Animated.View>
        </View>
    )
}

export default CheckoutBill;

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
        color: "#F99026",
        fontWeight: '700',
        fontSize: 18
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