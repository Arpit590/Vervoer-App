import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Drawer from '../components/Drawer';
import Header from '../components/Header';
import { FlatList,  } from 'react-native-gesture-handler';


const { height, width } = Dimensions.get("window");

const ParkingAboutDetails = ({parkingText}) => {

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
                                    <Text style={{ fontSize: 16, color: "#fff", marginBottom: 5 }}>Parking Merchant Details</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: "space-between", marginVertical: 10 }}>
                    <View style={styles.radioButtonStyle}>
                            <Text style={styles.radioButtonText}>
                                Resisdence
                            </Text>
                        </View>
                        <View style={styles.radioButtonStyle}>
                            <Text style={styles.radioButtonText}>
                                Parking Lot
                            </Text>
                        </View>
                        <View style={{ ...styles.radioButtonStyle, backgroundColor: '#F99026' }}>
                            <Text style={styles.radioButtonText}>
                                Garage
                            </Text>
                        </View>
                    </View>


                    <View style={{backgroundColor: '#fff', padding: 20, borderRadius: 10,}}>
                        <Text style={{color: '#000', fontWeight: '500'}}>
                            Contact Info
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: 'center',marginVertical: 10}}>
                            <Image style={{width: 100, height: 100, marginRight: 10}} source={require("../assets/Avatar.png")} />
                            <Text>Change Image</Text>
                        </View>
                        <View style={{marginVertical: 10}}>
                            <Text>
                                Contacts Name
                            </Text>
                            <TextInput style={{color: '#000', fontSize: 18, borderBottomWidth: 0.5}} placeholder='Jason Anderson' placeholderTextColor={'#000'} />
                        </View>
                        <View>
                            <Text>
                                Phone
                            </Text>
                            <TextInput style={{color: '#000', fontSize: 18, borderBottomWidth: 0.5}} placeholder='123-456-78990' placeholderTextColor={'#000'} />
                        </View>
                        <View style={{paddingVertical: 20}}>
                            <TouchableOpacity style={{backgroundColor: '#F99026', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 10}}>
                                <Text style={{color: '#fff', fontSize: 18}}>
                                    Apply
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: '#707070', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 10, marginVertical: 10}}>
                                <Text style={{color: '#fff', fontSize: 18}}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    

                </View>
            </ScrollView>
            <Animated.View style={{ backgroundColor: "#FFFFFF", position: "absolute", top: 0, left: value, height: height, width: width - 80, zIndex: 100, padding: 20, paddingHorizontal: 0 }}>
                <Drawer menu={menu} setMenu={setMenu} closeHandler={closeHandler} />
            </Animated.View>
        </View>
    )
}

export default ParkingAboutDetails;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#000",
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