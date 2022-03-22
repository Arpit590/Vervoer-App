import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import MenuIcon from "../../../../assets/Icon metro-menu.svg";
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const VehicleInfoScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [insuranceNumber, setInsuranceNumber] = useState("");
    const [companyName, setCompanyName] = useState("");

  return (
    <View style={styles.screen}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:10}}>
            <View style={{padding:20}}>
            <View style={{alignItems:"center",flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={0.8}
                style={{zIndex:100,}}
                onPress={()=>navigation.goBack()}>
                    <BackArrowIcon
                    height={'30'}
                    />
                </TouchableOpacity>
                <Text style={{fontSize:20, color:"#F99026", textAlign:"center", marginLeft:20}}>Registration</Text>
            </View>
            <View style={{marginTop:30}}>
                <Text style={{color:"#000000", fontSize:20, textAlign:"center"}}>Enter your Vehicle Info</Text>
                <Text style={{color:"#808080", fontSize:14, textAlign:"center", maxWidth:400, marginVertical:20, alignSelf:"center"}}>Drive with your personal vehicle</Text>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Year</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >2021</Text>
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
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Car Brand</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >BMW</Text>
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
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Moder</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >X6</Text>
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
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Doors</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >4 Doors</Text>
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
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Color</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >Red</Text>
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
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Seats</Text>
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-60}}>
                        <Text
                        style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        >Leather/Synthetic</Text>
                        <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                            <MaterialIcons
                            name="keyboard-arrow-down"
                            size={20}
                            color="#808080"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <View style={{}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Number Of Seats</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-250}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >6
                            </Text>
                            <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                                <MaterialIcons
                                name="keyboard-arrow-down"
                                size={20}
                                color="#808080"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{}}>
                        <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Number Of Boosters</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:width-250}}>
                            <Text
                            style={{paddingBottom:10,borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                            >2</Text>
                            <TouchableOpacity activeOpacity={0.8} style={{marginLeft:-30}}>
                                <MaterialIcons
                                name="keyboard-arrow-down"
                                size={20}
                                color="#808080"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{marginVertical:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Vehicle's Vin Number</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Vin Number'
                        placeholderTextColor="#000000"
                        value={vehicleNumber}
                        onChangeText={()=>setVehicleNumber(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Registration</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Registration Number'
                        placeholderTextColor="#000000"
                        value={registrationNumber}
                        onChangeText={()=>setRegistrationNumber(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Upload Vehicle's Inspection</Text>
                    <View style={{width:width-40}}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center",justifyContent:"center",backgroundColor:"whitesmoke", borderRadius:20, height:130, width:80}}>
                                <AntDesign
                                name="plus"
                                size={24}
                                color="#F99026"
                                />
                            </TouchableOpacity>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Upload Driver's Insurance</Text>
                    <View style={{width:width-40}}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center",justifyContent:"center",backgroundColor:"whitesmoke", borderRadius:20, height:130, width:80}}>
                                <AntDesign
                                name="plus"
                                size={24}
                                color="#F99026"
                                />
                            </TouchableOpacity>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Local Certification</Text>
                    <View style={{width:width-40}}>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center",justifyContent:"center",backgroundColor:"whitesmoke", borderRadius:20, height:130, width:80}}>
                                <AntDesign
                                name="plus"
                                size={24}
                                color="#F99026"
                                />
                            </TouchableOpacity>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginLeft:10}}>
                                <Image
                                source={require("../../../../assets/Photo1.png")}
                                style={{height:130, width:150, resizeMode:"contain", borderRadius:10}}
                                />
                                <TouchableOpacity activeOpacity={0.8} style={{position:"absolute", top:"12%",right:"7%", backgroundColor: "#5E5E60",padding:5, borderRadius:40, alignItems:"center"}}>
                                    <Image
                                    source={require("../../../../assets/ic_delete.png")}
                                    style={{height:15, width:15, resizeMode:"contain"}}
                                    />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Insurance Provider</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='Company Name'
                        placeholderTextColor="#000000"
                        value={companyName}
                        onChangeText={()=>setCompanyName(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{fontSize:10, color:"#808080", marginBottom:5}}>Insurance Number</Text>
                    <View style={{width:width-40}}>
                        <TextInput
                        placeholder='#165465646'
                        placeholderTextColor="#000000"
                        value={insuranceNumber}
                        onChangeText={()=>setInsuranceNumber(text)}
                        style={{borderBottomColor:"#808080", borderBottomWidth:1, width:"100%", color:"#000000", fontSize:15}}
                        />
                    </View>
                </View>
                <View style={{marginTop:30, marginBottom:100}}>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Personal Info", {"role": route.params.role})}
                    style={{width:"90%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, paddingVertical:15, borderRadius:100}}>
                        <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Continue</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row", alignItems:"center", marginTop:10, justifyContent:"center"}}>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>navigation.goBack()}
                        style={{width:"40%",alignSelf:"center", backgroundColor:"#5E5E60", paddingHorizontal:20, paddingVertical:15, borderRadius:100}}>
                            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8}
                        onPress={()=>navigation.goBack()}
                        style={{width:"40%",alignSelf:"center", backgroundColor:"#F99026", paddingHorizontal:20, marginLeft:30,paddingVertical:15, borderRadius:100}}>
                            <Text style={{color:"#FFFFFF", fontSize:15, fontWeight:"500", textAlign:"center"}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
          </View>
      </ScrollView>
    </View>
  )
}

export default VehicleInfoScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})