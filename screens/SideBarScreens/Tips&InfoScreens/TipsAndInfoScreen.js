import { ScrollView, StyleSheet, Text, TouchableOpacity, Switch, View, Image, Animated, Dimensions, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import BackArrowIcon from "../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../../../components/Header';
import BusIcon from "../../../assets/Bus.svg";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"

const { height, width } = Dimensions.get("window");

const TipsAndInfoScreen = () => {

    const navigation = useNavigation();
    const [click, setClick] = useState(false);
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const value = useState(new Animated.Value(50))[0];
    const value1 = useState(new Animated.Value(50))[0];
    const value2 = useState(new Animated.Value(50))[0];
    const value3 = useState(new Animated.Value(50))[0];

    useEffect(()=>{
        if(click){
            Animated.timing(value,{
                toValue:180,
                duration:500,
                useNativeDriver:false
            }).start()
        }else{
            Animated.timing(value,{
                toValue:50,
                duration:500,
                useNativeDriver:false
            }).start()
        }if(click1){
            Animated.timing(value1,{
                toValue:180,
                duration:500,
                useNativeDriver:false
            }).start()
        }else{
            Animated.timing(value1,{
                toValue:50,
                duration:500,
                useNativeDriver:false
            }).start()
        }if(click2){
            Animated.timing(value2,{
                toValue:180,
                duration:500,
                useNativeDriver:false
            }).start()
        }else{
            Animated.timing(value2,{
                toValue:50,
                duration:500,
                useNativeDriver:false
            }).start()
        }if(click3){
            Animated.timing(value3,{
                toValue:180,
                duration:500,
                useNativeDriver:false
            }).start()
        }else{
            Animated.timing(value3,{
                toValue:50,
                duration:500,
                useNativeDriver:false
            }).start()
        }
    },[click, click1, click2, click3])

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
                                    <Text style={{ fontSize: 18, color: "#000000", marginBottom: 5 }}>Featured Tips</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginVertical: 10, backgroundColor: '#fff', borderRadius: 10, padding:15, paddingVertical:20}}>
                        <View style={{marginBottom:20}}>
                            <Text style={{ fontSize: 15, color: "#000000", marginBottom:10}}>Lorum Ipsom dolor sirt amet</Text>
                            <Text style={{fontSize:13, color:"#000000"}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Text>
                        </View>
                        <View style={{marginBottom:20}}>
                            <Text style={{ fontSize: 15, color: "#000000", marginBottom:10}}>Lorum Ipsom dolor sirt amet</Text>
                            <Text style={{fontSize:13, color:"#000000"}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Text>
                        </View>
                    </View>
                    <View style={{}}>
                        <Text style={{fontSize:18, color:"#000000", marginBottom:10}}>Guides</Text>
                        <View style={{marginVertical: 10, backgroundColor: '#fff', borderRadius: 10, padding:15, paddingVertical:20}}>
                            <Text style={{ fontSize: 15, color: "#000000", marginBottom:10}}>Beginner's Guide</Text>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text style={{ fontSize: 14, color: "#F99026"}}>How to use Vervoer's Website?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginVertical: 10, backgroundColor: '#fff', borderRadius: 10, padding:15, paddingVertical:20}}>
                            <Text style={{ fontSize: 15, color: "#000000", marginBottom:10}}>Android App Guide</Text>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text style={{ fontSize: 14, color: "#F99026"}}>How to use Vervoer Android App?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginVertical: 10, backgroundColor: '#fff', borderRadius: 10, padding:15, paddingVertical:20}}>
                            <Text style={{ fontSize: 15, color: "#000000", marginBottom:10}}>iOS App Guide</Text>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text style={{ fontSize: 14, color: "#F99026"}}>How to use Vervoer iOS App?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginVertical:10}}>
                        <Text style={{fontSize:18, color:"#000000", marginBottom:10}}>FAQ</Text>
                        <Animated.View style={{height:value,marginVertical: 10, backgroundColor: '#fff', borderRadius: 10, padding:5, paddingHorizontal:15}}>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{ fontSize: 15, color: "#000000"}}>Plug and play networks</Text>
                                <TouchableOpacity activeOpacity={0.8} style={{marginTop:-3}}
                                onPress={()=>setClick(!click)}>
                                    {click 
                                    ?
                                    <MaterialIcons
                                    name="arrow-drop-down"
                                    size={40}
                                    color="lightgray"
                                    />
                                    :
                                    <MaterialIcons
                                    name="arrow-drop-up"
                                    size={40}
                                    color="lightgray"
                                    />
                                    }
                                </TouchableOpacity>
                            </View>
                            {(click)
                            &&
                            <Text style={{fontSize:13, color:"#000000"}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Text>
                            }
                        </Animated.View>
                        <Animated.View style={{height:value1,marginVertical: 10, backgroundColor: '#fff', borderRadius: 10, padding:5, paddingHorizontal:15}}>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{ fontSize: 15, color: "#000000"}}>Collaboratively Empowered Markets?</Text>
                                <TouchableOpacity activeOpacity={0.8} style={{marginTop:-3}}
                                onPress={()=>setClick1(!click1)}>
                                    {click1 
                                    ?
                                    <MaterialIcons
                                    name="arrow-drop-down"
                                    size={40}
                                    color="lightgray"
                                    />
                                    :
                                    <MaterialIcons
                                    name="arrow-drop-up"
                                    size={40}
                                    color="lightgray"
                                    />
                                    }
                                </TouchableOpacity>
                            </View>
                            {(click1)
                            &&
                            <Text style={{fontSize:13, color:"#000000"}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Text>
                            }
                        </Animated.View>
                        <Animated.View style={{height:value2,marginVertical: 10, backgroundColor: '#fff', borderRadius: 10, padding:5, paddingHorizontal:15}}>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{ fontSize: 15, color: "#000000"}}>Visualize Customer Directed</Text>
                                <TouchableOpacity activeOpacity={0.8} style={{marginTop:-3}}
                                onPress={()=>setClick2(!click2)}>
                                    {click2 
                                    ?
                                    <MaterialIcons
                                    name="arrow-drop-down"
                                    size={40}
                                    color="lightgray"
                                    />
                                    :
                                    <MaterialIcons
                                    name="arrow-drop-up"
                                    size={40}
                                    color="lightgray"
                                    />
                                    }
                                </TouchableOpacity>
                            </View>
                            {(click2)
                            &&
                            <Text style={{fontSize:13, color:"#000000"}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Text>
                            }
                        </Animated.View>
                        <Animated.View style={{height:value3,marginVertical: 10, backgroundColor: '#fff', borderRadius: 10, padding:5, paddingHorizontal:15}}>
                            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                                <Text style={{ fontSize: 15, color: "#000000"}}>Efficiently Unleash Cross-Media?</Text>
                                <TouchableOpacity activeOpacity={0.8} style={{marginTop:-3}}
                                onPress={()=>setClick3(!click3)}>
                                    {click3 
                                    ?
                                    <MaterialIcons
                                    name="arrow-drop-down"
                                    size={40}
                                    color="lightgray"
                                    />
                                    :
                                    <MaterialIcons
                                    name="arrow-drop-up"
                                    size={40}
                                    color="lightgray"
                                    />
                                    }
                                </TouchableOpacity>
                            </View>
                            {(click3)
                            &&
                            <Text style={{fontSize:13, color:"#000000"}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.</Text>
                            }
                        </Animated.View>
                    </View>
                    <View style={{marginBottom:100}}>
                        <Text style={{fontSize:18, color:"#000000", marginBottom:20}}>Issue Related Unsafe Bus & Train Stations?</Text>
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <TouchableOpacity activeOpacity={0.8}
                            style={{backgroundColor: "#FFFFFF", padding:20, borderRadius:10, alignItems:"center"}}>
                                <View style={{}}>
                                    <TouchableOpacity activeOpacity={0.8} style={{zIndex:20,right:"-3%",top:"-14%",backgroundColor:"#000000", padding:5, borderRadius:50, alignItems:"center", justifyContent:"center", position:"absolute"}}>
                                        <AntDesign
                                        name="close"
                                        size={10}
                                        color="#FFFFFF"
                                        />
                                    </TouchableOpacity>
                                    <Image
                                    source={require("../../../assets/Bus.png")}
                                    style={{height:40, width:40, resizeMode:"contain"}}
                                    />
                                </View>
                                <Text style={{fontSize:15, color:"#000000", marginTop:10}}>Unsafe Train Stops</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8}
                            style={{backgroundColor: "#FFFFFF", padding:20, borderRadius:10, alignItems:"center"}}>
                                <View style={{}}>
                                    <TouchableOpacity activeOpacity={0.8} style={{zIndex:20,right:"-3%",top:"-14%",backgroundColor:"#000000", padding:5, borderRadius:50, alignItems:"center", justifyContent:"center", position:"absolute"}}>
                                        <AntDesign
                                        name="close"
                                        size={10}
                                        color="#FFFFFF"
                                        />
                                    </TouchableOpacity>
                                    <Image
                                    source={require("../../../assets/Bus.png")}
                                    style={{height:40, width:40, resizeMode:"contain"}}
                                    />
                                </View>
                                <Text style={{fontSize:15, color:"#000000", marginTop:10}}>Unsafe Bus Stops</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default TipsAndInfoScreen;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "whitesmoke",
        flex: 1
    }
})