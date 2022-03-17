import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, Dimensions, Modal } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

const {height, width} = Dimensions.get("window");

const DryCleanerContainer = ({name, price, pickupLocation, dropLocation, duration, miles, tip, orderAccepted}) => {

    const [click, setClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const value = useState(new Animated.Value(0))[0];
    const navigation = useNavigation();

    useEffect(()=>{
        if(click){
            Animated.timing(value,{
                toValue:1,
                duration:1000,
                useNativeDriver:false
            }).start()
        }
        else{
            Animated.timing(value,{
                toValue:0,
                duration:1000,
                useNativeDriver:false
            }).start()
        }
    }, [click])

    const closeHandle=()=>{
        setIsOpen(false);
    }

  return (
      <>
        {orderAccepted ? 
        <TouchableOpacity activeOpacity={0.8} 
        onPress={()=>setIsOpen(true)}
        style={{marginTop:20,padding:20, backgroundColor:"#FDF1E5", borderRadius:10}}>
            <View style={{flexDirection:"row", alignItems:"center", marginBottom:10}}>
                <View style={{backgroundColor:"#F99026", padding:10, borderRadius:50}}>
                    <Image
                    source={require("../../../assets/User.png")}
                    style={{height:20, width:20, resizeMode:"contain"}}
                    />
                </View>
                <Text style={{fontSize:15, color:"#000000", marginLeft:10, fontWeight:"700"}}>{name}</Text>
            </View>
            <View style={{padding:10}}>
                <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between",}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <View style={{backgroundColor:"whitesmoke", borderRadius:50, borderWidth:1, borderColor:"green", padding:5}}>
                            <View style={{backgroundColor:"green", padding:5, borderRadius:50}}></View>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Pickup</Text>
                            <Text style={{fontSize:12, color:"#808080"}}>{pickupLocation}</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:20,flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between",}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <View style={{backgroundColor:"whitesmoke", borderRadius:50, borderWidth:1, borderColor:"red", padding:5}}>
                            <View style={{backgroundColor:"red", padding:5, borderRadius:50}}></View>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Drop Off</Text>
                            <Text style={{fontSize:12, color:"#808080"}}>{dropLocation}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../assets/droplocation.png")}
                    style={{height:15, width:15, resizeMode:"contain"}}
                    />
                    <Text style={{marginLeft:8, fontSize:12, color:"#808080"}}>{miles} miles</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../assets/timer.png")}
                    style={{height:15, width:15, resizeMode:"contain"}}
                    />
                    <Text style={{marginLeft:8, fontSize:12, color:"#808080"}}>{duration}</Text>
                </View>
                <Text style={{fontSize:14, color:"#F99026"}}>${price}</Text>
            </View>
            <View style={{marginVertical:20}}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                    <Text style={{fontSize:12, color:"#000000"}}>Rider Payment</Text>
                    <Text style={{fontSize:12, color:"#000000"}}>${price}</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                    <Text style={{fontSize:12, color:"#000000"}}>Tip</Text>
                    <Text style={{fontSize:12, color:"#000000"}}>${tip}</Text>
                </View>
                <View style={{flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Order PickedUp", {"name": name, "price": price, "pickupLocation": pickupLocation, "dropLocation": dropLocation, "miles": miles, "tip": tip, "duration": duration})}
                    activeOpacity={0.8} style={{width:"90%",alignSelf:"center",marginTop:10,backgroundColor:"#F99026", padding:15, borderRadius:30, paddingHorizontal:30}}>
                        <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>Confirm Pick Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Cancel Trip", {"cancelledTrip": true, "purpose": "DryCleaning"})}
                    activeOpacity={0.8} style={{width:"90%",alignSelf:"center",marginTop:10,backgroundColor:"#5E5E60", padding:15, borderRadius:30, paddingHorizontal:30}}>
                        <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>Cancel Pickup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        :
        <TouchableOpacity activeOpacity={0.8} 
        onPress={()=>setClick(!click)}
        style={{marginTop:20,padding:20, backgroundColor:(click) ? "#FDF1E5" :"whitesmoke", borderRadius:10}}>
            <View style={{flexDirection:"row", alignItems:"center", marginBottom:10}}>
                <View style={{backgroundColor:"#F99026", padding:10, borderRadius:50}}>
                    <Image
                    source={require("../../../assets/User.png")}
                    style={{height:20, width:20, resizeMode:"contain"}}
                    />
                </View>
                <Text style={{fontSize:15, color:"#000000", marginLeft:10, fontWeight:"700"}}>{name}</Text>
            </View>
            <View style={{padding:10}}>
                <View style={{flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between",}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <View style={{backgroundColor:"whitesmoke", borderRadius:50, borderWidth:1, borderColor:"green", padding:5}}>
                            <View style={{backgroundColor:"green", padding:5, borderRadius:50}}></View>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Pickup</Text>
                            <Text style={{fontSize:12, color:"#808080"}}>{pickupLocation}</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:20,flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between",}}>
                    <View style={{flexDirection:"row", alignItems:"flex-start"}}>
                        <View style={{backgroundColor:"whitesmoke", borderRadius:50, borderWidth:1, borderColor:"red", padding:5}}>
                            <View style={{backgroundColor:"red", padding:5, borderRadius:50}}></View>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontSize:13, color:"#000000", marginBottom:5}}>Drop Off</Text>
                            <Text style={{fontSize:12, color:"#808080"}}>{dropLocation}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../assets/droplocation.png")}
                    style={{height:15, width:15, resizeMode:"contain"}}
                    />
                    <Text style={{marginLeft:8, fontSize:12, color:"#808080"}}>{miles} miles</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../assets/timer.png")}
                    style={{height:15, width:15, resizeMode:"contain"}}
                    />
                    <Text style={{marginLeft:8, fontSize:12, color:"#808080"}}>{duration}</Text>
                </View>
                <Text style={{fontSize:14, color:"#F99026"}}>${price}</Text>
            </View>
            <Animated.View style={{display:(click)? "flex": "none",opacity:value, marginVertical:20}}>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                    <Text style={{fontSize:12, color:"#000000"}}>Rider Payment</Text>
                    <Text style={{fontSize:12, color:"#000000"}}>${price}</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:10}}>
                    <Text style={{fontSize:12, color:"#000000"}}>Tip</Text>
                    <Text style={{fontSize:12, color:"#000000"}}>${tip}</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Order Accepting", {"name": name, "price": price, "pickupLocation": pickupLocation, "dropLocation": dropLocation, "miles": miles, "tip": tip, "duration": duration})}
                    activeOpacity={0.8} style={{width:"50%",alignSelf:"center",marginTop:10,backgroundColor:"#F99026", padding:15, borderRadius:30, paddingHorizontal:30}}>
                        <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>setClick(false)}
                    activeOpacity={0.8} style={{width:"50%",alignSelf:"center",marginLeft:20,marginTop:10,backgroundColor:"#5E5E60", padding:15, borderRadius:30, paddingHorizontal:30}}>
                        <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>New Pickup</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </TouchableOpacity>
        }
        <Modal
        animationType={"slide"}
        onRequestClose={closeHandle}
        transparent={true}
        visible={isOpen}>
            <View style={{alignItems:"center", width:"90%", flex:1, justifyContent:"center", alignSelf:"center"}}>
                <View style={styles.modal}>
                    <Text style={{fontSize:20, color:"#F99026", textAlign:"center", marginBottom:15, fontWeight:"500"}}>Waiting to Pickup Order</Text>
                    <Text style={{fontSize:14, color:"#808080", marginBottom:15, textAlign:"center", maxWidth:300, alignSelf:"center"}}>
                        If the dry cleaning order is not ready for pickup in 5 minutes. The order will be cancelled automatically.
                    </Text>
                    <View style={{alignSelf:"center", borderWidth:5, borderColor:"#F99026", padding:30, borderRadius:200, height:180, width:180, alignItems:"center", justifyContent:"center"}}>
                        <View style={{marginBottom:5}}>
                            <Text style={{fontSize:25, color:"#F99026"}}>03:45</Text>
                        </View>
                    </View>
                    <TouchableOpacity 
                    onPress={()=>{
                        navigation.navigate("Cancel Trip", {"cancelledTrip": true, "purpose": "DryCleaning"});
                        setIsOpen(false)
                        }}
                    activeOpacity={0.8} style={{width:"85%",alignSelf:"center",marginTop:20,backgroundColor:"#5E5E60", padding:15, borderRadius:30, paddingHorizontal:30}}>
                        <Text style={{fontSize:15, color:"#FFFFFF", fontWeight:"bold", textAlign:"center"}}>Cancel Pickup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
      </>
  )
}

export default DryCleanerContainer

const styles = StyleSheet.create({
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderRadius:10,
        marginHorizontal:20,
        maxHeight:400,
        elevation:5,
        padding:20
    },
    content:{
        width:"100%",
        marginVertical:20
    },
})