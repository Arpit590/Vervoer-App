import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import Done from "../../../../assets/foodDeliverySvg/done.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import Drawer from '../../../../components/Drawer';
import Header from '../../../../components/Header';

const { height, width } = Dimensions.get("window");

const OrderPlaced = () => {

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

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <Done />
                        <Text style={{ fontSize: 24, color: '#F99026', fontWeight: '600', marginVertical: 10 }}>
                            Done
                        </Text>
                        <Text style={{ color: '#000' }}>Your order is placed successfully.</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                            <Text style={{ color: '#5E5E60', fontWeight: '600' }}>
                                Order ID :
                            </Text>
                            <Text style={{ color: "#F99026", fontWeight: '600' }}>
                                #FOOD58223
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View>

                <TouchableOpacity style={{ marginVertical: 10, marginHorizontal: 20, backgroundColor: '#F99026', height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: '500' }}>
                        Track Order
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('NewOrder', {heading: 'Order Food'} )} style={{ marginVertical: 10, marginHorizontal: 20, backgroundColor: '#5E5E60', height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: '500' }}>
                    Place New Order
                    </Text>
                </TouchableOpacity>
            </View>
            <Animated.View style={{ backgroundColor: "#FFFFFF", position: "absolute", top: 0, left: value, height: height, width: width - 80, zIndex: 100, padding: 20, paddingHorizontal: 0 }}>
                <Drawer menu={menu} setMenu={setMenu} closeHandler={closeHandler} />
            </Animated.View>
        </View>
    )
}

export default OrderPlaced;

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