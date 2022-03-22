import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Drawer from '../components/Drawer';
import Header from '../components/Header';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Pizza from '../assets/foodDeliverySvg/pizza.png';
import Burger from '../assets/foodDeliverySvg/burger.png';
import Sandwich from '../assets/foodDeliverySvg/sandwich.png';
import Restaurant2 from '../assets/foodDeliverySvg/restaurant2.png';
import Restaurant1 from '../assets/foodDeliverySvg/restaurant1.png';
import FeaturedCard from '../components/FeaturedCard';
import ItemCard from '../components/ItemCard';


const { height, width } = Dimensions.get("window");

const ParkingScreen = ({parkingText}) => {

    const route = useRoute();

    console.log(parkingText);
    const navigation = useNavigation();
    const value = useState(new Animated.Value(-500))[0];
    const value1 = useState(new Animated.Value(0))[0];
    const [click, setClick] = useState("Adult");
    const [menu, setMenu] = useState(false);
    const DATA = [
        {
            id: '1',
            title: 'A',
            subTitle:'25'
        },
        {
            id: '2',
            title: 'B',
            subTitle: '15'
        },
        {
            id: '3',
            title: 'C',
            subTitle: '27'
        },
        {
            id: '4',
            title: 'D',
            subTitle: '12'
        },
        {
            id: '5',
            title: 'E',
            subTitle: '25'
        },
        {
            id: '6',
            title: 'F',
            subTitle: '25'
        },
    ];

    const DATA1 = [
        {
            id: '1',
            title: 'MON',
            startDate:'12:00 Pm',
            endDate:'08:00 Pm'
        },
        {
            id: '2',
            title: 'MON',
            startDate:'12:00 Pm',
            endDate:'08:00 Pm'
        },
        {
            id: '3',
            title: 'MON',
            startDate:'12:00 Pm',
            endDate:'08:00 Pm'
        },
        {
            id: '4',
            title: 'MON',
            startDate:'12:00 Pm',
            endDate:'08:00 Pm'
        },
        {
            id: '5',
            title: 'MON',
            startDate:'12:00 Pm',
            endDate:'08:00 Pm'
        },
        {
            id: '6',
            title: 'MON',
            startDate:'12:00 Pm',
            endDate:'08:00 Pm'
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
        <TouchableOpacity onPress={() => navigation.navigate('Available Parking', {heading: "Book Parking", merchant: parkingText})} key={item.id}>
            <View style={{backgroundColor: '#F99026', height: 50, width: 60, justifyContent: 'center', alignItems: "center", marginRight: 15, borderRadius: 8, marginVertical: 10}}>
            <Text style={{ textAlign: 'center', fontSize: 12, color: '#fff' }}>
                {item.title}
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 12, color: '#fff' }}>
                {item.subTitle}
            </Text>
            </View>
        </TouchableOpacity>
    );

    const renderItem1 = ({ item }) => (
        <View key={item.id}>
            <View style={{backgroundColor: '#FDF1E5', height: 100, width: 70, justifyContent: 'center', alignItems: "center", marginRight: 15, borderRadius: 8, marginVertical: 10}}>
            <Text style={{ textAlign: 'center', fontSize: 12, color: '#000' }}>
                {item.title}
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 12, color: '#000' }}>
                {item.startDate}
            </Text>
            <Text>
                |
            </Text>
            <Text style={{ textAlign: 'center', fontSize: 12, color: '#000' }}>
                {item.endDate}
            </Text>
            </View>
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
                                    <Text style={{ fontSize: 16, color: "#000000", marginBottom: 5 }}>{route.params.heading} Home</Text>
                                </View>
                            </View>
                            <View style={styles.cart}>
                                <Text style={styles.cartText}>L</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginVertical: 10 }}>
                    <View style={{ ...styles.radioButtonStyle, backgroundColor: route.params.heading ==="Residence Parking" ? '#F99026' : '#707070' }}>
                            <Text style={styles.radioButtonText}>
                                Resisdence
                            </Text>
                        </View>
                        <View style={{ ...styles.radioButtonStyle, backgroundColor: route.params.heading ==="Parking Lot" ? '#F99026' : '#707070' }}>
                            <Text style={styles.radioButtonText}>
                                Parking Lot
                            </Text>
                        </View>
                        <View style={{ ...styles.radioButtonStyle, backgroundColor: route.params.heading ==="Parking Garage" ? '#F99026' : '#707070' }}>
                            <Text style={styles.radioButtonText}>
                                Garage
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Image resizeMode='contain' style={{ width: '100%', height: 210, }} source={require('../assets/parkingMerchant/parkingImg.png')} />
                    </View>
                    <TouchableOpacity>
                        <Image resizeMode='contain' style={{ width: '100%', height: 110, }} source={require('../assets/parkingMerchant/addressRate.png')} />
                    </TouchableOpacity>

                    {parkingText === "ParkingLot" || parkingText === "ParkingGarage"  ? <View style={{marginVertical: 10}}>
                        <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
                            Zones/Level | Spaces Available
                        </Text>
                        <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    </View> : <View style={{marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
                            Number of Parking Spots Available
                        </Text>
                        <View style={{backgroundColor: '#FFA733', height: 30, width: 50, justifyContent: 'center', alignItems: "center", borderRadius: 8}}>
                            <Text style={{color:'#fff'}}>
                                5
                            </Text>
                        </View>
                    </View>}

                    <View style={{marginVertical: 10}}>
                        <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
                            Parking Info
                        </Text>
                        <Image resizeMode='contain' style={{ width: '100%', height: 150, }} source={require('../assets/parkingMerchant/parkingInfo.png')} />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('ParkingAboutDetails')}>
                        <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
                            Contact Info
                        </Text>
                        <Image resizeMode='contain' style={{ width: '100%', height: 110, }} source={require('../assets/parkingMerchant/contactInfo.png')} />
                    </TouchableOpacity>

                    {parkingText === "ParkingLot" || parkingText === "ParkingGarage"  ? <View>
                        <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
                            General Available
                        </Text>
                        <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={DATA1}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                    />
                    </View> : null}

                    <View>
                        <Text style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
                            {parkingText === "Residence" ? "Availability" : "Special Events"}
                        </Text>
                        <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={DATA1}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                    />
                    </View>

                </View>
            </ScrollView>
            <Animated.View style={{ backgroundColor: "#FFFFFF", position: "absolute", top: 0, left: value, height: height, width: width - 80, zIndex: 100, padding: 20, paddingHorizontal: 0 }}>
                <Drawer menu={menu} setMenu={setMenu} closeHandler={closeHandler} />
            </Animated.View>
        </View>
    )
}

export default ParkingScreen;

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
        backgroundColor: '#F99026',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8
    },
    cartText: {
        color: "#fff",
        fontWeight: '700',
        fontSize: 16
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
    radioButtonStyle: {
        backgroundColor: '#707070',
        borderRadius: 8,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%'
    },
    radioButtonText: {
        color: "#fff"
    }
})