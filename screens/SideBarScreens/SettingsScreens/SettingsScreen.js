import { ScrollView, StyleSheet, Text, TouchableOpacity, Switch, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../components/Header';

const { height, width } = Dimensions.get("window");

const SettingsScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);

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
                                <Text style={{ fontSize: 18, color: "#000000", marginBottom: 5 }}>Settings</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{marginVertical: 10}}>
                    <View style={{flexDirection:'row', justifyContent: "space-between", alignItems: 'center', backgroundColor: '#ffffff', paddingVertical: 17, paddingHorizontal: 5, borderRadius: 15, marginVertical: 5}}>
                        <Text style={{color: '#000', fontSize: 14, fontWeight: '600'}}>
                            Email Notifications
                        </Text>
                        <View>
                            <Switch
                                trackColor={{ false: "#C6C6C6", true: "#F78E02" }}
                                thumbColor={isEnabled ? "#ffffff" : "F78E02"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    <View style={{flexDirection:'row', justifyContent: "space-between", alignItems: 'center', backgroundColor: '#ffffff', paddingVertical: 17, paddingHorizontal: 5, borderRadius: 15, marginVertical: 5}}>
                        <Text style={{color: '#000', fontSize: 14, fontWeight: '600'}}>
                        SMS Notifications
                        </Text>
                        <View>
                            <Switch
                                trackColor={{ false: "#C6C6C6", true: "#F78E02" }}
                                thumbColor={isEnabled ? "#ffffff" : "F78E02"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>

                    <View style={{flexDirection:'row', justifyContent: "space-between", alignItems: 'center', backgroundColor: '#ffffff', paddingVertical: 17, paddingHorizontal: 5, borderRadius: 15, marginVertical: 5}}>
                        <Text style={{color: '#000', fontSize: 14, fontWeight: '400'}}>
                        Privacy policy
                        </Text>
                    </View>

                    <View style={{flexDirection:'row', justifyContent: "space-between", alignItems: 'center', backgroundColor: '#ffffff', paddingVertical: 17, paddingHorizontal: 5, borderRadius: 15, marginVertical: 5}}>
                        <Text style={{color: '#000', fontSize: 14, fontWeight: '400'}}>
                        Cookie policy
                        </Text>
                    </View>

                    <View style={{flexDirection:'row', justifyContent: "space-between", alignItems: 'center', backgroundColor: '#ffffff', paddingVertical: 17, paddingHorizontal: 5, borderRadius: 15, marginVertical: 5}}>
                        <Text style={{color: '#000', fontSize: 14, fontWeight: '400'}}>
                        Delete Account
                        </Text>
                    </View>

                </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "whitesmoke",
        flex: 1
    }
})