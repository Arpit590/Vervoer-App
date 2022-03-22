import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput, ImageBackground, ScrollView, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import BackArrowIcon from "../../../../assets/back.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import CheckBox from "react-native-check-box";
import Header from '../../../../components/Header';

const {height, width} = Dimensions.get("window");

const AttestationScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const [click, setClick] = useState(false);

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
                <Text style={{fontSize:20, color:"#F99026", textAlign:"center", marginLeft:20}}>Driver's Attestation</Text>
            </View>
            <View style={{marginTop:30}}>
                <Text style={{color:"#808080", fontSize:15}}>Attest to</Text>
                
                <View style={{marginBottom:20}}>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Consent to a background check</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Complete A Safety Holdings, Inc</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Complete a Checkr, Inc application</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10}}>Not drive while under influence</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Not discriminate against users when accepting and not accepting a ride</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Be willing to have a video of the ride for security of the driver and user</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Agreeing to ongoing criminal background and driver's license checks</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Obeying all traffic laws</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Not driving aggressively</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Not creating an unsafe driving experience</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Agree to Terms of Service</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Keeping your vehicle in good working conditions</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Completing the onboarding training</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>Not fighting or arguing with an user</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"flex-start", borderBottomColor:"lightgray", borderBottomWidth:1, paddingVertical:20}}>
                        <CheckBox
                        checkedCheckBoxColor='#F99026'
                        uncheckedCheckBoxColor='#808080'
                        disabled={false}
                        isChecked={click}
                        onClick={()=>setClick(prevCheck => !prevCheck)}
                        />
                        <Text style={{fontSize:14, color:"#000000", marginLeft:10, maxWidth:250}}>To all information provide is true</Text>
                    </View>
                </View>
                <View style={{marginVertical:20}}>
                    <Text style={{color:"#000000", fontSize:15, marginBottom:10}}>Electronic signature</Text>
                    <View style={{height:200,borderWidth:1, borderColor:"#808080", padding:30, borderRadius:20, alignItems:"center", justifyContent:"center"}}>
                        <TouchableOpacity activeOpacity={0.8} style={{alignItems:"center"}}>
                            <Image
                            source={require("../../../../assets/Camera.png")}
                            style={{height:40, width:40, resizeMode:"contain"}}
                            />
                            <Text style={{fontSize:14, color:"#808080", marginTop:10}}>Upload Signature</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop:40,paddingBottom:15,flexDirection:"row", alignItems:"center", borderBottomColor:"#808080", borderBottomWidth:1}}>
                    <Image
                    source={require("../../../../assets/calendar.png")}
                    style={{width:20, height:20, resizeMode:"contain"}}
                    />
                    <Text style={{fontSize:15, color:"#000000", marginLeft:20}}>Date</Text>
                </View>
                <View style={{marginTop:30, marginBottom:100}}>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Profile Photo", {"role": route.params.role})}
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

export default AttestationScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#FFFFFF",
        flex:1
    }
})