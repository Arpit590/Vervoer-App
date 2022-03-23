import { ScrollView, StyleSheet, Text, TouchableOpacity, Switch, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MyProfile from "../../../assets/myProfile/imageprofile.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../components/Header';

const { height, width } = Dimensions.get("window");

const ProfileScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const route = useRoute();
    const navigation = useNavigation();

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
                                <Text style={{ fontSize: 18, color: "#000000", marginBottom: 5 }}>My Profile</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{marginVertical: 10}}>
                    <MyProfile style={{alignSelf: 'center'}} />

                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>First Name</Text>
                        <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-40,}}>
                            <TextInput
                            placeholder='John'
                            placeholderTextColor="#000000"
                            value={fName}
                            onChangeText={(text)=>setFName(text)}
                            keyboardType='default'
                            style={{color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Last Name</Text>
                        <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-40,}}>
                            <TextInput
                            placeholder='Doe'
                            placeholderTextColor="#000000"
                            value={lName}
                            onChangeText={(text)=>setLName(text)}
                            keyboardType='default'
                            style={{color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Email ID</Text>
                        <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-40,}}>
                            <TextInput
                            placeholder='johndoe@gmail.com'
                            placeholderTextColor="#000000"
                            value={email}
                            onChangeText={(text)=>setEmail(text)}
                            keyboardType='email-address'
                            style={{color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Mobile Number</Text>
                        <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1, width:width-40,}}>
                            <TextInput
                            placeholder='+1 (312) 555-6525'
                            placeholderTextColor="#000000"
                            value={email}
                            onChangeText={(text)=>setEmail(text)}
                            keyboardType='email-address'
                            style={{color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Country</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-40}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >United States of America</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                                <MaterialIcons
                                name="keyboard-arrow-down"
                                size={20}
                                color="#808080"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>State</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-40}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >New York</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                                <MaterialIcons
                                name="keyboard-arrow-down"
                                size={20}
                                color="#808080"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginBottom:20}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>ZIP Code</Text>
                        <View style={{width:width-40}}>
                            <TextInput
                            placeholder='07030'
                            placeholderTextColor="#000000"
                            value={zipCode}
                            onChangeText={(text)=>setZipCode(text)}
                            style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={{backgroundColor: '#F99026', height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{fontSize: 16, color: '#fff', fontWeight: '600'}}>
                            Edit Profile
                        </Text>
                    </TouchableOpacity>

                </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "whitesmoke",
        flex: 1
    }
})