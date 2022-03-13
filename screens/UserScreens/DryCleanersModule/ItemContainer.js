import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, {useState} from 'react'
import CheckBox from 'react-native-check-box';
import AntDesign from "react-native-vector-icons/AntDesign"

const ItemContainer = ({title, price}) => {
 
    const [check, setCheck] = useState(false);
    const [value, setValue] = useState(1);

  return (
    <View style={styles.container}>
        <View style={{}}>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",marginBottom:10}}>
                <Text style={{fontSize:15, color:"#000000"}}>{title}</Text>
                <Text style={{fontSize:15, color:"#F99026", marginLeft:30}}>${price}</Text>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",marginBottom:10}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{fontSize:12, color:"#808080"}}>Wash Only</Text>
                    <TouchableOpacity activeOpacity={0.8} style={{}}>
                        <MaterialIcons
                        name="keyboard-arrow-down"
                        size={20}
                        color="#808080"
                        />
                    </TouchableOpacity> 
                </View>
                <View style={{flexDirection:"row", alignItems:"center", marginLeft:30}}>
                    <Text style={{fontSize:12, color:"#808080"}}>Starch Level</Text>
                    <TouchableOpacity activeOpacity={0.8} style={{}}>
                        <MaterialIcons
                        name="keyboard-arrow-down"
                        size={20}
                        color="#808080"
                        />
                    </TouchableOpacity> 
                </View>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",marginBottom:10, marginTop:35}}>
                {(title!=="Jeans" && title!=="Jacket") ?
                <>
                <View style={{marginBottom:20,flexDirection:"row", alignItems:"center"}}>
                    <CheckBox
                    checkedCheckBoxColor='#F99026'
                    uncheckedCheckBoxColor='#5E5E60'
                    disabled={false}
                    isChecked={check}
                    onClick={()=>setCheck(prevCheck => !prevCheck)}
                    />
                    <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>Button</Text>
                </View>
                <View style={{marginBottom:20,flexDirection:"row", alignItems:"center"}}>
                    <CheckBox
                    checkedCheckBoxColor='#F99026'
                    uncheckedCheckBoxColor='#5E5E60'
                    disabled={false}
                    isChecked={check}
                    onClick={()=>setCheck(prevCheck => !prevCheck)}
                    />
                    <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>Wash & Fold</Text>
                </View>
                </>
                :
                <>
                <View style={{marginBottom:20,flexDirection:"row", alignItems:"center"}}>
                    <CheckBox
                    checkedCheckBoxColor='#F99026'
                    uncheckedCheckBoxColor='#5E5E60'
                    disabled={false}
                    isChecked={check}
                    onClick={()=>setCheck(prevCheck => !prevCheck)}
                    />
                    <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>Zipper</Text>
                </View>
                <View style={{marginBottom:20,flexDirection:"row", alignItems:"center", marginLeft:10}}>
                    <CheckBox
                    checkedCheckBoxColor='#F99026'
                    uncheckedCheckBoxColor='#5E5E60'
                    disabled={false}
                    isChecked={check}
                    onClick={()=>setCheck(prevCheck => !prevCheck)}
                    />
                    <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>Button</Text>
                </View>
                <View style={{marginBottom:20,flexDirection:"row", alignItems:"center", marginLeft:10}}>
                    <CheckBox
                    checkedCheckBoxColor='#F99026'
                    uncheckedCheckBoxColor='#5E5E60'
                    disabled={false}
                    isChecked={check}
                    onClick={()=>setCheck(prevCheck => !prevCheck)}
                    />
                    <Text style={{fontSize:12, color:"#808080", marginLeft:10}}>Wash & Fold</Text>
                </View>
                </>
                }
            </View>
        </View>
        <View style={{alignItems:"center"}}>
            <View style={{borderRadius:10, backgroundColor:"#FFFFFF", elevation:3, padding:10, alignItems:"center"}}>
                <TouchableOpacity activeOpacity={0.8}
                onPress={()=>setValue(value+1)}>
                    <AntDesign
                    name="plus"
                    size={20}
                    color="#808080"
                    />
                </TouchableOpacity>
                <Text style={{fontSize:15, color:"#000000", marginVertical:5}}>{value}</Text>
                <TouchableOpacity activeOpacity={0.8}
                onPress={()=>{
                    if(value===1){
                        setValue(1);
                    }else{
                        setValue(value-1);
                    }
                        }}>
                    <AntDesign
                    name="minus"
                    size={20}
                    color="#808080"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:"#F99026", padding:5, borderRadius:30, alignItems:"center", justifyContent:"center", marginTop:10}}>
                <Image
                source={require("../../../assets/ic_delete.png")}
                style={{height:15, width:15, resizeMode:"contain"}}
                />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ItemContainer

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        backgroundColor:"#FFFFFF",
        borderRadius:20,
        padding:10,
        marginBottom:10
    }
})