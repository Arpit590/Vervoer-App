import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuIcon from "../../../../assets/Icon metro-menu.svg";
import Drawer from '../../../../components/Drawer';
import Header from '../../../../components/Header';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Pizza from '../../../../assets/foodDeliverySvg/pizza.png';
import Burger from '../../../../assets/foodDeliverySvg/burger.png';
import Sandwich from '../../../../assets/foodDeliverySvg/sandwich.png';
import Restaurant2 from '../../../../assets/foodDeliverySvg/restaurant2.png';
import Restaurant1 from '../../../../assets/foodDeliverySvg/restaurant1.png';
import FeaturedCard from '../../../../components/FeaturedCard';
import ItemCard from '../../../../components/ItemCard';
import RestaurantDetails from '../../../../assets/foodDeliverySvg/restaurantDetails.svg';

const { height, width } = Dimensions.get("window");

const FoodMenu = () => {

    const route = useRoute();
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const value1 = useState(new Animated.Value(0))[0];
    const [click, setClick] = useState("Adult");
    const [menu, setMenu] = useState(false);
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
        }
    ];

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

    const renderItem1 = ({ item }) => (
        <View style={{marginRight: 40}} key={item.id}>
            <FeaturedCard image={Restaurant2} width={'110%'} />
        </View>
    );

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
                            <View style={styles.cart}>
                                <Text style={styles.cartText}>CART</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', marginVertical: 10}}>
                    <RestaurantDetails />
                    </View>

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

                    <View style={{ marginVertical: 10 }}>
                            <ItemCard menuDetails="addCart" />
                            <ItemCard menuDetails="addCart" />
                            <ItemCard menuDetails="addCart" />
                            <ItemCard menuDetails="addCart" />
                            <ItemCard menuDetails="addCart" />
                            <ItemCard menuDetails="addCart" />
                    </View>                  

                </View>
            </ScrollView>
            <Animated.View style={{ backgroundColor: "#FFFFFF", position: "absolute", top: 0, left: value, height: height, width: width - 80, zIndex: 100, padding: 20, paddingHorizontal: 0 }}>
                <Drawer menu={menu} setMenu={setMenu} closeHandler={closeHandler} />
            </Animated.View>
        </View>
    )
}

export default FoodMenu;

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
    }
})