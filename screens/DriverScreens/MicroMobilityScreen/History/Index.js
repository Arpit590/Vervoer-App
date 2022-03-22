import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Map from "../../../../assets/foodDeliverySvg/map.svg";
import Drawer from '../../../../components/Drawer';
import Header from '../../../../components/Header';


const { height, width } = Dimensions.get("window");

const MicroMobilityHistory = () => {

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
                <View style={{ marginHorizontal: 20 }}>
                    <View style={{ zIndex: 10, flexDirection: "column", marginTop: 20,  }}>
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
                                    <Text style={{ fontSize: 16, color: "#000000", marginBottom: 5 }}>{'Micro Mobility History'}</Text>
                                </View>
                            </View>
                            <Text style={styles.cartText}>#FOOD58223</Text>
                        </View>
                    </View>

                    <Image resizeMode='contain' style={{width: '100%', height: 550, marginVertical: 10 }} source={require('../../../../assets/microMobilitySVg/history.png')} />
                </View>
            </ScrollView>
            
            <Animated.View style={{ backgroundColor: "#FFFFFF", position: "absolute", top: 0, left: value, height: height, width: width - 80, zIndex: 100, padding: 20, paddingHorizontal: 0 }}>
                <Drawer menu={menu} setMenu={setMenu} closeHandler={closeHandler} />
            </Animated.View>
        </View>
    )
}

export default MicroMobilityHistory;

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