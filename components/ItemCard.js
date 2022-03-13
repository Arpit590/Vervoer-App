import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Pizza from '../assets/foodDeliverySvg/pizza1.png';
import Cart from '../assets/foodDeliverySvg/cart.png';
import { useNavigation } from '@react-navigation/native';

const ItemCard = ({menuDetails}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={ menuDetails ? () => navigation.navigate('MenuDetails', { heading: "Minute By Tuk Tuk"}) : () => {}} style={styles.cardContainer}>
        <View style={styles.card1Container}>
            <Image source={Pizza} />
            <View style={{width: '80%', marginHorizontal: 10}}>
                <Text style={{fontSize: 16, color: '#000', fontWeight: '600'}}>
                Mulberry Spcial Pizza
                </Text>
                <Text style={{fontSize: 14, color: '#000', fontWeight: '300',}}>
                by Josh Cafe
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: "space-between",}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, color: '#F99026', fontWeight: '600'}}>
                        $200.00
                    </Text>
                    <Text style={{fontSize: 12, color: '#000', fontWeight: '300', paddingHorizontal: 10}}>
                        6 Inch
                    </Text>
                    </View>
                    <View>
                        <Image source={Cart} />
                    </View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ItemCard;

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 16,
        height: 90,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginVertical: 10
    },
    card1Container: {
        flexDirection: 'row',
    }
})