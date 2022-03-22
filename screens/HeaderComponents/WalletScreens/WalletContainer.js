import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WalletContainer = ({withdrew, timestamp, price, name, TXID, IFSC, bankName, accountNumber, paymentMethod}) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.8} 
    onPress={()=>navigation.navigate("Wallet Details", {"price": price, "paymentMethod": paymentMethod,"timestamp": timestamp, "withdrew": withdrew, "name": name, "TXID": TXID, "IFSC":IFSC, "accountNumber": accountNumber, "bankName": bankName})}
    style={{backgroundColor:"#FFFFFF", padding:15, borderRadius:10,flexDirection:"row", alignItems:"flex-start", justifyContent:"space-between", marginBottom:10}}>
        <View style={{}}>
            {(withdrew)
            ?
            <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Withdrew</Text>
            :
            <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>Deposited</Text>
            }
            <Text style={{fontSize:12, color:"#808080"}}>{timestamp}</Text>
        </View>
        <View style={{alignItems:"flex-end"}}>
            {(withdrew)
            ?
            <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>-${price}</Text>
            :
            <Text style={{fontSize:15, color:"#000000", marginBottom:5}}>${price}</Text>
            }
            <Text style={{fontSize:12, color:"green"}}>Done</Text>
        </View>
    </TouchableOpacity>
  )
}

export default WalletContainer

const styles = StyleSheet.create({})