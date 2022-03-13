import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../../assets/Icon metro-menu.svg";
import Drawer from '../../../../components/Drawer';
import Header from '../../../../components/Header';
import Pizza from '../../../../assets/foodDeliverySvg/pizza.png';
import Pizza1 from '../../../../assets/foodDeliverySvg/pizza1.png';
import Burger from '../../../../assets/foodDeliverySvg/burger.png';
import Sandwich from '../../../../assets/foodDeliverySvg/sandwich.png';
import Restaurant2 from '../../../../assets/foodDeliverySvg/restaurant2.png';
import Restaurant3 from '../../../../assets/foodDeliverySvg/restaurant3.png';
import FeaturedCard from '../../../../components/FeaturedCard';
import SizesGrid from '../../../../assets/foodDeliverySvg/sizesGrid.svg';
import Topping from '../../../../assets/foodDeliverySvg/topping.svg';
import Button from '../../../../components/Button';
import ItemCard from '../../../../components/ItemCard';
import Cross from '../../../../assets/foodDeliverySvg/cross.svg'


const { height, width } = Dimensions.get("window");

const MyCart = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const value1 = useState(new Animated.Value(0))[0];
    const [click, setClick] = useState("Adult");
    const [menu, setMenu] = useState(false);
    const [count, setCount] = useState(0);
    const [isOpen, setIsOpen] = useState(true);
    const closeHandle = () => {
        setIsOpen(false);
    }
    const DATA = [
        {
            id: '1',
            title: 'Pizza',
            image: Pizza
        },
        {
            id: '2',
            title: 'Burger',
            image: Burger
        },
        {
            id: '3',
            title: 'Sandwich',
            image: Sandwich
        },
        {
            id: '4',
            title: 'Pizza',
            image: Pizza
        },
        {
            id: '5',
            title: 'Burger',
            image: Burger
        },
        {
            id: '6',
            title: 'Sandwich',
            image: Sandwich
        },
    ];

    const adultHandler = () => {
        setClick("Adult");
        Animated.timing(value1, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: false
        }).start()
    }

    const chlidHandler = () => {
        setClick("Child");
        Animated.timing(value1, {
            toValue: width - 300,
            duration: 2000,
            useNativeDriver: false
        }).start()
    }

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

    const renderItem = ({ item }) => (
        <View key={item.id}>
            <View style={{ height: 70, width: 70, backgroundColor: 'skyblue', marginHorizontal: 10, borderRadius: 35, marginVertical: 20 }}>
                <Image
                    source={item.image}
                    style={{ resizeMode: "contain", alignSelf: 'center', }}
                />
            </View>
            <Text style={{ textAlign: 'center', fontSize: 12, color: '#000' }}>
                {item.title}
            </Text>
        </View>
    );

    const countHandler = (item) => {
        item === "plus" ?
            setCount(count + 1) : setCount(count - 1)
    }

    const checkoutHandler = () => {
        setIsOpen(false);
        navigation.navigate('Checkout', {heading: "Checkout"})
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
                                    <Text style={{ fontSize: 16, color: "#000000", marginBottom: 5 }}>{'My Cart'}</Text>
                                </View>
                            </View>
                            <View style={styles.cart}>
                                <Text style={styles.cartText}>CART</Text>
                            </View>
                        </View>
                    </View>
                </View>
            
                <View style={{ width: "100%", flex: 1, justifyContent: "flex-end", marginVertical: 20 }}>
                    <View style={{paddingHorizontal: 20,}}>
                        <View style={styles.card1Container}>
                            <Image source={Pizza1} />
                            <View style={{ width: '80%', marginHorizontal: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' }}>
                                            Mulberry Spcial Pizza
                                        </Text>
                                        <Text style={{ fontSize: 14, color: '#000', fontWeight: '300', }}>
                                            by Josh Cafe
                                        </Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18, color: '#F99026', fontWeight: '600' }}>
                                                    $200.00
                                                </Text>
                                                <Text style={{ fontSize: 12, color: '#000', fontWeight: '300', paddingHorizontal: 10 }}>
                                                    6 Inch
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ borderWidth: 0.2, width: 30, borderRadius: 3, alignItems: 'center', }}>
                                        <Text onPress={() => countHandler('plus')} style={{ fontSize: 18 }}>+</Text>
                                        <Text style={{ fontSize: 18, color: '#000' }}>{count}</Text>
                                        <Text onPress={() => countHandler('minus')} style={{ fontSize: 18 }}>-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ height: 1, width: '100%', borderWidth: 0.2 }} />

                        <View style={styles.card1Container}>
                            <Image source={Pizza1} />
                            <View style={{ width: '80%', marginHorizontal: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' }}>
                                            Mulberry Spcial Pizza
                                        </Text>
                                        <Text style={{ fontSize: 14, color: '#000', fontWeight: '300', }}>
                                            by Josh Cafe
                                        </Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18, color: '#F99026', fontWeight: '600' }}>
                                                    $200.00
                                                </Text>
                                                <Text style={{ fontSize: 12, color: '#000', fontWeight: '300', paddingHorizontal: 10 }}>
                                                    6 Inch
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ borderWidth: 0.2, width: 30, borderRadius: 3, alignItems: 'center', }}>
                                        <Text onPress={() => countHandler('plus')} style={{ fontSize: 18 }}>+</Text>
                                        <Text style={{ fontSize: 18, color: '#000' }}>{count}</Text>
                                        <Text onPress={() => countHandler('minus')} style={{ fontSize: 18 }}>-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ height: 1, width: '100%', borderWidth: 0.2 }} />

                        <View style={styles.card1Container}>
                            <Image source={Pizza1} />
                            <View style={{ width: '80%', marginHorizontal: 10 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' }}>
                                            Mulberry Spcial Pizza
                                        </Text>
                                        <Text style={{ fontSize: 14, color: '#000', fontWeight: '300', }}>
                                            by Josh Cafe
                                        </Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 18, color: '#F99026', fontWeight: '600' }}>
                                                    $200.00
                                                </Text>
                                                <Text style={{ fontSize: 12, color: '#000', fontWeight: '300', paddingHorizontal: 10 }}>
                                                    6 Inch
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ borderWidth: 0.2, width: 30, borderRadius: 3, alignItems: 'center', }}>
                                        <Text onPress={() => countHandler('plus')} style={{ fontSize: 18 }}>+</Text>
                                        <Text style={{ fontSize: 18, color: '#000' }}>{count}</Text>
                                        <Text onPress={() => countHandler('minus')} style={{ fontSize: 18 }}>-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <Text style={{ fontSize: 15, color: '#000' }}>
                            Have a Promo Code?
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                            <View style={{ borderRadius: 6, borderWidth: 0.2, width: '80%' }}>
                                <TextInput placeholder='Enter Here' />
                            </View>
                            <View style={{ borderRadius: 10, backgroundColor: '#5E5E60', padding: 14, }}>
                                <Text style={{ color: '#fff' }}>Apply</Text>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => checkoutHandler()} style={{ height: 50, backgroundColor: '#5E5E60', borderRadius: 40, elevation: 3, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                            <Text style={{ fontSize: 22, color: '#fff', fontWeight: '500', paddingHorizontal: 40 }}>
                                $600.00
                            </Text>
                            <View style={{height: 50, backgroundColor: '#F99026', borderRadius: 40, justifyContent: 'center'}}>
                            <Text style={{ fontSize: 16, color: '#fff', fontWeight: '500', paddingHorizontal: 40 }}>
                                Checkout
                            </Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
             </ScrollView>
            <Animated.View style={{ backgroundColor: "#FFFFFF", position: "absolute", top: 0, left: value, height: height, width: width - 80, zIndex: 100, padding: 20, paddingHorizontal: 0 }}>
                <Drawer menu={menu} setMenu={setMenu} closeHandler={closeHandler} />
            </Animated.View>
        </View>
    )
}

export default MyCart;

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
        color: "#fff",
        fontWeight: '700'
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
    },
    count: {
        height: 20,
        width: 20,
        borderWidth: 0.3,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    card1Container: {
        flexDirection: 'row',
        marginVertical: 10
    }
})