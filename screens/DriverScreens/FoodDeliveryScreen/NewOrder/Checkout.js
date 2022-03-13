import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import Checkbox from "../../../../assets/foodDeliverySvg/checkbox.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import Drawer from '../../../../components/Drawer';
import Header from '../../../../components/Header';

const { height, width } = Dimensions.get("window");

const Checkout = () => {

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
                            <View>
                                <Text style={styles.cartText}>$600.00</Text>
                            </View>
                        </View>
                    </View>  

                    <View style={{marginVertical: 10}}>
                        <Text style={{fontSize: 16, color: '#000', fontWeight: '500'}}>Shipping Option</Text>
                        <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                            <View style={{flexDirection: 'row',}}>
                                <TouchableOpacity style={{marginTop: 3, paddingHorizontal: 10}}>
                                    <Checkbox />
                                </TouchableOpacity>
                                <View>
                                    <Text style={{fontWeight:'500', fontSize: 14, color: "#000"}}>Standard Delivery</Text>
                                    <Text style={{fontSize: 10}}>FREE  45 min - 60 min</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row',}}>
                                <TouchableOpacity style={{marginTop: 3, paddingHorizontal: 10}}>
                                    <Checkbox />
                                </TouchableOpacity>
                                <View>
                                    <Text style={{fontWeight:'500', fontSize: 14, color: "#000"}}>Instant Delivery</Text>
                                    <Text style={{fontSize: 10}}>$5.00  Max 30 min</Text>
                                </View>
                            </View>
                        </View>
                        
                    </View>

                    <View style={{marginVertical: 10}}>
                        <Text style={{fontSize: 16, color: '#000', fontWeight: '500'}}>Select Delivery Address</Text>
                        <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10, marginVertical: 10, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                            <Checkbox />
                            <Text style={{fontSize: 14, color: '#000', fontWeight: '500', paddingHorizontal: 10}}>
                            Current Location 
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                            <Checkbox />
                            <Text style={{fontSize: 14, color: '#000', fontWeight: '500', paddingHorizontal: 10}}>
                            A-103, River Kent Empire, Lincon Street, New York, 70050
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
                            <Checkbox />
                            <Text style={{fontSize: 14, color: '#000', fontWeight: '500', paddingHorizontal: 10}}>
                            John Office, Change Street, New York, 70050
                            </Text>
                        </View>

                        <TouchableOpacity style={{borderWidth: 0.2, borderRadius: 6, paddingVertical: 15, justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
                            <Text>+ Add New Address</Text>
                        </TouchableOpacity>
                        </View>
                    </View>

                    

                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('CheckoutBill', {heading: 'Checkout'})} style={{marginVertical: 10, marginHorizontal: 20, backgroundColor: '#F99026', height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 16, color: '#fff', fontWeight: '500'}}>
                            Continue
                        </Text>      
                    </TouchableOpacity>
            <Animated.View style={{ backgroundColor: "#FFFFFF", position: "absolute", top: 0, left: value, height: height, width: width - 80, zIndex: 100, padding: 20, paddingHorizontal: 0 }}>
                <Drawer menu={menu} setMenu={setMenu} closeHandler={closeHandler} />
            </Animated.View>
        </View>
    )
}

export default Checkout;

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