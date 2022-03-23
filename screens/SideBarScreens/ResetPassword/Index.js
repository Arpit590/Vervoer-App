import { ScrollView, StyleSheet, Text, TouchableOpacity, Switch, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MyProfile from "../../../assets/myProfile/imageprofile.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../components/Header';

const { height, width } = Dimensions.get("window");

const ResetPassword = () => {
    const [zipCode, setZipCode] = useState("");

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
                                <Text style={{ fontSize: 18, color: "#000000", marginBottom: 5 }}>Reset Password</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{marginVertical: 10, backgroundColor: '#fff', borderRadius: 10}}>
                    <View style={{marginBottom:20, marginVertical: 10}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5, marginLeft: 10}}>State</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60, alignSelf: 'center'}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >Current Password</Text>
                        </View>
                    </View>
                    <View style={{marginBottom:20, marginVertical: 10}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5, marginLeft: 10}}>Create New Password</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60, alignSelf: 'center'}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >Enter New Password</Text>
                        </View>
                    </View>
                    <View style={{marginBottom:20, marginVertical: 10}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5, marginLeft: 10}}>Re-enter Password</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60, alignSelf: 'center'}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >Re-enter New Password</Text>
                        </View>
                    </View>

                </View>
                <TouchableOpacity style={{backgroundColor: '#F99026', height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{fontSize: 16, color: '#fff', fontWeight: '600'}}>
                        Reset Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default ResetPassword;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "whitesmoke",
        flex: 1
    }
})