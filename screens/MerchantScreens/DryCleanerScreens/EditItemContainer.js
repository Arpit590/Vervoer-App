import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, {useState} from 'react'
import CheckBox from 'react-native-check-box';
import AntDesign from "react-native-vector-icons/AntDesign"

const EditItemContainer = ({title, price}) => {
 
    const [check, setCheck] = useState(false);
    const [value, setValue] = useState(1);

  return (
    <View style={styles.container}>
        <View style={{}}>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",marginBottom:10}}>
                <Text style={{fontSize:15, color:"#000000"}}>{title}</Text>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"flex-start",marginBottom:10}}>
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
            <Text style={{fontSize:15, color:"#F99026", marginBottom:78}}>${price}</Text>
            <TouchableOpacity activeOpacity={0.8}
            onPress={()=>{}}
            >
                <Text style={{fontSize:10, color:"#808080"}}>Edit Details</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default EditItemContainer

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